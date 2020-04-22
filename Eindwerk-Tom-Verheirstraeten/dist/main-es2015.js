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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [];
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
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


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
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _particles_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./particles-config */ "./src/app/particles-config.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");







class AppComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
        aos__WEBPACK_IMPORTED_MODULE_1___default.a.init({ mirror: true });
        this.router.navigate(['']);
        particlesJS('particles-js', _particles_config__WEBPACK_IMPORTED_MODULE_2__["ParticlesConfig"], function () { });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 7, vars: 0, consts: [["id", "particles-js"], ["render", ""]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", null, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-footer");
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"]], styles: ["main[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n\r\n.container[_ngcontent-%COMP%] {}\r\n\r\n#particles-js[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  height: 100vh;\r\n  width: 100vw;\r\n  top: 0;\r\n  left: 0;\r\n  pointer-events: none;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUEsWUFBWTs7QUFFWjtFQUNFLGVBQWU7RUFDZixhQUFhO0VBQ2IsWUFBWTtFQUNaLE1BQU07RUFDTixPQUFPO0VBQ1Asb0JBQW9CO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYWluIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7fVxyXG5cclxuI3BhcnRpY2xlcy1qcyB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./landing/landing.component */ "./src/app/landing/landing.component.ts");
/* harmony import */ var _tickets_tickets_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tickets/tickets.component */ "./src/app/tickets/tickets.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ticket_checkout_ticket_checkout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ticket-checkout/ticket-checkout.component */ "./src/app/ticket-checkout/ticket-checkout.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _keynote_speakers_keynote_speakers_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./keynote-speakers/keynote-speakers.component */ "./src/app/keynote-speakers/keynote-speakers.component.ts");
/* harmony import */ var _speaker_details_speaker_details_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./speaker-details/speaker-details.component */ "./src/app/speaker-details/speaker-details.component.ts");
/* harmony import */ var _sponsors_sponsors_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./sponsors/sponsors.component */ "./src/app/sponsors/sponsors.component.ts");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./navigation/navigation.component */ "./src/app/navigation/navigation.component.ts");
/* harmony import */ var _program_program_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./program/program.component */ "./src/app/program/program.component.ts");

















const routes = [
    { path: 'Tickets', component: _tickets_tickets_component__WEBPACK_IMPORTED_MODULE_6__["TicketsComponent"] },
    { path: '', component: _landing_landing_component__WEBPACK_IMPORTED_MODULE_5__["LandingComponent"] },
    { path: 'ticketcheckout/:index', component: _ticket_checkout_ticket_checkout_component__WEBPACK_IMPORTED_MODULE_8__["TicketCheckoutComponent"] },
    { path: 'keynote', component: _keynote_speakers_keynote_speakers_component__WEBPACK_IMPORTED_MODULE_10__["KeynoteSpeakersComponent"] },
    { path: 'speakerDetails/:id', component: _speaker_details_speaker_details_component__WEBPACK_IMPORTED_MODULE_11__["SpeakerDetailsComponent"] },
    { path: 'navigation/:id', component: _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_13__["NavigationComponent"] },
    { path: 'Program', component: _program_program_component__WEBPACK_IMPORTED_MODULE_14__["ProgramComponent"] },
    { path: 'Sponsors', component: _sponsors_sponsors_component__WEBPACK_IMPORTED_MODULE_12__["SponsorsComponent"] }
];
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot(routes)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
        _landing_landing_component__WEBPACK_IMPORTED_MODULE_5__["LandingComponent"],
        _tickets_tickets_component__WEBPACK_IMPORTED_MODULE_6__["TicketsComponent"],
        _ticket_checkout_ticket_checkout_component__WEBPACK_IMPORTED_MODULE_8__["TicketCheckoutComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
        _keynote_speakers_keynote_speakers_component__WEBPACK_IMPORTED_MODULE_10__["KeynoteSpeakersComponent"],
        _speaker_details_speaker_details_component__WEBPACK_IMPORTED_MODULE_11__["SpeakerDetailsComponent"],
        _sponsors_sponsors_component__WEBPACK_IMPORTED_MODULE_12__["SponsorsComponent"],
        _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_13__["NavigationComponent"],
        _program_program_component__WEBPACK_IMPORTED_MODULE_14__["ProgramComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
                    _landing_landing_component__WEBPACK_IMPORTED_MODULE_5__["LandingComponent"],
                    _tickets_tickets_component__WEBPACK_IMPORTED_MODULE_6__["TicketsComponent"],
                    _ticket_checkout_ticket_checkout_component__WEBPACK_IMPORTED_MODULE_8__["TicketCheckoutComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
                    _keynote_speakers_keynote_speakers_component__WEBPACK_IMPORTED_MODULE_10__["KeynoteSpeakersComponent"],
                    _speaker_details_speaker_details_component__WEBPACK_IMPORTED_MODULE_11__["SpeakerDetailsComponent"],
                    _sponsors_sponsors_component__WEBPACK_IMPORTED_MODULE_12__["SponsorsComponent"],
                    _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_13__["NavigationComponent"],
                    _program_program_component__WEBPACK_IMPORTED_MODULE_14__["ProgramComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot(routes)
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
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
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 7, vars: 0, consts: [["href", "#", "target", "blank"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "instagram");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "facebook");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["footer[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  bottom: 0;\r\n  left: 0;\r\n  display: flex;\r\n  justify-content: center;\r\n  width: 100%;\r\n  background-color: rgba(17, 17, 17, 0.7);\r\n\r\n}\r\n\r\nfooter[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  padding: 0 1em;\r\n  font-family: \"montserrat\";\r\n  font-size: 60%;\r\n\r\n}\r\n\r\na[_ngcontent-%COMP%] {\r\n  text-decoration: none;\r\n  color: var(--textcolor);\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLFNBQVM7RUFDVCxPQUFPO0VBQ1AsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsdUNBQXVDOztBQUV6Qzs7QUFFQTtFQUNFLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsY0FBYzs7QUFFaEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsdUJBQXVCOztBQUV6QiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImZvb3RlciB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNywgMTcsIDE3LCAwLjcpO1xyXG5cclxufVxyXG5cclxuZm9vdGVyIHAge1xyXG4gIHBhZGRpbmc6IDAgMWVtO1xyXG4gIGZvbnQtZmFtaWx5OiBcIm1vbnRzZXJyYXRcIjtcclxuICBmb250LXNpemU6IDYwJTtcclxuXHJcbn1cclxuXHJcbmEge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogdmFyKC0tdGV4dGNvbG9yKTtcclxuXHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class HeaderComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    loadTickets() {
        this.router.navigate(['Tickets']);
    }
    loadHome() {
        this.router.navigate(['']);
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 6, vars: 0, consts: [["id", "logo"], ["src", "assets/images/logo.png", "alt", "logo", 3, "click"], ["id", "getTickets"], [3, "click"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_img_click_2_listener() { return ctx.loadHome(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_p_click_4_listener() { return ctx.loadTickets(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Get Tickets");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["header[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 9vh;\r\n  display: grid;\r\n  grid-template-columns: repeat(12, 1fr);\r\n  grid-column-gap: 10px;\r\n}\r\n\r\n#logo[_ngcontent-%COMP%] {\r\n  grid-row: 1;\r\n  grid-column: 6/ span 2;\r\n  display: grid;\r\n  grid-template-columns: 1fr;\r\n  grid-template-rows: 1fr;\r\n}\r\n\r\n#logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n  align-self: center;\r\n  justify-self: center;\r\n  max-width: 100%;\r\n  width: 60%;\r\n}\r\n\r\n#getTickets[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  height: 100%;\r\n  width: 100%;\r\n  grid-column: 11/span 2;\r\n  display: grid;\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n  font-size: 110%;\r\n  justify-self: end;\r\n  color: var(--textcolor);\r\n  font-family: ailerons;\r\n\r\n}\r\n\r\n#myVideo[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 0;\r\n  z-index: -1;\r\n  right: 0;\r\n  opacity: 0.6;\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxhQUFhO0VBQ2Isc0NBQXNDO0VBQ3RDLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLDBCQUEwQjtFQUMxQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsVUFBVTtBQUNaOztBQUlBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGVBQWU7RUFDZixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLHVCQUF1QjtFQUN2QixxQkFBcUI7O0FBRXZCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixXQUFXO0VBQ1gsUUFBUTtFQUNSLFlBQVk7O0FBRWQiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoZWFkZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogOXZoO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTIsIDFmcik7XHJcbiAgZ3JpZC1jb2x1bW4tZ2FwOiAxMHB4O1xyXG59XHJcblxyXG4jbG9nbyB7XHJcbiAgZ3JpZC1yb3c6IDE7XHJcbiAgZ3JpZC1jb2x1bW46IDYvIHNwYW4gMjtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xyXG59XHJcblxyXG4jbG9nbyBpbWcge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIHdpZHRoOiA2MCU7XHJcbn1cclxuXHJcblxyXG5cclxuI2dldFRpY2tldHMge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZ3JpZC1jb2x1bW46IDExL3NwYW4gMjtcclxuICBkaXNwbGF5OiBncmlkO1xyXG59XHJcblxyXG5wIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZm9udC1zaXplOiAxMTAlO1xyXG4gIGp1c3RpZnktc2VsZjogZW5kO1xyXG4gIGNvbG9yOiB2YXIoLS10ZXh0Y29sb3IpO1xyXG4gIGZvbnQtZmFtaWx5OiBhaWxlcm9ucztcclxuXHJcbn1cclxuXHJcbiNteVZpZGVvIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIHotaW5kZXg6IC0xO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIG9wYWNpdHk6IDAuNjtcclxuXHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/keynote-speakers/keynote-speakers.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/keynote-speakers/keynote-speakers.component.ts ***!
  \****************************************************************/
/*! exports provided: KeynoteSpeakersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeynoteSpeakersComponent", function() { return KeynoteSpeakersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _assets_jsons_dots_pix_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/jsons/dots&pix.json */ "./src/assets/jsons/dots&pix.json");
var _assets_jsons_dots_pix_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../assets/jsons/dots&pix.json */ "./src/assets/jsons/dots&pix.json", 1);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





const _c0 = function (a1) { return ["/speakerDetails", a1]; };
function KeynoteSpeakersComponent_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "article", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const speaker_r16 = ctx_r20.$implicit;
    const i_r17 = ctx_r20.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", speaker_r16.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", speaker_r16.name, " ", speaker_r16.lastname, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, i_r17));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](speaker_r16.info);
} }
function KeynoteSpeakersComponent_div_4_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "article", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const speaker_r16 = ctx_r21.$implicit;
    const i_r17 = ctx_r21.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", speaker_r16.name, " ", speaker_r16.lastname, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, i_r17));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](speaker_r16.info);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", speaker_r16.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function KeynoteSpeakersComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, KeynoteSpeakersComponent_div_4_div_1_Template, 12, 7, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, KeynoteSpeakersComponent_div_4_div_2_Template, 12, 7, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r17 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r17 % 2 === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r17 % 2 === 1);
} }
const _c1 = function () { return ["/navigation/1"]; };
class KeynoteSpeakersComponent {
    constructor(router) {
        this.router = router;
        this.title = 'keynote speakers';
    }
    ngOnInit() {
        console.log(_assets_jsons_dots_pix_json__WEBPACK_IMPORTED_MODULE_1__["artists"]);
        this.speakers = _assets_jsons_dots_pix_json__WEBPACK_IMPORTED_MODULE_1__["artists"];
        console.log(this.speakers);
    }
}
KeynoteSpeakersComponent.ɵfac = function KeynoteSpeakersComponent_Factory(t) { return new (t || KeynoteSpeakersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
KeynoteSpeakersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: KeynoteSpeakersComponent, selectors: [["app-keynote-speakers"]], decls: 5, vars: 4, consts: [["id", "title"], ["src", "assets/images/backbutton_small.png", "alt", "backbutton", "id", "backbutton", 3, "routerLink"], ["id", "pageTitle"], [4, "ngFor", "ngForOf"], ["div", "", "class", "speakerTemplate", 4, "ngIf"], ["div", "", "class", "speakerTemplate alternate", 4, "ngIf"], ["div", "", 1, "speakerTemplate"], [1, "speakerPicture"], ["data-aos", "fade-down", "data-aos-anchor-placement", "middle-bottom", "data-aos-duration", "1200", 1, "frameOutline"], ["data-aos", "fade-up-right", "data-aos-anchor-placement", "middle-bottom", "data-aos-duration", "1200"], ["alt", "", 3, "src"], [1, "speakerInfo"], ["data-aos", "fade-down-left", "data-aos-anchor-placement", "middle-bottom", "data-aos-duration", "1200"], ["src", "assets/images/backbutton_small.png", "alt", "", 3, "routerLink"], ["data-aos", "fade-right", "data-aos-anchor-placement", "middle-bottom", "data-aos-duration", "1200"], ["div", "", 1, "speakerTemplate", "alternate"], ["data-aos", "fade-down-right", "data-aos-anchor-placement", "middle-bottom", "data-aos-duration", "1200"], ["data-aos", "fade-up", "data-aos-anchor-placement", "middle-bottom", "data-aos-duration", "1200"], ["data-aos", "fade-down-left", "data-aos-anchor-placement", "middle-bottom", "data-aos-duration", "1200", 1, "frameOutlinealter"], ["data-aos", "fade-up-left", "data-aos-anchor-placement", "middle-bottom", "data-aos-duration", "1200"]], template: function KeynoteSpeakersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, KeynoteSpeakersComponent_div_4_Template, 3, 2, "div", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.speakers);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: ["article[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  white-space: pre-wrap;\r\n}\r\n\r\n.speakerTemplate[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  margin-top: 10vh;\r\n  margin-bottom: 20vh;\r\n  display: grid;\r\n  grid-template-columns: repeat(12, 1fr);\r\n  grid-column-gap: 10px;\r\n}\r\n\r\n.speakerPicture[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  grid-column: 1/span 4;\r\n  padding-top: 100%;\r\n  display: flex;\r\n  height: -webkit-fit-content;\r\n  height: -moz-fit-content;\r\n  height: fit-content;\r\n}\r\n\r\n.alternate[_ngcontent-%COMP%]   .speakerPicture[_ngcontent-%COMP%] {\r\n  grid-column: 8/span 4;\r\n}\r\n\r\n.speakerPicture[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  width: 90%;\r\n  bottom: 0;\r\n  right: 0;\r\n}\r\n\r\n.alternate[_ngcontent-%COMP%]   .speakerPicture[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  left: 0;\r\n  top: 0;\r\n}\r\n\r\n.frameOutline[_ngcontent-%COMP%] {\r\n  top: 0;\r\n  left: 0;\r\n  height: 90%;\r\n  border: 4px solid var(--textcolor);\r\n}\r\n\r\n.speakerPicture[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  max-width: 100%;\r\n\r\n}\r\n\r\n.speakerInfo[_ngcontent-%COMP%] {\r\n  grid-column: 6/span 6;\r\n  height: 100%;\r\n}\r\n\r\n.alternate[_ngcontent-%COMP%]   .speakerInfo[_ngcontent-%COMP%] {\r\n  grid-column: 1/span 6;\r\n  height: 100%;\r\n}\r\n\r\n.frameOutlinealter[_ngcontent-%COMP%] {\r\n  height: 90%;\r\n  border: 4px solid var(--textcolor);\r\n  top: 10% !important;\r\n  left: 10% !important;\r\n}\r\n\r\nh3[_ngcontent-%COMP%] {\r\n  padding: 0;\r\n  margin: 0;\r\n  font-family: ailerons;\r\n  font-size: 200%;\r\n  text-shadow: var(--textshadow);\r\n}\r\n\r\narticle[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  font-family: \"montserrat\";\r\n}\r\n\r\nh3[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  padding: 0;\r\n  margin: 0;\r\n  border: none;\r\n  transform: rotate(180deg);\r\n  cursor: pointer;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAva2V5bm90ZS1zcGVha2Vycy9rZXlub3RlLXNwZWFrZXJzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2Isc0NBQXNDO0VBQ3RDLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYiwyQkFBbUI7RUFBbkIsd0JBQW1CO0VBQW5CLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsU0FBUztFQUNULFFBQVE7QUFDVjs7QUFFQTtFQUNFLE9BQU87RUFDUCxNQUFNO0FBQ1I7O0FBRUE7RUFDRSxNQUFNO0VBQ04sT0FBTztFQUNQLFdBQVc7RUFDWCxrQ0FBa0M7QUFDcEM7O0FBSUE7RUFDRSxXQUFXO0VBQ1gsZUFBZTs7QUFFakI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsWUFBWTtBQUNkOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQ0FBa0M7RUFDbEMsbUJBQW1CO0VBQ25CLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLFVBQVU7RUFDVixTQUFTO0VBQ1QscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsU0FBUztFQUNULFlBQVk7RUFDWix5QkFBeUI7RUFDekIsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2tleW5vdGUtc3BlYWtlcnMva2V5bm90ZS1zcGVha2Vycy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXJ0aWNsZSBwIHtcclxuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XHJcbn1cclxuXHJcbi5zcGVha2VyVGVtcGxhdGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi10b3A6IDEwdmg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjB2aDtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEyLCAxZnIpO1xyXG4gIGdyaWQtY29sdW1uLWdhcDogMTBweDtcclxufVxyXG5cclxuLnNwZWFrZXJQaWN0dXJlIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZ3JpZC1jb2x1bW46IDEvc3BhbiA0O1xyXG4gIHBhZGRpbmctdG9wOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxufVxyXG5cclxuLmFsdGVybmF0ZSAuc3BlYWtlclBpY3R1cmUge1xyXG4gIGdyaWQtY29sdW1uOiA4L3NwYW4gNDtcclxufVxyXG5cclxuLnNwZWFrZXJQaWN0dXJlIGRpdiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG59XHJcblxyXG4uYWx0ZXJuYXRlIC5zcGVha2VyUGljdHVyZSBkaXYge1xyXG4gIGxlZnQ6IDA7XHJcbiAgdG9wOiAwO1xyXG59XHJcblxyXG4uZnJhbWVPdXRsaW5lIHtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBoZWlnaHQ6IDkwJTtcclxuICBib3JkZXI6IDRweCBzb2xpZCB2YXIoLS10ZXh0Y29sb3IpO1xyXG59XHJcblxyXG5cclxuXHJcbi5zcGVha2VyUGljdHVyZSBkaXYgaW1nIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcblxyXG59XHJcblxyXG4uc3BlYWtlckluZm8ge1xyXG4gIGdyaWQtY29sdW1uOiA2L3NwYW4gNjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5hbHRlcm5hdGUgLnNwZWFrZXJJbmZvIHtcclxuICBncmlkLWNvbHVtbjogMS9zcGFuIDY7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uZnJhbWVPdXRsaW5lYWx0ZXIge1xyXG4gIGhlaWdodDogOTAlO1xyXG4gIGJvcmRlcjogNHB4IHNvbGlkIHZhcigtLXRleHRjb2xvcik7XHJcbiAgdG9wOiAxMCUgIWltcG9ydGFudDtcclxuICBsZWZ0OiAxMCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuaDMge1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGZvbnQtZmFtaWx5OiBhaWxlcm9ucztcclxuICBmb250LXNpemU6IDIwMCU7XHJcbiAgdGV4dC1zaGFkb3c6IHZhcigtLXRleHRzaGFkb3cpO1xyXG59XHJcblxyXG5hcnRpY2xlIHAge1xyXG4gIGZvbnQtZmFtaWx5OiBcIm1vbnRzZXJyYXRcIjtcclxufVxyXG5cclxuaDMgaW1nIHtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](KeynoteSpeakersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-keynote-speakers',
                templateUrl: './keynote-speakers.component.html',
                styleUrls: ['./keynote-speakers.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/landing/landing.component.ts":
/*!**********************************************!*\
  !*** ./src/app/landing/landing.component.ts ***!
  \**********************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



const _c0 = function () { return ["/navigation/-1"]; };
class LandingComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
LandingComponent.ɵfac = function LandingComponent_Factory(t) { return new (t || LandingComponent)(); };
LandingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LandingComponent, selectors: [["app-landing"]], decls: 12, vars: 2, consts: [["id", "centerContent"], ["id", "second"], ["id", "start", 3, "routerLink"], ["id", "info"]], template: function LandingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "impuls");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "impuls");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "click to start");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "bozar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "2.10.2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: ["@-webkit-keyframes pulse {\r\n  0% {\r\n    opacity: 0;\r\n  }\r\n\r\n  50% {\r\n    opacity: 1;\r\n  }\r\n\r\n  100% {\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n@keyframes pulse {\r\n  0% {\r\n    opacity: 0;\r\n  }\r\n\r\n  50% {\r\n    opacity: 1;\r\n  }\r\n\r\n  100% {\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n@-webkit-keyframes sidescroll {\r\n  from {\r\n    right: 87vw;\r\n  }\r\n\r\n  to {\r\n    right: -110vw\r\n  }\r\n}\r\n\r\n@keyframes sidescroll {\r\n  from {\r\n    right: 87vw;\r\n  }\r\n\r\n  to {\r\n    right: -110vw\r\n  }\r\n}\r\n\r\n#centerContent[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 9vh;\r\n  width: 90%;\r\n  height: 91vh;\r\n  display: flex;\r\n  flex-direction: column;\r\n  flex-wrap: wrap;\r\n  overflow: hidden;\r\n}\r\n\r\n#start[_ngcontent-%COMP%] {\r\n  font-size: 130%;\r\n  margin-top: 45vh;\r\n  cursor: pointer;\r\n  -webkit-animation: pulse 2s infinite;\r\n          animation: pulse 2s infinite;\r\n}\r\n\r\ndiv[_ngcontent-%COMP%] {\r\n  margin: auto;\r\n}\r\n\r\n#info[_ngcontent-%COMP%] {\r\n  margin-top: 15vh;\r\n  display: grid;\r\n  font-size: 110%;\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n  margin: 0 auto;\r\n  font-family: ailerons;\r\n}\r\n\r\nh3[_ngcontent-%COMP%] {\r\n  padding: 0;\r\n  margin: 0 auto;\r\n  font-family: ailerons;\r\n}\r\n\r\nh2[_ngcontent-%COMP%] {\r\n  cursor: default;\r\n  position: absolute;\r\n  font-family: ailerons;\r\n  font-size: 2000%;\r\n  opacity: 0.1;\r\n  -webkit-animation: sidescroll 25s infinite;\r\n          animation: sidescroll 25s infinite;\r\n  -webkit-animation-timing-function: linear;\r\n          animation-timing-function: linear;\r\n  transition: all 2 ease-in-out;\r\n}\r\n\r\n#second[_ngcontent-%COMP%] {\r\n  top: -40vh;\r\n  right: 87vw;\r\n\r\n  -webkit-animation: sidescroll 25s infinite;\r\n\r\n          animation: sidescroll 25s infinite;\r\n  -webkit-animation-timing-function: linear;\r\n          animation-timing-function: linear;\r\n  -webkit-animation-delay: 12.5s;\r\n          animation-delay: 12.5s;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZGluZy9sYW5kaW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRTtJQUNFLFVBQVU7RUFDWjs7RUFFQTtJQUNFLFVBQVU7RUFDWjs7RUFFQTtJQUNFLFVBQVU7RUFDWjtBQUNGOztBQVpBO0VBQ0U7SUFDRSxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0U7RUFDRjtBQUNGOztBQVJBO0VBQ0U7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7SUFDRTtFQUNGO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFVBQVU7RUFDVixZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2Ysb0NBQTRCO1VBQTVCLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsY0FBYztFQUNkLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osMENBQWtDO1VBQWxDLGtDQUFrQztFQUNsQyx5Q0FBaUM7VUFBakMsaUNBQWlDO0VBQ2pDLDZCQUE2QjtBQUMvQjs7QUFJQTtFQUNFLFVBQVU7RUFDVixXQUFXOztFQUVYLDBDQUFrQzs7VUFBbEMsa0NBQWtDO0VBQ2xDLHlDQUFpQztVQUFqQyxpQ0FBaUM7RUFDakMsOEJBQXNCO1VBQXRCLHNCQUFzQjtBQUN4QiIsImZpbGUiOiJzcmMvYXBwL2xhbmRpbmcvbGFuZGluZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGtleWZyYW1lcyBwdWxzZSB7XHJcbiAgMCUge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcblxyXG4gIDUwJSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuXHJcbiAgMTAwJSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBzaWRlc2Nyb2xsIHtcclxuICBmcm9tIHtcclxuICAgIHJpZ2h0OiA4N3Z3O1xyXG4gIH1cclxuXHJcbiAgdG8ge1xyXG4gICAgcmlnaHQ6IC0xMTB2d1xyXG4gIH1cclxufVxyXG5cclxuI2NlbnRlckNvbnRlbnQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDl2aDtcclxuICB3aWR0aDogOTAlO1xyXG4gIGhlaWdodDogOTF2aDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbiNzdGFydCB7XHJcbiAgZm9udC1zaXplOiAxMzAlO1xyXG4gIG1hcmdpbi10b3A6IDQ1dmg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGFuaW1hdGlvbjogcHVsc2UgMnMgaW5maW5pdGU7XHJcbn1cclxuXHJcbmRpdiB7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4jaW5mbyB7XHJcbiAgbWFyZ2luLXRvcDogMTV2aDtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGZvbnQtc2l6ZTogMTEwJTtcclxufVxyXG5cclxucCB7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgZm9udC1mYW1pbHk6IGFpbGVyb25zO1xyXG59XHJcblxyXG5oMyB7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBmb250LWZhbWlseTogYWlsZXJvbnM7XHJcbn1cclxuXHJcbmgyIHtcclxuICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGZvbnQtZmFtaWx5OiBhaWxlcm9ucztcclxuICBmb250LXNpemU6IDIwMDAlO1xyXG4gIG9wYWNpdHk6IDAuMTtcclxuICBhbmltYXRpb246IHNpZGVzY3JvbGwgMjVzIGluZmluaXRlO1xyXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcclxuICB0cmFuc2l0aW9uOiBhbGwgMiBlYXNlLWluLW91dDtcclxufVxyXG5cclxuXHJcblxyXG4jc2Vjb25kIHtcclxuICB0b3A6IC00MHZoO1xyXG4gIHJpZ2h0OiA4N3Z3O1xyXG5cclxuICBhbmltYXRpb246IHNpZGVzY3JvbGwgMjVzIGluZmluaXRlO1xyXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcclxuICBhbmltYXRpb24tZGVsYXk6IDEyLjVzO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LandingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-landing',
                templateUrl: './landing.component.html',
                styleUrls: ['./landing.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/navigation/navigation.component.ts":
/*!****************************************************!*\
  !*** ./src/app/navigation/navigation.component.ts ***!
  \****************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var three_examples_jsm_loaders_GLTFLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three/examples/jsm/loaders/GLTFLoader */ "./node_modules/three/examples/jsm/loaders/GLTFLoader.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






const _c0 = ["render"];
class NavigationComponent {
    constructor(router, activatedrouter) {
        this.router = router;
        this.activatedrouter = activatedrouter;
        this.renderer = new three__WEBPACK_IMPORTED_MODULE_1__["WebGLRenderer"]({ antialias: true, alpha: true });
        this.loader = new three_examples_jsm_loaders_GLTFLoader__WEBPACK_IMPORTED_MODULE_2__["GLTFLoader"]();
        this.raycaster = new three__WEBPACK_IMPORTED_MODULE_1__["Raycaster"]();
        this.NavigationPosition = -1;
        this.moveleft = false;
        this.moveright = false;
        this.counter = 0;
        this.speed = 0.35;
        this.leftarrow = true;
        this.rightarrow = true;
        this.ismoving = false;
        this.handle_load = (gltf) => {
            const light = new three__WEBPACK_IMPORTED_MODULE_1__["AmbientLight"](0x1c2e4a, 2);
            const light2 = new three__WEBPACK_IMPORTED_MODULE_1__["PointLight"](0x3BDCE1, 2);
            this.scene.add(light);
            this.scene.add(light2);
            //put meshes in variabelen
            this.programmesh = gltf.scene.children[2];
            this.ticketmesh = gltf.scene.children[3];
            this.keynotemesh = gltf.scene.children[4];
            this.partnersmesh = gltf.scene.children[5];
            this.practicalmesh = gltf.scene.children[6];
            //add meshes to scene
            this.scene.add(this.ticketmesh);
            this.scene.add(this.programmesh);
            this.scene.add(this.keynotemesh);
            this.scene.add(this.partnersmesh);
            this.scene.add(this.practicalmesh);
            //voor camera zetten (verschuiven op z-as)
            this.ticketmesh.position.z = -5;
            this.keynotemesh.position.z = -5;
            this.partnersmesh.position.z = -5;
            this.practicalmesh.position.z = -5;
            this.programmesh.position.z = -5;
            //verschuiven van links naar rechts
            if (this.NavigationPosition == -1) {
                this.ticketmesh.position.x += 3;
                this.keynotemesh.position.x += 7;
                this.keynotemesh.position.y += 0.5;
                this.partnersmesh.position.x += 9;
                this.practicalmesh.position.x += 11;
                this.programmesh.position.x += 5;
            }
            else if (this.NavigationPosition == 0) {
                this.ticketmesh.position.x += -4;
                this.keynotemesh.position.x += 0;
                this.keynotemesh.position.y += 0.5;
                this.partnersmesh.position.x += 2;
                this.practicalmesh.position.x += 4;
                this.programmesh.position.x += -2;
            }
            else if (this.NavigationPosition == 1) {
                this.ticketmesh.position.x += -11;
                this.keynotemesh.position.x += -7;
                this.keynotemesh.position.y += 0.5;
                this.partnersmesh.position.x += -5;
                this.practicalmesh.position.x += -3;
                this.programmesh.position.x += -9;
            }
            else if (this.NavigationPosition == 2) {
                this.ticketmesh.position.x += -18;
                this.keynotemesh.position.x += -14;
                this.keynotemesh.position.y += 0.5;
                this.partnersmesh.position.x += -12;
                this.practicalmesh.position.x += -10;
                this.programmesh.position.x += -16;
            }
            else if (this.NavigationPosition == 3) {
                this.ticketmesh.position.x += -25;
                this.keynotemesh.position.x += -21;
                this.keynotemesh.position.y += 0.5;
                this.partnersmesh.position.x += -19;
                this.practicalmesh.position.x += -17;
                this.programmesh.position.x += -23;
            }
            //rotate om x-as
            this.ticketmesh.rotation.x = 2;
            this.keynotemesh.rotation.x = 2;
            this.partnersmesh.rotation.x = 1.5;
            this.practicalmesh.rotation.x = 2;
            this.programmesh.rotation.x = 1.5;
            //material geven
            var material = new three__WEBPACK_IMPORTED_MODULE_1__["MeshLambertMaterial"]({
                color: '0x#3BDCE1',
            });
            this.ticketmesh.material = material;
            this.keynotemesh.material = material;
            this.partnersmesh.material = material;
            this.practicalmesh.material = material;
            this.programmesh.material = material;
            this.checkarrows();
            this.render();
        };
        //RENDER LOOPING
        this.render = () => {
            if (this.turn == true) {
                this.ticketmesh.rotation.x += 0.001;
                this.keynotemesh.rotation.x += 0.001;
                this.programmesh.rotation.x -= 0.001;
                this.partnersmesh.rotation.x -= 0.001;
                this.practicalmesh.rotation.x += 0.001;
                if (this.ticketmesh.rotation.x >= 2.1) {
                    this.turn = false;
                }
            }
            else {
                this.ticketmesh.rotation.x -= 0.001;
                this.keynotemesh.rotation.x -= 0.001;
                this.programmesh.rotation.x += 0.001;
                this.partnersmesh.rotation.x += 0.001;
                this.practicalmesh.rotation.x -= 0.001;
                if (this.ticketmesh.rotation.x <= 1.6) {
                    this.turn = true;
                }
            }
            if (this.moveleft) {
                //vanaf hier wordt het shady maar heb het wel zelf geschreven
                this.counter += -0.5;
                if (this.counter >= -10) {
                    this.ticketmesh.position.x += this.speed;
                    this.keynotemesh.position.x += this.speed;
                    this.partnersmesh.position.x += this.speed;
                    this.practicalmesh.position.x += this.speed;
                    this.programmesh.position.x += this.speed;
                }
                else {
                    this.counter = 0;
                    this.moveleft = false;
                    this.ismoving = false;
                }
            }
            else if (this.moveright) {
                this.counter += 0.5;
                if (this.counter <= 10) {
                    this.ticketmesh.position.x += -this.speed;
                    this.keynotemesh.position.x += -this.speed;
                    this.partnersmesh.position.x += -this.speed;
                    this.practicalmesh.position.x += -this.speed;
                    this.programmesh.position.x += -this.speed;
                }
                else {
                    this.counter = 0;
                    this.moveright = false;
                    this.ismoving = false;
                }
            }
            this.renderer.render(this.scene, this.camera);
            requestAnimationFrame(this.render);
        };
        this.travel = () => {
            if (this.NavigationPosition == -1) {
                this.router.navigate(["/Tickets"]);
            }
            else if (this.NavigationPosition == 0) {
                this.router.navigate(["/Program"]);
            }
            else if (this.NavigationPosition == 1) {
                this.router.navigate(["/keynote"]);
            }
            else if (this.NavigationPosition == 2) {
                this.router.navigate(["/Sponsors"]);
            }
        };
        this.setMoveleft = () => {
            this.ismoving = true;
            this.moveleft = true;
            this.NavigationPosition -= 1;
            this.checkarrows();
        };
        this.setMoveright = () => {
            this.ismoving = true;
            this.moveright = true;
            this.NavigationPosition += 1;
            this.checkarrows();
        };
        this.checkarrows = () => {
            if (this.NavigationPosition <= -1) {
                this.leftarrow = false;
            }
            else if (this.NavigationPosition >= 3) {
                this.rightarrow = false;
            }
            else {
                this.leftarrow = true;
                this.rightarrow = true;
            }
        };
        this.scene = new three__WEBPACK_IMPORTED_MODULE_1__["Scene"]();
        this.NavigationPosition = parseInt(this.activatedrouter.snapshot.paramMap.get('id'));
    }
    ngOnInit() {
        this.camera = new three__WEBPACK_IMPORTED_MODULE_1__["PerspectiveCamera"](50, window.innerWidth / window.innerHeight);
    }
    ngAfterViewInit() {
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.el.nativeElement.appendChild(this.renderer.domElement);
        this.loader.load('assets/3Dobjects/meshes.gltf', this.handle_load);
    }
}
NavigationComponent.ɵfac = function NavigationComponent_Factory(t) { return new (t || NavigationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
NavigationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavigationComponent, selectors: [["app-navigation"]], viewQuery: function NavigationComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.el = _t.first);
    } }, decls: 7, vars: 2, consts: [["render", ""], ["id", "klikker", 3, "click"], [3, "hidden"], ["src", "assets/images/backbutton_small.png", "alt", "backbutton", "id", "previousarrow", 3, "click"], ["src", "assets/images/backbutton_small.png", "alt", "backbutton", "id", "nextarrow", 3, "click"]], template: function NavigationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", null, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationComponent_Template_div_click_2_listener() { return ctx.travel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationComponent_Template_img_click_4_listener() { return !ctx.ismoving && ctx.setMoveleft(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationComponent_Template_img_click_6_listener() { return !ctx.ismoving && ctx.setMoveright(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.leftarrow);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.rightarrow);
    } }, styles: ["#klikker[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 40vh;\r\n  left: 30vw;\r\n  width: 40vw;\r\n  height: 20vh;\r\n  cursor: pointer;\r\n}\r\n\r\n#previousarrow[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 50vh;\r\n  left: 15%;\r\n  cursor: pointer;\r\n}\r\n\r\n#nextarrow[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 50vh;\r\n  right: 15%;\r\n  transform: rotateZ(180deg);\r\n  cursor: pointer;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7RUFDVixXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFNBQVM7RUFDVCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsMEJBQTBCO0VBQzFCLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNrbGlra2VyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA0MHZoO1xyXG4gIGxlZnQ6IDMwdnc7XHJcbiAgd2lkdGg6IDQwdnc7XHJcbiAgaGVpZ2h0OiAyMHZoO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuI3ByZXZpb3VzYXJyb3cge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwdmg7XHJcbiAgbGVmdDogMTUlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuI25leHRhcnJvdyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTB2aDtcclxuICByaWdodDogMTUlO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlWigxODBkZWcpO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavigationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navigation',
                templateUrl: './navigation.component.html',
                styleUrls: ['./navigation.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }]; }, { el: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['render']
        }] }); })();


/***/ }),

/***/ "./src/app/particles-config.ts":
/*!*************************************!*\
  !*** ./src/app/particles-config.ts ***!
  \*************************************/
/*! exports provided: ParticlesConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParticlesConfig", function() { return ParticlesConfig; });
const ParticlesConfig = {
    particles: {
        number: {
            value: 70,
            density: {
                enable: true,
                value_area: 900
            }
        },
        color: {
            value: '#3BDCE1'
        },
        shape: {
            type: 'polygon',
            stroke: {
                width: 0,
                color: '#3BDCE1',
                opacity: 0.3
            },
            polygon: {
                nb_sides: 6
            }
        },
        opacity: {
            value: 0.1,
            random: true,
            anim: {
                enable: true,
                speed: 0.1,
                opacity_min: 0.25,
                sync: true
            }
        },
        size: {
            value: 2,
            random: true,
            anim: {
                enable: true,
                speed: 5,
                size_min: 1.25,
                sync: true
            }
        },
        line_linked: {
            enable: true,
            distance: 200,
            color: '#283593',
            opacity: 0.3,
            width: 3
        },
        move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: true,
            straight: false,
            out_mode: 'out',
            bounce: true,
            attract: {
                enable: true,
                rotateX: 2000,
                rotateY: 2000
            }
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'repulse'
            },
            onclick: {
                enable: false,
                mode: 'repulse'
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 200,
                line_linked: {
                    opacity: 3
                }
            },
            repulse: {
                distance: 250,
                duration: 2
            }
        }
    },
    retina_detect: true
};


/***/ }),

/***/ "./src/app/program/program.component.ts":
/*!**********************************************!*\
  !*** ./src/app/program/program.component.ts ***!
  \**********************************************/
/*! exports provided: ProgramComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgramComponent", function() { return ProgramComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _assets_jsons_dots_pix_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/jsons/dots&pix.json */ "./src/assets/jsons/dots&pix.json");
var _assets_jsons_dots_pix_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../assets/jsons/dots&pix.json */ "./src/assets/jsons/dots&pix.json", 1);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function ProgramComponent_div_4_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r40.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r40.time);
} }
function ProgramComponent_div_4_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r40.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r40.time);
} }
function ProgramComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProgramComponent_div_4_div_2_Template, 6, 2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProgramComponent_div_4_div_3_Template, 6, 2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r41 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r41 % 2 === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r41 % 2 === 1);
} }
const _c0 = function () { return ["/navigation/0"]; };
class ProgramComponent {
    constructor() {
        this.title = "program";
        this.activeIndex = 1;
    }
    ngOnInit() {
        this.program = _assets_jsons_dots_pix_json__WEBPACK_IMPORTED_MODULE_1__["timetable"];
        console.log(this.program);
    }
}
ProgramComponent.ɵfac = function ProgramComponent_Factory(t) { return new (t || ProgramComponent)(); };
ProgramComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProgramComponent, selectors: [["app-program"]], decls: 5, vars: 4, consts: [["id", "title"], ["src", "assets/images/backbutton_small.png", "alt", "backbutton", "id", "backbutton", 3, "routerLink"], ["id", "pageTitle"], [4, "ngFor", "ngForOf"], [1, "vertical"], ["class", "speaker", "data-aos", "fade-left", "data-aos-anchor-placement", "middle-bottom", "data-aos-duration", "1200", 4, "ngIf"], ["class", "speaker alternate", "data-aos", "fade-right", "data-aos-anchor-placement", "middle-bottom", "data-aos-duration", "1200", 4, "ngIf"], ["data-aos", "fade-left", "data-aos-anchor-placement", "middle-bottom", "data-aos-duration", "1200", 1, "speaker"], [1, "dot"], [1, "line"], ["data-aos", "fade-right", "data-aos-anchor-placement", "middle-bottom", "data-aos-duration", "1200", 1, "speaker", "alternate"], [1, "linealternate"]], template: function ProgramComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProgramComponent_div_4_Template, 4, 2, "div", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.program);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: [".vertical[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  height: 40%;\r\n  background-color: var(--textcolor);\r\n  width: 0.2%;\r\n  left: 49.9%;\r\n}\r\n\r\n.speaker[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  font-family: ailerons;\r\n  font-size: 4vw;\r\n  text-align: left;\r\n  margin-top: 5%;\r\n  margin-bottom: 5%;\r\n\r\n\r\n}\r\n\r\n.speaker[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  font-size: 50% !important;\r\n}\r\n\r\n.alternate[_ngcontent-%COMP%] {\r\n\r\n  text-align: right !important;\r\n}\r\n\r\n.dot[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  width: 10px;\r\n  height: 10px;\r\n  border-radius: 50px;\r\n  background-color: var(--textcolor);\r\n  left: 49.65%;\r\n}\r\n\r\n.line[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  width: 40%;\r\n  height: 2px;\r\n  border-radius: 50px;\r\n  background-color: var(--textcolor);\r\n  left: 5%;\r\n}\r\n\r\n.linealternate[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  width: 40%;\r\n  height: 2px;\r\n  border-radius: 50px;\r\n  background-color: var(--textcolor);\r\n  left: 55%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZ3JhbS9wcm9ncmFtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGtDQUFrQztFQUNsQyxXQUFXO0VBQ1gsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztFQUNYLHFCQUFxQjtFQUNyQixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxpQkFBaUI7OztBQUduQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTs7RUFFRSw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsa0NBQWtDO0VBQ2xDLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixrQ0FBa0M7RUFDbEMsUUFBUTtBQUNWOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGtDQUFrQztFQUNsQyxTQUFTO0FBQ1giLCJmaWxlIjoic3JjL2FwcC9wcm9ncmFtL3Byb2dyYW0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi52ZXJ0aWNhbCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGhlaWdodDogNDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRleHRjb2xvcik7XHJcbiAgd2lkdGg6IDAuMiU7XHJcbiAgbGVmdDogNDkuOSU7XHJcbn1cclxuXHJcbi5zcGVha2VyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBmb250LWZhbWlseTogYWlsZXJvbnM7XHJcbiAgZm9udC1zaXplOiA0dnc7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBtYXJnaW4tdG9wOiA1JTtcclxuICBtYXJnaW4tYm90dG9tOiA1JTtcclxuXHJcblxyXG59XHJcblxyXG4uc3BlYWtlciBkaXYge1xyXG4gIGZvbnQtc2l6ZTogNTAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5hbHRlcm5hdGUge1xyXG5cclxuICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZG90IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwcHg7XHJcbiAgaGVpZ2h0OiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGV4dGNvbG9yKTtcclxuICBsZWZ0OiA0OS42NSU7XHJcbn1cclxuXHJcbi5saW5lIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDQwJTtcclxuICBoZWlnaHQ6IDJweDtcclxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRleHRjb2xvcik7XHJcbiAgbGVmdDogNSU7XHJcbn1cclxuXHJcbi5saW5lYWx0ZXJuYXRlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDQwJTtcclxuICBoZWlnaHQ6IDJweDtcclxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRleHRjb2xvcik7XHJcbiAgbGVmdDogNTUlO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProgramComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-program',
                templateUrl: './program.component.html',
                styleUrls: ['./program.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/speaker-details/speaker-details.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/speaker-details/speaker-details.component.ts ***!
  \**************************************************************/
/*! exports provided: SpeakerDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeakerDetailsComponent", function() { return SpeakerDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _assets_jsons_dots_pix_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/jsons/dots&pix.json */ "./src/assets/jsons/dots&pix.json");
var _assets_jsons_dots_pix_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../assets/jsons/dots&pix.json */ "./src/assets/jsons/dots&pix.json", 1);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function SpeakerDetailsComponent_img_13_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SpeakerDetailsComponent_img_13_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const i_r26 = ctx.index; const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r27.giveCarouselIndex(i_r26); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const work_r25 = ctx.$implicit;
    const i_r26 = ctx.index;
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx_r22.activeIndex == i_r26)("leftActive", ctx_r22.activeIndex == i_r26 + 1)("rightActive", ctx_r22.activeIndex == i_r26 - 1)("secondleftActive", ctx_r22.activeIndex == i_r26 + 2)("secondrightActive", ctx_r22.activeIndex == i_r26 - 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", work_r25.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function SpeakerDetailsComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SpeakerDetailsComponent_div_15_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32); const i_r30 = ctx.index; const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r31.giveCarouselIndex(i_r30); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r30 = ctx.index;
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx_r23.activeIndex == i_r30);
} }
function SpeakerDetailsComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const social_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", social_r33.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](social_r33.icon);
} }
const _c0 = function () { return ["/keynote"]; };
class SpeakerDetailsComponent {
    constructor(router) {
        this.router = router;
        this.title = 'keynote speakers';
        this.activeIndex = 0;
    }
    ngOnInit() {
        this.index = this.router.snapshot.paramMap.get('id');
        console.log(this.index);
        this.artists = _assets_jsons_dots_pix_json__WEBPACK_IMPORTED_MODULE_1__["artists"];
    }
    giveCarouselIndex(index) {
        this.activeIndex = index;
    }
}
SpeakerDetailsComponent.ɵfac = function SpeakerDetailsComponent_Factory(t) { return new (t || SpeakerDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
SpeakerDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SpeakerDetailsComponent, selectors: [["app-speaker-details"]], decls: 33, vars: 13, consts: [["id", "title"], ["src", "assets/images/backbutton_small.png", "alt", "backbutton", "id", "backbutton", 3, "routerLink"], ["id", "pageTitle"], [1, "backgroundName"], ["id", "second"], ["id", "work", "data-aos", "fade-right", "data-aos-anchor-placement", "middle-bottom", "data-aos-duration", "1200", 1, "info-section"], ["id", "carousel"], ["alt", "", 3, "src", "active", "leftActive", "rightActive", "secondleftActive", "secondrightActive", "click", 4, "ngFor", "ngForOf"], [1, "dots"], ["class", "dot", 3, "active", "click", 4, "ngFor", "ngForOf"], ["id", "About", "data-aos", "fade-down", "data-aos-anchor-placement", "bottom-bottom", "data-aos-duration", "1200", 1, "info-section"], ["id", "speakerTemplate"], [1, "speaker-picture"], [1, "caption"], [1, "frameOutline"], [1, "image"], ["alt", "", 3, "src"], ["id", "speakerInfo"], [1, "socials"], [4, "ngFor", "ngForOf"], ["alt", "", 3, "src", "click"], [1, "dot", 3, "click"], [1, "url"], ["target", "blank", 3, "href"]], template: function SpeakerDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "work");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, SpeakerDetailsComponent_img_13_Template, 1, 11, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, SpeakerDetailsComponent_div_15_Template, 1, 2, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "about");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "article");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, SpeakerDetailsComponent_div_32_Template, 4, 3, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.artists[ctx.index].name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.artists[ctx.index].lastname);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.artists[ctx.index].work);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.artists[ctx.index].work);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.artists[ctx.index].caption);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.artists[ctx.index].img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.artists[ctx.index].name, " ", ctx.artists[ctx.index].lastname, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.artists[ctx.index].info);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.artists[ctx.index].socials);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: ["@-webkit-keyframes sidescroll {\r\n  from {\r\n    right: 100vw;\r\n  }\r\n\r\n  to {\r\n    right: -180vw\r\n  }\r\n}\r\n\r\n@keyframes sidescroll {\r\n  from {\r\n    right: 100vw;\r\n  }\r\n\r\n  to {\r\n    right: -180vw\r\n  }\r\n}\r\n\r\n#breadcrumbs[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-items: center;\r\n\r\n}\r\n\r\n.backgroundName[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  height: 80vh;\r\n  font-size: 40vh;\r\n  opacity: 0.15;\r\n  z-index: 0;\r\n  font-family: ailerons;\r\n  cursor: default;\r\n}\r\n\r\n.backgroundName[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n\r\n  position: fixed;\r\n  right: 100vw;\r\n  -webkit-animation: sidescroll 30s infinite;\r\n          animation: sidescroll 30s infinite;\r\n  -webkit-animation-timing-function: linear;\r\n          animation-timing-function: linear;\r\n}\r\n\r\n.backgroundName[_ngcontent-%COMP%]   #second[_ngcontent-%COMP%] {\r\n\r\n  -webkit-animation-delay: 4s;\r\n\r\n          animation-delay: 4s;\r\n  animation-direction: reverse;\r\n  top: 50vh;\r\n}\r\n\r\n.caption[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 15px;\r\n  left: 60px;\r\n  font-family: ailerons;\r\n  font-size: 2em;\r\n  z-index: 99;\r\n  text-shadow: 3px 3px 3px #111111;\r\n}\r\n\r\n.info-section[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  display: flex;\r\n\r\n}\r\n\r\n.info-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n  font-family: ailerons;\r\n  text-shadow: var(--textshadow);\r\n  font-size: 2em;\r\n\r\n}\r\n\r\n#work[_ngcontent-%COMP%], #About[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: flex-start;\r\n  height: 70vh;\r\n  margin-bottom: 10%;\r\n}\r\n\r\n.url[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  text-decoration: none;\r\n  color: var(--textcolor);\r\n\r\n}\r\n\r\n#About[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n  align-self: flex-end !important;\r\n}\r\n\r\n#carousel[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 80%;\r\n  align-self: center !important;\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n}\r\n\r\n#carousel[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 20%;\r\n  position: absolute;\r\n  transition: all 0.7s ease-in-out;\r\n  left: 40%;\r\n  opacity: 0.05;\r\n  cursor: pointer;\r\n}\r\n\r\n.active[_ngcontent-%COMP%] {\r\n  z-index: 999;\r\n  opacity: 1 !important;\r\n}\r\n\r\n.leftActive[_ngcontent-%COMP%] {\r\n  z-index: 998;\r\n  width: 18% !important;\r\n  left: 25% !important;\r\n  opacity: 0.8 !important;\r\n\r\n}\r\n\r\n.rightActive[_ngcontent-%COMP%] {\r\n  z-index: 998;\r\n  left: 57% !important;\r\n  width: 18% !important;\r\n  opacity: 0.8 !important;\r\n}\r\n\r\n.secondleftActive[_ngcontent-%COMP%] {\r\n  z-index: 997;\r\n  left: 20% !important;\r\n  width: 16% !important;\r\n  opacity: 0.2 !important;\r\n\r\n}\r\n\r\n.secondrightActive[_ngcontent-%COMP%] {\r\n  z-index: 997;\r\n  left: 64% !important;\r\n  width: 16% !important;\r\n  opacity: 0.2 !important;\r\n}\r\n\r\n.dots[_ngcontent-%COMP%] {\r\n  align-self: center;\r\n  justify-self: flex-end;\r\n  width: 10%;\r\n  display: flex;\r\n  justify-content: space-evenly;\r\n  align-items: center;\r\n\r\n}\r\n\r\n.dot[_ngcontent-%COMP%] {\r\n  height: 7px;\r\n  width: 7px;\r\n  border: 1px solid var(--textcolor);\r\n  border-radius: 50%;\r\n  display: inline-block;\r\n  opacity: 0.5;\r\n  transition: all 0.7s ease-in-out;\r\n  cursor: pointer;\r\n}\r\n\r\n.dot.active[_ngcontent-%COMP%] {\r\n  height: 8px;\r\n  width: 8px;\r\n  background-color: var(--textcolor);\r\n  opacity: 1;\r\n}\r\n\r\n#speakerTemplate[_ngcontent-%COMP%] {\r\n  white-space: pre-wrap;\r\n  width: 100%;\r\n  height: 100%;\r\n  margin-top: 10vh;\r\n  display: grid;\r\n  grid-template-columns: repeat(12, 1fr);\r\n  grid-column-gap: 10px;\r\n  margin-bottom: 15vh;\r\n}\r\n\r\n.speaker-picture[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  grid-column: 1/span 4;\r\n  padding-top: 100%;\r\n  display: flex;\r\n  height: -webkit-fit-content;\r\n  height: -moz-fit-content;\r\n  height: fit-content;\r\n}\r\n\r\n.speaker-picture[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  width: 90%;\r\n}\r\n\r\n.speaker-picture[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\r\n  bottom: 0;\r\n  right: 0;\r\n}\r\n\r\n.frameOutline[_ngcontent-%COMP%] {\r\n  height: 90%;\r\n  top: 0;\r\n  left: 0;\r\n  border: 4px solid var(--textcolor);\r\n}\r\n\r\n.speaker-picture[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n\r\n#speakerInfo[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  grid-column: 6/span 6;\r\n  display: flex;\r\n  flex-direction: column;\r\n  font-family: \"montserrat\";\r\n  height: 100%;\r\n\r\n}\r\n\r\n#speakerInfo[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n  font-family: ailerons !important;\r\n  font-size: 2em;\r\n  line-height: 0.5em;\r\n  padding: 0;\r\n  margin: 0;\r\n  margin-bottom: 5%;\r\n}\r\n\r\n#speakerInfo[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\r\n  height: 50%;\r\n  overflow: scroll;\r\n}\r\n\r\n.socials[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  bottom: 0;\r\n}\r\n\r\n.socials[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  margin-right: 10px;\r\n}\r\n\r\n.url[_ngcontent-%COMP%] {\r\n  font-size: 150%;\r\n  width: 150%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3BlYWtlci1kZXRhaWxzL3NwZWFrZXItZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0U7SUFDRSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRTtFQUNGO0FBQ0Y7O0FBUkE7RUFDRTtJQUNFLFlBQVk7RUFDZDs7RUFFQTtJQUNFO0VBQ0Y7QUFDRjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIscUJBQXFCOztBQUV2Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osZUFBZTtFQUNmLGFBQWE7RUFDYixVQUFVO0VBQ1YscUJBQXFCO0VBQ3JCLGVBQWU7QUFDakI7O0FBRUE7O0VBRUUsZUFBZTtFQUNmLFlBQVk7RUFDWiwwQ0FBa0M7VUFBbEMsa0NBQWtDO0VBQ2xDLHlDQUFpQztVQUFqQyxpQ0FBaUM7QUFDbkM7O0FBRUE7O0VBRUUsMkJBQW1COztVQUFuQixtQkFBbUI7RUFDbkIsNEJBQTRCO0VBQzVCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVTtFQUNWLHFCQUFxQjtFQUNyQixjQUFjO0VBQ2QsV0FBVztFQUNYLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhOztBQUVmOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLDhCQUE4QjtFQUM5QixjQUFjOztBQUVoQjs7QUFFQTs7RUFFRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLHVCQUF1Qjs7QUFFekI7O0FBRUE7RUFDRSwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLDZCQUE2QjtFQUM3QixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsZ0NBQWdDO0VBQ2hDLFNBQVM7RUFDVCxhQUFhO0VBQ2IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLG9CQUFvQjtFQUNwQix1QkFBdUI7O0FBRXpCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQixxQkFBcUI7RUFDckIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQixxQkFBcUI7RUFDckIsdUJBQXVCOztBQUV6Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIscUJBQXFCO0VBQ3JCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsbUJBQW1COztBQUVyQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxVQUFVO0VBQ1Ysa0NBQWtDO0VBQ2xDLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsWUFBWTtFQUNaLGdDQUFnQztFQUNoQyxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFVBQVU7RUFDVixrQ0FBa0M7RUFDbEMsVUFBVTtBQUNaOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixzQ0FBc0M7RUFDdEMscUJBQXFCO0VBQ3JCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYiwyQkFBbUI7RUFBbkIsd0JBQW1CO0VBQW5CLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsUUFBUTtBQUNWOztBQUVBO0VBQ0UsV0FBVztFQUNYLE1BQU07RUFDTixPQUFPO0VBQ1Asa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHlCQUF5QjtFQUN6QixZQUFZOztBQUVkOztBQUVBO0VBQ0UsZ0NBQWdDO0VBQ2hDLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFNBQVM7RUFDVCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDJCQUEyQjtFQUMzQixrQkFBa0I7QUFDcEI7O0FBR0E7RUFDRSxlQUFlO0VBQ2YsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvc3BlYWtlci1kZXRhaWxzL3NwZWFrZXItZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGtleWZyYW1lcyBzaWRlc2Nyb2xsIHtcclxuICBmcm9tIHtcclxuICAgIHJpZ2h0OiAxMDB2dztcclxuICB9XHJcblxyXG4gIHRvIHtcclxuICAgIHJpZ2h0OiAtMTgwdndcclxuICB9XHJcbn1cclxuXHJcbiNicmVhZGNydW1icyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuXHJcbn1cclxuXHJcbi5iYWNrZ3JvdW5kTmFtZSB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGhlaWdodDogODB2aDtcclxuICBmb250LXNpemU6IDQwdmg7XHJcbiAgb3BhY2l0eTogMC4xNTtcclxuICB6LWluZGV4OiAwO1xyXG4gIGZvbnQtZmFtaWx5OiBhaWxlcm9ucztcclxuICBjdXJzb3I6IGRlZmF1bHQ7XHJcbn1cclxuXHJcbi5iYWNrZ3JvdW5kTmFtZSBkaXYge1xyXG5cclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgcmlnaHQ6IDEwMHZ3O1xyXG4gIGFuaW1hdGlvbjogc2lkZXNjcm9sbCAzMHMgaW5maW5pdGU7XHJcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xyXG59XHJcblxyXG4uYmFja2dyb3VuZE5hbWUgI3NlY29uZCB7XHJcblxyXG4gIGFuaW1hdGlvbi1kZWxheTogNHM7XHJcbiAgYW5pbWF0aW9uLWRpcmVjdGlvbjogcmV2ZXJzZTtcclxuICB0b3A6IDUwdmg7XHJcbn1cclxuXHJcbi5jYXB0aW9uIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAxNXB4O1xyXG4gIGxlZnQ6IDYwcHg7XHJcbiAgZm9udC1mYW1pbHk6IGFpbGVyb25zO1xyXG4gIGZvbnQtc2l6ZTogMmVtO1xyXG4gIHotaW5kZXg6IDk5O1xyXG4gIHRleHQtc2hhZG93OiAzcHggM3B4IDNweCAjMTExMTExO1xyXG59XHJcblxyXG4uaW5mby1zZWN0aW9uIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG5cclxufVxyXG5cclxuLmluZm8tc2VjdGlvbiBoMiB7XHJcbiAgZm9udC1mYW1pbHk6IGFpbGVyb25zO1xyXG4gIHRleHQtc2hhZG93OiB2YXIoLS10ZXh0c2hhZG93KTtcclxuICBmb250LXNpemU6IDJlbTtcclxuXHJcbn1cclxuXHJcbiN3b3JrLFxyXG4jQWJvdXQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICBoZWlnaHQ6IDcwdmg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTAlO1xyXG59XHJcblxyXG4udXJsIGEge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogdmFyKC0tdGV4dGNvbG9yKTtcclxuXHJcbn1cclxuXHJcbiNBYm91dCBoMiB7XHJcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQgIWltcG9ydGFudDtcclxufVxyXG5cclxuI2Nhcm91c2VsIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDgwJTtcclxuICBhbGlnbi1zZWxmOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuI2Nhcm91c2VsIGltZyB7XHJcbiAgd2lkdGg6IDIwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuN3MgZWFzZS1pbi1vdXQ7XHJcbiAgbGVmdDogNDAlO1xyXG4gIG9wYWNpdHk6IDAuMDU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uYWN0aXZlIHtcclxuICB6LWluZGV4OiA5OTk7XHJcbiAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubGVmdEFjdGl2ZSB7XHJcbiAgei1pbmRleDogOTk4O1xyXG4gIHdpZHRoOiAxOCUgIWltcG9ydGFudDtcclxuICBsZWZ0OiAyNSUgIWltcG9ydGFudDtcclxuICBvcGFjaXR5OiAwLjggIWltcG9ydGFudDtcclxuXHJcbn1cclxuXHJcbi5yaWdodEFjdGl2ZSB7XHJcbiAgei1pbmRleDogOTk4O1xyXG4gIGxlZnQ6IDU3JSAhaW1wb3J0YW50O1xyXG4gIHdpZHRoOiAxOCUgIWltcG9ydGFudDtcclxuICBvcGFjaXR5OiAwLjggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnNlY29uZGxlZnRBY3RpdmUge1xyXG4gIHotaW5kZXg6IDk5NztcclxuICBsZWZ0OiAyMCUgIWltcG9ydGFudDtcclxuICB3aWR0aDogMTYlICFpbXBvcnRhbnQ7XHJcbiAgb3BhY2l0eTogMC4yICFpbXBvcnRhbnQ7XHJcblxyXG59XHJcblxyXG4uc2Vjb25kcmlnaHRBY3RpdmUge1xyXG4gIHotaW5kZXg6IDk5NztcclxuICBsZWZ0OiA2NCUgIWltcG9ydGFudDtcclxuICB3aWR0aDogMTYlICFpbXBvcnRhbnQ7XHJcbiAgb3BhY2l0eTogMC4yICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5kb3RzIHtcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAganVzdGlmeS1zZWxmOiBmbGV4LWVuZDtcclxuICB3aWR0aDogMTAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbn1cclxuXHJcbi5kb3Qge1xyXG4gIGhlaWdodDogN3B4O1xyXG4gIHdpZHRoOiA3cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdGV4dGNvbG9yKTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG9wYWNpdHk6IDAuNTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC43cyBlYXNlLWluLW91dDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5kb3QuYWN0aXZlIHtcclxuICBoZWlnaHQ6IDhweDtcclxuICB3aWR0aDogOHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRleHRjb2xvcik7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuI3NwZWFrZXJUZW1wbGF0ZSB7XHJcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBtYXJnaW4tdG9wOiAxMHZoO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTIsIDFmcik7XHJcbiAgZ3JpZC1jb2x1bW4tZ2FwOiAxMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDE1dmg7XHJcbn1cclxuXHJcbi5zcGVha2VyLXBpY3R1cmUge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBncmlkLWNvbHVtbjogMS9zcGFuIDQ7XHJcbiAgcGFkZGluZy10b3A6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG59XHJcblxyXG4uc3BlYWtlci1waWN0dXJlIGRpdiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiA5MCU7XHJcbn1cclxuXHJcbi5zcGVha2VyLXBpY3R1cmUgLmltYWdlIHtcclxuICBib3R0b206IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbn1cclxuXHJcbi5mcmFtZU91dGxpbmUge1xyXG4gIGhlaWdodDogOTAlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGJvcmRlcjogNHB4IHNvbGlkIHZhcigtLXRleHRjb2xvcik7XHJcbn1cclxuXHJcbi5zcGVha2VyLXBpY3R1cmUgaW1nIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuI3NwZWFrZXJJbmZvIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZ3JpZC1jb2x1bW46IDYvc3BhbiA2O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBmb250LWZhbWlseTogXCJtb250c2VycmF0XCI7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG5cclxufVxyXG5cclxuI3NwZWFrZXJJbmZvIGgzIHtcclxuICBmb250LWZhbWlseTogYWlsZXJvbnMgIWltcG9ydGFudDtcclxuICBmb250LXNpemU6IDJlbTtcclxuICBsaW5lLWhlaWdodDogMC41ZW07XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogNSU7XHJcbn1cclxuXHJcbiNzcGVha2VySW5mbyBhcnRpY2xlIHtcclxuICBoZWlnaHQ6IDUwJTtcclxuICBvdmVyZmxvdzogc2Nyb2xsO1xyXG59XHJcblxyXG4uc29jaWFscyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGJvdHRvbTogMDtcclxufVxyXG5cclxuLnNvY2lhbHMgZGl2IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcblxyXG4udXJsIHtcclxuICBmb250LXNpemU6IDE1MCU7XHJcbiAgd2lkdGg6IDE1MCU7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SpeakerDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-speaker-details',
                templateUrl: './speaker-details.component.html',
                styleUrls: ['./speaker-details.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/sponsors/sponsors.component.ts":
/*!************************************************!*\
  !*** ./src/app/sponsors/sponsors.component.ts ***!
  \************************************************/
/*! exports provided: SponsorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SponsorsComponent", function() { return SponsorsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _assets_jsons_dots_pix_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/jsons/dots&pix.json */ "./src/assets/jsons/dots&pix.json");
var _assets_jsons_dots_pix_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../assets/jsons/dots&pix.json */ "./src/assets/jsons/dots&pix.json", 1);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function SponsorsComponent_div_4_img_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 8);
} if (rf & 2) {
    const img_r37 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", img_r37, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function SponsorsComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SponsorsComponent_div_4_img_4_Template, 1, 1, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](category_r35.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", category_r35.sponsors);
} }
const _c0 = function () { return ["/navigation/2"]; };
class SponsorsComponent {
    constructor() {
        this.title = 'partners';
    }
    ngOnInit() {
        this.sponsors = _assets_jsons_dots_pix_json__WEBPACK_IMPORTED_MODULE_1__["partners"];
        console.log(this.sponsors);
    }
}
SponsorsComponent.ɵfac = function SponsorsComponent_Factory(t) { return new (t || SponsorsComponent)(); };
SponsorsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SponsorsComponent, selectors: [["app-sponsors"]], decls: 5, vars: 4, consts: [["id", "title"], ["src", "assets/images/backbutton_small.png", "alt", "backbutton", "id", "backbutton", 3, "routerLink"], ["id", "pageTitle"], ["class", "category", "data-aos", "fade-right", "data-aos-anchor-placement", "bottom-bottom", "data-aos-duration", "1200", "data-aos-mirror", "false", 4, "ngFor", "ngForOf"], ["data-aos", "fade-right", "data-aos-anchor-placement", "bottom-bottom", "data-aos-duration", "1200", "data-aos-mirror", "false", 1, "category"], [1, "categorytitle"], [1, "imagecontainer"], ["alt", "", 3, "src", 4, "ngFor", "ngForOf"], ["alt", "", 3, "src"]], template: function SponsorsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SponsorsComponent_div_4_Template, 5, 2, "div", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.sponsors);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: [".category[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  margin: 10% 0;\r\n  \r\n}\r\n\r\n.categorytitle[_ngcontent-%COMP%] {\r\n  height: 50px;\r\n  text-align: center;\r\n  font-family: ailerons;\r\n  font-size: 2em;\r\n  border-bottom: 1px solid var(--textcolor);\r\n  margin-bottom: 5%;\r\n}\r\n\r\n.imagecontainer[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n}\r\n\r\n.imagecontainer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 15%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3BvbnNvcnMvc3BvbnNvcnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsY0FBYztFQUNkLHlDQUF5QztFQUN6QyxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixtQkFBbUI7QUFDckI7O0FBR0E7RUFDRSxVQUFVO0FBQ1oiLCJmaWxlIjoic3JjL2FwcC9zcG9uc29ycy9zcG9uc29ycy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhdGVnb3J5IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDEwJSAwO1xyXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHJlZDsgKi9cclxufVxyXG5cclxuLmNhdGVnb3J5dGl0bGUge1xyXG4gIGhlaWdodDogNTBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1mYW1pbHk6IGFpbGVyb25zO1xyXG4gIGZvbnQtc2l6ZTogMmVtO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS10ZXh0Y29sb3IpO1xyXG4gIG1hcmdpbi1ib3R0b206IDUlO1xyXG59XHJcblxyXG4uaW1hZ2Vjb250YWluZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuXHJcbi5pbWFnZWNvbnRhaW5lciBpbWcge1xyXG4gIHdpZHRoOiAxNSU7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SponsorsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sponsors',
                templateUrl: './sponsors.component.html',
                styleUrls: ['./sponsors.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/ticket-checkout/ticket-checkout.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/ticket-checkout/ticket-checkout.component.ts ***!
  \**************************************************************/
/*! exports provided: TicketCheckoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketCheckoutComponent", function() { return TicketCheckoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _assets_jsons_dots_pix_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/jsons/dots&pix.json */ "./src/assets/jsons/dots&pix.json");
var _assets_jsons_dots_pix_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../assets/jsons/dots&pix.json */ "./src/assets/jsons/dots&pix.json", 1);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function TicketCheckoutComponent_h3_8_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TicketCheckoutComponent_h3_8_Template_h3_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const i_r11 = ctx.index; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.setnewCurrent(i_r11); })("click", function TicketCheckoutComponent_h3_8_Template_h3_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const i_r11 = ctx.index; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.giveClassCurrent(i_r11); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const formule_r10 = ctx.$implicit;
    const i_r11 = ctx.index;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx_r9.activeIndex == i_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx_r9.show);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", formule_r10.name, "");
} }
const _c0 = function () { return ["/Tickets"]; };
class TicketCheckoutComponent {
    constructor(router) {
        this.router = router;
        this.title = "tickets";
        this.show = true;
        this.total = 0;
        this.amount = 0;
        this.showdiscount = false;
    }
    ngOnInit() {
        this.index = this.router.snapshot.paramMap.get("index");
        this.formules = _assets_jsons_dots_pix_json__WEBPACK_IMPORTED_MODULE_1__["tickets"];
        for (let i in this.formules) {
            if (i == this.index) {
                this.currentformula = this.formules[i].name;
                this.currentprice = this.formules[i].price;
                this.activeIndex = this.index;
            }
        }
    }
    setnewCurrent(index) {
        for (let i in this.formules) {
            if (i == index) {
                this.currentformula = this.formules[i].name;
                this.currentprice = this.formules[i].price;
            }
        }
    }
    slidedown() {
        this.show = false;
    }
    slideup() {
        this.show = true;
        this.calculateprice();
    }
    giveClassCurrent(index) {
        this.activeIndex = index;
    }
    addAmount() {
        this.amount++;
        this.calculateprice();
    }
    removeAmount() {
        if (this.amount == 0) {
            return;
        }
        else {
            this.amount--;
        }
        this.calculateprice();
    }
    calculateprice() {
        if (this.activeIndex == 2 && this.amount >= 6) {
            this.total = (this.amount * this.currentprice) * 0.9;
            this.showdiscount = true;
        }
        else {
            this.total = this.amount * this.currentprice;
            this.showdiscount = false;
        }
    }
}
TicketCheckoutComponent.ɵfac = function TicketCheckoutComponent_Factory(t) { return new (t || TicketCheckoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
TicketCheckoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TicketCheckoutComponent, selectors: [["app-ticket-checkout"]], decls: 36, vars: 10, consts: [["id", "title"], ["src", "assets/images/backbutton_small.png", "alt", "backbutton", "id", "backbutton", 3, "routerLink"], ["id", "pageTitle"], ["id", "checkout"], ["id", "dropdown", 3, "mouseleave", "click"], ["id", "currentformula", 3, "mouseenter"], ["class", "dropdown-content", 3, "active", "hidden", "click", 4, "ngFor", "ngForOf"], ["id", "emailPlace"], ["for", ""], ["type", "text", "placeholder", "E-mail:"], ["id", "calculatePrice"], ["id", "selectamount"], ["id", "counter"], [1, "addremove", 3, "click"], ["id", "calculator"], ["id", "price"], ["id", "total"], [1, "dropdown-content", 3, "hidden", "click"]], template: function TicketCheckoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseleave", function TicketCheckoutComponent_Template_div_mouseleave_5_listener() { return ctx.slideup(); })("click", function TicketCheckoutComponent_Template_div_click_5_listener() { return ctx.slideup(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function TicketCheckoutComponent_Template_h3_mouseenter_6_listener() { return ctx.slidedown(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TicketCheckoutComponent_h3_8_Template, 2, 4, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "E-mail:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "amount:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TicketCheckoutComponent_Template_p_click_18_listener() { return ctx.removeAmount(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TicketCheckoutComponent_Template_p_click_22_listener() { return ctx.addAmount(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "price:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "-10%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "pay");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.currentformula);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.formules);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.amount);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.currentprice);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("visibility", ctx.showdiscount ? "visible" : "hidden");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("total: ", ctx.total, "");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: ["@-webkit-keyframes shadowscale {\r\n  0% {\r\n    text-shadow: none\r\n  }\r\n\r\n  50% {\r\n    text-shadow: var(--textshadow)\r\n  }\r\n\r\n  100% {\r\n    text-shadow: none\r\n  }\r\n}\r\n\r\n\r\n@keyframes shadowscale {\r\n  0% {\r\n    text-shadow: none\r\n  }\r\n\r\n  50% {\r\n    text-shadow: var(--textshadow)\r\n  }\r\n\r\n  100% {\r\n    text-shadow: none\r\n  }\r\n}\r\n\r\n\r\n#checkout[_ngcontent-%COMP%] {\r\n  margin-top: 4em;\r\n  width: 100%;\r\n  height: 70vh;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n\r\n#dropdown[_ngcontent-%COMP%] {\r\n  cursor: default;\r\n  font-family: ailerons;\r\n  padding: 0.5em 1.5em;\r\n  color: var(--textcolor);\r\n  -webkit-animation: shadowscale 15s infinite;\r\n          animation: shadowscale 15s infinite;\r\n  background: transparent;\r\n  border: none;\r\n  position: absolute;\r\n  text-align: center;\r\n\r\n\r\n}\r\n\r\n\r\n.dropdown-content[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n  border-bottom: 0.2px solid var(--textcolor);\r\n\r\n\r\n\r\n}\r\n\r\n\r\n#currentformula[_ngcontent-%COMP%]:hover   #dropdown[_ngcontent-%COMP%] {\r\n  display: block;\r\n}\r\n\r\n\r\n#emailPlace[_ngcontent-%COMP%] {\r\n  margin-top: 10vh;\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  \r\n}\r\n\r\n\r\n#emailPlace[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  font-family: \"montserrat\";\r\n  font-size: 80%;\r\n}\r\n\r\n\r\n#emailPlace[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  font-family: \"montserrat\";\r\n  background: transparent;\r\n  color: var(--textcolor);\r\n  border: none;\r\n  border-bottom: 0.5px solid var(--textcolor);\r\n  width: 20%;\r\n  font-size: 50%;\r\n  margin-top: 1em;\r\n}\r\n\r\n\r\n#emailPlace[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-input-placeholder {\r\n\r\n  font-family: \"montserrat\";\r\n  color: var(--textcolor);\r\n  font-size: 90%;\r\n\r\n}\r\n\r\n\r\n#emailPlace[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-placeholder {\r\n\r\n  font-family: \"montserrat\";\r\n  color: var(--textcolor);\r\n  font-size: 90%;\r\n\r\n}\r\n\r\n\r\n#emailPlace[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-ms-input-placeholder {\r\n\r\n  font-family: \"montserrat\";\r\n  color: var(--textcolor);\r\n  font-size: 90%;\r\n\r\n}\r\n\r\n\r\n#emailPlace[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\r\n\r\n  font-family: \"montserrat\";\r\n  color: var(--textcolor);\r\n  font-size: 90%;\r\n\r\n}\r\n\r\n\r\n#calculatePrice[_ngcontent-%COMP%] {\r\n  margin-top: 20vh;\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n\r\n#selectamount[_ngcontent-%COMP%] {\r\n  font-family: \"montserrat\"\r\n}\r\n\r\n\r\n#calculatePrice[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  width: 15vw;\r\n}\r\n\r\n\r\n.active[_ngcontent-%COMP%] {\r\n  display: none\r\n}\r\n\r\n\r\n#counter[_ngcontent-%COMP%] {\r\n  font-family: ailerons;\r\n  font-size: 150%;\r\n  height: 30%;\r\n  width: 8vw !important;\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n\r\n#calculator[_ngcontent-%COMP%] {\r\n  font-family: ailerons;\r\n  display: flex;\r\n  align-items: flex-end;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n}\r\n\r\n\r\n#price[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  border-bottom: 0.5px solid var(--textcolor);\r\n  line-height: 0.3em;\r\n}\r\n\r\n\r\n#calculator[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  width: 40%;\r\n  font-family: ailerons;\r\n  background: transparent;\r\n  border: 1px solid var(--textcolor);\r\n  border-radius: 20px;\r\n  color: var(--textcolor);\r\n}\r\n\r\n\r\n.addremove[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGlja2V0LWNoZWNrb3V0L3RpY2tldC1jaGVja291dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0U7SUFDRTtFQUNGOztFQUVBO0lBQ0U7RUFDRjs7RUFFQTtJQUNFO0VBQ0Y7QUFDRjs7O0FBWkE7RUFDRTtJQUNFO0VBQ0Y7O0VBRUE7SUFDRTtFQUNGOztFQUVBO0lBQ0U7RUFDRjtBQUNGOzs7QUFHQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCOzs7QUFFQTtFQUNFLGVBQWU7RUFDZixxQkFBcUI7RUFDckIsb0JBQW9CO0VBQ3BCLHVCQUF1QjtFQUN2QiwyQ0FBbUM7VUFBbkMsbUNBQW1DO0VBQ25DLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGtCQUFrQjs7O0FBR3BCOzs7QUFFQTtFQUNFLGVBQWU7RUFDZiwyQ0FBMkM7Ozs7QUFJN0M7OztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7O0FBSUE7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsMkJBQTJCO0FBQzdCOzs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixjQUFjO0FBQ2hCOzs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6Qix1QkFBdUI7RUFDdkIsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWiwyQ0FBMkM7RUFDM0MsVUFBVTtFQUNWLGNBQWM7RUFDZCxlQUFlO0FBQ2pCOzs7QUFFQTs7RUFFRSx5QkFBeUI7RUFDekIsdUJBQXVCO0VBQ3ZCLGNBQWM7O0FBRWhCOzs7QUFOQTs7RUFFRSx5QkFBeUI7RUFDekIsdUJBQXVCO0VBQ3ZCLGNBQWM7O0FBRWhCOzs7QUFOQTs7RUFFRSx5QkFBeUI7RUFDekIsdUJBQXVCO0VBQ3ZCLGNBQWM7O0FBRWhCOzs7QUFOQTs7RUFFRSx5QkFBeUI7RUFDekIsdUJBQXVCO0VBQ3ZCLGNBQWM7O0FBRWhCOzs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsYUFBYTtFQUNiLDhCQUE4QjtBQUNoQzs7O0FBRUE7RUFDRTtBQUNGOzs7QUFJQTtFQUNFLFdBQVc7QUFDYjs7O0FBRUE7RUFDRTtBQUNGOzs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsV0FBVztFQUNYLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2IsOEJBQThCO0FBQ2hDOzs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0Qiw4QkFBOEI7QUFDaEM7OztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsMkNBQTJDO0VBQzNDLGtCQUFrQjtBQUNwQjs7O0FBRUE7RUFDRSxVQUFVO0VBQ1YscUJBQXFCO0VBQ3JCLHVCQUF1QjtFQUN2QixrQ0FBa0M7RUFDbEMsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7O0FBRUE7RUFDRSxlQUFlOztBQUVqQiIsImZpbGUiOiJzcmMvYXBwL3RpY2tldC1jaGVja291dC90aWNrZXQtY2hlY2tvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBrZXlmcmFtZXMgc2hhZG93c2NhbGUge1xyXG4gIDAlIHtcclxuICAgIHRleHQtc2hhZG93OiBub25lXHJcbiAgfVxyXG5cclxuICA1MCUge1xyXG4gICAgdGV4dC1zaGFkb3c6IHZhcigtLXRleHRzaGFkb3cpXHJcbiAgfVxyXG5cclxuICAxMDAlIHtcclxuICAgIHRleHQtc2hhZG93OiBub25lXHJcbiAgfVxyXG59XHJcblxyXG5cclxuI2NoZWNrb3V0IHtcclxuICBtYXJnaW4tdG9wOiA0ZW07XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA3MHZoO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4jZHJvcGRvd24ge1xyXG4gIGN1cnNvcjogZGVmYXVsdDtcclxuICBmb250LWZhbWlseTogYWlsZXJvbnM7XHJcbiAgcGFkZGluZzogMC41ZW0gMS41ZW07XHJcbiAgY29sb3I6IHZhcigtLXRleHRjb2xvcik7XHJcbiAgYW5pbWF0aW9uOiBzaGFkb3dzY2FsZSAxNXMgaW5maW5pdGU7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG5cclxufVxyXG5cclxuLmRyb3Bkb3duLWNvbnRlbnQge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3JkZXItYm90dG9tOiAwLjJweCBzb2xpZCB2YXIoLS10ZXh0Y29sb3IpO1xyXG5cclxuXHJcblxyXG59XHJcblxyXG4jY3VycmVudGZvcm11bGE6aG92ZXIgI2Ryb3Bkb3duIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuXHJcblxyXG4jZW1haWxQbGFjZSB7XHJcbiAgbWFyZ2luLXRvcDogMTB2aDtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogcmVkOyAqL1xyXG59XHJcblxyXG4jZW1haWxQbGFjZSBsYWJlbCB7XHJcbiAgZm9udC1mYW1pbHk6IFwibW9udHNlcnJhdFwiO1xyXG4gIGZvbnQtc2l6ZTogODAlO1xyXG59XHJcblxyXG4jZW1haWxQbGFjZSBpbnB1dCB7XHJcbiAgZm9udC1mYW1pbHk6IFwibW9udHNlcnJhdFwiO1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIGNvbG9yOiB2YXIoLS10ZXh0Y29sb3IpO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItYm90dG9tOiAwLjVweCBzb2xpZCB2YXIoLS10ZXh0Y29sb3IpO1xyXG4gIHdpZHRoOiAyMCU7XHJcbiAgZm9udC1zaXplOiA1MCU7XHJcbiAgbWFyZ2luLXRvcDogMWVtO1xyXG59XHJcblxyXG4jZW1haWxQbGFjZSBpbnB1dDo6cGxhY2Vob2xkZXIge1xyXG5cclxuICBmb250LWZhbWlseTogXCJtb250c2VycmF0XCI7XHJcbiAgY29sb3I6IHZhcigtLXRleHRjb2xvcik7XHJcbiAgZm9udC1zaXplOiA5MCU7XHJcblxyXG59XHJcblxyXG4jY2FsY3VsYXRlUHJpY2Uge1xyXG4gIG1hcmdpbi10b3A6IDIwdmg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbiNzZWxlY3RhbW91bnQge1xyXG4gIGZvbnQtZmFtaWx5OiBcIm1vbnRzZXJyYXRcIlxyXG59XHJcblxyXG5cclxuXHJcbiNjYWxjdWxhdGVQcmljZSBkaXYge1xyXG4gIHdpZHRoOiAxNXZ3O1xyXG59XHJcblxyXG4uYWN0aXZlIHtcclxuICBkaXNwbGF5OiBub25lXHJcbn1cclxuXHJcbiNjb3VudGVyIHtcclxuICBmb250LWZhbWlseTogYWlsZXJvbnM7XHJcbiAgZm9udC1zaXplOiAxNTAlO1xyXG4gIGhlaWdodDogMzAlO1xyXG4gIHdpZHRoOiA4dncgIWltcG9ydGFudDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuI2NhbGN1bGF0b3Ige1xyXG4gIGZvbnQtZmFtaWx5OiBhaWxlcm9ucztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuI3ByaWNlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBib3JkZXItYm90dG9tOiAwLjVweCBzb2xpZCB2YXIoLS10ZXh0Y29sb3IpO1xyXG4gIGxpbmUtaGVpZ2h0OiAwLjNlbTtcclxufVxyXG5cclxuI2NhbGN1bGF0b3IgYnV0dG9uIHtcclxuICB3aWR0aDogNDAlO1xyXG4gIGZvbnQtZmFtaWx5OiBhaWxlcm9ucztcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS10ZXh0Y29sb3IpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgY29sb3I6IHZhcigtLXRleHRjb2xvcik7XHJcbn1cclxuXHJcbi5hZGRyZW1vdmUge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TicketCheckoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-ticket-checkout',
                templateUrl: './ticket-checkout.component.html',
                styleUrls: ['./ticket-checkout.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/tickets/tickets.component.ts":
/*!**********************************************!*\
  !*** ./src/app/tickets/tickets.component.ts ***!
  \**********************************************/
/*! exports provided: TicketsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketsComponent", function() { return TicketsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _assets_jsons_dots_pix_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/jsons/dots&pix.json */ "./src/assets/jsons/dots&pix.json");
var _assets_jsons_dots_pix_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../assets/jsons/dots&pix.json */ "./src/assets/jsons/dots&pix.json", 1);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function TicketsComponent_div_5_li_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const perk_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](perk_r4);
} }
function TicketsComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TicketsComponent_div_5_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const i_r2 = ctx.index; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.giveClassCurrent(i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TicketsComponent_div_5_li_7_Template, 2, 1, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TicketsComponent_div_5_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const i_r2 = ctx.index; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.goToCheckout(i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "proceed");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const formule_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx_r0.activeIndex === i_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](formule_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u20AC ", formule_r1.price, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", formule_r1.perks);
} }
const _c0 = function () { return ["/navigation/-1"]; };
class TicketsComponent {
    constructor(router) {
        this.router = router;
        this.activeIndex = 0;
        this.title = 'Tickets';
    }
    giveClassCurrent(index) {
        this.activeIndex = index;
    }
    goToCheckout(index) {
        this.router.navigate(['/ticketcheckout', index]);
    }
    ngOnInit() {
        this.formules = _assets_jsons_dots_pix_json__WEBPACK_IMPORTED_MODULE_1__["tickets"];
    }
}
TicketsComponent.ɵfac = function TicketsComponent_Factory(t) { return new (t || TicketsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
TicketsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TicketsComponent, selectors: [["app-tickets"]], decls: 6, vars: 4, consts: [["id", "title"], ["src", "assets/images/backbutton_small.png", "alt", "backbutton", "id", "backbutton", 3, "routerLink"], ["id", "pageTitle"], ["id", "tickets"], ["id", "ticketFormula", "class", "summary", 3, "active", "click", 4, "ngFor", "ngForOf"], ["id", "ticketFormula", 1, "summary", 3, "click"], [1, "formulaTitle"], [1, "formulaInfo"], [4, "ngFor", "ngForOf"], [1, "proceedbutton", 3, "click"]], template: function TicketsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TicketsComponent_div_5_Template, 10, 5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.formules);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: ["@-webkit-keyframes show {\r\n  100% {\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n@keyframes show {\r\n  100% {\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n#tickets[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 100%;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.summary[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n  opacity: 0.27;\r\n  margin-top: 20vh;\r\n  border: 1px solid var(--textcolor);\r\n  width: calc(16.6667% - 10px);\r\n  height: 40vh;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  transition: all 0.7s ease-out;\r\n}\r\n\r\n.summary[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  opacity: 0;\r\n  border: 0.5px solid var(--textcolor);\r\n  background: transparent;\r\n  font-family: \"montserrat\";\r\n  font-size: 10px;\r\n  color: var(--textcolor);\r\n  padding: 0.5em 2em;\r\n  pointer-events: none;\r\n}\r\n\r\n.active[_ngcontent-%COMP%] {\r\n  opacity: 1;\r\n  width: 50%;\r\n  text-shadow: var(--textshadow);\r\n  cursor: default;\r\n}\r\n\r\n.active[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  -webkit-animation: show 0.2s 0.5s forwards;\r\n          animation: show 0.2s 0.5s forwards;\r\n  cursor: pointer;\r\n  pointer-events: all;\r\n}\r\n\r\n.formulaTitle[_ngcontent-%COMP%] {\r\n  font-family: ailerons;\r\n\r\n}\r\n\r\n.formulaInfo[_ngcontent-%COMP%] {\r\n\r\n  margin-top: 10%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  font-family: \"montserrat\";\r\n}\r\n\r\nul[_ngcontent-%COMP%] {\r\n  list-style: none;\r\n  display: grid;\r\n  padding: 0;\r\n}\r\n\r\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  justify-self: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGlja2V0cy90aWNrZXRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRTtJQUNFLFVBQVU7RUFDWjtBQUNGOztBQUpBO0VBQ0U7SUFDRSxVQUFVO0VBQ1o7QUFDRjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsbUJBQW1CO0FBQ3JCOztBQUlBO0VBQ0UsZUFBZTtFQUNmLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsa0NBQWtDO0VBQ2xDLDRCQUE0QjtFQUM1QixZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsVUFBVTtFQUNWLG9DQUFvQztFQUNwQyx1QkFBdUI7RUFDdkIseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLFVBQVU7RUFDVixVQUFVO0VBQ1YsOEJBQThCO0VBQzlCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSwwQ0FBa0M7VUFBbEMsa0NBQWtDO0VBQ2xDLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxxQkFBcUI7O0FBRXZCOztBQUVBOztFQUVFLGVBQWU7RUFDZixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLFVBQVU7QUFDWjs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL3RpY2tldHMvdGlja2V0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGtleWZyYW1lcyBzaG93IHtcclxuICAxMDAlIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG59XHJcblxyXG4jdGlja2V0cyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuXHJcblxyXG4uc3VtbWFyeSB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIG9wYWNpdHk6IDAuMjc7XHJcbiAgbWFyZ2luLXRvcDogMjB2aDtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS10ZXh0Y29sb3IpO1xyXG4gIHdpZHRoOiBjYWxjKDE2LjY2NjclIC0gMTBweCk7XHJcbiAgaGVpZ2h0OiA0MHZoO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjdzIGVhc2Utb3V0O1xyXG59XHJcblxyXG4uc3VtbWFyeSBidXR0b24ge1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCB2YXIoLS10ZXh0Y29sb3IpO1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIGZvbnQtZmFtaWx5OiBcIm1vbnRzZXJyYXRcIjtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgY29sb3I6IHZhcigtLXRleHRjb2xvcik7XHJcbiAgcGFkZGluZzogMC41ZW0gMmVtO1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG59XHJcblxyXG4uYWN0aXZlIHtcclxuICBvcGFjaXR5OiAxO1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgdGV4dC1zaGFkb3c6IHZhcigtLXRleHRzaGFkb3cpO1xyXG4gIGN1cnNvcjogZGVmYXVsdDtcclxufVxyXG5cclxuLmFjdGl2ZSBidXR0b24ge1xyXG4gIGFuaW1hdGlvbjogc2hvdyAwLjJzIDAuNXMgZm9yd2FyZHM7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XHJcbn1cclxuXHJcbi5mb3JtdWxhVGl0bGUge1xyXG4gIGZvbnQtZmFtaWx5OiBhaWxlcm9ucztcclxuXHJcbn1cclxuXHJcbi5mb3JtdWxhSW5mbyB7XHJcblxyXG4gIG1hcmdpbi10b3A6IDEwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmb250LWZhbWlseTogXCJtb250c2VycmF0XCI7XHJcbn1cclxuXHJcbnVsIHtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxudWwgbGkge1xyXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TicketsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-tickets',
                templateUrl: './tickets.component.html',
                styleUrls: ['./tickets.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/assets/jsons/dots&pix.json":
/*!****************************************!*\
  !*** ./src/assets/jsons/dots&pix.json ***!
  \****************************************/
/*! exports provided: artists, tickets, timetable, partners, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"artists\":[{\"name\":\"Dries\",\"lastname\":\"Depoortere\",\"caption\":\"artist\",\"info\":\"Dries Depoorter is a Belgium artist that handles themes as privacy, artificial intelligence, surveillance & social media. Depoorter creates interactive installations, apps, games.\\n\\nDepoorter exhibited internationally at the Barbican, MUTEK Festival, Art Basel, Bozar, Para Site Hong Kong, Mozilla – The Glass Room San Francisco, HEK Basel, WIRED, IDFA Doclab, Mundaneum, FOMU, Ars Electronica, Athens Digital Art Festival, Art Soutterain, STRP festival, Heidelberger Kunstverein.\",\"extendedinfo\":\"\",\"img\":\"assets/images/DriesDetail.jpg\",\"socials\":[{\"icon\":\"\",\"url\":\"https://www.instagram.com/driesdepoorter/?hl=nl\"},{\"icon\":\"\",\"url\":\"https://www.facebook.com/pg/DepoortereDries/posts/\"},{\"icon\":\"\",\"url\":\"https://twitter.com/driesdepoorter\"}],\"work\":[{\"url\":\"assets/images/work/Wdries.png\"},{\"url\":\"assets/images/work/Wdries2.png\"},{\"url\":\"assets/images/work/Wdries3.png\"},{\"url\":\"assets/images/work/Wdries4.png\"},{\"url\":\"assets/images/work/Wdries5.png\"},{\"url\":\"assets/images/work/Wdries6.png\"}]},{\"name\":\"\",\"caption\":\"\",\"info\":\"\",\"socials\":[{\"insta\":{\"icon\":\"\",\"url\":\"\"},\"fb\":\"\",\"linked\":\"\"}]}],\"tickets\":[{\"name\":\"Student/Teacher\",\"price\":0,\"perks\":[]},{\"name\":\"Early bird\",\"price\":45,\"perks\":[\"Untill July\"]},{\"name\":\"standard\",\"price\":90,\"perks\":[]},{\"name\":\"all-in\",\"price\":250,\"perks\":[\"free food\",\"free drinks\",\"light sponsor\"]}],\"timetable\":[{\"name\":\"Koffie\",\"time\":\"9:30\"},{\"name\":\"Dries Depoortere\",\"time\":\"10:00 - 11:00\"},{\"name\":\"Es Devlin\",\"time\":\"11:00 - 12:00\"},{\"name\":\"Break\",\"time\":\"\"},{\"name\":\"Neil Harbisson\",\"time\":\"13:00 - 14:00\"},{\"name\":\"Stefan Sagmeister\",\"time\":\"14:00 - 15:00\"},{\"name\":\"break\",\"time\":\"\"},{\"name\":\"Neil Mendoza\",\"time\":\"15:30 - 16:30\"},{\"name\":\"Daan Roosegaarden\",\"time\":\"16:30 - 17:30\"},{\"name\":\"break\",\"time\":\"17:30 - 18:00\"},{\"name\":\"seth godin\",\"time\":\"18:00 - 18:30\"}],\"partners\":[{\"title\":\"golden\",\"sponsors\":[\"assets/images/Sponsors/footer-logo-bozar.png\",\"assets/images/Sponsors/logoEHB.png\",\"assets/images/Sponsors/FinalLogo-White.png\"]},{\"title\":\"silver\",\"sponsors\":[\"assets/images/Sponsors/kvk.png\",\"assets/images/Sponsors/logoBXL.png\",\"assets/images/Sponsors/IMEC.png\"]},{\"title\":\"bronze\",\"sponsors\":[\"assets/images/Sponsors/showpad.png\",\"assets/images/Sponsors/meet.png\",\"assets/images/Sponsors/leeuw.png\"]},{\"title\":\"light\",\"sponsors\":[]}]}");

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
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


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
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Tom\Documents\multec\_GIT\FrontEnd\Eindwerk-Tom-Verheirstraeten\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map