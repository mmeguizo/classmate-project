"use strict";
(self["webpackChunkngx_admin"] = self["webpackChunkngx_admin"] || []).push([["src_app_login_login_module_ts"],{

/***/ 45393:
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginRoutingModule": function() { return /* binding */ LoginRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.component */ 98458);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);




const routes = [
    {
        path: '',
        component: _login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent
    }
];
class LoginRoutingModule {
}
LoginRoutingModule.ɵfac = function LoginRoutingModule_Factory(t) { return new (t || LoginRoutingModule)(); };
LoginRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: LoginRoutingModule });
LoginRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](LoginRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 98458:
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": function() { return /* binding */ LoginComponent; }
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jwt-decode */ 32975);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _core_services_connection_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../@core/services/connection.service */ 98934);
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../@core/services/auth.service */ 8156);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nebular/theme */ 40465);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 54364);









function LoginComponent_span_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " This field is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function LoginComponent_span_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " This field is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
const _c0 = function (a0, a1) { return { "has-error": a0, "has-success": a1 }; };
class LoginComponent {
    constructor(cs, formBuilder, authService, router) {
        this.cs = cs;
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
        this.loader = false;
        this.processing = false;
        // this.createForm();
    }
    ngOnInit() {
        this.createForm();
    }
    createForm() {
        this.form = this.formBuilder.group({
            username: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            password: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required], // Password field
        });
    }
    enableForm() {
        this.form.controls["username"].enable(); // Enable username field
        this.form.controls["password"].enable(); // Enable password field
    }
    disableForm() {
        this.form.controls["username"].disable(); // Disable username field
        this.form.controls["password"].disable(); // Disable password field
    }
    Submit() {
        const user = {
            username: this.username,
            password: this.password,
        };
    }
    // Functiont to submit form and login user
    onLoginSubmit() {
        this.processing = true; // Used to submit button while is being processed
        this.disableForm(); // Disable form while being process
        const user = {
            username: this.form.get("username").value,
            password: this.form.get("password").value, // Password input field
        };
        // Function to send login data to API
        this.authService.login(user).subscribe((token) => {
            //Check if response was a success or error
            if (!token.success) {
                this.authService.makeToast("danger", "Failed Logging in", token.message);
                this.processing = false; // Enable submit button
                this.enableForm(); // Enable form for editting
            }
            else {
                let decoded = (0,jwt_decode__WEBPACK_IMPORTED_MODULE_0__.default)(token.token);
                this.authService.makeToast("success", "Success", token.message);
                this.authService.storeUserData(token.token, decoded);
                if (this.authService.CurrentlyloggedIn()) {
                    // this.authService.loggingIn(decoded.role);
                    this.router.navigate(["admin"]);
                }
                else {
                    this.authService.logout();
                    this.router.navigate(["login"]); // Navigate to dashboard view
                }
            }
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services_connection_service__WEBPACK_IMPORTED_MODULE_1__.ConnectionService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router)); };
LoginComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 23, vars: 12, consts: [[1, "wrapper", "login-background", 2, "background", "url('https://source.unsplash.com/1920x2400?nature,river,ocean')\n          no-repeat center center fixed", "background-size", "cover"], [1, "login-form", "container"], [3, "formGroup", "submit"], [1, "form-group"], ["for", "username", 2, "color", "white"], [3, "ngClass"], ["type", "text", "name", "username", "formControlName", "username", "autocomplete", "off", "webauthn", "", 1, "form-control"], [1, "help-block"], ["style", "color: red", 4, "ngIf"], ["for", "password", 2, "color", "white"], ["type", "password", "name", "password", "formControlName", "password", "autocomplete", "new-password", "webauthn", "", 1, "form-control"], ["type", "submit", "value", "Login", 1, "btn", "btn-primary", 3, "disabled"], [2, "color", "red"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nb-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "nb-layout-column");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Personal Decentralized File Drive");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("submit", function LoginComponent_Template_form_submit_6_listener() { return ctx.onLoginSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, LoginComponent_span_13_Template, 2, 0, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, LoginComponent_span_20_Template, 2, 0, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, " Login ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](6, _c0, ctx.form.controls.username.errors && ctx.form.controls.username.dirty, ctx.form.controls.username.valid && ctx.form.controls.username.dirty));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.form.controls.username.errors == null ? null : ctx.form.controls.username.errors.required) && ctx.form.controls.username.dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](9, _c0, ctx.form.controls.password.errors && ctx.form.controls.password.dirty, ctx.form.controls.password.valid && ctx.form.controls.password.dirty));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.form.controls.password.errors == null ? null : ctx.form.controls.password.errors.required) && ctx.form.controls.password.dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx.form.valid || ctx.processing);
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_6__.NbLayoutComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__.NbLayoutColumnComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf], styles: ["@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:200,300);\nh2[_ngcontent-%COMP%] {\n  font-family: \"Archivo Black\", sans-serif;\n  color: #fff;\n  margin-left: auto;\n  margin-right: auto;\n  font-style: italic;\n  font-weight: bold;\n  margin-top: 2px;\n}\n.error[_ngcontent-%COMP%] {\n  text-align: center;\n  color: red;\n}\n.tinker-logo[_ngcontent-%COMP%] {\n  padding-top: 30px;\n  width: 120px;\n  margin: 0 auto;\n}\n.chmsc-logo[_ngcontent-%COMP%] {\n  padding-top: 30px;\n  width: 39%;\n  margin: 0 auto;\n}\n.wrapper[_ngcontent-%COMP%] {\n  background: #ffaa00;\n  background: linear-gradient(to bottom right, #ffaa00 0%, #7a1bff 100%);\n  position: absolute;\n  top: 29%;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  margin-top: -215px;\n  overflow: hidden;\n}\n.wrapper.form-success[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  transform: translateY(85px);\n}\n.container[_ngcontent-%COMP%] {\n  max-width: 600px;\n  padding-top: 20%;\n  height: 400px;\n  text-align: center;\n}\n.container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 40px;\n  transition-duration: 1s;\n  transition-timing-function: ease-in-put;\n  font-weight: 200;\n}\nform[_ngcontent-%COMP%] {\n  padding: 20px 0;\n  position: relative;\n  z-index: 2;\n}\nform[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  display: block;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  outline: 0;\n  border: 0;\n  border-bottom: 1px solid white;\n  background-color: transparent;\n  width: 250px;\n  border-radius: 3px;\n  padding: 10px 15px;\n  margin: 0 auto 10px auto;\n  display: block;\n  text-align: center;\n  font-size: 18px;\n  color: white;\n  transition-duration: 0.25s;\n  font-weight: 300;\n}\nform[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:hover {\n  background-color: rgba(255, 255, 255, 0.1);\n}\nform[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  background-color: rgba(255, 255, 255, 0.1);\n  width: 300px;\n  border-bottom-color: #222b45;\n  color: #222b45;\n}\nform[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not(:focus):not(:hover) {\n  border-bottom-color: white;\n}\nform[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  outline: 0;\n  background-color: white;\n  border: 0;\n  padding: 10px 15px;\n  color: #222b45;\n  border-radius: 3px;\n  width: 250px;\n  cursor: pointer;\n  font-size: 18px;\n  transition-duration: 0.25s;\n}\nform[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #f5f7f9;\n}\n.bg-bubbles[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n}\n.bg-bubbles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  position: absolute;\n  list-style: none;\n  display: block;\n  width: 40px;\n  height: 40px;\n  background-color: #7716ff;\n  bottom: -160px;\n  -webkit-animation: square 25s infinite;\n  animation: square 25s infinite;\n  transition-timing-function: linear;\n}\n.bg-bubbles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(1) {\n  left: 10%;\n}\n.bg-bubbles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(2) {\n  left: 20%;\n  width: 80px;\n  height: 80px;\n  -webkit-animation-delay: 2s;\n          animation-delay: 2s;\n  -webkit-animation-duration: 17s;\n          animation-duration: 17s;\n}\n.bg-bubbles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(3) {\n  left: 25%;\n  -webkit-animation-delay: 4s;\n          animation-delay: 4s;\n}\n.bg-bubbles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(4) {\n  left: 40%;\n  width: 60px;\n  height: 60px;\n  -webkit-animation-duration: 22s;\n          animation-duration: 22s;\n  background-color: fade(white, 25%);\n}\n.bg-bubbles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(5) {\n  left: 70%;\n}\n.bg-bubbles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(6) {\n  left: 80%;\n  width: 120px;\n  height: 120px;\n  -webkit-animation-delay: 3s;\n          animation-delay: 3s;\n  background-color: fade(white, 20%);\n}\n.bg-bubbles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(7) {\n  left: 32%;\n  width: 160px;\n  height: 160px;\n  -webkit-animation-delay: 7s;\n          animation-delay: 7s;\n}\n.bg-bubbles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(8) {\n  left: 55%;\n  width: 20px;\n  height: 20px;\n  -webkit-animation-delay: 15s;\n          animation-delay: 15s;\n  -webkit-animation-duration: 40s;\n          animation-duration: 40s;\n}\n.bg-bubbles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(9) {\n  left: 25%;\n  width: 10px;\n  height: 10px;\n  -webkit-animation-delay: 2s;\n          animation-delay: 2s;\n  -webkit-animation-duration: 40s;\n          animation-duration: 40s;\n  background-color: fade(white, 30%);\n}\n.bg-bubbles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(10) {\n  left: 90%;\n  width: 160px;\n  height: 160px;\n  -webkit-animation-delay: 11s;\n          animation-delay: 11s;\n}\n@-webkit-keyframes square {\n  0% {\n    transform: translateY(0);\n  }\n  100% {\n    transform: translateY(-700px) rotate(600deg);\n  }\n}\n@keyframes square {\n  0% {\n    transform: translateY(0);\n  }\n  100% {\n    transform: translateY(-700px) rotate(600deg);\n  }\n}\n[_ngcontent-%COMP%]::-moz-placeholder {\n  color: #fff;\n  opacity: 1;\n  \n}\n[_ngcontent-%COMP%]:-ms-input-placeholder {\n  color: #fff;\n  opacity: 1;\n  \n}\n[_ngcontent-%COMP%]::placeholder {\n  color: #fff;\n  opacity: 1;\n  \n}\n/*# sourceMappingURL=data:application/json;base64,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QUF5REk7RUFDRSxTQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFFQSw0QkFBQTtVQUFBLG9CQUFBO0FBeEROO0FBNkRBO0VBQ0U7SUFDRSx3QkFBQTtFQTFERjtFQTREQTtJQUNFLDRDQUFBO0VBMURGO0FBQ0Y7QUE0REE7RUFDRTtJQUNFLHdCQUFBO0VBMURGO0VBNERBO0lBQ0UsNENBQUE7RUExREY7QUFDRjtBQTZEQTtFQUNFLFdBQUE7RUFDQSxVQUFBO0VBQVksWUFBQTtBQTFEZDtBQXdEQTtFQUNFLFdBQUE7RUFDQSxVQUFBO0VBQVksWUFBQTtBQTFEZDtBQXdEQTtFQUNFLFdBQUE7RUFDQSxVQUFBO0VBQVksWUFBQTtBQTFEZCIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgyIHtcclxuICBmb250LWZhbWlseTogXCJBcmNoaXZvIEJsYWNrXCIsIHNhbnMtc2VyaWY7XHJcbiAgLy8gY29sb3I6Izg3ODc4NztcclxuICBjb2xvcjogI2ZmZjtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIG1hcmdpbi10b3A6IDJweDtcclxufVxyXG4uZXJyb3Ige1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG4udGlua2VyLWxvZ28ge1xyXG4gIHBhZGRpbmctdG9wOiAzMHB4O1xyXG4gIHdpZHRoOiAxMjBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICAvLyBmaWx0ZXI6IGRyb3Atc2hhZG93KDEwcHggMXB4IDE5cHggcmdiYSg3NiwgMTI4LCAxMzQsIDAuNSkpO1xyXG59XHJcbi5jaG1zYy1sb2dvIHtcclxuICBwYWRkaW5nLXRvcDogMzBweDtcclxuICB3aWR0aDogMzklO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIC8vIGZpbHRlcjogZHJvcC1zaGFkb3coMTBweCAxcHggMTlweCByZ2JhKDc2LCAxMjgsIDEzNCwgMC41KSk7XHJcbn1cclxuXHJcbkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Tb3VyY2UrU2FucytQcm86MjAwLDMwMCk7XHJcblxyXG4vL3Rlc3RcclxuLndyYXBwZXIge1xyXG4gIGJhY2tncm91bmQ6ICNmZmFhMDA7XHJcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoXHJcbiAgICB0b3AgbGVmdCxcclxuICAgICNmZmFhMDAgMCUsXHJcbiAgICByZ2IoMTIyLCAyNywgMjU1KSAxMDAlXHJcbiAgKTtcclxuICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudChcclxuICAgIHRvcCBsZWZ0LFxyXG4gICAgI2ZmYWEwMCAwJSxcclxuICAgIHJnYigxMjIsIDI3LCAyNTUpIDEwMCVcclxuICApO1xyXG4gIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCh0b3AgbGVmdCwgI2ZmYWEwMCAwJSwgcmdiKDEyMiwgMjcsIDI1NSkgMTAwJSk7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgdG8gYm90dG9tIHJpZ2h0LFxyXG4gICAgI2ZmYWEwMCAwJSxcclxuICAgIHJnYigxMjIsIDI3LCAyNTUpIDEwMCVcclxuICApO1xyXG5cclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAyOSU7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgbWFyZ2luLXRvcDogLTIxNXB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gICYuZm9ybS1zdWNjZXNzIHtcclxuICAgIC5jb250YWluZXIge1xyXG4gICAgICBoMSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDg1cHgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBtYXgtd2lkdGg6IDYwMHB4O1xyXG4gIC8vIG1hcmdpbjogMCBhdXRvO1xyXG4gIC8vIHBhZGRpbmc6IDgwcHggMDtcclxuICBwYWRkaW5nLXRvcDogMjAlO1xyXG4gIGhlaWdodDogNDAwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICBoMSB7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxcztcclxuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLXB1dDtcclxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgfVxyXG59XHJcblxyXG5mb3JtIHtcclxuICBwYWRkaW5nOiAyMHB4IDA7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDI7XHJcblxyXG4gIGlucHV0IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIG91dGxpbmU6IDA7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuXHJcbiAgICB3aWR0aDogMjUwcHg7XHJcblxyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG8gMTBweCBhdXRvO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcblxyXG4gICAgY29sb3I6IHdoaXRlO1xyXG5cclxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMjVzO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xyXG4gICAgfVxyXG5cclxuICAgICY6Zm9jdXMge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XHJcbiAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzIyMmI0NTtcclxuXHJcbiAgICAgIGNvbG9yOiAjMjIyYjQ1O1xyXG4gICAgfVxyXG5cclxuICAgICY6bm90KDpmb2N1cyk6bm90KDpob3Zlcikge1xyXG4gICAgICBib3JkZXItYm90dG9tLWNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGJ1dHRvbiB7XHJcbiAgICBhcHBlYXJhbmNlOiBub25lO1xyXG4gICAgb3V0bGluZTogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xyXG4gICAgY29sb3I6ICMyMjJiNDU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjI1cztcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NSwgMjQ3LCAyNDkpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmJnLWJ1YmJsZXMge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gIHotaW5kZXg6IDE7XHJcblxyXG4gIGxpIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogZmFkZSh3aGl0ZSwgMTUlKSAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzc3MTZmZjtcclxuICAgIGJvdHRvbTogLTE2MHB4O1xyXG5cclxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBzcXVhcmUgMjVzIGluZmluaXRlO1xyXG4gICAgYW5pbWF0aW9uOiBzcXVhcmUgMjVzIGluZmluaXRlO1xyXG5cclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcclxuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XHJcblxyXG4gICAgJjpudGgtY2hpbGQoMSkge1xyXG4gICAgICBsZWZ0OiAxMCU7XHJcbiAgICB9XHJcblxyXG4gICAgJjpudGgtY2hpbGQoMikge1xyXG4gICAgICBsZWZ0OiAyMCU7XHJcblxyXG4gICAgICB3aWR0aDogODBweDtcclxuICAgICAgaGVpZ2h0OiA4MHB4O1xyXG5cclxuICAgICAgYW5pbWF0aW9uLWRlbGF5OiAycztcclxuICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxN3M7XHJcbiAgICB9XHJcblxyXG4gICAgJjpudGgtY2hpbGQoMykge1xyXG4gICAgICBsZWZ0OiAyNSU7XHJcbiAgICAgIGFuaW1hdGlvbi1kZWxheTogNHM7XHJcbiAgICB9XHJcblxyXG4gICAgJjpudGgtY2hpbGQoNCkge1xyXG4gICAgICBsZWZ0OiA0MCU7XHJcbiAgICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgICBoZWlnaHQ6IDYwcHg7XHJcblxyXG4gICAgICBhbmltYXRpb24tZHVyYXRpb246IDIycztcclxuXHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGZhZGUod2hpdGUsIDI1JSk7XHJcbiAgICB9XHJcblxyXG4gICAgJjpudGgtY2hpbGQoNSkge1xyXG4gICAgICBsZWZ0OiA3MCU7XHJcbiAgICB9XHJcblxyXG4gICAgJjpudGgtY2hpbGQoNikge1xyXG4gICAgICBsZWZ0OiA4MCU7XHJcbiAgICAgIHdpZHRoOiAxMjBweDtcclxuICAgICAgaGVpZ2h0OiAxMjBweDtcclxuXHJcbiAgICAgIGFuaW1hdGlvbi1kZWxheTogM3M7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGZhZGUod2hpdGUsIDIwJSk7XHJcbiAgICB9XHJcblxyXG4gICAgJjpudGgtY2hpbGQoNykge1xyXG4gICAgICBsZWZ0OiAzMiU7XHJcbiAgICAgIHdpZHRoOiAxNjBweDtcclxuICAgICAgaGVpZ2h0OiAxNjBweDtcclxuXHJcbiAgICAgIGFuaW1hdGlvbi1kZWxheTogN3M7XHJcbiAgICB9XHJcblxyXG4gICAgJjpudGgtY2hpbGQoOCkge1xyXG4gICAgICBsZWZ0OiA1NSU7XHJcbiAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICBoZWlnaHQ6IDIwcHg7XHJcblxyXG4gICAgICBhbmltYXRpb24tZGVsYXk6IDE1cztcclxuICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiA0MHM7XHJcbiAgICB9XHJcblxyXG4gICAgJjpudGgtY2hpbGQoOSkge1xyXG4gICAgICBsZWZ0OiAyNSU7XHJcbiAgICAgIHdpZHRoOiAxMHB4O1xyXG4gICAgICBoZWlnaHQ6IDEwcHg7XHJcblxyXG4gICAgICBhbmltYXRpb24tZGVsYXk6IDJzO1xyXG4gICAgICBhbmltYXRpb24tZHVyYXRpb246IDQwcztcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogZmFkZSh3aGl0ZSwgMzAlKTtcclxuICAgIH1cclxuXHJcbiAgICAmOm50aC1jaGlsZCgxMCkge1xyXG4gICAgICBsZWZ0OiA5MCU7XHJcbiAgICAgIHdpZHRoOiAxNjBweDtcclxuICAgICAgaGVpZ2h0OiAxNjBweDtcclxuXHJcbiAgICAgIGFuaW1hdGlvbi1kZWxheTogMTFzO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIHNxdWFyZSB7XHJcbiAgMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNzAwcHgpIHJvdGF0ZSg2MDBkZWcpO1xyXG4gIH1cclxufVxyXG5Aa2V5ZnJhbWVzIHNxdWFyZSB7XHJcbiAgMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNzAwcHgpIHJvdGF0ZSg2MDBkZWcpO1xyXG4gIH1cclxufVxyXG5cclxuOjpwbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgb3BhY2l0eTogMTsgLyogRmlyZWZveCAqL1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 80107:
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginModule": function() { return /* binding */ LoginModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 45393);
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.component */ 98458);
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../@theme/theme.module */ 80268);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nebular/theme */ 40465);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);









class LoginModule {
}
LoginModule.ɵfac = function LoginModule_Factory(t) { return new (t || LoginModule)(); };
LoginModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: LoginModule });
LoginModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginRoutingModule,
            _theme_theme_module__WEBPACK_IMPORTED_MODULE_2__.ThemeModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbSpinnerModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbCardModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbLayoutModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbButtonModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](LoginModule, { declarations: [_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginRoutingModule,
        _theme_theme_module__WEBPACK_IMPORTED_MODULE_2__.ThemeModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbSpinnerModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbCardModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbLayoutModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbButtonModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_login_login_module_ts-es2015.js.map