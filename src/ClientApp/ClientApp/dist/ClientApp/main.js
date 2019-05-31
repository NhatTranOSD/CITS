(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _pages_review_review_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/review/review.component */ "./src/app/pages/review/review.component.ts");
/* harmony import */ var _app_pages_create_applicant_create_applicant_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app/pages/create-applicant/create-applicant.component */ "./src/app/pages/create-applicant/create-applicant.component.ts");
/* harmony import */ var _pages_applicant_applicant_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/applicant/applicant.component */ "./src/app/pages/applicant/applicant.component.ts");
/* harmony import */ var _pages_agent_agent_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/agent/agent.component */ "./src/app/pages/agent/agent.component.ts");








var routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'applicant', component: _pages_applicant_applicant_component__WEBPACK_IMPORTED_MODULE_6__["ApplicantComponent"] },
    { path: 'agent', component: _pages_agent_agent_component__WEBPACK_IMPORTED_MODULE_7__["AgentComponent"] },
    { path: 'review/:id', component: _pages_review_review_component__WEBPACK_IMPORTED_MODULE_4__["ReviewComponent"] },
    { path: 'newapplicant', component: _app_pages_create_applicant_create_applicant_component__WEBPACK_IMPORTED_MODULE_5__["CreateApplicantComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"\">\r\n        <div class=\"alert alert-success\" role=\"alert\">\r\n            <h4 class=\"alert-heading\">Workflow</h4>\r\n            <p class=\"mb-0\">Orient Software Development</p>\r\n        </div>\r\n    </div>\r\n    <div *ngIf=\"authService.IsLogin()\">\r\n        <div class=\"text-right\">\r\n            <a type=\"button\" class=\"btn btn-light\" (click)=\"authService.logout()\">Logout</a>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div *ngIf=\"!isLoading\" class=\"container\">\r\n    <router-outlet></router-outlet>\r\n    <hr>\r\n    <app-message></app-message>\r\n</div>"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AppComponent = /** @class */ (function () {
    function AppComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.title = 'ClientApp';
        this.isLoading = true;
        // localStorage.clear();
        this.isLogin();
    }
    AppComponent.prototype.isLogin = function () {
        this.authService.checkLogin();
        this.isLoading = false;
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-pdf-viewer */ "./node_modules/ng2-pdf-viewer/ng2-pdf-viewer.es5.js");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _pages_review_review_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/review/review.component */ "./src/app/pages/review/review.component.ts");
/* harmony import */ var _components_message_message_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/message/message.component */ "./src/app/components/message/message.component.ts");
/* harmony import */ var _pages_create_applicant_create_applicant_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/create-applicant/create-applicant.component */ "./src/app/pages/create-applicant/create-applicant.component.ts");
/* harmony import */ var _pages_applicant_applicant_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/applicant/applicant.component */ "./src/app/pages/applicant/applicant.component.ts");
/* harmony import */ var _pages_agent_agent_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/agent/agent.component */ "./src/app/pages/agent/agent.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _pages_applicant_applicant_component__WEBPACK_IMPORTED_MODULE_13__["ApplicantComponent"],
                _pages_agent_agent_component__WEBPACK_IMPORTED_MODULE_14__["AgentComponent"],
                _pages_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
                _pages_review_review_component__WEBPACK_IMPORTED_MODULE_10__["ReviewComponent"],
                _components_message_message_component__WEBPACK_IMPORTED_MODULE_11__["MessageComponent"],
                _pages_create_applicant_create_applicant_component__WEBPACK_IMPORTED_MODULE_12__["CreateApplicantComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_8__["PdfViewerModule"]
            ],
            providers: [{ provide: _angular_common__WEBPACK_IMPORTED_MODULE_15__["APP_BASE_HREF"], useValue: '/' }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/message/message.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/message/message.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWVzc2FnZS9tZXNzYWdlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/message/message.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/message/message.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div *ngIf=\"messageService.messages.length\">\n\n    <h2>Messages</h2>\n    <button class=\"clear\" (click)=\"messageService.clear()\">clear</button>\n    <div *ngFor='let message of messageService.messages'> {{message}} </div>\n\n</div> -->"

/***/ }),

/***/ "./src/app/components/message/message.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/message/message.component.ts ***!
  \*********************************************************/
/*! exports provided: MessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageComponent", function() { return MessageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MessageComponent = /** @class */ (function () {
    function MessageComponent() {
    }
    MessageComponent.prototype.ngOnInit = function () {
    };
    MessageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-message',
            template: __webpack_require__(/*! ./message.component.html */ "./src/app/components/message/message.component.html"),
            styles: [__webpack_require__(/*! ./message.component.css */ "./src/app/components/message/message.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MessageComponent);
    return MessageComponent;
}());



/***/ }),

/***/ "./src/app/models/applicant-request.model.ts":
/*!***************************************************!*\
  !*** ./src/app/models/applicant-request.model.ts ***!
  \***************************************************/
/*! exports provided: ApplicantRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicantRequest", function() { return ApplicantRequest; });
var ApplicantRequest = /** @class */ (function () {
    function ApplicantRequest() {
    }
    return ApplicantRequest;
}());



/***/ }),

/***/ "./src/app/models/applicant.model.ts":
/*!*******************************************!*\
  !*** ./src/app/models/applicant.model.ts ***!
  \*******************************************/
/*! exports provided: Applicant, ApplicantStatus, ApplicantStatusDisplay */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Applicant", function() { return Applicant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicantStatus", function() { return ApplicantStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicantStatusDisplay", function() { return ApplicantStatusDisplay; });
var Applicant = /** @class */ (function () {
    function Applicant() {
    }
    return Applicant;
}());

var ApplicantStatus;
(function (ApplicantStatus) {
    ApplicantStatus[ApplicantStatus["New"] = 0] = "New";
    ApplicantStatus[ApplicantStatus["Applicant_Review"] = 1] = "Applicant_Review";
    ApplicantStatus[ApplicantStatus["Applicant_Completed"] = 2] = "Applicant_Completed";
    ApplicantStatus[ApplicantStatus["Agent_Review"] = 3] = "Agent_Review";
    ApplicantStatus[ApplicantStatus["Agent_Review_Reminder"] = 4] = "Agent_Review_Reminder";
    ApplicantStatus[ApplicantStatus["Agent_Reviewed"] = 5] = "Agent_Reviewed";
    ApplicantStatus[ApplicantStatus["Agent_Decilined"] = 6] = "Agent_Decilined";
    ApplicantStatus[ApplicantStatus["Agent_Approved"] = 7] = "Agent_Approved";
})(ApplicantStatus || (ApplicantStatus = {}));
var ApplicantStatusDisplay = [
    'New',
    'Applicant_Review',
    'Applicant_Completed',
    'Agent_Review',
    'Agent_Review_Reminder',
    'Agent_Reviewed',
    'Agent_Decilined',
    'Agent_Approved'
];


/***/ }),

/***/ "./src/app/models/user.model.ts":
/*!**************************************!*\
  !*** ./src/app/models/user.model.ts ***!
  \**************************************/
/*! exports provided: User, UserType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserType", function() { return UserType; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());

var UserType;
(function (UserType) {
    UserType[UserType["Applicant"] = 0] = "Applicant";
    UserType[UserType["Agent"] = 1] = "Agent";
})(UserType || (UserType = {}));


/***/ }),

/***/ "./src/app/pages/agent/agent.component.css":
/*!*************************************************!*\
  !*** ./src/app/pages/agent/agent.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FnZW50L2FnZW50LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/agent/agent.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/agent/agent.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col\">\r\n        <h3>\r\n            Applicant request list\r\n        </h3>\r\n    </div>\r\n    <div class=\"col\">\r\n        <button (click)=\"createApplicant()\" type=\"button\" class=\"btn btn-primary\">Create Applicant</button>\r\n    </div>\r\n</div>\r\n<br>\r\n<div>\r\n    <table class=\"table\">\r\n        <thead>\r\n            <tr>\r\n                <th scope=\"col\">Applicant Email</th>\r\n                <th scope=\"col\">FullName</th>\r\n                <th scope=\"col\">Address</th>\r\n                <th scope=\"col\">Phone Number</th>\r\n                <th scope=\"col\">Status</th>\r\n                <th scope=\"col\">Created Date</th>\r\n                <th scope=\"col\">Updated Date</th>\r\n                <th scope=\"col\"></th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            <tr *ngFor=\"let item of applicantService.applicants\">\r\n                <td>{{item.email}}</td>\r\n                <td>{{item.fullName}}</td>\r\n                <td>{{item.address}}</td>\r\n                <td>{{item.phoneNumber}}</td>\r\n                <td>{{applicantStatusDisplay[item.status]}}</td>\r\n                <td>{{item.createDate}}</td>\r\n                <td>{{item.updatedDate}}</td>\r\n                <td>\r\n                    <button (click)=\"reviewApplicant(item.id)\" type=\"button\" class=\"btn btn-info\">Review</button>\r\n                    <!-- <button (click)=\"accept(item.applicantId)\" type=\"button\" class=\"btn btn-success\">Accept</button>|\r\n                    <button (click)=\"refuse(item.applicantId)\" type=\"button\" class=\"btn btn-danger\">Refuse</button> -->\r\n                </td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/agent/agent.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/agent/agent.component.ts ***!
  \************************************************/
/*! exports provided: AgentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgentComponent", function() { return AgentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_applicant_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/applicant.service */ "./src/app/services/applicant.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_applicant_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/applicant.model */ "./src/app/models/applicant.model.ts");





var AgentComponent = /** @class */ (function () {
    function AgentComponent(applicantService, router) {
        this.applicantService = applicantService;
        this.router = router;
        this.applicantStatusDisplay = _models_applicant_model__WEBPACK_IMPORTED_MODULE_4__["ApplicantStatusDisplay"];
        this.applicantService.getApplicants();
    }
    AgentComponent.prototype.ngOnInit = function () {
    };
    AgentComponent.prototype.reviewApplicant = function (applicantId) {
        this.router.navigate(["review/" + applicantId]);
    };
    AgentComponent.prototype.createApplicant = function () {
        this.router.navigate(['newapplicant']);
    };
    AgentComponent.prototype.accept = function (applicantId) {
        this.applicantService.acceptApplicant(applicantId);
    };
    AgentComponent.prototype.refuse = function (applicantId) {
        this.applicantService.refuseApplicant(applicantId);
    };
    AgentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-agent',
            template: __webpack_require__(/*! ./agent.component.html */ "./src/app/pages/agent/agent.component.html"),
            styles: [__webpack_require__(/*! ./agent.component.css */ "./src/app/pages/agent/agent.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_applicant_service__WEBPACK_IMPORTED_MODULE_2__["ApplicantService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AgentComponent);
    return AgentComponent;
}());



/***/ }),

/***/ "./src/app/pages/applicant/applicant.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pages/applicant/applicant.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FwcGxpY2FudC9hcHBsaWNhbnQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/applicant/applicant.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/applicant/applicant.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"submitted\">\r\n    Submitted successfully! <button (click)=\"back()\" type=\"button\" class=\"btn btn-link\">Back</button>\r\n</div>\r\n\r\n<div class=\"container\">\r\n    <div *ngIf=\"applicant\" class=\"col-5\" [hidden]=\"submitted\">\r\n\r\n        <div class=\"form-group\">\r\n            <b>Email: {{applicant.email}}</b>\r\n            <h3 *ngIf=\"(applicant.status < 3)\">Status <span class=\"badge badge-secondary\">{{applicantStatusDisplay[applicant.status]}}</span></h3>\r\n            <h3 *ngIf=\"(applicant.status == 6)\">Status <span class=\"badge badge-warning\">{{applicantStatusDisplay[applicant.status]}}</span></h3>\r\n            <h3 *ngIf=\"(applicant.status == 7)\">Status <span class=\"badge badge-success\">{{applicantStatusDisplay[applicant.status]}}</span></h3>\r\n        </div>\r\n        <div *ngIf=\"applicant.status < 3\">\r\n            <form #applicantForm=\"ngForm\">\r\n                <h1>Applicant Form</h1>\r\n\r\n                <div class=\"form-group\">\r\n                    <label for=\"applicantName\">Name</label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"applicantName\" required [(ngModel)]=\"applicant.fullName\" name=\"applicantName\" #name=\"ngModel\">\r\n                    <!-- <div [hidden]=\"userName.valid || userName.pristine\" class=\"alert alert-danger\">\r\n                    Name is required\r\n                </div> -->\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                    <label for=\"userName\">Address</label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"address\" required [(ngModel)]=\"applicant.address\" name=\"address\" #name=\"ngModel\">\r\n                    <!-- <div [hidden]=\"userName.valid || userName.pristine\" class=\"alert alert-danger\">\r\n                        Name is required\r\n                    </div> -->\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                    <label for=\"userName\">Phone Number</label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"phoneNumber\" required [(ngModel)]=\"applicant.phoneNumber\" name=\"phoneNumber\" #name=\"ngModel\">\r\n                    <!-- <div [hidden]=\"userName.valid || userName.pristine\" class=\"alert alert-danger\">\r\n                            Name is required\r\n                        </div> -->\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                    <label for=\"description\">Description</label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"description\" required [(ngModel)]=\"applicant.description\" name=\"description\" #name=\"ngModel\">\r\n                    <!-- <div [hidden]=\"userName.valid || userName.pristine\" class=\"alert alert-danger\">\r\n                                Name is required\r\n                            </div> -->\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                    <label>Attach file</label>\r\n                    <input (change)=\"fileChange($event)\" type=\"file\" class=\"form-control-file\" accept=\".pdf\">\r\n                    <a *ngIf=\"documentLink\" href=\"{{documentLink}}\">{{applicant.documentPath}}</a>\r\n                </div>\r\n\r\n                <button (click)=\"onSubmit()\" class=\"btn btn-success\" [disabled]=\"!applicantForm.form.valid\">Submit</button>\r\n                <!-- <button type=\"button\" class=\"btn btn-default\" (click)=\"newHero(); applicantForm.reset()\">New Hero</button> -->\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- <router-outlet></router-outlet> -->"

/***/ }),

/***/ "./src/app/pages/applicant/applicant.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/applicant/applicant.component.ts ***!
  \********************************************************/
/*! exports provided: ApplicantComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicantComponent", function() { return ApplicantComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_applicant_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/applicant.model */ "./src/app/models/applicant.model.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_applicant_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/applicant.service */ "./src/app/services/applicant.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");







var ApplicantComponent = /** @class */ (function () {
    function ApplicantComponent(authService, applicantService) {
        this.authService = authService;
        this.applicantService = applicantService;
        this.submitted = false;
        this.applicantStatusDisplay = _models_applicant_model__WEBPACK_IMPORTED_MODULE_2__["ApplicantStatusDisplay"];
    }
    ApplicantComponent.prototype.ngOnInit = function () {
        var _this = this;
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.applicantService.getApplicantInfoByUserId(currentUser.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])())
            .subscribe(function (data) {
            _this.applicant = data;
            if (_this.applicant.documentPath !== null) {
                _this.documentLink = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl + "api/v1/Applicant/" + _this.applicant.id + "/Content";
            }
        }, function (error) {
            console.log(error);
        });
    };
    ApplicantComponent.prototype.fileChange = function (event) {
        var fileList = event.target.files;
        if (fileList.length > 0) {
            var file = fileList[0];
            var formData = new FormData();
            formData.append('uploadFile', file, file.name);
            this.formData = formData;
        }
    };
    ApplicantComponent.prototype.back = function () {
        this.submitted = false;
        this.ngOnInit();
    };
    ApplicantComponent.prototype.onSubmit = function () {
        var _this = this;
        this.applicantService.updateApplicant(this.applicant).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])())
            .subscribe(function (data) {
            _this.submitted = true;
        }, function (error) {
            console.log(error);
        });
        if (this.formData != null) {
            this.applicantService.uploadFiles(this.applicant.id, this.formData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])())
                .subscribe(function (data) {
                _this.submitted = true;
            }, function (error) {
                console.log(error);
            });
        }
    };
    ApplicantComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-applicant',
            template: __webpack_require__(/*! ./applicant.component.html */ "./src/app/pages/applicant/applicant.component.html"),
            styles: [__webpack_require__(/*! ./applicant.component.css */ "./src/app/pages/applicant/applicant.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _services_applicant_service__WEBPACK_IMPORTED_MODULE_4__["ApplicantService"]])
    ], ApplicantComponent);
    return ApplicantComponent;
}());



/***/ }),

/***/ "./src/app/pages/create-applicant/create-applicant.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/pages/create-applicant/create-applicant.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NyZWF0ZS1hcHBsaWNhbnQvY3JlYXRlLWFwcGxpY2FudC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/create-applicant/create-applicant.component.html":
/*!************************************************************************!*\
  !*** ./src/app/pages/create-applicant/create-applicant.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>\n    New Applicant\n</h2>\n<div class=\"col-6\">\n    <div class=\"form-group\">\n        <label for=\"email\">FullName</label>\n        <input [(ngModel)]=\"applicantRequest.fullName\" class=\"form-control\" type=\"email\" id=\"email\">\n    </div>\n\n    <div class=\"form-group\">\n        <label for=\"email\">Email address:</label>\n        <input [(ngModel)]=\"applicantRequest.email\" type=\"email\" (ngModelChange)=\"emailInputChange()\" class=\"form-control\" id=\"email\">\n    </div>\n\n    <button [disabled]=\"canSubmit\" (click)='onSubmit()' type=\"submit\" class=\"btn btn-primary\">Submit</button>\n</div>"

/***/ }),

/***/ "./src/app/pages/create-applicant/create-applicant.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/create-applicant/create-applicant.component.ts ***!
  \**********************************************************************/
/*! exports provided: CreateApplicantComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateApplicantComponent", function() { return CreateApplicantComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_applicant_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/applicant.service */ "./src/app/services/applicant.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _models_applicant_request_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/applicant-request.model */ "./src/app/models/applicant-request.model.ts");






var CreateApplicantComponent = /** @class */ (function () {
    function CreateApplicantComponent(applicantService, router) {
        this.applicantService = applicantService;
        this.router = router;
        this.applicantRequest = new _models_applicant_request_model__WEBPACK_IMPORTED_MODULE_5__["ApplicantRequest"]();
        this.canSubmit = true;
    }
    CreateApplicantComponent.prototype.ngOnInit = function () {
    };
    CreateApplicantComponent.prototype.emailInputChange = function () {
        if (this.applicantRequest.email.length > 0) {
            this.canSubmit = false;
        }
        else {
            this.canSubmit = true;
        }
    };
    CreateApplicantComponent.prototype.onSubmit = function () {
        var _this = this;
        this.applicantService.createApplicant(this.applicantRequest).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(function (data) {
            alert('Created');
            // Reload Data
            _this.applicantService.getApplicants();
            _this.router.navigate(['/agent']);
        }, function (error) {
            console.log(error);
        });
    };
    CreateApplicantComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-applicant',
            template: __webpack_require__(/*! ./create-applicant.component.html */ "./src/app/pages/create-applicant/create-applicant.component.html"),
            styles: [__webpack_require__(/*! ./create-applicant.component.css */ "./src/app/pages/create-applicant/create-applicant.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_applicant_service__WEBPACK_IMPORTED_MODULE_2__["ApplicantService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], CreateApplicantComponent);
    return CreateApplicantComponent;
}());



/***/ }),

/***/ "./src/app/pages/login/login.component.css":
/*!*************************************************!*\
  !*** ./src/app/pages/login/login.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/login/login.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/login/login.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<hr>\r\n<!-- Login view -->\r\n<div class=\"\">\r\n    <div class=\"d-flex justify-content-center h-100\">\r\n        <div class=\"card\" style=\"width: 25rem;\">\r\n\r\n            <div class=\"card-header\">\r\n                <h3>Sign In</h3>\r\n            </div>\r\n\r\n            <div class=\"card-body\">\r\n                <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"username\">Username</label>\r\n                        <input type=\"text\" formControlName=\"username\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\" />\r\n                        <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f.username.errors.required\">Username is required</div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"password\">Password</label>\r\n                        <input type=\"password\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\r\n                        <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f.password.errors.required\">Password is required</div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <button [disabled]=\"isLoading\" class=\"btn btn-primary\">Login</button>\r\n                        <img *ngIf=\"isLoading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\"\r\n                        />\r\n                        <!-- <a [routerLink]=\"['/register']\" class=\"btn btn-link\">Register</a> -->\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"text-danger\" *ngIf=\"loginStatus != ''\">\r\n        {{loginStatus}}\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, router, authService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.authService = authService;
        this.isLogin = false;
        this.isLoading = true;
        this.loginStatus = '';
        this.submitted = false;
        this.user = {
            userName: '',
            passWord: '',
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        if (this.authService.checkLogin) {
            this.authService.logout();
        }
        this.isLoading = false;
    };
    Object.defineProperty(LoginComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.loginForm.controls; },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.loginStatus = '';
        this.user.userName = this.f.username.value;
        this.user.passWord = this.f.password.value;
        if (this.user.userName !== '' && this.user.passWord !== '') {
            this.authService.login(this.user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])())
                .subscribe(function (data) {
                if (data !== null) {
                    _this.isLogin = true;
                    localStorage.setItem('isLogin', JSON.stringify(_this.isLogin));
                    localStorage.setItem('currentUser', JSON.stringify(data));
                    _this.authService.directUser(data);
                }
                else {
                    _this.loginStatus = 'Invalid username or password';
                }
            }, function (error) {
                console.log(error);
            });
        }
        this.submitted = true;
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/pages/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/pages/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/pages/review/review.component.css":
/*!***************************************************!*\
  !*** ./src/app/pages/review/review.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Jldmlldy9yZXZpZXcuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/review/review.component.html":
/*!****************************************************!*\
  !*** ./src/app/pages/review/review.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"applicant\">\r\n\r\n    <a class=\"nav-link text-dark\" [routerLink]='[\"/agent\"]'>Back to list</a>\r\n    <hr>\r\n    <div class=\"row\">\r\n        <div class=\"col-4\">\r\n            <h2>Applicant Review: {{applicant.applicantId}}</h2>\r\n        </div>\r\n        <div class=\"col-8\">\r\n            <button (click)=\"accept(applicant.id)\" type=\"button\" class=\"btn btn-success\">Accept</button>|\r\n            <button (click)=\"refuse(applicant.id)\" type=\"button\" class=\"btn btn-danger\">Refuse</button>\r\n        </div>\r\n    </div>\r\n    <div>\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-3\">Applicant Name: </div>\r\n                    <div class=\"col-9\">{{applicant.fullName}}</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-3\">Applicant Address: </div>\r\n                    <div class=\"col-9\">{{applicant.address}}</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-3\">Applicant Phone Number: </div>\r\n                    <div class=\"col-9\">{{applicant.phoneNumber}}</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-3\">Applicant Description: </div>\r\n                    <div class=\"col-9\">{{applicant.description}}</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-3\">Applicant Status: </div>\r\n                    <div class=\"col-9\">{{applicantStatusDisplay[applicant.status]}}</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-3\">Applicant dateOfBirth: </div>\r\n                    <div class=\"col-9\">{{applicant.dateOfBirth}}</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-3\">Applicant CreateDate: </div>\r\n                    <div class=\"col-9\">{{applicant.createdDate}}</div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-3\">Applicant updatedDate: </div>\r\n                    <div class=\"col-9\">{{applicant.updatedDate}}</div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <h2>Content</h2>\r\n    <hr>\r\n    <h2>Documents</h2>\r\n    <a *ngIf=\"documentLink\" href=\"{{documentLink}}\">{{applicant.documentPath}}</a>\r\n\r\n    <!-- <div class=\"pdf-container\">\r\n    <pdf-viewer [src]=\"contentUri\" [original-size]=\"false\"></pdf-viewer>\r\n</div> -->\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/pages/review/review.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/review/review.component.ts ***!
  \**************************************************/
/*! exports provided: ReviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewComponent", function() { return ReviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_applicant_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/applicant.service */ "./src/app/services/applicant.service.ts");
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/message.service */ "./src/app/services/message.service.ts");
/* harmony import */ var _models_applicant_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/applicant.model */ "./src/app/models/applicant.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");








var ReviewComponent = /** @class */ (function () {
    function ReviewComponent(messageService, router, applicantService, activatedRoute) {
        this.messageService = messageService;
        this.router = router;
        this.applicantService = applicantService;
        this.activatedRoute = activatedRoute;
        this.applicantStatusDisplay = _models_applicant_model__WEBPACK_IMPORTED_MODULE_4__["ApplicantStatusDisplay"];
        this.contentUri = '';
    }
    ReviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        var applicantId = this.activatedRoute.snapshot.paramMap.get('id');
        this.applicantService.getApplicantInfo(applicantId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["first"])())
            .subscribe(function (data) {
            _this.applicant = data;
            if (_this.applicant.documentPath !== null) {
                _this.documentLink = _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiUrl + "api/v1/Applicant/" + _this.applicant.id + "/Content";
            }
        }, function (error) {
            console.log(error);
        });
    };
    ReviewComponent.prototype.accept = function (applicantId) {
        var _this = this;
        this.applicantService.acceptApplicant(applicantId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["first"])())
            .subscribe(function (data) {
            console.log(data);
            // reload data
            _this.applicantService.getApplicants();
            alert("Accepted ApplicantId: " + applicantId);
            _this.router.navigate(['/agent']);
        }, function (error) {
            console.log(error);
        });
    };
    ReviewComponent.prototype.refuse = function (applicantId) {
        var _this = this;
        this.applicantService.refuseApplicant(applicantId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["first"])())
            .subscribe(function (data) {
            console.log(data);
            // reload data
            _this.applicantService.getApplicants();
            alert("Refused ApplicantId: " + applicantId);
            _this.router.navigate(['/agent']);
        }, function (error) {
            console.log(error);
        });
    };
    ReviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-review',
            template: __webpack_require__(/*! ./review.component.html */ "./src/app/pages/review/review.component.html"),
            styles: [__webpack_require__(/*! ./review.component.css */ "./src/app/pages/review/review.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_message_service__WEBPACK_IMPORTED_MODULE_3__["MessageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _services_applicant_service__WEBPACK_IMPORTED_MODULE_2__["ApplicantService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], ReviewComponent);
    return ReviewComponent;
}());



/***/ }),

/***/ "./src/app/services/applicant.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/applicant.service.ts ***!
  \***********************************************/
/*! exports provided: ApplicantService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicantService", function() { return ApplicantService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");





var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl;
var ApplicantService = /** @class */ (function () {
    function ApplicantService(http) {
        // const isLogin = JSON.parse(localStorage.getItem('isLogin'));
        this.http = http;
        // if (isLogin === true) {
        //   this.getApplicants();
        // }
    }
    ApplicantService.prototype.getApplicants = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var currentUser;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        currentUser = JSON.parse(localStorage.getItem('currentUser'));
                        // get Applicants here, by subcrib
                        return [4 /*yield*/, this.http.get(baseUrl + "api/v1/Applicant/" + currentUser.id, httpOptions)
                                .subscribe(function (result) {
                                _this.applicants = result;
                                console.log(result);
                            }, function (error) { return console.error(error); })];
                    case 1:
                        // get Applicants here, by subcrib
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ApplicantService.prototype.getApplicantInfo = function (applicantId) {
        return this.http.post(baseUrl + "api/v1/Applicant/" + applicantId, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return result; }));
    };
    ApplicantService.prototype.getApplicantInfoByUserId = function (userId) {
        return this.http.post(baseUrl + "api/v1/Applicant/ApplicantInfoByUserId/" + userId, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return result; }));
    };
    ApplicantService.prototype.uploadFiles = function (applicantId, formData) {
        return this.http.post(baseUrl + "api/v1/Applicant/" + applicantId + "/UploadFile", formData, {
            reportProgress: true,
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return result; }));
    };
    ApplicantService.prototype.getContents = function (applicantId) {
        return this.http.get(baseUrl + "api/v1/Applicant/" + applicantId + "/Content")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return result; }));
    };
    ApplicantService.prototype.acceptApplicant = function (applicantId) {
        return this.http.post(baseUrl + "api/v1/Applicant/" + applicantId + "/accept", httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return result; }));
    };
    ApplicantService.prototype.refuseApplicant = function (applicantId) {
        return this.http.post(baseUrl + "api/v1/Applicant/" + applicantId + "/refuse", httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return result; }));
    };
    ApplicantService.prototype.createApplicant = function (applicantRequest) {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        applicantRequest.agentId = currentUser.id;
        return this.http.post(baseUrl + "api/v1/Applicant/Create", applicantRequest, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return result; }));
    };
    ApplicantService.prototype.updateApplicant = function (applicantRequest) {
        return this.http.post(baseUrl + "api/v1/Applicant/Update", applicantRequest, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return result; }));
    };
    ApplicantService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ApplicantService);
    return ApplicantService;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/user.model */ "./src/app/models/user.model.ts");







var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl;
var AuthService = /** @class */ (function () {
    function AuthService(router, http) {
        this.router = router;
        this.http = http;
        this.isLogin = false;
        this.user = new _models_user_model__WEBPACK_IMPORTED_MODULE_6__["User"]();
    }
    AuthService.prototype.IsLogin = function () {
        var isLogin = JSON.parse(localStorage.getItem('isLogin'));
        if (isLogin != null && isLogin === true) {
            return true;
        }
        else {
            return false;
        }
    };
    AuthService.prototype.login = function (user) {
        return this.http.post(baseUrl + "api/v1/user/login", user, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (result) { return result; }));
    };
    AuthService.prototype.getCurrentUser = function () {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser != null) {
            this.user = currentUser;
        }
        return this.user;
    };
    AuthService.prototype.checkLogin = function () {
        var isLogin = JSON.parse(localStorage.getItem('isLogin'));
        if (isLogin != null) {
            this.isLogin = isLogin;
        }
        if (this.isLogin === true) {
            this.getCurrentUser();
            this.directUser(this.user);
        }
        else {
            this.router.navigate(['/login']);
        }
    };
    AuthService.prototype.directUser = function (user) {
        if (user.userType === _models_user_model__WEBPACK_IMPORTED_MODULE_6__["UserType"].Applicant) { // type applicant
            this.router.navigate(['/applicant']);
        }
        else if (user.userType === _models_user_model__WEBPACK_IMPORTED_MODULE_6__["UserType"].Agent) {
            this.router.navigate(['/agent']);
        }
        else {
            this.router.navigate(['/']);
        }
    };
    AuthService.prototype.logout = function () {
        // Clear Session memory
        localStorage.clear();
        this.router.navigate(['/login']);
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/message.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/message.service.ts ***!
  \*********************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MessageService = /** @class */ (function () {
    function MessageService() {
        this.messages = [];
    }
    MessageService.prototype.add = function (message) {
        this.messages.push(message);
    };
    MessageService.prototype.clear = function () {
        this.messages = [];
    };
    MessageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MessageService);
    return MessageService;
}());



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
var environment = {
    production: false,
    apiUrl: 'https://localhost:5001/',
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\nhat.tran\Desktop\Projects\CITS\CITS\src\ClientApp\ClientApp\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!**********************!*\
  !*** zlib (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!**********************!*\
  !*** http (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/*!***********************!*\
  !*** https (ignored) ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map