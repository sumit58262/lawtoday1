webpackJsonp([0],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrivacyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants_config__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PrivacyPage = /** @class */ (function () {
    function PrivacyPage(navCtrl, l, s) {
        this.navCtrl = navCtrl;
        this.l = l;
        this.s = s;
        this.showLoader();
        this.safeWebUrl = this.s.bypassSecurityTrustResourceUrl(__WEBPACK_IMPORTED_MODULE_3__constants_config__["a" /* BASE_URL */] + "privacy-policy");
    }
    PrivacyPage.prototype.showLoader = function () {
        this.loader = this.l.create();
        this.loader.present();
    };
    PrivacyPage.prototype.removeLoading = function () {
        this.loader.dismiss();
    };
    PrivacyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-privacy',template:/*ion-inline-start:"D:\IONIC\app_v1.72\03\src\pages\privacy\privacy.html"*/'<ion-header no-border-bottom>\n  <ion-navbar class="uc-header header-dark">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Privacy Policy\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <iframe [src]="safeWebUrl" frameborder="0" style="width:100%; min-height:320px; height:100%;" (load)="removeLoading()"></iframe>\n</ion-content>\n'/*ion-inline-end:"D:\IONIC\app_v1.72\03\src\pages\privacy\privacy.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"], __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */]])
    ], PrivacyPage);
    return PrivacyPage;
}());

//# sourceMappingURL=privacy.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants_config__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TermsPage = /** @class */ (function () {
    function TermsPage(navCtrl, l, s) {
        this.navCtrl = navCtrl;
        this.l = l;
        this.s = s;
        this.showLoader();
        this.safeWebUrl = this.s.bypassSecurityTrustResourceUrl(__WEBPACK_IMPORTED_MODULE_3__constants_config__["a" /* BASE_URL */] + "terms-conditions");
    }
    TermsPage.prototype.showLoader = function () {
        this.loader = this.l.create();
        this.loader.present();
    };
    TermsPage.prototype.removeLoading = function () {
        this.loader.dismiss();
    };
    TermsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-terms",template:/*ion-inline-start:"D:\IONIC\app_v1.72\03\src\pages\terms\terms.html"*/'<ion-header no-border-bottom>\n  <ion-navbar class="uc-header header-dark">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Terms And Conditions\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <iframe [src]="safeWebUrl" frameborder="0" style="width:100%; min-height:320px; height:100%;" (load)="removeLoading()"></iframe>\n</ion-content>\n'/*ion-inline-end:"D:\IONIC\app_v1.72\03\src\pages\terms\terms.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */]])
    ], TermsPage);
    return TermsPage;
}());

//# sourceMappingURL=terms.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangePasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_messages_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the ChangePasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()
var ChangePasswordPage = /** @class */ (function () {
    function ChangePasswordPage(navCtrl, navParams, messages, auth, store, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.messages = messages;
        this.auth = auth;
        this.store = store;
        this.formBuilder = formBuilder;
        this.isFormSubmitted = false;
        this.passwordType = "password";
        this.passwordIcon = "eye-off";
        this.userIdentity = "";
        this.userIdentity = this.navParams.get('user_identity') ? this.navParams.get('user_identity') : '';
        this.changePassForm = this.formBuilder.group({
            email: [''],
            password: [
                "",
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].minLength(6),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].maxLength(20)
                ])
            ],
            cpass: [
                "",
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].minLength(6),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].maxLength(20),
                    this.equalto("password")
                ])
            ]
        });
    }
    ChangePasswordPage.prototype.ionViewDidLoad = function () {
        this.isFormSubmitted = false;
    };
    ChangePasswordPage.prototype.equalto = function (field_name) {
        return function (control) {
            var input = control.value;
            var isValid = control.root.value[field_name] == input;
            if (!isValid)
                return { equalTo: { isValid: isValid } };
            else
                return null;
        };
    };
    /**
     * Hide Show Password
     */
    ChangePasswordPage.prototype.hideShowPassword = function () {
        this.passwordType = this.passwordType === "text" ? "password" : "text";
        this.passwordIcon = this.passwordIcon === "eye-off" ? "eye" : "eye-off";
    };
    ChangePasswordPage.prototype.isFieldValid = function (fieldValue) {
        if (fieldValue) {
            return true;
        }
        return false;
    };
    ChangePasswordPage.prototype.onSubmit = function () {
        var _this = this;
        this.isFormSubmitted = true;
        if (this.changePassForm.valid) {
            this.messages.showLoader();
            if (this.userIdentity) {
                this.changePassForm.value.email = this.userIdentity;
                this.auth.resetPassword(this.changePassForm.value).subscribe(function (data) {
                    _this.messages.hideLoader();
                    if (!data.error) {
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */]);
                        _this.messages.showToast("Password update successfull", undefined, "toast-success");
                    }
                    else {
                        _this.messages.showToast(data.error, undefined, "toast-danger");
                    }
                }, function (err) {
                    _this.messages.hideLoader();
                    _this.messages.showToast(err.error.errors[Object.keys(err.error.errors)[0]].join(', '), undefined, "toast-danger");
                });
            }
            else {
                this.auth.ChangePassword(this.changePassForm.value).subscribe(function (data) {
                    _this.messages.hideLoader();
                    if (!data.error) {
                        _this.navCtrl.pop();
                        _this.messages.showToast("Password update successfull", undefined, "toast-success");
                    }
                    else {
                        _this.messages.showToast(data.error, undefined, "toast-danger");
                    }
                }, function (err) {
                    _this.messages.hideLoader();
                    _this.messages.showToast(err.error.errors[Object.keys(err.error.errors)[0]].join(', '), undefined, "toast-danger");
                });
            }
        }
    };
    ChangePasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-change-password",template:/*ion-inline-start:"D:\IONIC\app_v1.72\03\src\pages\change-password\change-password.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Change Password</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content no-padding class="forgot-section-bg">\n  <div class="section forgot-section">\n    <ion-row margin-vertical>\n      <ion-col text-center>\n        <img class="logo" src="assets/images/logo.png" alt="logo">\n      </ion-col>\n    </ion-row>\n    <form [formGroup]="changePassForm" novalidate (ngSubmit)="onSubmit()">\n      <ion-row>\n        <ion-col class="form-float-field">\n          <ion-item>\n            <ion-label floating>New Password</ion-label>\n            <ion-input formControlName="password" [class.error-box]="false" name="password" [type]="passwordType"\n              required></ion-input>\n            <ion-icon item-end [name]="passwordIcon" class="passwordIcon" (click)=\'hideShowPassword()\'></ion-icon>\n          </ion-item>\n          <span class="error-msg" [hidden]="!(changePassForm.controls[\'password\'].errors?.required && (changePassForm.controls[\'password\'].dirty || isFormSubmitted)  &&  isFieldValid(\'password\'))">\n            Password is required\n          </span>\n          <span class="error-msg" [hidden]="!(changePassForm.controls.password.hasError(\'minlength\') && (changePassForm.controls[\'password\'].dirty || isFormSubmitted) && !changePassForm.controls[\'password\'].errors?.required)">\n            Password minimum length is 6\n          </span>\n          <span class="error-msg" [hidden]="!(changePassForm.controls.password.hasError(\'maxlength\') && (changePassForm.controls[\'password\'].dirty || isFormSubmitted) && !changePassForm.controls[\'password\'].errors?.required)">\n            Password maximum length is 20\n          </span>\n        </ion-col>\n      </ion-row>\n      \n      <ion-row>\n        <ion-col class="form-float-field">\n          <ion-item>\n            <ion-label floating>Confirm Password</ion-label>\n            <ion-input formControlName="cpass" [class.error-box]="false" name="cpass" [type]="passwordType" required></ion-input>\n            <ion-icon item-end [name]="passwordIcon" class="passwordIcon" (click)=\'hideShowPassword()\'></ion-icon>\n          </ion-item>\n          <span class="error-msg" [hidden]="!(changePassForm.controls[\'cpass\'].errors?.required && (changePassForm.controls[\'cpass\'].dirty || isFormSubmitted)  &&  isFieldValid(\'cpass\'))">\n            Confirm Password is required\n          </span>\n          <span class="error-msg" [hidden]="!(changePassForm.controls.cpass.hasError(\'minlength\') && (changePassForm.controls[\'cpass\'].dirty || isFormSubmitted) && !changePassForm.controls[\'cpass\'].errors?.required)">\n            Confirm Password minimum length is 6\n          </span>\n          <span class="error-msg" [hidden]="!(changePassForm.controls.cpass.hasError(\'maxlength\') && (changePassForm.controls[\'cpass\'].dirty || isFormSubmitted) && !changePassForm.controls[\'cpass\'].errors?.required)">\n            Confirm Password maximum length is 20\n          </span>\n          <span class="error-msg" [hidden]="!(changePassForm.controls.cpass.hasError(\'equalTo\') && (changePassForm.controls[\'cpass\'].dirty || isFormSubmitted) && !changePassForm.controls[\'cpass\'].errors?.required && !changePassForm.controls.cpass.hasError(\'minlength\') && !changePassForm.controls.cpass.hasError(\'maxlength\'))">\n            Password &  Confirm Password should be same\n          </span>\n        </ion-col>\n      </ion-row>\n      <ion-row margin-vertical align-items-center>\n        <ion-col col-12 text-left>\n          <button block ion-button color="primary" type="submit">Submit</button>\n        </ion-col>\n      </ion-row>\n\n    </form>\n  </div>\n</ion-content>\n'/*ion-inline-end:"D:\IONIC\app_v1.72\03\src\pages\change-password\change-password.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_4__services_messages_service__["a" /* MessagesServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], ChangePasswordPage);
    return ChangePasswordPage;
}());

//# sourceMappingURL=change-password.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubscriptionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_messages_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_category_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_in_app_browser__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SubscriptionPage = /** @class */ (function () {
    function SubscriptionPage(categoryService, iab, navCtrl, navParams, messages, modalCtrl, storage, auth) {
        this.categoryService = categoryService;
        this.iab = iab;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.messages = messages;
        this.modalCtrl = modalCtrl;
        this.storage = storage;
        this.auth = auth;
        this.subscriptionData = [];
        this.paymentAmount = 333;
        this.currency = 'INR';
        this.currencyIcon = 'Rs.';
        this.razor_key = 'rzp_test_vw8QLtEcfkkaZB';
        this.cardDetails = {};
        this.getSubscriptionData();
    }
    SubscriptionPage.prototype.ionViewDidLoad = function () {
    };
    SubscriptionPage.prototype.getUserData = function () {
        var _this = this;
        this.auth.getUserDetail().subscribe(function (response) {
            if (!response.error) {
                _this.userData = response;
            }
        }, function (err) {
        });
    };
    SubscriptionPage.prototype.getSubscriptionData = function () {
        var _this = this;
        this.messages.showLoader();
        this.auth.getSubscriptionDetail().subscribe(function (response) {
            _this.messages.hideLoader();
            if (!response.error) {
                _this.getUserData();
                _this.subscriptionData = response;
                if (_this.subscriptionData.order) {
                    _this.storage.set("isSubscribed", 1);
                }
                else {
                    _this.storage.set("isSubscribed", 0);
                }
            }
        }, function (err) {
            if (err.status == 401) {
                if (_this.storage.remove("userInfo") ||
                    _this.storage.remove("name") ||
                    _this.storage.remove("email") ||
                    _this.storage.remove("role")) {
                    _this.storage.remove("userInfo");
                    _this.storage.remove("name");
                    _this.storage.remove("email");
                    _this.storage.remove("role");
                    _this.storage.remove("isSubscribed");
                }
                _this.messages.showToast("Force Logout due to multiple device login.", undefined, "toast-danger");
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__login_login__["a" /* LoginPage */]);
            }
            _this.messages.hideLoader();
        });
    };
    SubscriptionPage.prototype.payByPayU = function (id, price) {
        var name = this.userData.name;
        var mobile = this.userData.phone_number;
        var email = this.userData.email;
        var appname = 'Law Today';
        var amt = price * 100;
        var url = 'https://lawtoday.co.in/razorpay/pay.php?amt=' + amt + '&checkout=automatic' + '&appname=' + appname + '&mobile=' + mobile + '&email=' + email;
        var options = {
            location: 'no',
            hidden: 'no',
            clearcache: 'yes',
            clearsessioncache: 'yes',
            zoom: 'yes',
            hardwareback: 'no',
            mediaPlaybackRequiresUserAction: 'no',
            shouldPauseOnSuspend: 'no',
            closebuttoncaption: 'Close',
            disallowoverscroll: 'no',
            toolbar: 'yes',
            enableViewportScale: 'no',
            allowInlineMediaPlayback: 'no',
            presentationstyle: 'pagesheet',
            fullscreen: 'yes',
        };
        var browser = this.iab.create(url, '_system', options);
    };
    SubscriptionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-subscription',template:/*ion-inline-start:"D:\IONIC\app_v1.72\03\src\pages\subscription\subscription.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Subscription</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n\n  <ion-grid margin-bottom class="uc-grid">\n    <ion-row >\n      <ion-col >\n  <ion-card *ngFor="let plan of subscriptionData.plans">\n    \n   \n    <ion-card-header>\n    <div class="plan-duration" color="white" [class.subscribed]="subscriptionData.order && subscriptionData.order.plan_id == plan.id" text-center >\n   <h2>{{plan.name}} (Duration: {{plan.duration}} Days)</h2>  Rs. {{plan.price}}\n   <img src="{{plan.image}}">\n    </div>\n  </ion-card-header>\n  \n  <button ion-button block (click)="payByPayU(plan.id, plan.price)" *ngIf="!subscriptionData.order || subscriptionData.order.plan_id != plan.id">Subscribe</button>\n      <button ion-button block color="success" *ngIf="subscriptionData.order && subscriptionData.order.plan_id == plan.id">Plan Subscribed</button>\n    <!--\n     <button ion-button block (click)="payWithRazor(plan.price, plan.id, plan.duration)" *ngIf="!subscriptionData.order || subscriptionData.order.plan_id != plan.id">Subscribe</button>\n      <button ion-button block color="success" *ngIf="subscriptionData.order && subscriptionData.order.plan_id == plan.id">Plan Subscribed</button>\n     -->\n  </ion-card>\n</ion-col>\n\n\n</ion-row>\n</ion-grid>\n<ion-grid>\n  <ion-card >\n    <ion-card-content>\n      <div text-wrap >\n      <p> Please Read <a href="https://lawtoday.co.in/membership.html" target="_blank">Membership information</a> to know what your subscription include.\n        </p>\n       \n      </div>\n      </ion-card-content>\n    </ion-card>\n</ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"D:\IONIC\app_v1.72\03\src\pages\subscription\subscription.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__services_category_service__["a" /* CategoryServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_3__services_messages_service__["a" /* MessagesServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["ModalController"],
            __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthServiceProvider */]])
    ], SubscriptionPage);
    return SubscriptionPage;
}());

//# sourceMappingURL=subscription.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExamNotificationDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ExamNotificationDetailPage = /** @class */ (function () {
    function ExamNotificationDetailPage(iab, navCtrl, navParams, sanitizer) {
        this.iab = iab;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.sanitizer = sanitizer;
        this.notificationData = this.navParams.get('data') ? this.navParams.get('data') : '';
        //  console.log(this.navParams.get('data'))
    }
    ExamNotificationDetailPage.prototype.handleClick = function (event) {
        if (event.target.tagName == "A") {
            this.iab.create(event.target.href, "_system");
            return false;
        }
    };
    // playVideoLocal() {
    //   this.videoPlayer.play('file:///android_asset/www/assets/SampleVideo.mp4').then(() => {
    //     console.log('video completed');
    //   }).catch(err => {
    //     console.log(err);
    //   });
    // }
    ExamNotificationDetailPage.prototype.ionViewDidLoad = function () {
    };
    ExamNotificationDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-exam-notification-detail",template:/*ion-inline-start:"D:\IONIC\app_v1.72\03\src\pages\exam-notification-detail\exam-notification-detail.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>{{notificationData.title}}</ion-title>\n  </ion-navbar>\n</ion-header>\n \n<ion-content padding>\n  <div *ngIf="notificationData.video_full != null">\n    <iframe height="315" [src]="sanitizer.bypassSecurityTrustResourceUrl(notificationData.video_full)" frameborder="0" allowfullscreen="allowfullscreen"></iframe>\n </div>\n<div class="text" (click)="handleClick($event)" [innerHtml] = "notificationData.content"></div>\n</ion-content>\n'/*ion-inline-end:"D:\IONIC\app_v1.72\03\src\pages\exam-notification-detail\exam-notification-detail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DomSanitizer */]])
    ], ExamNotificationDetailPage);
    return ExamNotificationDetailPage;
}());

//# sourceMappingURL=exam-notification-detail.js.map

/***/ }),

/***/ 11:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


/*
  Generated class for the MessagesServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var MessagesServiceProvider = /** @class */ (function () {
    function MessagesServiceProvider(t, loadingController) {
        this.t = t;
        this.loadingController = loadingController;
        this.isLoaderVisible = false;
        this.notifId = 0;
        this.opts = {
            message: "This is a default message.",
            duration: 700,
            position: "top"
        };
        this.loadOpts = {
            content: "Loading...",
            showBackdrop: true
        };
        this.CustomloadOpts = {
            content: "<h2>Updating Question Database.</h2> <Br> Download time will depend on your internet speed. Please Wait...",
            showBackdrop: true
        };
        this.notifId = MessagesServiceProvider_1.notificationId;
        MessagesServiceProvider_1.notificationId++;
    }
    MessagesServiceProvider_1 = MessagesServiceProvider;
    MessagesServiceProvider.prototype.showToast = function (msg, callback, cssClass) {
        this.opts.message = msg;
        if (cssClass) {
            this.opts.cssClass = cssClass;
        }
        this.toast = this.t.create(this.opts);
        this.toast.present();
        if (callback) {
            this.toast.onDidDismiss(callback);
        }
    };
    MessagesServiceProvider.prototype.showLoader = function (msg, callback) {
        if (msg) {
            this.loadOpts.content = msg;
        }
        this.loader = this.loadingController.create(this.loadOpts);
        this.isLoaderVisible = true;
        this.loader.present();
        if (callback) {
            this.loader.onDidDismiss(callback);
        }
    };
    MessagesServiceProvider.prototype.hideLoader = function () {
        if (this.loader) {
            this.isLoaderVisible = false;
            this.loader.dismissAll();
        }
    };
    MessagesServiceProvider.prototype.showLoaderCustom = function (msg, callback) {
        if (msg) {
            this.CustomloadOpts.content = msg;
        }
        this.loader = this.loadingController.create(this.CustomloadOpts);
        this.isLoaderVisible = true;
        this.loader.present();
        if (callback) {
            this.loader.onDidDismiss(callback);
        }
    };
    /**
     * For development. Displays all the messages in web console if ENV is set to dev.
     * @param args - all the arguments that needs to de displayed in web console.
     */
    MessagesServiceProvider.prototype.log = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (MessagesServiceProvider_1.displayLog) {
            for (var i = 0, arg; (arg = args[i]); i++) {
            }
        }
    };
    /**
     * For displaying local notification on receiving notification from server
     * @param data - data that was sent from server to be used for handling the appropriate action
     * @param success - Optional. Success callback if any.
     * @param error - Optional. Error callback if any.
     */
    MessagesServiceProvider.prototype.showNotification = function (data, success, error) {
        data.id = new Date().getTime();
        data.icon = "res://icon";
        data.trigger = { at: new Date(new Date().getTime() + 3600) };
        delete data.eventName;
    };
    /**
     * For handling notification click
     * @param data - data to be used for appropriate action inside application.
     */
    MessagesServiceProvider.prototype.handleNotificationClick = function (data, isPush) {
        if (isPush === void 0) { isPush = false; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.log("notification click data = ", data);
                if (isPush == true && !!data) {
                    this.viewNotificationPage(data);
                }
                return [2 /*return*/];
            });
        });
    };
    MessagesServiceProvider.prototype.viewNotificationPage = function (data) {
        this.log("View button");
    };
    MessagesServiceProvider.displayLog = true;
    MessagesServiceProvider.notificationId = 0;
    MessagesServiceProvider = MessagesServiceProvider_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"]])
    ], MessagesServiceProvider);
    return MessagesServiceProvider;
    var MessagesServiceProvider_1;
}());

//# sourceMappingURL=messages.service.js.map

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_network_service__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_messages_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__category_test_type_category_test_type__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_category_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__bookmark_bookmark__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__history_history__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__test_test__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__leaderboard_leaderboard__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_auth_service__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












// import { AnonymousSubject } from "rxjs/Subject";
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, menuCtrl, platform, events, auth, store, networkService, messages, categoryService) {
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        this.platform = platform;
        this.events = events;
        this.auth = auth;
        this.store = store;
        this.networkService = networkService;
        this.messages = messages;
        this.categoryService = categoryService;
        this.categoryTotalItem = 0;
        this.topicList = [];
        this.topicsavedata = 'topicdata';
        this.isConnected = true;
        this.menuCtrl.enable(true);
        this.menuCtrl.swipeEnable(true);
        this.platform.ready().then(function () {
            events.subscribe("menu:opened", function () { });
            events.subscribe("menu:closed", function () { });
        });
    }
    HomePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.menuCtrl.enable(true);
        this.menuCtrl.swipeEnable(true);
        this.checkNetworkConnection();
        this.getCategoryData();
        this.getActivityData();
        this.store.get("userDetails").then(function (val) {
            if (val != null && val != "") {
                _this.userId = val.id;
            }
        });
    };
    /**
     * GET CATEGORIES
     */
    HomePage.prototype.getCategoryData = function () {
        this.categoryList = [
            {
                id: '1',
                img: 'assets/images/cat/cat-01.png',
                title: 'Judicial Services',
                page: __WEBPACK_IMPORTED_MODULE_5__category_test_type_category_test_type__["a" /* CategoryTestTypePage */]
            },
            {
                id: '2',
                img: 'assets/images/cat/cat-02.png',
                title: 'Tests',
                page: __WEBPACK_IMPORTED_MODULE_9__test_test__["a" /* TestPage */]
            },
        ];
    };
    /**
     * GET ACTIVITY
     */
    HomePage.prototype.getActivityData = function () {
        this.activityList = [
            {
                id: '1',
                img: 'assets/images/cat/history.png',
                title: 'Test History',
                page: __WEBPACK_IMPORTED_MODULE_8__history_history__["a" /* HistoryPage */]
            },
            // {
            //   id:'2',
            //   img:'assets/images/cat/pending.png',
            //   title:'Pending Task',
            //   page:null
            // },
            {
                id: '3',
                img: 'assets/images/cat/bookmark.png',
                title: 'Bookmarks',
                page: __WEBPACK_IMPORTED_MODULE_7__bookmark_bookmark__["a" /* BookmarkPage */]
            }
        ];
        var l = Math.floor(Math.random() * 999999);
        var p = 'guestuser' + l + '@lawtoday.co.in';
        // console.log(p)
    };
    /**
     * CHECK NETWORK CONNECTION
     */
    HomePage.prototype.checkNetworkConnection = function () {
        this.isConnected = this.networkService.isOnline();
    };
    //* This is to kick person on multiple session on home screen * /  
    // getUserData() {
    //
    //  this.auth.getUserDetail().subscribe(
    //    (response: any) => {
    //     
    //    },
    //    err => {
    //      if(err.status == 401){
    //        if (
    //          this.store.remove("userInfo") ||
    //          this.store.remove("name") ||
    //          this.store.remove("email") ||
    //          this.store.remove("role")
    //        ) {
    //          this.store.remove("userInfo");
    //          this.store.remove("name");
    //          this.store.remove("email");
    //          this.store.remove("role");
    //          this.store.remove("isSubscribed");
    //        }
    //        this.messages.showToast("Force Logout due to multiple device login.",undefined, "toast-danger");
    //        this.navCtrl.setRoot(LoginPage);
    //      }
    //      this.messages.hideLoader();
    //    }
    //  );
    // }
    HomePage.prototype.goToPage = function (val) {
        if (val != null) {
            this.navCtrl.push(val);
        }
    };
    HomePage.prototype.goToPageleaderboard = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__leaderboard_leaderboard__["a" /* LeaderboardPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-home",template:/*ion-inline-start:"D:\IONIC\app_v1.72\03\src\pages\home\home.html"*/'<ng-container *ngIf="isConnected">\n\n  <ion-header>\n\n    \n\n    <ion-navbar no-border-bottom>\n\n      <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button> \n\n      <ion-title>Law Today</ion-title>\n\n       <ion-buttons end>\n\n        <button ion-button (click)="goToPageleaderboard()">\n\n          <img class="money-bag" src="assets/images/menu/leader1.png" />\n\n        </button>\n\n      </ion-buttons>\n\n    </ion-navbar>\n\n  </ion-header> \n\n  \n\n  <ion-content class="home">\n\n  \n\n    <ng-container *ngIf="categoryList">\n\n     \n\n      <ion-grid>\n\n        <ion-row margin-top> \n\n          <ion-col col-12>\n\n            <h4 text-center class="uc-title">My Categories</h4>\n\n          </ion-col>\n\n        </ion-row> \n\n      </ion-grid>\n\n    \n\n      <ion-grid margin-bottom class="uc-grid">\n\n        <ion-row>\n\n          <ion-col class="uc-grid__col" col-6 *ngFor="let item of categoryList; let i = index">\n\n            <ion-card class="uc-grid__item" (click)="goToPage(item.page)">\n\n              <div class="width-ratio ratio1-1">\n\n                <img class="uc-grid__image img-center" [src]="item.img" />\n\n              </div>\n\n              <ion-card-content >\n\n                <ion-card-title class="uc-grid__title" text-center text-wrap no-padding>\n\n                  {{item.title}}\n\n                </ion-card-title>\n\n              </ion-card-content>\n\n            </ion-card>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n      \n\n      <ion-grid>\n\n        <ion-row>\n\n          <ion-col col-12>\n\n            <h4 text-center class="uc-title">My Activity</h4>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n\n\n      <ion-grid margin-bottom class="uc-grid">\n\n        <ion-row justify-content-center>\n\n          <ion-col class="uc-grid__col" col-6 *ngFor="let item of activityList; let i = index">\n\n            <ion-card class="uc-grid__item" (click)="goToPage(item.page)">\n\n              <div class="width-ratio ratio1-1">\n\n                <img class="uc-grid__image img-center" [src]="item.img" />\n\n              </div>\n\n              <ion-card-content >\n\n                <ion-card-title class="uc-grid__title" text-center text-wrap no-padding>\n\n                  {{item.title}}\n\n                </ion-card-title>\n\n              </ion-card-content>\n\n            </ion-card>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </ng-container>\n\n\n\n    <ion-list-header class="custom-loader" no-padding text-center *ngIf="!categoryList">\n\n      <img height="35" src="assets/images/ring.svg">\n\n    </ion-list-header>\n\n\n\n    <ion-fab bottom right>\n\n      <a href="https://t.me/judiciarytoday"><button ion-fab >\n\n        <ion-icon name="paper-plane"></ion-icon></button></a>\n\n   \n\n    </ion-fab>\n\n  </ion-content>\n\n</ng-container>\n\n<ng-container *ngIf="!isConnected">\n\n  <ion-content>\n\n    <ion-item class="list-result no-network">\n\n      <button margin-top color="primary" block ion-button type="button" (click)="checkNetworkConnection()">\n\n        Refresh\n\n      </button>\n\n    </ion-item>\n\n  </ion-content>\n\n</ng-container>\n\n'/*ion-inline-end:"D:\IONIC\app_v1.72\03\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["MenuController"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["Platform"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["Events"],
            __WEBPACK_IMPORTED_MODULE_11__services_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3__services_network_service__["a" /* NetworkService */],
            __WEBPACK_IMPORTED_MODULE_4__services_messages_service__["a" /* MessagesServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_6__services_category_service__["a" /* CategoryServiceProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__quiz_quiz__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_category_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_messages_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__flash_card_flash_card__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_alerts_service__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__subscription_subscription__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common_http__ = __webpack_require__(172);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











// import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
var TestPage = /** @class */ (function () {
    function TestPage(navCtrl, 
        //   private sqlite: SQLite,
        http, navParams, storage, alertService, messages, categoryService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.http = http;
        this.navParams = navParams;
        this.storage = storage;
        this.alertService = alertService;
        this.messages = messages;
        this.categoryService = categoryService;
        this.date = Date();
        this.sevendaysUNIX = 604800;
        this.questionsavedata = 'questiondata';
        this.datestored = 'expirationdateUNIX';
        this.selectedTab = 'first';
        this.isActiveCategory = 0;
        this.isActiveCategoryTopic = 0;
        this.isSubscribed = false;
        this.storage.get("isSubscribed").then(function (val) {
            _this.isSubscribed = val == 1 ? true : false;
        });
        this.catData = navParams.get("data") ? navParams.get("data") : "";
        this.loadSlides();
        this.checkExpiration();
        this.downloadquestiondata();
    }
    TestPage.prototype.ionViewDidLoad = function () {
    };
    TestPage.prototype.ionViewWillEnter = function () {
        //  this.sqldb();
        this.secondsToHms(120);
    };
    TestPage.prototype.loadSlides = function () {
        this.slides = [
            {
                id: "first",
                title: "Subject Wise"
            },
            {
                id: "second",
                title: "Previous Year"
            }
        ];
    };
    TestPage.prototype.secondsToHms = function (d) {
        d = Number(d);
        var h = Math.floor(d / 3600);
        var m = Math.floor((d % 3600) / 60);
        var s = Math.floor((d % 3600) % 60);
    };
    //
    // sqldb()
    //{
    // this.sqlite.create({
    //   name: 'data.db',
    //   location: 'default'
    // //  createFromLocation: 1
    // })
    //   .then((db: SQLiteObject) => {
    // 
    // 
    //     db.executeSql('create table danceMoves(name VARCHAR(32))', [])
    //       .then(() => console.log('Executed SQL'))
    //       .catch(e => console.log(e));
    // 
    // 
    //   })
    //   .catch(e => console.log(e));
    // }
    TestPage.prototype.checkExpiration = function () {
        var _this = this;
        //check if past expiration date
        this.currentdateUNIX = Date.parse(this.date) / 1000;
        this.storage.get(this.questionsavedata).then(function (keyvalue) {
            if (keyvalue != null || keyvalue != undefined) {
                _this.storage.get(_this.datestored).then(function (datevalue) {
                    if (datevalue < _this.currentdateUNIX) {
                        _this.storage.remove(_this.questionsavedata);
                        _this.downloadquestiondata();
                    }
                });
            }
        });
    };
    TestPage.prototype.downloadquestiondata = function () {
        var _this = this;
        this.storage.get(this.questionsavedata).then(function (keyvalue) {
            //    if(keyvalue==null || keyvalue==undefined || updaterequired == 1){       make an api to sent the update required value
            if (keyvalue == null || keyvalue == undefined) {
                _this.messages.showLoaderCustom();
                _this.expirationdateUNIX = Date.parse(_this.date) / 1000 + 604800;
                _this.storage.set(_this.datestored, _this.expirationdateUNIX);
                //  console.log(this.expirationdateUNIX)
                //  console.log('Attempting data GET')
                _this.categoryService.getCategories().subscribe(function (response) {
                    // this.http.get('assets/data.json').subscribe
                    // (response => {
                    //     console.log('data recieved, Saving')
                    //     console.log(response)
                    _this.questiondata = response;
                    _this.storage.set(_this.questionsavedata, _this.questiondata)
                        .then(function (data) {
                        //        console.log('Going to load data function after saving')
                        _this.messages.hideLoader();
                        _this.loadData();
                    });
                }, function (err) {
                    if (err.status == 401) {
                        if (_this.storage.remove("userInfo") ||
                            _this.storage.remove("name") ||
                            _this.storage.remove("email") ||
                            _this.storage.remove("role")) {
                            _this.storage.remove("userInfo");
                            _this.storage.remove("name");
                            _this.storage.remove("email");
                            _this.storage.remove("role");
                            _this.storage.remove("isSubscribed");
                        }
                        _this.messages.showToast("Force Logout due to multiple device login.", undefined, "toast-danger");
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__login_login__["a" /* LoginPage */]);
                    }
                    _this.messages.hideLoader();
                });
            }
            else {
                _this.loadData();
            }
        });
    };
    TestPage.prototype.loadData = function () {
        var _this = this;
        this.storage.get(this.questionsavedata).then(function (val) {
            if (val != null && val != undefined) {
                _this.questiondata = val;
                //  console.log('data loaded')
                if (!val.error) {
                    _this.categoryTestData = _this.questiondata.data;
                    _this.practiseTestData = _this.questiondata.previous;
                    _this.catTopicsData = [];
                    if (_this.categoryTestData.length > 0 && _this.categoryTestData[0].topics.length > 0) {
                        _this.categoryTestData[0].topics.forEach(function (element) {
                            _this.catTopicsData.push(element);
                        });
                    }
                    if (_this.categoryTestData.length > 0 && _this.categoryTestData[0].topics.length > 0 && _this.catTopicsData[0].tests.length > 0) {
                        _this.catTopicTestData = _this.catTopicsData[0].tests;
                    }
                    _this.isSelectedPractiseTest = _this.practiseTestData[0];
                    _this.content.resize();
                }
            }
            else {
                //    console.log('data was not present')
            }
        }, function (err) {
            if (err.status == 401) {
                if (_this.storage.remove("userInfo") ||
                    _this.storage.remove("name") ||
                    _this.storage.remove("email") ||
                    _this.storage.remove("role")) {
                    _this.storage.remove("userInfo");
                    _this.storage.remove("name");
                    _this.storage.remove("email");
                    _this.storage.remove("role");
                    _this.storage.remove("isSubscribed");
                }
                _this.messages.showToast("Force Logout due to multiple device login.", undefined, "toast-danger");
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__login_login__["a" /* LoginPage */]);
            }
            _this.messages.hideLoader();
        });
    };
    // getCategoryTestData() {
    //   this.messages.showLoader();
    //   this.categoryService.getCategories().subscribe(
    //     (response: any) => {
    //       console.log(response)
    //       this.messages.hideLoader();
    //       if (!response.error) {
    //         this.categoryTestData = response.data;
    //         this.practiseTestData = response.previous;
    //         this.catTopicsData = [];
    //         if (this.categoryTestData.length > 0 && this.categoryTestData[0].topics.length > 0) {
    //           this.categoryTestData[0].topics.forEach(element => {
    //             this.catTopicsData.push(element)
    //           });
    //         }
    //         if (this.categoryTestData.length > 0 && this.categoryTestData[0].topics.length > 0 && this.catTopicsData[0].tests.length > 0) {
    //           this.catTopicTestData = this.catTopicsData[0].tests;
    //         }
    //
    //         this.isSelectedPractiseTest = this.practiseTestData[0];
    //         this.content.resize();
    //       }
    //     },
    //     err => {
    //       if (err.status == 401) {
    //         if (
    //           this.storage.remove("userInfo") ||
    //           this.storage.remove("name") ||
    //           this.storage.remove("email") ||
    //           this.storage.remove("role")
    //         ) {
    //           this.storage.remove("userInfo");
    //           this.storage.remove("name");
    //           this.storage.remove("email");
    //           this.storage.remove("role");
    //           this.storage.remove("isSubscribed");
    //         }
    //         this.messages.showToast("Force Logout due to multiple device login.", undefined, "toast-danger");
    //         this.navCtrl.setRoot(LoginPage);
    //       }
    //       this.messages.hideLoader();
    //     }
    //   );
    // }
    TestPage.prototype.getSelectedgetTopicTest = function (val) {
        this.isSelectedTopicTest = this.topicTestList.find(function (x) { return x.id == val; });
    };
    /**
     * Get Selected Category Topics and Topic Test
     */
    TestPage.prototype.getSelectedCatTopicTest = function (val) {
        var _this = this;
        this.catTopicsData = [];
        this.isActiveCategory = val;
        this.isActiveCategoryTopic = 0;
        if (this.categoryTestData.length > 0 && this.categoryTestData[val].topics.length > 0) {
            this.categoryTestData[val].topics.forEach(function (element) {
                _this.catTopicsData.push(element);
            });
        }
        if (this.categoryTestData.length > 0 && this.categoryTestData[0].topics.length > 0 && this.catTopicsData[0].tests.length > 0) {
            this.catTopicTestData = this.catTopicsData[0].tests;
        }
    };
    TestPage.prototype.getSelectedCatTopic = function (val) {
        var _this = this;
        this.catTopicTestData = [];
        if (val == 'ALL') {
            this.isActiveCategoryTopic = val;
            if (this.categoryTestData.length > 0 && this.categoryTestData[this.isActiveCategory].topics.length > 0) {
                this.categoryTestData[this.isActiveCategory].topics.forEach(function (element) {
                    if (element.tests.length > 0) {
                        var i;
                        for (i = 0; i < element.tests.length; i++) {
                            //     console.log(i)
                            _this.catTopicTestData.push(element.tests[i]);
                        }
                    }
                });
            }
        }
        else {
            this.isActiveCategoryTopic = val;
            this.catTopicTestData = this.catTopicsData[val].tests;
        }
    };
    TestPage.prototype.goToStartFreeTest = function (data) {
        if (data.questions.length > 0) {
            if (this.catData.title == 'Flash card') {
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__flash_card_flash_card__["a" /* FlashCardPage */], { test: data });
            }
            else {
                //  console.log({test: data})
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__quiz_quiz__["a" /* QuizPage */], { test: data });
            }
        }
        else {
            this.messages.showToast("No question yet.", undefined, "toast-danger");
        }
    };
    TestPage.prototype.goUnlockTest = function () {
        var _this = this;
        this.alertService
            .showConfirmAlert('', 'You need to subscribe to play all tests. <br><br>', false, 'Subscribe', 'Close')
            .then(function (res) {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__subscription_subscription__["a" /* SubscriptionPage */]);
        }, function (err) {
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["Content"]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["Content"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["Content"]) === "function" && _a || Object)
    ], TestPage.prototype, "content", void 0);
    TestPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-test",template:/*ion-inline-start:"D:\IONIC\app_v1.72\03\src\pages\test\test.html"*/'<ion-header>\n\n  \n\n  <ion-navbar>\n\n    <ion-title>Law Today\n\n     \n\n   <!-- <button end ion-button color="success" (click)="getCategoryTestDataSave(1)">Update Data</button>\n\n -->\n\n  </ion-title>\n\n  </ion-navbar>\n\n  <ion-toolbar no-border-top class="header-tab">\n\n    <ion-segment [(ngModel)]="selectedTab">\n\n      <ion-segment-button [value]="slide.id" *ngFor="let slide of slides">\n\n        {{slide.title}}\n\n      </ion-segment-button>\n\n    </ion-segment>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content #content>\n\n \n\n  <div [ngSwitch]="selectedTab">\n\n    <ng-container *ngSwitchCase="\'first\'">\n\n      <ng-container *ngIf="categoryTestData">\n\n        <ion-grid>\n\n          <ion-row>\n\n            <ion-col col-12>\n\n              <h4 text-center class="uc-title">Test Category</h4>\n\n            </ion-col>\n\n          </ion-row>\n\n        </ion-grid>\n\n        <ion-grid class="bg-grey">\n\n          <ion-row>\n\n            <ion-col col-12>\n\n              <ion-scroll class="feature-test-scroll" scrollX="true">\n\n                <div class="feature-tab" *ngFor="let cat of categoryTestData; let catIndex =index" [class.active]="catIndex == isActiveCategory" (click)="getSelectedCatTopicTest(catIndex)">\n\n                  {{cat.name}}\n\n                </div>\n\n              </ion-scroll>\n\n            </ion-col>\n\n          </ion-row>\n\n        </ion-grid>\n\n      </ng-container>\n\n      <div class="custom-loader" no-padding text-center *ngIf="!categoryTestData">\n\n        <img height="55" src="assets/images/ring.svg">\n\n      </div>\n\n      <ng-container *ngIf="catTopicsData">\n\n        <ion-grid>\n\n          <ion-row>\n\n            <ion-col col-12>\n\n              <h4 text-center class="uc-title">Topic</h4>\n\n            </ion-col>\n\n          </ion-row>\n\n        </ion-grid>\n\n        <ion-grid class="bg-grey">\n\n          <ion-row>\n\n            <ion-col col-12>\n\n              <ion-scroll class="feature-test-scroll" scrollX="true">\n\n            \n\n            <!--   <div class="feature-tab" [class.active]="isActiveCategoryTopic == \'ALL\'"\n\n                 (click)="getSelectedCatTopic(\'ALL\')">All</div>\n\n             --> \n\n             \n\n                <div class="feature-tab" *ngFor="let topic of catTopicsData; let topicIndex =index" [class.active]="topicIndex == isActiveCategoryTopic" (click)="getSelectedCatTopic(topicIndex)">\n\n                  {{topic.name}}\n\n                </div>\n\n              </ion-scroll>\n\n            </ion-col>\n\n          </ion-row>\n\n        </ion-grid>\n\n        <ion-grid margin-bottom *ngIf="catTopicTestData">\n\n          <ion-row>\n\n            <ion-col col-12>\n\n              <ion-list no-lines no-margin text-wrap>\n\n                <ion-item class="feature-test__item" *ngFor="let test of catTopicTestData; let i = index">\n\n                  <h2 class="text-primary">{{test.name}}</h2>\n\n                  <p>{{test.questions.length}} Ques | {{test.duration}} Mins</p>\n\n                  <button ion-button item-end color="gray" *ngIf="i !=0 && !isSubscribed && test.questions.length" (click)="goUnlockTest()">\n\n                    <ion-icon margin-right ios="ios-lock" md="ios-lock"></ion-icon>\n\n                    Unlock\n\n                  </button>\n\n                  <button ion-button item-end color="primary" *ngIf="i !=0 && isSubscribed && test.questions.length" (click)="goToStartFreeTest(test)">\n\n                    Start \n\n                  </button>\n\n                  <button ion-button item-end color="primary" *ngIf="i == 0 && test.questions.length > 0" (click)="goToStartFreeTest(test)">\n\n                    Start\n\n                  </button>\n\n                </ion-item>\n\n              </ion-list>\n\n            </ion-col>\n\n          </ion-row>\n\n        </ion-grid>\n\n      </ng-container>\n\n    </ng-container>\n\n\n\n\n\n\n\n    <ng-container *ngSwitchCase="\'second\'">\n\n      <ion-grid>\n\n        <ion-row>\n\n          <ion-col col-12>\n\n            <h4 text-center class="uc-title">Previous Year Papers</h4>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n      <ion-grid margin-bottom>\n\n        <ion-row>\n\n          <ion-col col-12>\n\n            <ion-list no-lines no-margin text-wrap>\n\n              <ion-item class="feature-test__item" *ngFor="let item of practiseTestData; let i=index">\n\n                <h2 class="text-primary">{{item.name}}</h2>\n\n                <p>{{item.questions.length}} Ques</p>\n\n                <button ion-button item-end color="gray" *ngIf="i !=0 && !isSubscribed && item.questions.length" (click)="goUnlockTest()">\n\n                  <ion-icon margin-right ios="ios-lock" md="ios-lock"></ion-icon>\n\n                  Unlock\n\n                </button>\n\n                <button ion-button item-end color="primary" *ngIf="i !=0 && isSubscribed && item.questions.length" (click)="goToStartFreeTest(item)">\n\n                  Start \n\n                </button>\n\n                <button ion-button item-end color="primary" *ngIf="i == 0 && item.questions.length > 0" (click)="goToStartFreeTest(item)">\n\n                  Start\n\n                </button>\n\n              </ion-item>\n\n            </ion-list>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </ng-container>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\IONIC\app_v1.72\03\src\pages\test\test.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavController"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["a" /* HttpClient */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavParams"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavParams"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_8__services_alerts_service__["a" /* AlertServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__services_alerts_service__["a" /* AlertServiceProvider */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_5__services_messages_service__["a" /* MessagesServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_messages_service__["a" /* MessagesServiceProvider */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_4__services_category_service__["a" /* CategoryServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_category_service__["a" /* CategoryServiceProvider */]) === "function" && _h || Object])
    ], TestPage);
    return TestPage;
    var _a, _b, _c, _d, _e, _f, _g, _h;
}());

//# sourceMappingURL=test.js.map

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GenerateQuizPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_alerts_service__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_bookmark_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_messages_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__reportmodal_reportmodal__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__showcorrectmodal_showcorrectmodal__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__question_attempted_question_attempted__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_category_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__generate_review_test_generate_review_test__ = __webpack_require__(391);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { visitValue } from "@angular/compiler/src/util";


// import { ReviewTestPage } from "../review-test/review-test";





var GenerateQuizPage = /** @class */ (function () {
    function GenerateQuizPage(navCtrl, alertService, bookmarkService, messages, categoryService, ref, formBuilder, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.alertService = alertService;
        this.bookmarkService = bookmarkService;
        this.messages = messages;
        this.categoryService = categoryService;
        this.ref = ref;
        this.formBuilder = formBuilder;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.questionData = [];
        this.test = {};
        this.questionsData = [];
        this.selectMultipleAnswer = [];
        this.questionItems = {};
        this.index = 0;
        this.requestArray = [];
        this.requestAssessment = {
            result: "",
            data: []
        };
        this.result = [];
        this.bookmarkData = [];
        this.quizStart = false;
        /**
         * Clear Form Array Data
         */
        this.clearFormArray = function (formArray) {
            while (formArray.length !== 0) {
                formArray.removeAt(0);
            }
        };
        this.test = navParams.get("test") ? navParams.get("test") : "";
        this.questionData = JSON.parse(this.test.questions);
        this.questionForm = this.formBuilder.group({
            option: formBuilder.array([]),
            answer_text: [""]
        });
        this.getAssessmentData();
        this.quizStart = true;
    }
    GenerateQuizPage.prototype.ngOnInit = function () {
    };
    GenerateQuizPage.prototype.ionViewDidLoad = function () {
    };
    /**
     * Get Assessment Data
     * @param id
     */
    GenerateQuizPage.prototype.getAssessmentData = function () {
        this.loadQuestion(0);
    };
    GenerateQuizPage.prototype.getBookmarkData = function () {
        var _this = this;
        this.messages.showLoader();
        this.bookmarkService.getBookmarks().subscribe(function (response) {
            _this.messages.hideLoader();
            if (!response.error) {
                _this.bookmarkData = response;
            }
        }, function (err) {
            _this.messages.hideLoader();
        });
    };
    GenerateQuizPage.prototype.addBookmark = function () {
        var _this = this;
        if (this.questionItems) {
            var data = {
                question_id: this.questionItems.id
            };
            this.selectedBookmark = this.questionItems.id;
            this.bookmarkService.AddBookmark(data).subscribe(function (data) {
                _this.getBookmarkData();
                _this.getSelectedBookmark(_this.questionItems);
            }, function (err) {
            });
        }
    };
    GenerateQuizPage.prototype.getSelectedBookmark = function (val) {
        if (this.bookmarkData.length > 0 && val) {
            var selectedRes = this.bookmarkData.find(function (x) { return x.question_id == val.id; });
            if (selectedRes && selectedRes != -1) {
                this.selectedBookmark = selectedRes.id;
            }
        }
    };
    /**
     * Load Question by Index
     * @param i
     */
    GenerateQuizPage.prototype.loadQuestion = function (i) {
        if (i < this.questionData.length) {
            this.questionItems = this.questionData[i];
            var option = this.questionForm.controls.option;
            this.getSelectedAnswer(this.questionItems);
            this.clearFormArray(option);
        }
        else {
            this.onSaveCompleteTest(this.test.id, this.result, this.questionData.length, this.result.length, this.getTotalCorrect(this.result), this.getTotalInCorrect(this.result));
        }
    };
    GenerateQuizPage.prototype.remove_linebreaks = function (str) {
        return str.replace(/\\r\\n/g, "");
    };
    /**
     * Submit Answer
     */
    GenerateQuizPage.prototype.onAnswer = function () {
        if (this.index < this.questionData.length) {
            var res = this.getResult(this.questionForm.value.option);
            this.processResult(res);
        }
    };
    GenerateQuizPage.prototype.presentReportModal = function () {
        var _this = this;
        if (this.questionItems) {
            var modalOptions = {
                cssClass: "uc-report-modal",
                enableBackdropDismiss: false
            };
            var reportModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__reportmodal_reportmodal__["a" /* ReportmodalPage */], { question: this.questionItems }, modalOptions);
            reportModal.onDidDismiss(function (data) {
                if (data) {
                    _this.messages.showToast("Successfull reported", undefined, "toast-success");
                }
            });
            reportModal.present();
        }
    };
    GenerateQuizPage.prototype.presentCorrectansModal = function () {
        if (this.questionItems) {
            var modalOptions = {
                cssClass: "uc-report-modal",
                enableBackdropDismiss: false
            };
            var reportModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_7__showcorrectmodal_showcorrectmodal__["a" /* ShowcorrectmodalPage */], { question: this.questionItems }, modalOptions);
            reportModal.present();
        }
    };
    GenerateQuizPage.prototype.onSaveCompleteTest = function (testval, responseval, totalval, attemtedval, correctval, incorrectval) {
        var _this = this;
        var testId = '/' + testval;
        var data = {
            response: JSON.stringify(responseval),
            attemted: attemtedval,
            total: totalval,
            correct: correctval,
            incorrect: incorrectval
        };
        this.messages.showLoader();
        this.categoryService.saveGenerateTestResult(data, testId).subscribe(function (response) {
            _this.messages.hideLoader();
        }, function (err) {
            _this.messages.hideLoader();
        });
    };
    GenerateQuizPage.prototype.onCompleted = function () {
        this.navCtrl.pop();
    };
    GenerateQuizPage.prototype.onReviewTest = function () {
        var rs = {
            questions: this.questionData,
            answers: this.result
        };
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__generate_review_test_generate_review_test__["a" /* GenerateReviewTestPage */], { data: rs });
    };
    GenerateQuizPage.prototype.getSelectedAnswer = function (val) {
        if (this.result.length > 0 && val) {
            var selectedRes = this.result.find(function (x) { return x.question_id == val.id; });
            if (selectedRes && selectedRes != -1) {
                this.selectedChecked = selectedRes.id;
            }
        }
    };
    GenerateQuizPage.prototype.onQuestionAttempted = function () {
        var _this = this;
        var modalOptions = {
            cssClass: "uc-report-modal",
            enableBackdropDismiss: false
        };
        var rs = {
            questions: this.questionData,
            answers: this.result
        };
        var attemptmodal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_8__question_attempted_question_attempted__["a" /* QuestionAttemptedModalPage */], { data: rs }, modalOptions);
        attemptmodal.onDidDismiss(function (data) {
            if (data) {
                //   console.log (data);
                _this.index = data - 2;
                var res = _this.getResult(_this.questionForm.value.option);
                _this.processResult(res);
            }
        });
        attemptmodal.present();
    };
    GenerateQuizPage.prototype.loadPreviousQuestion = function () {
        if (this.index > 0) {
            this.index = this.index - 1;
            this.loadQuestion(this.index);
        }
    };
    GenerateQuizPage.prototype.functiontofindIndexByKeyValue = function (arraytosearch, key, valuetosearch) {
        for (var i = 0; i < arraytosearch.length; i++) {
            if (arraytosearch[i][key] == valuetosearch) {
                return i;
            }
        }
        return -1;
    };
    GenerateQuizPage.prototype.processResult = function (res) {
        if (this.index < this.questionData.length) {
            if (this.result.length > 0 && res) {
                var resultIndex = this.functiontofindIndexByKeyValue(this.result, 'question_id', res.question_id);
                if (resultIndex != -1) {
                    this.result[resultIndex] = res;
                }
                else {
                    this.result.push(res);
                }
            }
            else {
                if (res) {
                    this.result.push(res);
                }
            }
            this.questionForm.value.question_id = this.questionItems.id;
            this.requestArray.push(this.questionForm.value);
            this.index = this.index + 1;
            this.index = this.index > this.questionData.length ? this.questionData.length : this.index;
            this.loadQuestion(this.index);
        }
    };
    GenerateQuizPage.prototype.getTotalCorrect = function (val) {
        var correct = val.filter(function (i) { return i.is_correct == 1; }).length;
        return correct;
    };
    GenerateQuizPage.prototype.getTotalInCorrect = function (val) {
        var incorrect = val.filter(function (i) { return i.is_correct != 1; }).length;
        return incorrect;
    };
    /**
     * Single Select Option
     * @param event
     */
    GenerateQuizPage.prototype.onSelect = function (event) {
        var option = this.questionForm.controls.option;
        this.clearFormArray(option);
        option.push(new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */](parseInt(event)));
        this.selectedQuestionVal = event;
    };
    /**
     * Get Final Result
     * @param answers
     */
    GenerateQuizPage.prototype.getResult = function (answers) {
        var _this = this;
        this.questionItems.answers.forEach(function (option) {
            if (answers.indexOf(option.id) >= 0) {
                _this.selectedAnswer = option;
            }
        });
        return this.selectedAnswer;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Content"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Content"])
    ], GenerateQuizPage.prototype, "content", void 0);
    GenerateQuizPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-generate-quiz",template:/*ion-inline-start:"D:\IONIC\app_v1.72\03\src\pages\generate-quiz\generate-quiz.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Law Today Test</ion-title>\n\n   <ion-buttons end *ngIf="index + 1 <= questionData.length">\n\n     \n\n      <button *ngIf="questionItems.id != selectedBookmark" ion-button (click)="addBookmark()">\n\n        <img class="bookmark" src="assets/images/cat/bookmark.png" />\n\n      </button>\n\n      <button ion-button *ngIf="selectedBookmark && questionItems.id == selectedBookmark" (click)="addBookmark()">\n\n        <img class="bookmark" src="assets/images/cat/bookmarked.png" />\n\n      </button> \n\n    </ion-buttons> \n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content #content padding>\n\n  <ng-container *ngIf="index + 1 <= questionData.length && quizStart == true">\n\n    \n\n      <div class="question-content">\n\n        <form [formGroup]="questionForm" (ngSubmit)="onAnswer()">\n\n        <div class="question-name"><div\n\n            [innerHtml]="remove_linebreaks(questionItems.name)"></div>\n\n        </div>\n\n        <div style="display: flex; justify-content: flex-end" [innerHtml]="remove_linebreaks(questionItems.exam)"></div>\n\n        <ion-list margin-vertical class="list-radio" radio-group (ionChange)="onSelect($event)">\n\n          <ion-item text-wrap class="list-option" *ngFor="let option of questionItems.answers">\n\n            <ion-label>{{option.answer}}</ion-label>\n\n            <ion-radio value="{{option.id}}" item-start [checked]="selectedChecked && option.id == selectedChecked">\n\n            </ion-radio>\n\n          </ion-item>\n\n        </ion-list>\n\n      </form>\n\n      <button ion-button color="success" (click)="presentCorrectansModal()">Show Answer</button>\n\n      <button ion-button color="danger" (click)="presentReportModal()">\n\n       Report Question\n\n      </button>\n\n      </div>\n\n   \n\n   \n\n  </ng-container>\n\n  <ng-container *ngIf="index + 1 > questionData.length">\n\n    <ion-item class="list-result show-result">\n\n      <ion-grid class="result-info">\n\n        <ion-row>\n\n          <ion-col col-6 class="result-info__col">\n\n            <div class="badge badge-primary">\n\n              <strong>{{questionData.length}}</strong>\n\n              <p>Total Questions</p>\n\n            </div>\n\n          </ion-col>\n\n          <ion-col col-6 class="result-info__col">\n\n            <div class="badge badge-warning">\n\n              <strong>{{result.length}}</strong>\n\n              <p>Total Attempted</p>\n\n            </div>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col col-6 class="result-info__col">\n\n            <div class="badge badge-success">\n\n              <strong>{{getTotalCorrect(result)}}</strong>\n\n              <p>Total Correct</p>\n\n            </div>\n\n          </ion-col>\n\n          <ion-col col-6 class="result-info__col">\n\n            <div class="badge badge-danger">\n\n              <strong>{{getTotalInCorrect(result)}}</strong>\n\n              <p>Total Incorrect</p>\n\n            </div>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n      <div class="result-msg">\n\n        <ion-icon color="success" ios="ios-checkmark-circle-outline" md="ios-checkmark-circle-outline"></ion-icon>\n\n        <h4 class="list-result-title ">\n\n          Congratulations! You have complete test successfully.\n\n        </h4>\n\n      </div>\n\n    </ion-item>\n\n  </ng-container>\n\n</ion-content>\n\n<ion-footer>\n\n  <ion-grid>\n\n    <ion-row *ngIf="index + 1 <= questionData.length">\n\n      <ion-col col-5>\n\n        <button type="button" class="square" no-margin ion-button block color="primary"\n\n          (click)="loadPreviousQuestion()">Prev</button>\n\n      </ion-col>\n\n      <ion-col col-2>\n\n        <button type="button" class="square" no-margin ion-button block color="gray"\n\n          (click)="onQuestionAttempted()">\n\n          {{index + 1}}/{{questionData.length}} \n\n        </button>\n\n      </ion-col>\n\n      <ion-col col-5>\n\n        <button class="square" no-margin ion-button block color="primary" (click)="onAnswer()">Next</button>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row *ngIf="index + 1 > questionData.length">\n\n      <ion-col col-6>\n\n        <button class="square" no-margin ion-button block color="primary" (click)="onReviewTest()">Review\n\n          Answers</button>\n\n      </ion-col>\n\n      <ion-col col-6>\n\n        <button class="square" no-margin ion-button block color="success" (click)="onCompleted()">Completed</button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-footer>\n\n'/*ion-inline-end:"D:\IONIC\app_v1.72\03\src\pages\generate-quiz\generate-quiz.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_2__services_alerts_service__["a" /* AlertServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_4__services_bookmark_service__["a" /* BookmarkServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_5__services_messages_service__["a" /* MessagesServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_9__services_category_service__["a" /* CategoryServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"]])
    ], GenerateQuizPage);
    return GenerateQuizPage;
}());

//# sourceMappingURL=generate-quiz.js.map

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeaderboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_category_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_messages_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LeaderboardPage = /** @class */ (function () {
    function LeaderboardPage(navCtrl, iab, storage, categoryService, messages) {
        this.navCtrl = navCtrl;
        this.iab = iab;
        this.storage = storage;
        this.categoryService = categoryService;
        this.messages = messages;
        this.misc = "leaderboard";
        this.scores = [];
        this.displayboard();
    }
    LeaderboardPage.prototype.displayboard = function () {
        var _this = this;
        this.messages.showLoader();
        this.categoryService.getscore().subscribe(function (response) {
            _this.messages.hideLoader();
            _this.scores = response;
            //  console.log(response)
        }, function (err) {
            if (err.status == 401) {
                if (_this.storage.remove("userInfo") ||
                    _this.storage.remove("name") ||
                    _this.storage.remove("email") ||
                    _this.storage.remove("role")) {
                    _this.storage.remove("userInfo");
                    _this.storage.remove("name");
                    _this.storage.remove("email");
                    _this.storage.remove("role");
                    _this.storage.remove("isSubscribed");
                }
                _this.messages.showToast("Force Logout due to multiple device login.", undefined, "toast-danger");
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
            }
            _this.messages.hideLoader();
            //   console.log(err)
        });
    };
    LeaderboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-leaderboard',template:/*ion-inline-start:"D:\IONIC\app_v1.72\03\src\pages\leaderboard\leaderboard.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Law Today-Leaderboard</ion-title>   \n  </ion-navbar>\n</ion-header>\n \n<ion-content class="bg-style"> \n <!--\n	  <div class="leaderboard">\n      <h1>\n        <svg class="ico-cup"> \n          <use xlink:href="#cup"></use>\n        </svg>\n        Most active Players\n      </h1>\n    <ion-list *ngFor="let item of scores; let i= index">\n      <ion-item > \n       \n        <mark>{{ item.username }}</mark>\n        <small>{{ item.score }}</small>\n      \n        </ion-item>\n      </ion-list> -->\n      <div class="center" >\n\n\n        <div class="top3" *ngFor="let item of scores; let i= index">\n        <!--   <div class="two item">\n             <div class="pos">\n              2\n            </div>\n            <div class="pic" style="background-image: url(&#39;https://randomuser.me/api/portraits/men/44.jpg&#39;)"></div>\n            <div class="name" >\n             {{item.username}}\n            </div>\n            <div class="score">\n              {{item.score}}\n            </div>\n          </div>  -->   \n          <div class="one item" *ngIf="i==0">\n            <div class="pos">\n              {{i+1}}\n            </div>\n            <div class="pic" style="background-image: url(assets/images/logo1.png)"></div>\n            <div class="name">\n              {{item.username}}\n            </div>\n            <div class="score">\n              {{item.score}}\n            </div>\n          </div>\n     <!--  <div class="three item">\n            <div class="pos">\n              3\n            </div>\n            <div class="pic" style="background-image: url(&#39;https://randomuser.me/api/portraits/women/91.jpg&#39;)"></div>\n            <div class="name">\n              Nevaeh Silva\n            </div>\n            <div class="score">\n              6034\n            </div>\n          </div> -->\n        </div>\n       \n        <ion-list *ngFor="let item of scores; let i= index">\n            <div *ngIf="i>0" class="item" >\n              <div class="pos">\n               {{i+1}}.\n              </div>\n              <div *ngIf="item.profile_pic==null || item.profile_pic==\'image\'" class="pic"><img src="assets/images/logo1.png"></div>\n              \n              <div *ngIf="item.profile_pic!=null && item.profile_pic!=\'image\'" class="pic"><img src="{{item.profile_pic}}"></div>\n              <div class="name"> \n                {{item.username}}\n              </div>\n              <div class="score"> \n                {{item.score}}\n              </div>\n            </div>\n           </ion-list>\n</div>\n</ion-content>\n<footer>\n  \n</footer>\n'/*ion-inline-end:"D:\IONIC\app_v1.72\03\src\pages\leaderboard\leaderboard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3__services_category_service__["a" /* CategoryServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_4__services_messages_service__["a" /* MessagesServiceProvider */]])
    ], LeaderboardPage);
    return LeaderboardPage;
}());

//# sourceMappingURL=leaderboard.js.map

/***/ }),

/***/ 187:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 187;

/***/ }),

/***/ 21:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_messages_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants_regex__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__signup_signup__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__forgot_password_forgot_password__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_auth_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_ad_service__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_privacy_privacy__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_terms_terms__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, plt, formBuilder, auth, ad, menuCtrl, messages) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.plt = plt;
        this.formBuilder = formBuilder;
        this.auth = auth;
        this.ad = ad;
        this.menuCtrl = menuCtrl;
        this.messages = messages;
        this.forgotPassword = __WEBPACK_IMPORTED_MODULE_7__forgot_password_forgot_password__["a" /* ForgotPasswordPage */];
        this.homePage = __WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */];
        this.signupPage = __WEBPACK_IMPORTED_MODULE_6__signup_signup__["a" /* SignupPage */];
        this.passwordType = "password";
        this.passwordIcon = "eye-off";
        this.isFormSubmitted = false;
        this.auth_type = "";
        this.loginData = {};
        this.deviceToken = "";
        this.deviceName = "";
        this.loginForm = this.formBuilder.group({
            email: [
                "",
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_4__constants_regex__["a" /* Regex */].Email),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].maxLength(100)
                ])
            ],
            password: [
                "",
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].minLength(6),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].maxLength(20)
                ])
            ]
        });
    }
    /**
     * Check Platform Type
     */
    LoginPage.prototype.isPlatformType = function () {
        if (this.plt.is("android")) {
            this.isPlatformValue = 1;
        }
        else if (this.plt.is("ios")) {
            this.isPlatformValue = 2;
        }
        else {
            this.isPlatformValue = 0;
        }
    };
    LoginPage.prototype.ionViewWillEnter = function () {
        this.menuCtrl.enable(false);
        this.menuCtrl.swipeEnable(false);
        this.ad.loadrewarded();
    };
    LoginPage.prototype.ionViewDidLoad = function () {
        this.isFormSubmitted = false;
        this.loginForm
            .get("email")
            .setValidators(__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].compose([
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required,
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_4__constants_regex__["a" /* Regex */].Email),
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].maxLength(100)
        ]));
        this.loginForm
            .get("password")
            .setValidators(__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].compose([
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required,
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].minLength(6),
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].maxLength(20)
        ]));
    };
    /**
     * Hide Show Password
     */
    LoginPage.prototype.hideShowPassword = function () {
        this.passwordType = this.passwordType === "text" ? "password" : "text";
        this.passwordIcon = this.passwordIcon === "eye-off" ? "eye" : "eye-off";
    };
    /**
     * Login
     */
    LoginPage.prototype.onLogin = function () {
        var _this = this;
        this.isFormSubmitted = true;
        if (this.loginForm.valid) {
            this.messages.showLoader();
            // console.log('Form:', this.loginForm.value)
            // console.log('Formvalue:', this.loginForm.value)
            this.auth.login(this.loginForm.value).subscribe(function (data) {
                //     console.log(data)
                _this.messages.hideLoader();
                if (!data.error) {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
                    _this.messages.showToast("Welcome! Login Successfull", undefined, "toast-success");
                }
                else {
                    _this.messages.showToast("Invalid email address or password.", undefined, "toast-danger");
                }
            }, function (err) {
                //    console.log(err)
                _this.messages.hideLoader();
                _this.messages.showToast(err.error.errors[Object.keys(err.error.errors)[0]].join(', '), undefined, "toast-danger");
            });
        }
    };
    LoginPage.prototype.goToPrivacy = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__pages_privacy_privacy__["a" /* PrivacyPage */]);
    };
    LoginPage.prototype.goToTos = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__pages_terms_terms__["a" /* TermsPage */]);
    };
    LoginPage.prototype.isFieldValid = function (fieldValue) {
        if (fieldValue) {
            return true;
        }
        return false;
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-login",template:/*ion-inline-start:"D:\IONIC\app_v1.72\03\src\pages\login\login.html"*/'<ion-content class="login-section-bg">\n\n\n\n  <div class="section login-section">\n\n    <ion-row margin-vertical>\n\n      <ion-col text-center>\n\n        <img class="logo" src="assets/images/logo.png" alt="logo">\n\n      </ion-col>\n\n    </ion-row>\n\n    <form [formGroup]="loginForm" (ngSubmit)="onLogin()">\n\n      <ion-row margin-top>\n\n        <ion-col class="form-float-field">\n\n          <ion-item>\n\n            <ion-label floating>Email Address</ion-label>\n\n            <ion-input disabled=false  [class.error-box]="false" formControlName="email" name="email" type="email" required>\n\n            </ion-input>\n\n          </ion-item>\n\n          <span class="error-msg"\n\n            [hidden]="!(loginForm.controls[\'email\'].errors?.required && (loginForm.controls[\'email\'].dirty || isFormSubmitted) &&  isFieldValid(\'email\'))">\n\n            Email address is required\n\n          </span>\n\n          <span class="error-msg"\n\n            [hidden]="!(loginForm.controls.email.hasError(\'maxlength\') && (loginForm.controls[\'email\'].dirty || isFormSubmitted) && !loginForm.controls[\'email\'].errors?.required && !loginForm.controls.email.hasError(\'pattern\'))">\n\n            Email address maximum length is 100!\n\n          </span>\n\n          <span class="error-msg"\n\n            [hidden]="!(loginForm.controls.email.hasError(\'pattern\') && (loginForm.controls[\'email\'].dirty || isFormSubmitted) && !loginForm.controls[\'email\'].errors?.required)">\n\n            Please enter valid email address.\n\n          </span>\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n      <ion-row>\n\n        <ion-col class="form-float-field">\n\n          <ion-item>\n\n            <ion-label floating>Password</ion-label>\n\n            <ion-input  disabled=false formControlName="password" [class.error-box]="false" name="password" [type]="passwordType"\n\n              required></ion-input>\n\n            <ion-icon item-end [name]="passwordIcon" class="passwordIcon text-white" (click)=\'hideShowPassword()\'></ion-icon>\n\n          </ion-item>\n\n          <span class="error-msg"\n\n            [hidden]="!(loginForm.controls[\'password\'].errors?.required && (loginForm.controls[\'password\'].dirty || isFormSubmitted)  &&  isFieldValid(\'password\'))">\n\n            Password is required\n\n          </span>\n\n          <span class="error-msg"\n\n            [hidden]="!(loginForm.controls.password.hasError(\'minlength\') && (loginForm.controls[\'password\'].dirty || isFormSubmitted) && !loginForm.controls[\'password\'].errors?.required)">\n\n            Password minimum length is 6!\n\n          </span>\n\n          <span class="error-msg"\n\n            [hidden]="!(loginForm.controls.password.hasError(\'maxlength\') && (loginForm.controls[\'password\'].dirty || isFormSubmitted) && !loginForm.controls[\'password\'].errors?.required)">\n\n            Password maximum length is 20!\n\n          </span>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n          <ion-col col-12 text-center>\n\n            <ion-label class="btn-link btn-forgot" no-margin [navPush]="forgotPassword">\n\n              Forgot Password ?\n\n            </ion-label>\n\n          </ion-col>\n\n        </ion-row>\n\n      <ion-row margin-top align-items-center>\n\n        <ion-col col-12 text-left>\n\n          <button block ion-button color="primary" type="submit">Login</button>\n\n        </ion-col>\n\n      </ion-row>\n\n    </form>\n\n    <ion-row>\n\n        <ion-col col-12 text-center>\n\n          <ion-label class="btn-link btn-signup" no-margin [navPush]="signupPage">\n\n            <span class="text-white">Don\'t have an account? </span><strong>Sign up</strong>\n\n          </ion-label>\n\n        </ion-col>\n\n      </ion-row>\n\n    <ion-row>\n\n       <ion-col col-12 text-center>\n\n         <ion-label class="btn-link btn-signup" no-margin>\n\n                 <span color ="primary" (click)="goToPrivacy()">Privacy Policy</span>\n\n           <p>  <span color ="primary" (click)="goToTos()">Terms of Service</span></p>\n\n             </ion-label>\n\n       </ion-col>\n\n     </ion-row>   \n\n  </div> \n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\IONIC\app_v1.72\03\src\pages\login\login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_8__services_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_9__services_ad_service__["a" /* AdServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["MenuController"],
            __WEBPACK_IMPORTED_MODULE_3__services_messages_service__["a" /* MessagesServiceProvider */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 231:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 231;

/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__web_service__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__constants_config__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__auth_service__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CategoryServiceProvider = /** @class */ (function () {
    function CategoryServiceProvider(webservice, store, authServiceProvide) {
        this.webservice = webservice;
        this.store = store;
        this.authServiceProvide = authServiceProvide;
    }
    CategoryServiceProvider.prototype.getCategories = function (params) {
        var _this = this;
        if (params === void 0) { params = ''; }
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
            _this.store.get("userInfo").then(function (val) {
                if (val) {
                    __WEBPACK_IMPORTED_MODULE_4__web_service__["a" /* WebServiceProvider */].headers['Authorization'] = 'Bearer ' + val.token;
                    _this.webservice.callAPI(__WEBPACK_IMPORTED_MODULE_5__constants_config__["b" /* CONFIG */].API_GET_CATEGORIES_URL, {}, params)
                        .subscribe(function (res) {
                        observer.next(res);
                        observer.complete();
                    }, function (err) {
                        observer.error(err);
                        //         console.log(err)
                        observer.complete();
                    });
                }
            });
        });
    };
    CategoryServiceProvider.prototype.getTopics = function (params) {
        var _this = this;
        if (params === void 0) { params = ''; }
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
            _this.store.get("userInfo").then(function (val) {
                if (val) {
                    __WEBPACK_IMPORTED_MODULE_4__web_service__["a" /* WebServiceProvider */].headers['Authorization'] = 'Bearer ' + val.token;
                    _this.webservice.callAPI(__WEBPACK_IMPORTED_MODULE_5__constants_config__["b" /* CONFIG */].API_GET_TOPICS_URL, {}, params)
                        .subscribe(function (res) {
                        observer.next(res);
                        observer.complete();
                    }, function (err) {
                        observer.error(err);
                        observer.complete();
                    });
                }
            });
        });
    };
    CategoryServiceProvider.prototype.generateTest = function (data, params) {
        var _this = this;
        if (params === void 0) { params = ''; }
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
            _this.store.get("userInfo").then(function (val) {
                if (val) {
                    __WEBPACK_IMPORTED_MODULE_4__web_service__["a" /* WebServiceProvider */].headers['Authorization'] = 'Bearer ' + val.token;
                    _this.webservice.callAPI(__WEBPACK_IMPORTED_MODULE_5__constants_config__["b" /* CONFIG */].API_GENERATE_TEST_URL, data, params)
                        .subscribe(function (res) {
                        observer.next(res);
                        observer.complete();
                    }, function (err) {
                        observer.error(err);
                        observer.complete();
                    });
                }
            });
        });
    };
    CategoryServiceProvider.prototype.saveResult = function (data, params) {
        var _this = this;
        if (params === void 0) { params = ''; }
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
            _this.store.get("userInfo").then(function (val) {
                if (val) {
                    __WEBPACK_IMPORTED_MODULE_4__web_service__["a" /* WebServiceProvider */].headers['Authorization'] = 'Bearer ' + val.token;
                    _this.webservice.callAPI(__WEBPACK_IMPORTED_MODULE_5__constants_config__["b" /* CONFIG */].API_SAVE_TEST_RESULT_URL, data, params)
                        .subscribe(function (res) {
                        observer.next(res);
                        observer.complete();
                    }, function (err) {
                        observer.error(err);
                        observer.complete();
                    });
                }
            });
        });
    };
    CategoryServiceProvider.prototype.success = function (data, params) {
        var _this = this;
        if (params === void 0) { params = ''; }
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
            _this.store.get("userInfo").then(function (val) {
                if (val) {
                    __WEBPACK_IMPORTED_MODULE_4__web_service__["a" /* WebServiceProvider */].headers['Authorization'] = 'Bearer ' + val.token;
                    _this.webservice.callAPI(__WEBPACK_IMPORTED_MODULE_5__constants_config__["b" /* CONFIG */].API_PAYMENT_SUCCESS_URL, data, params)
                        .subscribe(function (res) {
                        observer.next(res);
                        observer.complete();
                    }, function (err) {
                        observer.error(err);
                        observer.complete();
                    });
                }
            });
        });
    };
    CategoryServiceProvider.prototype.getscore = function (params) {
        var _this = this;
        if (params === void 0) { params = ''; }
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
            _this.store.get("userInfo").then(function (val) {
                if (val) {
                    __WEBPACK_IMPORTED_MODULE_4__web_service__["a" /* WebServiceProvider */].headers['Authorization'] = 'Bearer ' + val.token;
                    _this.webservice.callAPI(__WEBPACK_IMPORTED_MODULE_5__constants_config__["b" /* CONFIG */].API_GET_SAVED_SCORE_URL, {}, params)
                        .subscribe(function (res) {
                        observer.next(res);
                        observer.complete();
                    }, function (err) {
                        observer.error(err);
                        observer.complete();
                    });
                }
            });
        });
    };
    CategoryServiceProvider.prototype.saveScore = function (data, params) {
        var _this = this;
        if (params === void 0) { params = ''; }
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
            _this.store.get("userInfo").then(function (val) {
                if (val) {
                    __WEBPACK_IMPORTED_MODULE_4__web_service__["a" /* WebServiceProvider */].headers['Authorization'] = 'Bearer ' + val.token;
                    _this.webservice.callAPI(__WEBPACK_IMPORTED_MODULE_5__constants_config__["b" /* CONFIG */].API_SAVE_TEST_SCORE_URL, data, params)
                        .subscribe(function (res) {
                        observer.next(res);
                        observer.complete();
                    }, function (err) {
                        observer.error(err);
                        observer.complete();
                    });
                }
            });
        });
    };
    CategoryServiceProvider.prototype.saveGenerateTestResult = function (data, params) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
            _this.store.get("userInfo").then(function (val) {
                if (val) {
                    __WEBPACK_IMPORTED_MODULE_4__web_service__["a" /* WebServiceProvider */].headers['Authorization'] = 'Bearer ' + val.token;
                    _this.webservice.callAPI(__WEBPACK_IMPORTED_MODULE_5__constants_config__["b" /* CONFIG */].API_SAVE_GENERATE_TEST_RESULT_URL, data, params)
                        .subscribe(function (res) {
                        observer.next(res);
                        observer.complete();
                    }, function (err) {
                        observer.error(err);
                        observer.complete();
                    });
                }
            });
        });
    };
    CategoryServiceProvider.prototype.getResult = function (params) {
        var _this = this;
        if (params === void 0) { params = ''; }
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
            _this.store.get("userInfo").then(function (val) {
                if (val) {
                    __WEBPACK_IMPORTED_MODULE_4__web_service__["a" /* WebServiceProvider */].headers['Authorization'] = 'Bearer ' + val.token;
                    _this.webservice.callAPI(__WEBPACK_IMPORTED_MODULE_5__constants_config__["b" /* CONFIG */].API_GET_TEST_HISTORY_URL, {}, params)
                        .subscribe(function (res) {
                        observer.next(res);
                        observer.complete();
                    }, function (err) {
                        observer.error(err);
                        observer.complete();
                    });
                }
            });
        });
    };
    CategoryServiceProvider.prototype.getGeneratedTestHistory = function (params) {
        var _this = this;
        if (params === void 0) { params = ''; }
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
            _this.store.get("userInfo").then(function (val) {
                if (val) {
                    __WEBPACK_IMPORTED_MODULE_4__web_service__["a" /* WebServiceProvider */].headers['Authorization'] = 'Bearer ' + val.token;
                    _this.webservice.callAPI(__WEBPACK_IMPORTED_MODULE_5__constants_config__["b" /* CONFIG */].API_GET_GENERATED_TEST_HISTORY_URL, {}, params)
                        .subscribe(function (res) {
                        observer.next(res);
                        observer.complete();
                    }, function (err) {
                        observer.error(err);
                        observer.complete();
                    });
                }
            });
        });
    };
    CategoryServiceProvider.prototype.getGeneratedTestRemove = function (params) {
        var _this = this;
        if (params === void 0) { params = ''; }
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
            _this.store.get("userInfo").then(function (val) {
                if (val) {
                    __WEBPACK_IMPORTED_MODULE_4__web_service__["a" /* WebServiceProvider */].headers['Authorization'] = 'Bearer ' + val.token;
                    _this.webservice.callAPI(__WEBPACK_IMPORTED_MODULE_5__constants_config__["b" /* CONFIG */].API_GENERATE_TEST_DELETE_URL, {}, params)
                        .subscribe(function (res) {
                        observer.next(res);
                        observer.complete();
                    }, function (err) {
                        observer.error(err);
                        observer.complete();
                    });
                }
            });
        });
    };
    CategoryServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__web_service__["a" /* WebServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_6__auth_service__["a" /* AuthServiceProvider */]])
    ], CategoryServiceProvider);
    return CategoryServiceProvider;
}());

//# sourceMappingURL=category.service.js.map

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export User */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__constants_config__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__web_service__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__messages_service__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// import { HttpClient } from '@angular/common/http';








var User = /** @class */ (function () {
    function User(token) {
        this.token = token;
    }
    return User;
}());

/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AuthServiceProvider = /** @class */ (function () {
    function AuthServiceProvider(webservice, messageService, store, events) {
        this.webservice = webservice;
        this.messageService = messageService;
        this.store = store;
        this.events = events;
    }
    AuthServiceProvider_1 = AuthServiceProvider;
    /**
     * Method to login with specific user details and store user info when user is authenticated.
     *
     * @param credentials - Object with email and password.
     */
    AuthServiceProvider.prototype.login = function (credentials) {
        var _this = this;
        if (credentials.email === null || credentials.password === null) {
            return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
                observer.error({
                    message: "Please fill all required fields.",
                    status: 0
                });
                observer.complete();
            });
        }
        else {
            return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
                _this.webservice
                    .callAPI(__WEBPACK_IMPORTED_MODULE_5__constants_config__["b" /* CONFIG */].API_LOGIN_URL, credentials, [])
                    .subscribe(function (res) {
                    __WEBPACK_IMPORTED_MODULE_6__web_service__["a" /* WebServiceProvider */].headers["Authorization"] =
                        "Bearer " + res.token;
                    AuthServiceProvider_1.currentUser = new User(res.access_token);
                    _this.store.set("userInfo", AuthServiceProvider_1.currentUser);
                    _this.store.set("email", credentials.email);
                    _this.store.set("isSubscribed", res.is_subscription);
                    _this.events.publish("event:login", AuthServiceProvider_1.currentUser);
                    observer.next(res);
                    observer.complete();
                }, function (err) {
                    observer.next(err);
                    observer.complete();
                });
            });
        }
    };
    AuthServiceProvider.prototype.loginasguest = function (credentials) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
            _this.webservice
                .callAPI(__WEBPACK_IMPORTED_MODULE_5__constants_config__["b" /* CONFIG */].API_GUESTLOGIN_URL, credentials, [])
                .subscribe(function (res) {
                __WEBPACK_IMPORTED_MODULE_6__web_service__["a" /* WebServiceProvider */].headers["Authorization"] =
                    "Bearer " + res.token;
                AuthServiceProvider_1.currentUser = new User(res.access_token);
                _this.store.set("userInfo", AuthServiceProvider_1.currentUser);
                _this.store.set("email", credentials.email);
                _this.store.set("isSubscribed", res.is_subscription);
                _this.events.publish("event:login", AuthServiceProvider_1.currentUser);
                observer.next(res);
                observer.complete();
            }, function (err) {
                observer.next(err);
                observer.complete();
            });
        });
    };
    AuthServiceProvider.prototype.register = function (registerData) {
        var _this = this;
        if (registerData.name === null ||
            registerData.email === null ||
            registerData.password === null ||
            registerData.phone_number === null ||
            registerData.referred_by === null) {
            return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
                observer.error({
                    message: "Please fill all required fields.",
                    status: 0
                });
                observer.complete();
            });
        }
        else {
            return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
                _this.webservice
                    .callAPI(__WEBPACK_IMPORTED_MODULE_5__constants_config__["b" /* CONFIG */].API_REGISTER_URL, registerData, [])
                    .subscribe(function (res) {
                    //   console.log(registerData)
                    //   console.log(res)
                    observer.next(res);
                    observer.complete();
                }, function (err) {
                    observer.error(err);
                    observer.complete();
                });
            });
        }
    };
    AuthServiceProvider.prototype.editProfile = function (editProfileData, params) {
        var _this = this;
        if (editProfileData.name === null || editProfileData.id === null) {
            return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
                observer.error({
                    message: "Please fill all required fields.",
                    status: 0
                });
                observer.complete();
            });
        }
        else {
            return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
                _this.webservice
                    .callAPI(__WEBPACK_IMPORTED_MODULE_5__constants_config__["b" /* CONFIG */].API_UPDATE_USER_URL, editProfileData, params)
                    .subscribe(function (res) {
                    if (res.status) {
                    }
                    observer.next(res);
                    observer.complete();
                }, function (err) {
                    observer.error(err);
                    observer.complete();
                });
            });
        }
    };
    AuthServiceProvider.prototype.getUserDetail = function (params) {
        var _this = this;
        if (params === void 0) { params = ""; }
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
            _this.store.get("userInfo").then(function (val) {
                if (val) {
                    __WEBPACK_IMPORTED_MODULE_6__web_service__["a" /* WebServiceProvider */].headers["Authorization"] =
                        "Bearer " + val.token;
                    _this.webservice.callAPI(__WEBPACK_IMPORTED_MODULE_5__constants_config__["b" /* CONFIG */].API_GET_USER_URL, {}, params).subscribe(function (res) {
                        observer.next(res);
                        observer.complete();
                    }, function (err) {
                        observer.error(err);
                        observer.complete();
                    });
                }
            });
        });
    };
    AuthServiceProvider.prototype.getUserReferrals = function (params) {
        var _this = this;
        if (params === void 0) { params = ""; }
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
            _this.store.get("userInfo").then(function (val) {
                if (val) {
                    __WEBPACK_IMPORTED_MODULE_6__web_service__["a" /* WebServiceProvider */].headers["Authorization"] =
                        "Bearer " + val.token;
                    _this.webservice.callAPI(__WEBPACK_IMPORTED_MODULE_5__constants_config__["b" /* CONFIG */].API_GET_USER_REFERRAL_URL, {}, params).subscribe(function (res) {
                        observer.next(res);
                        observer.complete();
                    }, function (err) {
                        observer.error(err);
                        observer.complete();
                    });
                }
            });
        });
    };
    // Get Subscription Data
    AuthServiceProvider.prototype.getSubscriptionDetail = function (params) {
        var _this = this;
        if (params === void 0) { params = ""; }
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
            _this.store.get("userInfo").then(function (val) {
                if (val) {
                    __WEBPACK_IMPORTED_MODULE_6__web_service__["a" /* WebServiceProvider */].headers["Authorization"] =
                        "Bearer " + val.token;
                    _this.webservice.callAPI(__WEBPACK_IMPORTED_MODULE_5__constants_config__["b" /* CONFIG */].API_GET_SUBSCRIPTION_URL, {}, params).subscribe(function (res) {
                        observer.next(res);
                        observer.complete();
                    }, function (err) {
                        observer.error(err);
                        observer.complete();
                    });
                }
            });
        });
    };
    AuthServiceProvider.prototype.getUserInfo = function () {
        return AuthServiceProvider_1.currentUser;
    };
    AuthServiceProvider.prototype.setUserInfo = function () {
        this.store.set("userInfo", AuthServiceProvider_1.currentUser);
    };
    AuthServiceProvider.prototype.logout = function (data) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
            AuthServiceProvider_1.currentUser = null;
            AuthServiceProvider_1.currentUserId = null;
            if (_this.store.remove("userInfo") ||
                _this.store.remove("name") ||
                _this.store.remove("email") ||
                _this.store.remove("role")) {
                _this.store.remove("userInfo");
                _this.store.remove("name");
                _this.store.remove("email");
                _this.store.remove("role");
                _this.store.remove("isSubscribed");
            }
            _this.events.publish("event:logout");
            observer.next();
            observer.complete();
        });
    };
    AuthServiceProvider.prototype.isLoggedIn = function () {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
            _this.store
                .get("userInfo")
                .then(function (val) {
                if (val) {
                    AuthServiceProvider_1.currentUser = val;
                    __WEBPACK_IMPORTED_MODULE_6__web_service__["a" /* WebServiceProvider */].headers["Authorization"] = "Bearer " + val.token;
                    _this.webservice.callAPI(__WEBPACK_IMPORTED_MODULE_5__constants_config__["b" /* CONFIG */].API_GET_USER_URL, {}, '/' + val.id).subscribe(function (res) {
                        if (res.status) {
                            _this.events.publish("event:login");
                        }
                        observer.next(res);
                    }, function (err) {
                        AuthServiceProvider_1.currentUser = null;
                        AuthServiceProvider_1.currentUserId = null;
                        if (_this.store.remove("userInfo") ||
                            _this.store.remove("name") ||
                            _this.store.remove("email") ||
                            _this.store.remove("role")) {
                            _this.store.remove("userInfo");
                            _this.store.remove("name");
                            _this.store.remove("email");
                            _this.store.remove("role");
                        }
                        observer.error(err);
                        observer.complete();
                    });
                }
                else {
                    observer.next(null);
                    observer.complete();
                }
            });
        });
    };
    AuthServiceProvider.prototype.uploadDocuments = function (documentData) {
        var _this = this;
        if (!documentData) {
            return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
                observer.error({ message: "Please upload licence", status: 0 });
                observer.complete();
            });
        }
        else {
            return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
                _this.webservice
                    .callAPI(__WEBPACK_IMPORTED_MODULE_5__constants_config__["b" /* CONFIG */].API_UPLOAD_DOCUMENTS_URL, documentData, [])
                    .subscribe(function (res) {
                    if (res.status) {
                    }
                    observer.next(res);
                    observer.complete();
                }, function (err) {
                    observer.error(err);
                    observer.complete();
                });
            });
        }
    };
    /**
     * Send Otp
     */
    AuthServiceProvider.prototype.SendOtp = function (data) {
        var _this = this;
        if (data.email === null) {
            return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
                observer.error({
                    message: "Please fill all required fields.",
                    status: 0
                });
                observer.complete();
            });
        }
        else {
            return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
                _this.webservice.callAPI(__WEBPACK_IMPORTED_MODULE_5__constants_config__["b" /* CONFIG */].API_SENDOTP_URL, data, []).subscribe(function (res) {
                    observer.next(res);
                    observer.complete();
                }, function (err) {
                    observer.error(err);
                    observer.complete();
                });
            });
        }
    };
    AuthServiceProvider.prototype.SetAvatar = function (data, params) {
        var _this = this;
        if (data.question_id === null) {
            return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
                observer.error({
                    message: "Please Select Avatar",
                    status: 0
                });
                observer.complete();
            });
        }
        else {
            return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
                _this.webservice
                    .callAPI(__WEBPACK_IMPORTED_MODULE_5__constants_config__["b" /* CONFIG */].API_UPDATE_PROFILE_PICTURE_URL, data, params)
                    .subscribe(function (res) {
                    if (res.status) {
                    }
                    observer.next(res);
                    observer.complete();
                }, function (err) {
                    observer.error(err);
                    observer.complete();
                });
            });
        }
    };
    /**
     * Send Otp
     */
    AuthServiceProvider.prototype.VerifyOtp = function (data) {
        var _this = this;
        if (data.email === null && data.otp === null) {
            return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
                observer.error({
                    message: "Please fill all required fields.",
                    status: 0
                });
                observer.complete();
            });
        }
        else {
            return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
                _this.webservice.callAPI(__WEBPACK_IMPORTED_MODULE_5__constants_config__["b" /* CONFIG */].API_VERIFYOTP_URL, data, []).subscribe(function (res) {
                    observer.next(res);
                    observer.complete();
                }, function (err) {
                    observer.error(err);
                    observer.complete();
                });
            });
        }
    };
    /**
     * change password
     */
    AuthServiceProvider.prototype.ChangePassword = function (data) {
        var _this = this;
        if (data.identity === null && data.password === null) {
            return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
                observer.error({
                    message: "Please fill all required fields.",
                    status: 0
                });
                observer.complete();
            });
        }
        else {
            return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
                _this.webservice
                    .callAPI(__WEBPACK_IMPORTED_MODULE_5__constants_config__["b" /* CONFIG */].API_CHANGEPASSWORD_URL, data, [])
                    .subscribe(function (res) {
                    observer.next(res);
                    observer.complete();
                }, function (err) {
                    observer.error(err);
                    observer.complete();
                });
            });
        }
    };
    /**
     * change password
     */
    AuthServiceProvider.prototype.resetPassword = function (data) {
        var _this = this;
        if (data.email === null && data.password === null) {
            return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
                observer.error({
                    message: "Please fill all required fields.",
                    status: 0
                });
                observer.complete();
            });
        }
        else {
            return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
                _this.webservice
                    .callAPI(__WEBPACK_IMPORTED_MODULE_5__constants_config__["b" /* CONFIG */].API_RESET_PASSWORD_URL, data, [])
                    .subscribe(function (res) {
                    observer.next(res);
                    observer.complete();
                }, function (err) {
                    observer.error(err);
                    observer.complete();
                });
            });
        }
    };
    AuthServiceProvider = AuthServiceProvider_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__web_service__["a" /* WebServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_7__messages_service__["a" /* MessagesServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["Events"]])
    ], AuthServiceProvider);
    return AuthServiceProvider;
    var AuthServiceProvider_1;
}());

//# sourceMappingURL=auth-service.js.map

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookmarkServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__web_service__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__constants_config__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__auth_service__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var BookmarkServiceProvider = /** @class */ (function () {
    function BookmarkServiceProvider(webservice, store, authServiceProvide) {
        this.webservice = webservice;
        this.store = store;
        this.authServiceProvide = authServiceProvide;
    }
    BookmarkServiceProvider.prototype.AddBookmark = function (data, params) {
        var _this = this;
        if (data.question_id === null) {
            return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
                observer.error({
                    message: "question id is missing",
                    status: 0
                });
                observer.complete();
            });
        }
        else {
            return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
                _this.webservice
                    .callAPI(__WEBPACK_IMPORTED_MODULE_5__constants_config__["b" /* CONFIG */].API_ADD_BOOKMARKS_URL, data, params)
                    .subscribe(function (res) {
                    if (res.status) {
                    }
                    observer.next(res);
                    observer.complete();
                }, function (err) {
                    observer.error(err);
                    observer.complete();
                });
            });
        }
    };
    BookmarkServiceProvider.prototype.AddReport = function (data, params) {
        var _this = this;
        if (data.question_id === null && data.message === null) {
            return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
                observer.error({
                    message: "question id is missing",
                    status: 0
                });
                observer.complete();
            });
        }
        else {
            return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
                _this.webservice
                    .callAPI(__WEBPACK_IMPORTED_MODULE_5__constants_config__["b" /* CONFIG */].API_ADD_REPORT_URL, data, params)
                    .subscribe(function (res) {
                    if (res.status) {
                    }
                    observer.next(res);
                    observer.complete();
                }, function (err) {
                    observer.error(err);
                    observer.complete();
                });
            });
        }
    };
    BookmarkServiceProvider.prototype.getBookmarks = function (params) {
        var _this = this;
        if (params === void 0) { params = ''; }
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
            _this.store.get("userInfo").then(function (val) {
                if (val) {
                    __WEBPACK_IMPORTED_MODULE_4__web_service__["a" /* WebServiceProvider */].headers['Authorization'] = 'Bearer ' + val.token;
                    _this.webservice.callAPI(__WEBPACK_IMPORTED_MODULE_5__constants_config__["b" /* CONFIG */].API_GET_BOOKMARKS_URL, {}, params)
                        .subscribe(function (res) {
                        observer.next(res);
                        observer.complete();
                    }, function (err) {
                        observer.error(err);
                        observer.complete();
                    });
                }
            });
        });
    };
    /**
      * Send Email Otp
      */
    BookmarkServiceProvider.prototype.SendemailOtp = function (params) {
        var _this = this;
        if (params === void 0) { params = ''; }
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
            _this.store.get("userInfo").then(function (val) {
                if (val) {
                    __WEBPACK_IMPORTED_MODULE_4__web_service__["a" /* WebServiceProvider */].headers['Authorization'] = 'Bearer ' + val.token;
                    _this.webservice.callAPI(__WEBPACK_IMPORTED_MODULE_5__constants_config__["b" /* CONFIG */].API_SENDEMAILOTP_URL, {}, [])
                        .subscribe(function (res) {
                        observer.next(res);
                        observer.complete();
                    }, function (err) {
                        observer.error(err);
                        observer.complete();
                    });
                }
            });
        });
    };
    BookmarkServiceProvider.prototype.VerifyemailOtp = function (data) {
        var _this = this;
        if (data.otp === null) {
            return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
                observer.error({
                    message: "Please fill all required fields.",
                    status: 0
                });
                observer.complete();
            });
        }
        else {
            return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
                _this.webservice.callAPI(__WEBPACK_IMPORTED_MODULE_5__constants_config__["b" /* CONFIG */].API_VERIFYEMAILOTP_URL, data, []).subscribe(function (res) {
                    //  console.log(res)
                    observer.next(res);
                    observer.complete();
                }, function (err) {
                    //    console.log(err)
                    observer.error(err);
                    observer.complete();
                });
            });
        }
    };
    BookmarkServiceProvider.prototype.getNotifications = function (params) {
        var _this = this;
        if (params === void 0) { params = ''; }
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
            _this.store.get("userInfo").then(function (val) {
                if (val) {
                    __WEBPACK_IMPORTED_MODULE_4__web_service__["a" /* WebServiceProvider */].headers['Authorization'] = 'Bearer ' + val.token;
                    _this.webservice.callAPI(__WEBPACK_IMPORTED_MODULE_5__constants_config__["b" /* CONFIG */].API_NOTIFICATIONS_URL, {}, params)
                        .subscribe(function (res) {
                        observer.next(res);
                        observer.complete();
                    }, function (err) {
                        observer.error(err);
                        observer.complete();
                    });
                }
            });
        });
    };
    BookmarkServiceProvider.prototype.getNotificationDetail = function (params) {
        var _this = this;
        if (params === void 0) { params = ''; }
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
            _this.store.get("userInfo").then(function (val) {
                if (val) {
                    __WEBPACK_IMPORTED_MODULE_4__web_service__["a" /* WebServiceProvider */].headers['Authorization'] = 'Bearer ' + val.token;
                    _this.webservice.callAPI(__WEBPACK_IMPORTED_MODULE_5__constants_config__["b" /* CONFIG */].API_NOTIFICATION_DETAIL_URL, {}, params)
                        .subscribe(function (res) {
                        observer.next(res);
                        observer.complete();
                    }, function (err) {
                        observer.error(err);
                        observer.complete();
                    });
                }
            });
        });
    };
    BookmarkServiceProvider.prototype.getCaselaws = function (params) {
        var _this = this;
        if (params === void 0) { params = ''; }
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
            _this.store.get("userInfo").then(function (val) {
                if (val) {
                    __WEBPACK_IMPORTED_MODULE_4__web_service__["a" /* WebServiceProvider */].headers['Authorization'] = 'Bearer ' + val.token;
                    _this.webservice.callAPI(__WEBPACK_IMPORTED_MODULE_5__constants_config__["b" /* CONFIG */].API_CASELAWS_URL, {}, params)
                        .subscribe(function (res) {
                        observer.next(res);
                        observer.complete();
                    }, function (err) {
                        observer.error(err);
                        observer.complete();
                    });
                }
            });
        });
    };
    BookmarkServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__web_service__["a" /* WebServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_6__auth_service__["a" /* AuthServiceProvider */]])
    ], BookmarkServiceProvider);
    return BookmarkServiceProvider;
}());

//# sourceMappingURL=bookmark.service.js.map

/***/ }),

/***/ 379:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NetworkService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_network__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NetworkService = /** @class */ (function () {
    function NetworkService(platform, network) {
        this.platform = platform;
        this.network = network;
        this.onDevice = this.platform.is('cordova');
    }
    NetworkService.prototype.isOnline = function () {
        if (this.onDevice && this.network.type) {
            return this.network.type !== Connection.NONE;
        }
        else {
            return navigator.onLine;
        }
    };
    NetworkService.prototype.isOffline = function () {
        if (this.onDevice && this.network.type) {
            return this.network.type === Connection.NONE;
        }
        else {
            return !navigator.onLine;
        }
    };
    NetworkService.prototype.getNetworkStrength = function () {
        return this.network.downlinkMax;
    };
    NetworkService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["Platform"], __WEBPACK_IMPORTED_MODULE_1__ionic_native_network__["a" /* Network */]])
    ], NetworkService);
    return NetworkService;
}());

//# sourceMappingURL=network.service.js.map

/***/ }),

/***/ 380:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdServiceProvider = /** @class */ (function () {
    function AdServiceProvider() {
    }
    AdServiceProvider.prototype.loadinterstitial = function () {
        console.log('Trying to load ad');
        var AppLovinMAX = cordova.require('cordova-plugin-applovin-max.AppLovinMAX');
        var SDK_KEY = "sfUxrKWswuTZyoROt4dW0ZvHF0L-HNuo5D53g_B-F_ElMslQyHADTHnS1pzos0VyCrhSkEu7fOwBAfVVpZ2PLw";
        // Disable buttons until SDK is initialized
        //  (<HTMLInputElement> document.getElementById("med_debugger_button")).disabled = true;
        //  (<HTMLInputElement> document.getElementById("bannerAdButton")).disabled = true;
        // 3rd-party plugins are loaded now
        AppLovinMAX.setVerboseLogging(true);
        AppLovinMAX.initialize(SDK_KEY, function (configuration) {
            //    (<HTMLInputElement> document.getElementById("mediationDebuggerButton")).disabled = false;
            var INTER_AD_UNIT_ID = '5d45e033ee55a97d';
            if (AppLovinMAX.isInterstitialReady(INTER_AD_UNIT_ID)) {
                AppLovinMAX.showInterstitial(INTER_AD_UNIT_ID);
                console.log("showing_interstitial");
            }
            else {
                console.log("loading_interstitial");
                AppLovinMAX.loadInterstitial(INTER_AD_UNIT_ID);
            }
            window.addEventListener('OnInterstitialLoadedEvent', function (adInfo) {
                console.log("loaded_interstitial");
                AppLovinMAX.showInterstitial(INTER_AD_UNIT_ID);
            });
            window.addEventListener('OnInterstitialLoadFailedEvent', function (adInfo) {
                console.log("load_failed_interstitial");
            });
            window.addEventListener('OnInterstitialClickedEvent', function (adInfo) { });
            window.addEventListener('OnInterstitialDisplayedEvent', function (adInfo) { });
            window.addEventListener('OnInterstitialAdFailedToDisplayEvent', function (adInfo) {
            });
            window.addEventListener('OnInterstitialHiddenEvent', function (adInfo) {
            });
        });
    };
    //       loadMrec(){
    //           // this.plt.ready().then(() => {
    //              console.log('Trying to load ad');
    //              var AppLovinMAX = cordova.require('cordova-plugin-applovin-max.AppLovinMAX');
    //              var   SDK_KEY = "sfUxrKWswuTZyoROt4dW0ZvHF0L-HNuo5D53g_B-F_ElMslQyHADTHnS1pzos0VyCrhSkEu7fOwBAfVVpZ2PLw";
    //              // Disable buttons until SDK is initialized
    //            //  (<HTMLInputElement> document.getElementById("med_debugger_button")).disabled = true;
    //            //  (<HTMLInputElement> document.getElementById("bannerAdButton")).disabled = true;
    //          
    //          
    //          
    //              // 3rd-party plugins are loaded now
    //              AppLovinMAX.setVerboseLogging(true);
    //              AppLovinMAX.initialize(SDK_KEY, function (configuration) {
    //              //    (<HTMLInputElement> document.getElementById("mediationDebuggerButton")).disabled = false;
    //        
    //        
    //          /////MREC AD COde
    //         var   MREC_AD_UNIT_ID = '5d45e033ee55a97d';
    //
    //
    //        window.addEventListener('onMRecAdLoadedEvent', function (adInfo) {
    //          console.log("MREc_loaded");
    //         AppLovinMAX.showMRec(MREC_AD_UNIT_ID);
    //     });
    //     window.addEventListener('onMRecAdLoadFailedEvent', function (adInfo) {
    //       console.log("MREC_load_failed");
    //     });
    //     window.addEventListener('onMRecAdClickedEvent', function (adInfo) {});
    //     window.addEventListener('onMRecAdCollapsedEvent', function (adInfo) {});
    //     window.addEventListener('onMRecAdExpandedEvent', function (adInfo) {});
    //    
    //     // Banners are automatically sized to 320x50 on phones and 728x90 on tablets
    //     // You may use the utility method `AppLovinMAX.isTablet()` to help with view sizing adjustments
    //     AppLovinMAX.createMRec(MREC_AD_UNIT_ID, AppLovinMAX.AdViewPosition.CENTERED);
    //
    //     AppLovinMAX.setMRecBackgroundColor(MREC_AD_UNIT_ID, '#000000');
    //
    //   });
    //    
    // }
    AdServiceProvider.prototype.loadbanner = function () {
        // this.plt.ready().then(() => {
        console.log('Trying to load ad');
        var AppLovinMAX = cordova.require('cordova-plugin-applovin-max.AppLovinMAX');
        var SDK_KEY = "sfUxrKWswuTZyoROt4dW0ZvHF0L-HNuo5D53g_B-F_ElMslQyHADTHnS1pzos0VyCrhSkEu7fOwBAfVVpZ2PLw";
        // Disable buttons until SDK is initialized
        //  (<HTMLInputElement> document.getElementById("med_debugger_button")).disabled = true;
        //  (<HTMLInputElement> document.getElementById("bannerAdButton")).disabled = true;
        // 3rd-party plugins are loaded now
        AppLovinMAX.setVerboseLogging(true);
        AppLovinMAX.initialize(SDK_KEY, function (configuration) {
            //    (<HTMLInputElement> document.getElementById("mediationDebuggerButton")).disabled = false;
            /// Banner Ad Code
            var BANNER_AD_UNIT_ID = '3b324b689e9ed99b';
            window.addEventListener('OnBannerAdLoadedEvent', function (adInfo) {
                console.log("banner_loaded");
                AppLovinMAX.showBanner(BANNER_AD_UNIT_ID);
            });
            window.addEventListener('OnBannerAdLoadFailedEvent', function (adInfo) {
                console.log("banner_load_failed");
            });
            window.addEventListener('OnBannerAdClickedEvent', function (adInfo) {
                console.log("banner_clicked");
            });
            window.addEventListener('OnBannerAdCollapsedEvent', function (adInfo) {
                console.log("banner_collapsed");
            });
            window.addEventListener('OnBannerAdExpandedEvent', function (adInfo) {
                console.log("banner_expanded");
            });
            // Banners are automatically sized to 320x50 on phones and 728x90 on tablets
            // You may use the utility method `AppLovinMAX.isTablet()` to help with view sizing adjustments
            AppLovinMAX.createBanner(BANNER_AD_UNIT_ID, AppLovinMAX.AdViewPosition.BOTTOM_CENTER);
            // Set background or background color for banners to be fully functional
            // In this case we are setting it to black - PLEASE USE HEX STRINGS ONLY
            AppLovinMAX.setBannerBackgroundColor(BANNER_AD_UNIT_ID, '#000000');
        });
    };
    AdServiceProvider.prototype.loadrewarded = function () {
        // this.plt.ready().then(() => {
        console.log('Trying to load ad');
        var AppLovinMAX = cordova.require('cordova-plugin-applovin-max.AppLovinMAX');
        var SDK_KEY = "sfUxrKWswuTZyoROt4dW0ZvHF0L-HNuo5D53g_B-F_ElMslQyHADTHnS1pzos0VyCrhSkEu7fOwBAfVVpZ2PLw";
        // Disable buttons until SDK is initialized
        //  (<HTMLInputElement> document.getElementById("med_debugger_button")).disabled = true;
        //  (<HTMLInputElement> document.getElementById("bannerAdButton")).disabled = true;
        // 3rd-party plugins are loaded now
        AppLovinMAX.setVerboseLogging(true);
        AppLovinMAX.initialize(SDK_KEY, function (configuration) {
            //    (<HTMLInputElement> document.getElementById("mediationDebuggerButton")).disabled = false;
            ////REWARDED AD CODE
            var REWARDED_AD_UNIT_ID = 'a83249fd0db19dd3';
            AppLovinMAX.showRewardedAd(REWARDED_AD_UNIT_ID);
            if (AppLovinMAX.isRewardedAdReady(REWARDED_AD_UNIT_ID)) {
                AppLovinMAX.showRewardedAd(REWARDED_AD_UNIT_ID);
            }
            else {
                AppLovinMAX.loadRewardedAd(REWARDED_AD_UNIT_ID);
            }
            window.addEventListener('OnRewardedAdLoadedEvent', function (adInfo) {
                console.log("rewarded_loaded");
            });
            window.addEventListener('OnRewardedAdLoadFailedEvent', function (adInfo) {
                console.log("rewarded_load_failed");
            });
            window.addEventListener('OnRewardedAdClickedEvent', function (adInfo) {
                console.log("rewarded_clicked");
            });
            window.addEventListener('OnRewardedAdDisplayedEvent', function (adInfo) {
                console.log("rewarded_displayed");
            });
            window.addEventListener('OnRewardedAdAdFailedToDisplayEvent', function (adInfo) {
            });
            window.addEventListener('OnRewardedAdHiddenEvent', function (adInfo) {
                console.log("rewarded_Hidden");
            });
            window.addEventListener('OnRewardedAdReceivedRewardEvent', function (adInfo) {
                console.log("get_reward");
            });
        });
    };
    AdServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], AdServiceProvider);
    return AdServiceProvider;
}());

//# sourceMappingURL=ad.service.js.map

/***/ }),

/***/ 381:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryTestTypePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__test_test__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__exam_notification_exam_notification__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__maxims_maxims__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__generate_test_list_generate_test_list__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_alerts_service__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__subscription_subscription__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var CategoryTestTypePage = /** @class */ (function () {
    function CategoryTestTypePage(navCtrl, storage, alertService, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.alertService = alertService;
        this.navParams = navParams;
        this.isSubscribed = false;
        this.storage.get("isSubscribed").then(function (val) {
            _this.isSubscribed = val == 1 ? true : false;
        });
        this.catData = navParams.get("data") ? navParams.get("data") : "";
    }
    CategoryTestTypePage.prototype.ionViewDidLoad = function () {
    };
    CategoryTestTypePage.prototype.ionViewWillEnter = function () {
        this.getCategoryTestTypeData();
    };
    /**
     * GET CATEGORY TEST TYPE
     */
    CategoryTestTypePage.prototype.getCategoryTestTypeData = function () {
        this.categoryTestTypeList = [
            {
                id: 1,
                icon: "ios-clipboard",
                title: "Tests"
            },
            {
                id: 2,
                icon: "ios-construct",
                title: "Mock Exam Creator"
            },
            {
                id: 3,
                icon: "ios-notifications",
                title: "Exam Notifications"
            },
            {
                id: 4,
                icon: "ios-book",
                title: "Syllabus"
            },
            {
                id: 5,
                icon: "ios-list",
                title: "Legal Maxims"
            }
        ];
    };
    CategoryTestTypePage.prototype.goToTestPage = function (id) {
        switch (id) {
            case 5:
                var val1 = {
                    title: 'maxims'
                };
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__maxims_maxims__["a" /* MaximsPage */], { data: val1 });
                break;
            case 4:
                var val2 = {
                    title: 'syllabus'
                };
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__maxims_maxims__["a" /* MaximsPage */], { data: val2 });
                break;
            case 3:
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__exam_notification_exam_notification__["a" /* ExamNotificationPage */]);
                break;
            case 2:
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__generate_test_list_generate_test_list__["a" /* GenerateTestListPage */]);
                break;
            default:
                var val = {
                    title: this.catData.title
                };
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__test_test__["a" /* TestPage */], { data: val });
                break;
        }
    };
    CategoryTestTypePage.prototype.goUnlockTest = function () {
        var _this = this;
        this.alertService
            .showConfirmAlert('', 'This is a Premium Feature.  <br><br>  Please subscribe to access and Self create mock exams.', false, 'Subscribe', 'Close')
            .then(function (res) {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__subscription_subscription__["a" /* SubscriptionPage */]);
        }, function (err) {
        });
    };
    CategoryTestTypePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-category-test-type",template:/*ion-inline-start:"D:\IONIC\app_v1.72\03\src\pages\category-test-type\category-test-type.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Law Today</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content no-padding>\n\n  <ion-list class="list-icons" no-lines text-wrap>\n    <ng-container *ngFor="let item of categoryTestTypeList" >\n\n      <ion-item *ngIf="item.id == 2 && !isSubscribed" (click)="goUnlockTest()">\n        <ion-icon class="uc-icon bg-blue" [ios]="item.icon" [md]="item.icon" item-start></ion-icon>\n        <h3 class="title">{{item.title}}</h3>\n        <em>Only for Premium user</em>\n      </ion-item>\n\n      <ion-item (click)="goToTestPage(item.id)" *ngIf="item.id == 2 && isSubscribed">\n        <ion-icon class="uc-icon bg-blue" [ios]="item.icon" [md]="item.icon" item-start></ion-icon>\n        <h3 class="title">{{item.title}}</h3>\n      </ion-item>\n\n      <ion-item (click)="goToTestPage(item.id)" *ngIf="item.id != 2">\n        <ion-icon class="uc-icon bg-blue" [ios]="item.icon" [md]="item.icon" item-start></ion-icon>\n        <h3 class="title">{{item.title}}</h3>\n      </ion-item>\n    </ng-container>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"D:\IONIC\app_v1.72\03\src\pages\category-test-type\category-test-type.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_7__services_alerts_service__["a" /* AlertServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavParams"]])
    ], CategoryTestTypePage);
    return CategoryTestTypePage;
}());

//# sourceMappingURL=category-test-type.js.map

/***/ }),

/***/ 382:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuizPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_alerts_service__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_bookmark_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_messages_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__review_test_review_test__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__reportmodal_reportmodal__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_storage__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_category_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__question_attempted_question_attempted__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_platform_browser__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var QuizPage = /** @class */ (function () {
    function QuizPage(storage, alertCtrl, navCtrl, alertService, bookmarkService, messages, categoryService, ref, formBuilder, navParams, modalCtrl, sanitizer) {
        var _this = this;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.alertService = alertService;
        this.bookmarkService = bookmarkService;
        this.messages = messages;
        this.categoryService = categoryService;
        this.ref = ref;
        this.formBuilder = formBuilder;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.sanitizer = sanitizer;
        this.questionData = [];
        this.test = {};
        this.questionsData = [];
        this.selectMultipleAnswer = [];
        this.questionItems = {};
        this.index = 0;
        this.scoresavedata = 'savedata';
        this.requestArray = [];
        this.requestAssessment = {
            result: "",
            data: []
        };
        this.result = [];
        this.bookmarkData = [];
        this.quizStart = false;
        /**
         * Clear Form Array Data
         */
        this.clearFormArray = function (formArray) {
            while (formArray.length !== 0) {
                formArray.removeAt(0);
            }
        };
        this.test = navParams.get("test") ? navParams.get("test") : "";
        this.questionData = this.test.questions;
        this.questionForm = this.formBuilder.group({
            option: formBuilder.array([]),
            answer_text: [""]
        });
        this.alertService
            .showAlert("Start Quiz?", "Time to complete is " + this.test.duration + " minutes", false)
            .then(function (res) {
            _this.getAssessmentData();
            _this.quizStart = true;
        }, function (err) {
            _this.navCtrl.pop();
        });
    }
    QuizPage.prototype.ngOnInit = function () {
        this.getBookmarkData();
    };
    QuizPage.prototype.ionViewDidLoad = function () {
    };
    /**
     * Get Assessment Data
     * @param id
     */
    QuizPage.prototype.getAssessmentData = function () {
        this.content.resize();
        this.loadQuestion(0);
    };
    QuizPage.prototype.getBookmarkData = function () {
        var _this = this;
        this.bookmarkService.getBookmarks().subscribe(function (response) {
            if (!response.error) {
                _this.bookmarkData = response;
            }
        }, function (err) {
        });
    };
    QuizPage.prototype.Showanswer = function () {
        if (this.toggleshowanswer != true) {
            this.toggleshowanswer = true;
        }
        else {
            this.toggleshowanswer = false;
        }
    };
    QuizPage.prototype.addBookmark = function () {
        var _this = this;
        if (this.questionItems) {
            var data = {
                question_id: this.questionItems.id
            };
            this.selectedBookmark = this.questionItems.id;
            this.bookmarkService.AddBookmark(data).subscribe(function (data) {
                _this.getBookmarkData();
                _this.getSelectedBookmark(_this.questionItems);
            }, function (err) {
            });
        }
    };
    QuizPage.prototype.getSelectedBookmark = function (val) {
        if (this.bookmarkData.length > 0 && val) {
            var selectedRes = this.bookmarkData.find(function (x) { return x.question_id == val.id; });
            if (selectedRes && selectedRes != -1) {
                this.selectedBookmark = selectedRes.id;
            }
        }
    };
    /**
     * Load Question by Index
     * @param i
     */
    QuizPage.prototype.loadQuestion = function (i) {
        if (i < this.questionData.length) {
            this.questionItems = this.questionData[i].question;
            this.getSelectedBookmark(this.questionItems);
            var option = this.questionForm.controls.option;
            this.getSelectedAnswer(this.questionItems);
            this.clearFormArray(option);
        }
        else {
            this.onSaveCompleteTest(this.test.id, this.result, this.questionData.length, this.result.length, this.getTotalCorrect(this.result), this.getTotalInCorrect(this.result), this.countscore());
        }
    };
    QuizPage.prototype.remove_linebreaks = function (str) {
        return str.replace(/\\r\\n/g, "");
    };
    /**
     * Submit Answer
     */
    QuizPage.prototype.onAnswer = function () {
        if (this.index < this.questionData.length) {
            var res = this.getResult(this.questionForm.value.option);
            this.processResult(res);
            this.toggleshowanswer = false;
        }
    };
    QuizPage.prototype.loadPreviousQuestion = function () {
        if (this.index > 0) {
            this.index = this.index - 2;
            var res = this.getResult(this.questionForm.value.option);
            this.processResult(res);
            this.toggleshowanswer = false;
        }
    };
    QuizPage.prototype.presentReportModal = function () {
        var _this = this;
        if (this.questionItems) {
            var modalOptions = {
                cssClass: "uc-report-modal",
                enableBackdropDismiss: false
            };
            var reportModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_7__reportmodal_reportmodal__["a" /* ReportmodalPage */], { question: this.questionItems }, modalOptions);
            reportModal.onDidDismiss(function (data) {
                if (data) {
                    _this.messages.showToast("Successfull reported", 'undefined', "toast-success");
                }
            });
            reportModal.present();
        }
    };
    // presentCorrectansModal() {
    //   if (this.questionItems) {
    //     const modalOptions: ModalOptions = {
    //       cssClass: "uc-report-modal",
    //       enableBackdropDismiss: false
    //     };
    //     let reportModal = this.modalCtrl.create(ShowcorrectmodalPage, { question: this.questionItems }, modalOptions);
    //     reportModal.present();
    //   }
    // }
    // onSaveCompleteTest() save completed test data on serve
    // make it locally savable and update the test history page too so that it can read locally
    QuizPage.prototype.onCompleted = function () {
        this.navCtrl.pop();
    };
    QuizPage.prototype.onReviewTest = function () {
        var rs = {
            questions: this.questionData,
            answers: this.result
        };
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__review_test_review_test__["a" /* ReviewTestPage */], { data: rs });
    };
    QuizPage.prototype.onReviewTestCorrect = function () {
        var rs = {
            questions: this.questionData,
            answers: this.result
        };
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__review_test_review_test__["a" /* ReviewTestPage */], { data: rs });
    };
    QuizPage.prototype.onQuestionAttempted = function () {
        var _this = this;
        var modalOptions = {
            cssClass: "uc-report-modal",
            enableBackdropDismiss: false
        };
        var rs = {
            questions: this.questionData,
            answers: this.result
        };
        var attemptmodal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_10__question_attempted_question_attempted__["a" /* QuestionAttemptedModalPage */], { data: rs }, modalOptions);
        attemptmodal.onDidDismiss(function (data) {
            if (data) {
                //   console.log (data);
                _this.index = data - 2;
                var res = _this.getResult(_this.questionForm.value.option);
                _this.processResult(res);
            }
            _this.toggleshowanswer = false;
        });
        attemptmodal.present();
    };
    QuizPage.prototype.onQuestionAttempted1 = function () {
        var rs = {
            questions: this.questionData,
            answers: this.result
        };
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__question_attempted_question_attempted__["a" /* QuestionAttemptedModalPage */], { data: rs });
    };
    QuizPage.prototype.getSelectedAnswer = function (val) {
        if (this.result.length > 0 && val) {
            var selectedRes = this.result.find(function (x) { return x.question_id == val.id; });
            if (selectedRes && selectedRes != -1) {
                this.selectedChecked = selectedRes.id;
            }
        }
    };
    QuizPage.prototype.functiontofindIndexByKeyValue = function (arraytosearch, key, valuetosearch) {
        for (var i = 0; i < arraytosearch.length; i++) {
            if (arraytosearch[i][key] == valuetosearch) {
                return i;
            }
        }
        return -1;
    };
    QuizPage.prototype.processResult = function (res) {
        if (this.index < this.questionData.length) {
            if (this.result.length >= 0 && res) {
                var resultIndex = this.functiontofindIndexByKeyValue(this.result, 'question_id', res.question_id);
                if (resultIndex != -1) {
                    this.result[resultIndex] = res;
                }
                else {
                    this.result.push(res);
                }
            }
            else {
                if (res) {
                    this.result.push(res);
                }
            }
            this.questionForm.value.question_id = this.questionItems.id;
            this.requestArray.push(this.questionForm.value);
            this.index = this.index + 1;
            this.index = this.index > this.questionData.length ? this.questionData.length : this.index;
            this.loadQuestion(this.index);
        }
    };
    QuizPage.prototype.getTotalCorrect = function (val) {
        this.correct = val.filter(function (i) { return i.is_correct == 1; }).length;
        return this.correct;
    };
    QuizPage.prototype.getTotalInCorrect = function (val) {
        this.incorrect = val.filter(function (i) { return i.is_correct != 1; }).length;
        return this.incorrect;
    };
    QuizPage.prototype.countscore = function () {
        var correct = Math.floor(this.correct * 4);
        var incorrect = Math.floor(this.incorrect * 1);
        var score = Math.floor(correct - incorrect);
        if (score > 0) {
            this.score = score;
        }
        else {
            this.score = 0;
        }
        return this.score;
    };
    QuizPage.prototype.onSaveCompleteTest = function (testval, responseval, totalval, attemtedval, correctval, incorrectval, savescore) {
        var _this = this;
        var data = {
            test_id: testval,
            response: JSON.stringify(responseval),
            attemted: attemtedval,
            total: totalval,
            correct: correctval,
            incorrect: incorrectval
        };
        var data1 = {
            score1: savescore
        };
        this.messages.showLoader();
        this.categoryService.saveScore(data1).subscribe(function (response) {
        }, function (err) {
        });
        this.categoryService.saveResult(data).subscribe(function (response) {
            _this.messages.hideLoader();
        }, function (err) {
            _this.messages.hideLoader();
        });
    };
    /**
     * Single Select Option
     * @param event
     */
    QuizPage.prototype.onSelect = function (event) {
        var option = this.questionForm.controls.option;
        this.clearFormArray(option);
        option.push(new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */](parseInt(event)));
        this.selectedQuestionVal = event;
    };
    /**
     * Get Final Result
     * @param answers
     */
    QuizPage.prototype.getResult = function (answers) {
        var _this = this;
        this.questionItems.answers.forEach(function (option) {
            if (answers.indexOf(option.id) >= 0) {
                _this.selectedAnswer = option;
            }
        });
        return this.selectedAnswer;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Content"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Content"])
    ], QuizPage.prototype, "content", void 0);
    QuizPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-quiz",template:/*ion-inline-start:"D:\IONIC\app_v1.72\03\src\pages\quiz\quiz.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Law Today</ion-title>\n\n    <ion-buttons end *ngIf="index + 1 <= questionData.length">\n\n         \n\n      <button *ngIf="questionItems.id != selectedBookmark" ion-button (click)="addBookmark()">\n\n        <img class="bookmark" src="assets/images/cat/bookmark.png" />\n\n      </button>\n\n      <button ion-button *ngIf="selectedBookmark && questionItems.id == selectedBookmark" (click)="addBookmark()">\n\n        <img class="bookmark" src="assets/images/cat/bookmarked.png" />\n\n      </button>\n\n  \n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content #content padding>\n\n  <ng-container *ngIf="index + 1 <= questionData.length && quizStart == true">\n\n    \n\n      <div class="question-content">\n\n        <form [formGroup]="questionForm" (ngSubmit)="onAnswer()">\n\n        <div class="question-name">\n\n          <div\n\n            [innerHtml]="remove_linebreaks(questionItems.name)"></div>\n\n        </div>\n\n        <div style="display: flex; justify-content: flex-end" [innerHtml]="remove_linebreaks(questionItems.exam)"></div>\n\n\n\n        <ion-list margin-vertical class="list-radio" radio-group (ionChange)="onSelect($event)">\n\n          <ion-item text-wrap class="list-option" *ngFor="let option of questionItems.answers" >\n\n            <ion-label>{{option.answer}}</ion-label>\n\n            <ion-radio value="{{option.id}}" item-start [checked]="selectedChecked && option.id == selectedChecked">\n\n            </ion-radio>\n\n          </ion-item>\n\n        </ion-list>\n\n      </form>\n\n      <button ion-button color="success" *ngIf="toggleshowanswer != true" (click)="Showanswer()">Show Answer</button>\n\n      <button ion-button color="danger" *ngIf="toggleshowanswer == true" (click)="Showanswer()">Hide Answers</button>\n\n    <button ion-button color="danger" (click)="presentReportModal()">\n\n      Report Question\n\n    </button>\n\n  <ion-card *ngIf="toggleshowanswer == true">\n\n  <ion-card-content>\n\n    <div text-wrap class="list-answer" *ngFor="let option of questionItems.answers" >\n\n      <p  *ngIf="option.is_correct == 1" > \n\n      <b>Ans:</b> {{option.answer}} <br> </p>\n\n     <p *ngIf="option.is_correct == 1 && option.explanation != null"> <b>Explanation:</b>{{option.explanation}}<br><br></p> \n\n    \n\n<div *ngIf="option.is_correct == 1 && option.video_full != null">\n\n   <iframe height="315" [src]="sanitizer.bypassSecurityTrustResourceUrl(option.video_full)" frameborder="0" allowfullscreen="allowfullscreen"></iframe>\n\n</div>\n\n    </div>\n\n    </ion-card-content>\n\n  </ion-card>\n\n    \n\n      </div>\n\n    \n\n    \n\n   \n\n  </ng-container>\n\n  <ng-container *ngIf="index + 1 > questionData.length">\n\n    <ion-item class="list-result show-result">\n\n      <ion-grid class="result-info">\n\n        <ion-row>\n\n          <ion-col col-6 class="result-info__col">\n\n            <div class="badge badge-primary" (click)="onReviewTest()">\n\n              <strong>{{questionData.length}}</strong>\n\n              <p>Total Questions</p>\n\n            </div>\n\n          </ion-col>\n\n          <ion-col col-6 class="result-info__col" (click)="onReviewTest()">\n\n            <div class="badge badge-warning">\n\n              <strong>{{result.length}}</strong>\n\n              <p>Total Attempted</p>\n\n            </div>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col col-6 class="result-info__col">\n\n            <div class="badge badge-success" (click)="onReviewTest()">\n\n              <strong>{{getTotalCorrect(result)}}</strong>\n\n              <p>Total Correct</p>\n\n            </div>\n\n          </ion-col>\n\n          <ion-col col-6 class="result-info__col" (click)="onReviewTest()">\n\n            <div class="badge badge-danger">\n\n              <strong>{{getTotalInCorrect(result)}}</strong>\n\n              <p>Total Incorrect</p>\n\n            </div>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n      <div class="result-msg" (click)="onCompleted()">\n\n        <ion-icon color="success" ios="ios-checkmark-circle-outline" md="ios-checkmark-circle-outline"></ion-icon>\n\n        <h4 class="list-result-title ">\n\n          Congratulations! You have complete test successfully.<br>\n\n          Your Score is {{countscore(result)}}\n\n         \n\n        </h4>\n\n      </div>\n\n    </ion-item>\n\n  </ng-container>\n\n</ion-content>\n\n<ion-footer>\n\n  <ion-grid>\n\n    <ion-row *ngIf="index + 1 <= questionData.length">\n\n      <ion-col col-5>\n\n        <button type="button" class="square" no-margin ion-button block color="primary"\n\n (click)="loadPreviousQuestion()">Prev</button>\n\n      </ion-col>\n\n      <ion-col col-2>\n\n        <button type="button" class="square" no-margin ion-button block color="gray"\n\n          (click)="onQuestionAttempted()">\n\n          {{index + 1}}/{{questionData.length}} \n\n        </button>\n\n      </ion-col>\n\n      <ion-col col-5>\n\n        <button class="square" no-margin ion-button block color="primary" (click)="onAnswer()">Next</button>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row *ngIf="index + 1 > questionData.length">\n\n      <ion-col col-6>\n\n        <button class="square" no-margin ion-button block color="primary" (click)="onReviewTest()">Review\n\n          Answers</button>\n\n      </ion-col>\n\n      <ion-col col-6>\n\n        <button class="square" no-margin ion-button block color="success" (click)="onCompleted()">Home</button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-footer>\n\n'/*ion-inline-end:"D:\IONIC\app_v1.72\03\src\pages\quiz\quiz.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_2__services_alerts_service__["a" /* AlertServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_4__services_bookmark_service__["a" /* BookmarkServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_5__services_messages_service__["a" /* MessagesServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_9__services_category_service__["a" /* CategoryServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"],
            __WEBPACK_IMPORTED_MODULE_11__angular_platform_browser__["c" /* DomSanitizer */]])
    ], QuizPage);
    return QuizPage;
}());

//# sourceMappingURL=quiz.js.map

/***/ }),

/***/ 383:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewTestPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reportmodal_reportmodal__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_messages_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_bookmark_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__question_attempted_question_attempted__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ReviewTestPage = /** @class */ (function () {
    function ReviewTestPage(navCtrl, navParams, bookmarkService, messages, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.bookmarkService = bookmarkService;
        this.messages = messages;
        this.modalCtrl = modalCtrl;
        this.questionData = [];
        this.test = {};
        this.questionsData = [];
        this.questionItems = {};
        this.selectedAnswer = {};
        this.index = 0;
        this.bookmarkData = [];
        this.test = navParams.get("data") ? navParams.get("data") : "";
        if (this.test) {
            this.questionData = this.test.questions;
            this.answerData = this.test.answers;
            this.loadQuestion(0);
        }
    }
    ReviewTestPage.prototype.ionViewDidLoad = function () {
    };
    ReviewTestPage.prototype.getSelectedAnswer = function (val) {
        if (this.answerData.length > 0 && val) {
            var selectedRes = this.answerData.find(function (x) { return x.question_id == val.id; });
            if (selectedRes && selectedRes != -1) {
                this.selectedAnswer = selectedRes;
            }
        }
    };
    ReviewTestPage.prototype.presentReportModal = function () {
        var _this = this;
        if (this.questionItems) {
            var modalOptions = {
                cssClass: "uc-report-modal",
                enableBackdropDismiss: false
            };
            var reportModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__reportmodal_reportmodal__["a" /* ReportmodalPage */], { question: this.questionItems }, modalOptions);
            reportModal.onDidDismiss(function (data) {
                if (data) {
                    _this.messages.showToast("Successfull reported", undefined, "toast-success");
                }
            });
            reportModal.present();
        }
    };
    ReviewTestPage.prototype.getBookmarkData = function () {
        var _this = this;
        this.messages.showLoader();
        this.bookmarkService.getBookmarks().subscribe(function (response) {
            _this.messages.hideLoader();
            if (!response.error) {
                _this.bookmarkData = response;
            }
        }, function (err) {
            _this.messages.hideLoader();
        });
    };
    ReviewTestPage.prototype.addBookmark = function () {
        var _this = this;
        if (this.questionItems) {
            var data = {
                question_id: this.questionItems.id
            };
            this.selectedBookmark = this.questionItems.id;
            this.bookmarkService.AddBookmark(data).subscribe(function (data) {
                _this.getBookmarkData();
                _this.getSelectedBookmark(_this.questionItems);
            }, function (err) {
            });
        }
    };
    ReviewTestPage.prototype.getSelectedBookmark = function (val) {
        if (this.bookmarkData.length > 0 && val) {
            var selectedRes = this.bookmarkData.find(function (x) { return x.question_id == val.id; });
            if (selectedRes && selectedRes != -1) {
                this.selectedBookmark = selectedRes.id;
            }
        }
    };
    ReviewTestPage.prototype.remove_linebreaks = function (str) {
        return str.replace(/\\r\\n/g, "");
    };
    /**
     * Load Question by Index
     * @param i
     */
    ReviewTestPage.prototype.loadQuestion = function (i) {
        if (i < this.questionData.length) {
            this.questionItems = this.questionData[i].question;
            this.getSelectedAnswer(this.questionItems);
        }
    };
    ReviewTestPage.prototype.onQuestionAttempted = function () {
        var _this = this;
        var modalOptions = {
            cssClass: "uc-report-modal",
            enableBackdropDismiss: false
        };
        var rs = {
            questions: this.questionData,
            answers: this.answerData
        };
        var attemptmodal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__question_attempted_question_attempted__["a" /* QuestionAttemptedModalPage */], { data: rs }, modalOptions);
        attemptmodal.onDidDismiss(function (data) {
            if (data) {
                //   console.log (data);
                _this.index = data - 1;
                _this.loadQuestion(_this.index);
            }
        });
        attemptmodal.present();
    };
    ReviewTestPage.prototype.onPrev = function () {
        if (this.index > 0) {
            this.index = this.index - 1;
            this.loadQuestion(this.index);
        }
    };
    /**
     * Submit Answer
     */
    ReviewTestPage.prototype.onNext = function () {
        if (this.index < this.questionData.length) {
            this.index = this.index + 1;
            this.loadQuestion(this.index);
        }
    };
    ReviewTestPage.prototype.onCompleted = function () {
        this.navCtrl.pop();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Content"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Content"])
    ], ReviewTestPage.prototype, "content", void 0);
    ReviewTestPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-review-test",template:/*ion-inline-start:"D:\IONIC\app_v1.72\03\src\pages\review-test\review-test.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Review Answers</ion-title>\n\n    <ion-buttons end *ngIf="index + 1 <= questionData.length">\n\n     \n\n      <button *ngIf="questionItems.id != selectedBookmark" ion-button (click)="addBookmark()">\n\n        <img class="bookmark" src="assets/images/cat/bookmark.png" />\n\n      </button>\n\n      <button ion-button *ngIf="selectedBookmark && questionItems.id == selectedBookmark" (click)="addBookmark()">\n\n        <img class="bookmark" src="assets/images/cat/bookmarked.png" />\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content #content padding>\n\n  <div class="question-content" *ngIf="index + 1 <= questionData.length">\n\n    <div class="question-name"><div [innerHtml]="remove_linebreaks(questionItems.name)"></div></div>\n\n    <ion-list margin-vertical class="list-radio" radio-group>\n\n      <ng-container *ngFor="let option of questionItems.answers; let i = index">\n\n        <ion-item text-wrap class="list-option" *ngIf="selectedAnswer !=\'\'"\n\n          [ngClass]="{\'bg-success\': option.is_correct == 1, \'bg-danger\':selectedAnswer.id == option.id && option.is_correct==0 }">\n\n      \n\n          <ion-label>{{option.answer}}</ion-label>\n\n        </ion-item>\n\n        <ion-item class="list-option" *ngIf="selectedAnswer == \'\'" [ngClass]="{\'bg-success\': option.is_correct == 1}">\n\n        \n\n          <ion-label>{{option.answer}}</ion-label>\n\n        </ion-item>\n\n      </ng-container>\n\n    </ion-list>\n\n    <button ion-button color="danger" (click)="presentReportModal()">\n\n      Report Question\n\n     </button>\n\n  </div>\n\n \n\n  <ng-container *ngIf="index + 1 > questionData.length">\n\n    <ion-item class="list-result">\n\n      <ion-icon color="success" ios="ios-checkmark-circle-outline" md="ios-checkmark-circle-outline"></ion-icon>\n\n      <h4 class="list-result-title " (click)="onCompleted()">\n\n        Congratulations! You have reviewed answers successfully.\n\n      </h4>\n\n    </ion-item>\n\n  </ng-container>\n\n</ion-content>\n\n\n\n<ion-footer>\n\n  <ion-grid>\n\n    <ion-row *ngIf="index + 1 <= questionData.length">\n\n      <ion-col col-5>\n\n        <button type="button" class="square" no-margin ion-button block color="primary" (click)="onPrev()">Prev</button>\n\n      </ion-col>\n\n      <ion-col col-2>\n\n        <button type="button" class="square" no-margin ion-button block color="gray"\n\n        (click)="onQuestionAttempted()">\n\n          {{index + 1}}/{{questionData.length}} \n\n        </button>\n\n      </ion-col>\n\n      <ion-col col-5>\n\n        <button class="square" no-margin ion-button block color="primary" (click)="onNext()">Next</button>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row *ngIf="index + 1 > questionData.length">\n\n      <ion-col>\n\n        <button class="square" no-margin ion-button block color="success" (click)="onCompleted()">Go Back</button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-footer>\n\n'/*ion-inline-end:"D:\IONIC\app_v1.72\03\src\pages\review-test\review-test.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_4__services_bookmark_service__["a" /* BookmarkServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_3__services_messages_service__["a" /* MessagesServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"]])
    ], ReviewTestPage);
    return ReviewTestPage;
}());

//# sourceMappingURL=review-test.js.map

/***/ }),

/***/ 384:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlashCardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reportmodal_reportmodal__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_messages_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__question_attempted_question_attempted__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the QuizPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FlashCardPage = /** @class */ (function () {
    function FlashCardPage(alertCtrl, navCtrl, navParams, messages, modalCtrl) {
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.messages = messages;
        this.modalCtrl = modalCtrl;
        this.questionData = [];
        this.result = [];
        this.test = {};
        this.questions = {};
        this.questionsData = [];
        this.questionItems = {};
        this.index = 0;
        this.test = navParams.get("test") ? navParams.get("test") : "";
        this.questionData = this.test.questions;
        this.loadQuestion(0);
    }
    FlashCardPage.prototype.ionViewDidLoad = function () {
    };
    FlashCardPage.prototype.remove_linebreaks = function (str) {
        return str.replace(/\\r\\n/g, "");
    };
    /**
     * Load Question by Index
     * @param i
     */
    FlashCardPage.prototype.loadQuestion = function (i) {
        if (i < this.questionData.length) {
            this.questionItems = this.questionData[i].question;
        }
    };
    FlashCardPage.prototype.presentReportModal = function () {
        var _this = this;
        if (this.questionItems) {
            var modalOptions = {
                cssClass: "uc-report-modal",
                enableBackdropDismiss: false
            };
            var reportModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__reportmodal_reportmodal__["a" /* ReportmodalPage */], { question: this.questionItems }, modalOptions);
            reportModal.onDidDismiss(function (data) {
                if (data) {
                    _this.messages.showToast("Successfull reported", undefined, "toast-success");
                }
            });
            reportModal.present();
        }
    };
    FlashCardPage.prototype.onQuestionAttempted = function () {
        var _this = this;
        var modalOptions = {
            cssClass: "uc-report-modal",
            enableBackdropDismiss: false
        };
        var rs = {
            questions: this.questionData,
            answers: this.result
        };
        var attemptmodal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__question_attempted_question_attempted__["a" /* QuestionAttemptedModalPage */], { data: rs }, modalOptions);
        attemptmodal.onDidDismiss(function (data) {
            if (data) {
                //  console.log (data);
                _this.index = data - 1;
                _this.loadQuestion(_this.index);
            }
        });
        attemptmodal.present();
    };
    FlashCardPage.prototype.onPrev = function () {
        if (this.index > 0) {
            this.index = this.index - 1;
            this.loadQuestion(this.index);
        }
    };
    /**
     * Submit Answer
     */
    FlashCardPage.prototype.onNext = function () {
        if (this.index < this.questionData.length) {
            this.index = this.index + 1;
            this.loadQuestion(this.index);
        }
    };
    FlashCardPage.prototype.onCompleted = function () {
        this.navCtrl.pop();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Content"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Content"])
    ], FlashCardPage.prototype, "content", void 0);
    FlashCardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-flash-card",template:/*ion-inline-start:"D:\IONIC\app_v1.72\03\src\pages\flash-card\flash-card.html"*/'<ion-content >\n\n<ion-navbar>\n\n  <ion-title>Flashcards</ion-title>\n\n  <ion-buttons end>\n\n  </ion-buttons>\n\n</ion-navbar>\n\n\n\n<ion-card>\n\n  \n\n<ion-card-header>\n\n  \n\n</ion-card-header> \n\n\n\n<ion-card-content #content padding>\n\n  <div class="question-content" *ngIf="index + 1 <= questionData.length">\n\n    <div class="question-name"><div [innerHtml]="remove_linebreaks(questionItems.name)"></div></div>\n\n    \n\n      <ion-item text-wrap  [class.list-option]="option.is_correct != 1" [class.list-success]="option.is_correct == 1"\n\n        *ngFor="let option of questionItems.answers; let i = index" color="white" >\n\n        <ion-icon  *ngIf="option.is_correct != 1" item-end></ion-icon>\n\n        <ion-icon  color="white" *ngIf="option.is_correct == 1" item-end ></ion-icon>\n\n        <ion-label>{{option.answer}}</ion-label>\n\n      </ion-item>\n\n      <div></div>\n\n      <button ion-button color="danger" (click)="presentReportModal()"> Report Question </button>\n\n  </div>\n\n\n\n  <ng-container *ngIf="index + 1 > questionData.length">\n\n    <ion-item class="list-result">\n\n      <ion-icon color="success" ios="ios-checkmark-circle-outline" md="ios-checkmark-circle-outline"></ion-icon>\n\n      <h4 class="list-result-title ">\n\n        Congratulations! You have finished viewing flashcards successfully.\n\n      </h4>\n\n    </ion-item>\n\n  </ng-container>\n\n\n\n</ion-card-content>\n\n</ion-card>\n\n\n\n</ion-content>\n\n<ion-footer>\n\n\n\n  <ion-grid>\n\n        <ion-row *ngIf="index + 1 <= questionData.length">\n\n      <ion-col col-5>\n\n        <button type="button" class="square" no-margin ion-button block color="primary" (click)="onPrev()">Prev</button>\n\n      </ion-col>\n\n      <ion-col col-2>\n\n        <button type="button" class="square" no-margin ion-button block color="gray"\n\n          (click)="onQuestionAttempted()">\n\n          {{index + 1}}/{{questionData.length}} \n\n        </button>\n\n      </ion-col>\n\n      <ion-col col-5>\n\n        <button class="square" no-margin ion-button block color="primary" (click)="onNext()">Next</button>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n\n\n    <ion-row *ngIf="index + 1 > questionData.length">\n\n      <ion-col>\n\n        <button class="square" no-margin ion-button block color="success" (click)="onCompleted()">Home</button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n</ion-footer>\n\n\n\n'/*ion-inline-end:"D:\IONIC\app_v1.72\03\src\pages\flash-card\flash-card.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_3__services_messages_service__["a" /* MessagesServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"]])
    ], FlashCardPage);
    return FlashCardPage;
}());

//# sourceMappingURL=flash-card.js.map

/***/ }),

/***/ 385:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__constants_regex__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_auth_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_messages_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_privacy_privacy__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_terms_terms__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










// import { IonicSelectableComponent } from "ionic-selectable";
var SignupPage = /** @class */ (function () {
    function SignupPage(navCtrl, formBuilder, auth, storage, messages) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.auth = auth;
        this.storage = storage;
        this.messages = messages;
        this.isFormSubmitted = false;
        this.login = __WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */];
        this.selectCountryExt = '';
        this.ischangePicture = false;
        this.imgData = [
            {
                id: 1,
                url: 'assets/images/avatar/1.png'
            },
            {
                id: 2,
                url: 'assets/images/avatar/2.png'
            },
            {
                id: 3,
                url: 'assets/images/avatar/3.png'
            },
            {
                id: 4,
                url: 'assets/images/avatar/4.png'
            },
            {
                id: 5,
                url: 'assets/images/avatar/5.png'
            },
            {
                id: 6,
                url: 'assets/images/avatar/6.png'
            },
            {
                id: 7,
                url: 'assets/images/avatar/7.png'
            },
            {
                id: 8,
                url: 'assets/images/avatar/8.png'
            },
            {
                id: 9,
                url: 'assets/images/avatar/9.png'
            },
            {
                id: 10,
                url: 'assets/images/avatar/10.png'
            },
            {
                id: 11,
                url: 'assets/images/avatar/11.png'
            },
            {
                id: 12,
                url: 'assets/images/avatar/12.png'
            }
        ];
        this.storage.get('profile')
            .then(function (data) {
            _this.myProfile = data;
        });
        this.registerForm = this.formBuilder.group({
            profile_pic: [
                "image",
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_5__constants_regex__["a" /* Regex */].AlphaNumberic),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].minLength(3),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].maxLength(30)
                ])
            ],
            name: [
                "",
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_5__constants_regex__["a" /* Regex */].AlphaNumberic),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].minLength(3),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].maxLength(30)
                ])
            ],
            email: [
                "",
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_5__constants_regex__["a" /* Regex */].Email),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].maxLength(100)
                ])
            ],
            password: [
                "",
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].minLength(6),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].maxLength(20)
                ])
            ],
            password_confirmation: [
                "",
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].minLength(6),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].maxLength(20),
                    this.equalto("password")
                ])
            ],
            phone_number: [
                "",
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_5__constants_regex__["a" /* Regex */].Number),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].minLength(10),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].maxLength(10)
                ])
            ],
            referred_by: [
                "",
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].pattern(''),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].maxLength(100)
                ])
            ]
        });
    }
    SignupPage.prototype.changePicture = function () {
        this.ischangePicture = !this.ischangePicture;
    };
    SignupPage.prototype.setProfileImage = function (val) {
        this.storage.set('profile', val);
        this.myProfile = val;
    };
    SignupPage.prototype.getProfileImage = function () {
        this.storage.get('profile')
            .then(function (data) {
            return data;
        });
    };
    SignupPage.prototype.ionViewDidLoad = function () {
        this.isFormSubmitted = false;
        this.registerForm
            .get("name")
            .setValidators(__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].compose([
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required,
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_5__constants_regex__["a" /* Regex */].AlphaNumberic),
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].minLength(3),
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].maxLength(30)
        ]));
        this.registerForm
            .get("email")
            .setValidators(__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].compose([
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required,
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_5__constants_regex__["a" /* Regex */].Email),
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].maxLength(100)
        ]));
        this.registerForm
            .get("password")
            .setValidators(__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].compose([
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required,
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].minLength(6),
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].maxLength(20)
        ]));
        this.registerForm
            .get("password_confirmation")
            .setValidators(__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].compose([
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required,
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].minLength(6),
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].maxLength(20),
            this.equalto("password")
        ]));
        this.registerForm
            .get("phone_number")
            .setValidators(__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].compose([
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required,
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_5__constants_regex__["a" /* Regex */].Number),
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].minLength(10),
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].maxLength(10)
        ]));
        this.registerForm
            .get("referred_by")
            .setValidators(__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].compose([
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].pattern(''),
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].maxLength(100)
        ]));
    };
    SignupPage.prototype.equalto = function (field_name) {
        return function (control) {
            var input = control.value;
            var isValid = control.root.value[field_name] == input;
            if (!isValid)
                return { equalTo: { isValid: isValid } };
            else
                return null;
        };
    };
    SignupPage.prototype.numberOnly = function (event) {
        var charCode = event.which ? event.which : event.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
        return true;
    };
    SignupPage.prototype.onSignup = function () {
        var _this = this;
        this.isFormSubmitted = true;
        if (this.registerForm.valid) {
            this.avatar$ = this.storage.get('profile');
            var self_1 = this;
            this.avatar$.then(function (val) { return self_1.avatar = val; });
            this.registerForm.value.profile_pic = this.myProfile.url;
            this.messages.showLoader();
            this.auth.register(this.registerForm.value).subscribe(function (data) {
                //  console.log(data)
                _this.messages.hideLoader();
                _this.messages.showToast("User registraion successfully", undefined, "toast-success");
                if (!data.error) {
                    _this.navCtrl.pop();
                }
            }, function (err) {
                _this.messages.hideLoader();
                _this.messages.showToast(err.error.errors[Object.keys(err.error.errors)[0]].join(', '), undefined, "toast-danger");
            });
        }
    };
    SignupPage.prototype.goToPrivacy = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__pages_privacy_privacy__["a" /* PrivacyPage */]);
    };
    SignupPage.prototype.goToTos = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__pages_terms_terms__["a" /* TermsPage */]);
    };
    SignupPage.prototype.isFieldValid = function (fieldValue) {
        if (fieldValue) {
            return true;
        }
        return false;
    };
    SignupPage.prototype.forgetPassword = function () { };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-user",template:/*ion-inline-start:"D:\IONIC\app_v1.72\03\src\pages\signup\signup.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Law Today</ion-title>   \n  </ion-navbar>\n</ion-header>\n<ion-content class="login-page registration-section-bg">\n  <div class="section registration-section">\n    <form [formGroup]="registerForm" novalidate (ngSubmit)="onSignup()">\n      <ion-row>\n        <ion-col col-12 text-center>\n            <img class="user-pic" [src]="myProfile? myProfile.url :\'assets/images/user_pic.png\'" />\n            <p class="text-white">Select Profile Picture</p>\n            <ion-scroll class="story" scrollX="true">\n              <div class="story_scroll" *ngFor="let item of imgData" (click)="setProfileImage(item)">\n                <div class="story_img_bg">\n                  <img no-margin no-padding class="story_img profile-bg-color" [src]="item.url" alt=""\n                    [class.active]="item.id == (myProfile ? myProfile.id :\'\')" />\n                </div>\n              </div>\n            </ion-scroll>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col class="form-float-field">\n          <ion-item>\n            <ion-label color="primary" floating>Full Name</ion-label>\n            <ion-input formControlName="name" [class.error-box]="false" name="name" type="text" required>\n            </ion-input>\n          </ion-item>\n          <span class="error-msg"\n            [hidden]="!(registerForm.controls.name.hasError(\'required\') && (registerForm.controls[\'name\'].dirty || isFormSubmitted) && isFieldValid(\'name\'))">\n            Full Name is required.\n          </span>\n          <span class="error-msg"\n            [hidden]="!(registerForm.controls.name.hasError(\'minlength\') && (registerForm.controls[\'name\'].dirty || isFormSubmitted) && !registerForm.controls[\'name\'].errors?.required && !registerForm.controls.name.hasError(\'pattern\'))">\n            Full Name minimum length is 3.\n          </span>\n          <span class="error-msg"\n            [hidden]="!(registerForm.controls.name.hasError(\'maxlength\') && (registerForm.controls[\'name\'].dirty || isFormSubmitted) && !registerForm.controls[\'name\'].errors?.required && !registerForm.controls.name.hasError(\'pattern\'))">\n            Full Name maximum length is 30.\n          </span>\n          <span class="error-msg"\n            [hidden]="!(registerForm.controls.name.hasError(\'pattern\') && (registerForm.controls[\'name\'].dirty || isFormSubmitted) && !registerForm.controls[\'name\'].errors?.required)">\n            Please enter alphabets only.\n          </span>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col class="form-float-field">\n          <ion-item>\n            <ion-label color="primary" floating>Email Address</ion-label>\n            <ion-input [class.error-box]="false" formControlName="email" name="email" type="email" required>\n            </ion-input>\n          </ion-item>\n          <span class="error-msg"\n            [hidden]="!(registerForm.controls[\'email\'].errors?.required && (registerForm.controls[\'email\'].dirty || isFormSubmitted) &&  isFieldValid(\'email\'))">\n            Email address is required.\n          </span>\n          <span class="error-msg"\n            [hidden]="!(registerForm.controls.email.hasError(\'maxlength\') && (registerForm.controls[\'email\'].dirty || isFormSubmitted) && !registerForm.controls[\'email\'].errors?.required && !registerForm.controls.email.hasError(\'pattern\'))">\n            Email address maximum length is 100.\n          </span>\n          <span class="error-msg"\n            [hidden]="!(registerForm.controls.email.hasError(\'pattern\') && (registerForm.controls[\'email\'].dirty || isFormSubmitted) && !registerForm.controls[\'email\'].errors?.required)">\n            Please enter valid email address.\n          </span>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col class="form-float-field">\n          <ion-item>\n            <ion-label color="primary" floating>Password</ion-label>\n            <ion-input formControlName="password" [class.error-box]="false" name="password" type="password" required>\n            </ion-input>\n          </ion-item>\n          <span class="error-msg"\n            [hidden]="!(registerForm.controls[\'password\'].errors?.required && (registerForm.controls[\'password\'].dirty || isFormSubmitted)  &&  isFieldValid(\'password\'))">\n            Password is required.\n          </span>\n          <span class="error-msg"\n            [hidden]="!(registerForm.controls.password.hasError(\'minlength\') && (registerForm.controls[\'password\'].dirty || isFormSubmitted) && !registerForm.controls[\'password\'].errors?.required)">\n            Password minimum length is 6.\n          </span>\n          <span class="error-msg"\n            [hidden]="!(registerForm.controls.password.hasError(\'maxlength\') && (registerForm.controls[\'password\'].dirty || isFormSubmitted) && !registerForm.controls[\'password\'].errors?.required)">\n            Password maximum length is 20.\n          </span>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col class="form-float-field">\n          <ion-item>\n            <ion-label floating>Confirm Password</ion-label>\n            <ion-input formControlName="password_confirmation" [class.error-box]="false" name="password_confirmation"\n              type="password" required></ion-input>\n            <ion-icon item-end [name]="passwordIcon" class="passwordIcon" (click)=\'hideShowPassword()\'></ion-icon>\n          </ion-item>\n          <span class="error-msg"\n            [hidden]="!(registerForm.controls[\'password_confirmation\'].errors?.required && (registerForm.controls[\'password_confirmation\'].dirty || isFormSubmitted)  &&  isFieldValid(\'password_confirmation\'))">\n            Confirm Password is required\n          </span>\n          <span class="error-msg"\n            [hidden]="!(registerForm.controls.password_confirmation.hasError(\'minlength\') && (registerForm.controls[\'password_confirmation\'].dirty || isFormSubmitted) && !registerForm.controls[\'password_confirmation\'].errors?.required)">\n            Confirm Password minimum length is 6\n          </span>\n          <span class="error-msg"\n            [hidden]="!(registerForm.controls.password_confirmation.hasError(\'maxlength\') && (registerForm.controls[\'password_confirmation\'].dirty || isFormSubmitted) && !registerForm.controls[\'password_confirmation\'].errors?.required)">\n            Confirm Password maximum length is 20\n          </span>\n          <span class="error-msg"\n            [hidden]="!(registerForm.controls.password_confirmation.hasError(\'equalTo\') && (registerForm.controls[\'password_confirmation\'].dirty || isFormSubmitted) && !registerForm.controls[\'password_confirmation\'].errors?.required && !registerForm.controls.password_confirmation.hasError(\'minlength\') && !registerForm.controls.password_confirmation.hasError(\'maxlength\'))">\n            Password & Confirm Password should be same\n          </span>\n        </ion-col>\n      </ion-row>\n\n\n      <ion-row>\n        <ion-col col-12 class="form-float-field">\n          <ion-item>\n            <ion-label color="primary" floating>Phone</ion-label>\n            <ion-input formControlName="phone_number" [class.error-box]="false" name="phone_number" type="number"\n              required>\n            </ion-input>\n          </ion-item>\n          <span class="error-msg"\n            [hidden]="!(registerForm.controls[\'phone_number\'].errors?.required && (registerForm.controls[\'phone_number\'].dirty || isFormSubmitted)  &&  isFieldValid(\'phone_number\'))">\n            Phone is required.\n          </span>\n          <span class="error-msg"\n            [hidden]="!(registerForm.controls.phone_number.hasError(\'minlength\') && (registerForm.controls[\'phone_number\'].dirty || isFormSubmitted) && !registerForm.controls[\'phone_number\'].errors?.required && !registerForm.controls.phone_number.hasError(\'pattern\'))">\n            Phone minimum length is 10.\n          </span>\n          <span class="error-msg"\n            [hidden]="!(registerForm.controls.phone_number.hasError(\'maxlength\') && (registerForm.controls[\'phone_number\'].dirty || isFormSubmitted) && !registerForm.controls[\'phone_number\'].errors?.required && !registerForm.controls.phone_number.hasError(\'pattern\'))">\n            Phone maximum length is 10.\n          </span>\n          <span class="error-msg"\n            [hidden]="!(registerForm.controls.phone_number.hasError(\'pattern\') && (registerForm.controls[\'phone_number\'].dirty || isFormSubmitted) && !registerForm.controls[\'phone_number\'].errors?.required)">\n            Please enter number only.\n          </span>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col class="form-float-field">\n          <ion-item>\n            <ion-label color="primary" floating>Referral Code</ion-label>\n            <ion-input [class.error-box]="false" formControlName="referred_by" name="referred_by" type="referred_by">\n            </ion-input>\n          </ion-item>\n         \n        </ion-col>\n      </ion-row>\n\n      <ion-item no-lines text-wrap no-padding class="custom-checkbox no-bg">\n        <ion-label class="btn-terms text-white">I accept the <span color ="primary" (click)="goToTos()">Terms of Services</span> and <span color ="primary" (click)="goToPrivacy()">Privacy\n            policy</span>\n        </ion-label>\n      </ion-item>\n\n      <ion-row margin-top align-items-center>\n        <ion-col col-12 text-left>\n          <button block ion-button color="primary" type="submit">Sign up</button>\n        </ion-col>\n      </ion-row>\n\n    </form>\n    <ion-row>\n      <ion-col col-12 text-center>\n        <ion-label class="btn-link btn-signup" no-margin [navPush]="login">\n          <span class="text-white">Already have an account?</span>&nbsp;<strong>Log In</strong>\n        </ion-label>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-content>\n'/*ion-inline-end:"D:\IONIC\app_v1.72\03\src\pages\signup\signup.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_6__services_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_7__services_messages_service__["a" /* MessagesServiceProvider */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 386:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants_regex__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_messages_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__change_password_change_password__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_auth_service__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ForgotPasswordPage = /** @class */ (function () {
    function ForgotPasswordPage(navCtrl, navParams, auth, messages, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.messages = messages;
        this.formBuilder = formBuilder;
        this.loginpage = __WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */];
        this.changepasswordpage = __WEBPACK_IMPORTED_MODULE_6__change_password_change_password__["a" /* ChangePasswordPage */];
        this.isFormSubmitted = false;
        this.isOtpFormSubmitted = false;
        this.isForgotPassForm = true;
        this.isOtpForm = false;
        this.forgotPassForm = this.formBuilder.group({
            email: [
                "",
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_4__constants_regex__["a" /* Regex */].Email),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].maxLength(100)
                ])
            ]
        });
        this.otpForm = this.formBuilder.group({
            otp: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required])],
            email: [""]
        });
    }
    ForgotPasswordPage.prototype.ionViewDidLoad = function () {
    };
    ForgotPasswordPage.prototype.isFieldValid = function (fieldValue) {
        if (fieldValue) {
            return true;
        }
        return false;
    };
    ForgotPasswordPage.prototype.onForgotSubmit = function () {
        var _this = this;
        this.isFormSubmitted = true;
        if (this.forgotPassForm.valid) {
            this.messages.showLoader();
            this.userIdentity = this.forgotPassForm.value.email;
            this.auth.SendOtp(this.forgotPassForm.value).subscribe(function (data) {
                _this.messages.hideLoader();
                if (!data.error) {
                    _this.messages.showToast(data.message, undefined, "toast-success");
                    _this.isForgotPassForm = false;
                    _this.isOtpForm = true;
                }
                else {
                    _this.messages.showToast(data.error.message, undefined, "toast-danger");
                }
            }, function (err) {
                _this.messages.hideLoader();
                // this.messages.showToast(err.error.errors[Object.keys(err.error.errors)[0]].join(', '), undefined, "toast-danger");
            });
        }
        else {
            this.messages.hideLoader();
        }
    };
    ForgotPasswordPage.prototype.onOtpFormSubmit = function () {
        var _this = this;
        this.isOtpFormSubmitted = true;
        if (this.otpForm.valid) {
            this.messages.showLoader();
            this.otpForm.value.email = this.userIdentity;
            this.auth.VerifyOtp(this.otpForm.value).subscribe(function (data) {
                _this.messages.hideLoader();
                _this.messages.showToast(data.message, undefined, "toast-success");
                _this.isForgotPassForm = false;
                _this.isOtpForm = true;
                _this.navCtrl.pop();
                _this.navCtrl.push(_this.changepasswordpage, {
                    user_identity: _this.userIdentity
                });
            }, function (err) {
                _this.messages.hideLoader();
                _this.messages.showToast('Please enter correct OTP', undefined, "toast-danger");
            });
        }
        else {
            this.messages.hideLoader();
        }
    };
    ForgotPasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-forgot-password",template:/*ion-inline-start:"D:\IONIC\app_v1.72\03\src\pages\forgot-password\forgot-password.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Forgot Password</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content no-padding class="forgot-section-bg">\n  <div class="section forgot-section">\n    <ion-row margin-vertical>\n      <ion-col text-center>\n        <img class="logo" src="assets/images/logo.png" alt="logo">\n      </ion-col>\n    </ion-row>\n    <form [formGroup]="forgotPassForm" novalidate *ngIf="isForgotPassForm" (ngSubmit)="onForgotSubmit()">\n      <ion-row>\n        <ion-col class="form-float-field">\n          <ion-item>\n            <ion-label color="primary" floating>Email Address</ion-label>\n            <ion-input [class.error-box]="false" formControlName="email" name="email" type="email" required></ion-input>\n          </ion-item>\n          <span class="error-msg"\n            [hidden]="!(forgotPassForm.controls[\'email\'].errors?.required && (forgotPassForm.controls[\'email\'].dirty || isFormSubmitted) &&  isFieldValid(\'email\'))">\n            Email address is required.\n          </span>\n          <span class="error-msg"\n            [hidden]="!(forgotPassForm.controls.email.hasError(\'maxlength\') && (forgotPassForm.controls[\'email\'].dirty || isFormSubmitted) && !forgotPassForm.controls[\'email\'].errors?.required && !forgotPassForm.controls.email.hasError(\'pattern\'))">\n            Email address maximum length is 100.\n          </span>\n          <span class="error-msg"\n            [hidden]="!(forgotPassForm.controls.email.hasError(\'pattern\') && (forgotPassForm.controls[\'email\'].dirty || isFormSubmitted) && !forgotPassForm.controls[\'email\'].errors?.required)">\n            Please enter valid email address.\n          </span>\n        </ion-col>\n      </ion-row>\n      <ion-row margin-vertical align-items-center>\n        <ion-col col-12 text-left>\n          <button block ion-button color="primary" type="submit">Submit</button>\n        </ion-col>\n      </ion-row>\n\n    </form>\n    <form [formGroup]="otpForm" *ngIf="isOtpForm" novalidate (ngSubmit)="onOtpFormSubmit()">\n      <ion-row>\n        <ion-col col-12>\n          <p class="text text-info">\n            We have sent a 4 digit OTP to your registered email address. Please enter your OTP -\n          </p>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col class="form-float-field">\n          <ion-item>\n            <ion-label color="primary" floating>Otp</ion-label>\n            <ion-input [class.error-box]="false" formControlName="otp" name="otp" type="text" required></ion-input>\n          </ion-item>\n          <span class="error-msg"\n            [hidden]="!(otpForm.controls[\'otp\'].errors?.required && (otpForm.controls[\'otp\'].dirty || isOtpFormSubmitted) &&  isFieldValid(\'otp\'))">\n            OTP is required.\n          </span>\n        </ion-col>\n      </ion-row>\n      <ion-row margin-vertical align-items-center>\n        <ion-col col-12 text-left>\n          <button block ion-button color="primary" type="submit">Submit</button>\n        </ion-col>\n      </ion-row>\n    </form>\n  </div>\n</ion-content>\n'/*ion-inline-end:"D:\IONIC\app_v1.72\03\src\pages\forgot-password\forgot-password.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_7__services_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_5__services_messages_service__["a" /* MessagesServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], ForgotPasswordPage);
    return ForgotPasswordPage;
}());

//# sourceMappingURL=forgot-password.js.map

/***/ }),

/***/ 387:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExamNotificationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__exam_notification_detail_exam_notification_detail__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_messages_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_bookmark_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ExamNotificationPage = /** @class */ (function () {
    function ExamNotificationPage(navCtrl, navParams, storage, notificationService, messages) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.notificationService = notificationService;
        this.messages = messages;
        this.notificationData = [];
        this.getNotificationData();
    }
    ExamNotificationPage.prototype.ionViewDidLoad = function () {
    };
    ExamNotificationPage.prototype.getNotificationData = function () {
        var _this = this;
        this.messages.showLoader();
        this.notificationService.getNotifications().subscribe(function (response) {
            _this.messages.hideLoader();
            if (!response.error) {
                _this.notificationData = response;
            }
        }, function (err) {
            if (err.status == 401) {
                if (_this.storage.remove("userInfo") ||
                    _this.storage.remove("name") ||
                    _this.storage.remove("email") ||
                    _this.storage.remove("role")) {
                    _this.storage.remove("userInfo");
                    _this.storage.remove("name");
                    _this.storage.remove("email");
                    _this.storage.remove("role");
                    _this.storage.remove("isSubscribed");
                }
                _this.messages.showToast("Force Logout due to multiple device login.", undefined, "toast-danger");
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */]);
            }
            _this.messages.hideLoader();
        });
    };
    ExamNotificationPage.prototype.goToExamDetail = function (val) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__exam_notification_detail_exam_notification_detail__["a" /* ExamNotificationDetailPage */], { data: val });
    };
    ExamNotificationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-exam-notification",template:/*ion-inline-start:"D:\IONIC\app_v1.72\03\src\pages\exam-notification\exam-notification.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Exam Notifications</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ng-container *ngIf="notificationData.length <= 0">\n    <ion-item class="list-result">\n      <ion-icon color="grey" ios="ios-alert-outline" md="ios-alert-outline"></ion-icon>\n      <p>No notification yet!</p>\n    </ion-item>\n  </ng-container>\n\n  <ng-container *ngIf="notificationData.length > 0">\n    <ion-item *ngFor="let item of notificationData" (click)="goToExamDetail(item)" text-wrap>\n      <ion-icon item-start ios="ios-notifications" md="md-notifications" color="danger"></ion-icon>\n      <p> {{item.title}}</p>\n      <ion-icon item-end ios="ios-arrow-forward" md="ios-arrow-forward"></ion-icon>\n    </ion-item>\n  </ng-container>\n</ion-content>\n'/*ion-inline-end:"D:\IONIC\app_v1.72\03\src\pages\exam-notification\exam-notification.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_5__services_bookmark_service__["a" /* BookmarkServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_4__services_messages_service__["a" /* MessagesServiceProvider */]])
    ], ExamNotificationPage);
    return ExamNotificationPage;
}());

//# sourceMappingURL=exam-notification.js.map

/***/ }),

/***/ 388:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaximsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__exam_notification_detail_exam_notification_detail__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__ = __webpack_require__(75);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MaximsPage = /** @class */ (function () {
    function MaximsPage(navParams, navCtrl, iab) {
        this.navParams = navParams;
        this.navCtrl = navCtrl;
        this.iab = iab;
        this.misc1 = navParams.get("data") ? navParams.get("data") : "";
        this.misc = this.misc1.title;
        // console.log(this.misc)
        this.initializemaxims();
        this.initializestate();
    }
    MaximsPage.prototype.goToExamDetail = function (val) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__exam_notification_detail_exam_notification_detail__["a" /* ExamNotificationDetailPage */], { data: val });
    };
    MaximsPage.prototype.initializestate = function () {
        this.states = [
            {
                "img": "assam-min.png",
                "title": "Assam Syllabus",
                "pdf": "https://lawtoday.co.in/assets/syllabus/assam.pdf"
            },
            {
                "img": "bihar-min.png",
                "title": "Bihar Syllabus",
                "pdf": "https://lawtoday.co.in/assets/syllabus/bihar.pdf"
            },
            {
                "img": "chhattisgarh-min.png",
                "title": "Chhattisgarh Syllabus",
                "pdf": "https://lawtoday.co.in/assets/syllabus/chhattisgarh.pdf"
            },
            {
                "img": "delhi-min.png",
                "title": "Delhi Syllabus",
                "pdf": "https://lawtoday.co.in/assets/syllabus/delhi.pdf"
            },
            {
                "img": "gujarat-min.png",
                "title": "Gujarat Syllabus",
                "pdf": "https://lawtoday.co.in/assets/syllabus/gujarat.pdf"
            },
            {
                "img": "haryana-min.png",
                "title": "Haryana Syllabus",
                "pdf": "https://lawtoday.co.in/assets/syllabus/haryana.pdf"
            },
            {
                "img": "hp-min.png",
                "title": "Himachal Pradesh Syllabus",
                "pdf": "https://lawtoday.co.in/assets/syllabus/hp.pdf"
            },
            {
                "img": "jharkhand-min.png",
                "title": "Jharkhand Syllabus",
                "pdf": "https://lawtoday.co.in/assets/syllabus/jharkhand.pdf"
            },
            {
                "img": "kerala-min.png",
                "title": "Kerala Syllabus",
                "pdf": "https://lawtoday.co.in/assets/syllabus/kerala.pdf"
            },
            {
                "img": "maharashtra-min.png",
                "title": "Maharashtra Syllabus",
                "pdf": "https://lawtoday.co.in/assets/syllabus/maharashtra.pdf"
            },
            {
                "img": "manipur-min.png",
                "title": "Manipur Syllabus",
                "pdf": "https://lawtoday.co.in/assets/syllabus/manipur.pdf"
            },
            {
                "img": "mp-min.png",
                "title": "Madhya Pradesh Syllabus",
                "pdf": "https://lawtoday.co.in/assets/syllabus/mp.pdf"
            },
            {
                "img": "orissa-min.png",
                "title": "Orissa Syllabus",
                "pdf": "https://lawtoday.co.in/assets/syllabus/orissa.pdf"
            },
            {
                "img": "punjab-min.png",
                "title": "Punjab Syllabus",
                "pdf": "https://lawtoday.co.in/assets/syllabus/punjab.pdf"
            },
            {
                "img": "rajasthan-min.png",
                "title": "Rajasthan Syllabus",
                "pdf": "https://lawtoday.co.in/assets/syllabus/rajasthan.pdf"
            },
            {
                "img": "tamilnadu-min.png",
                "title": "Tamil Nadu Syllabus",
                "pdf": "https://lawtoday.co.in/assets/syllabus/tamilnadu.pdf"
            },
            {
                "img": "up-min.png",
                "title": "Uttar Pradesh Syllabus",
                "pdf": "https://lawtoday.co.in/assets/syllabus/up.pdf"
            },
            {
                "img": "uttarakhand-min.png",
                "title": "Uttarakhand Syllabus",
                "pdf": "https://lawtoday.co.in/assets/syllabus/uttarakhand.pdf"
            }
        ];
    };
    MaximsPage.prototype.initializemaxims = function () {
        this.maxims = [
            {
                "img": "1.png",
                "title": "(In) Arguendo",
                "content": "For The Sake Of Argument."
            },
            {
                "img": "2.png",
                "title": "A Fortiori",
                "content": "From Stronger. An A Fortiori Argument Is An 'Argument From A Stronger Reason, Meaning That, Because One Fact Is True, A Second (Related And Included) Fact Must Also Be True."
            },
            {
                "img": "3.png",
                "title": "A Mensa Et Thoro",
                "content": "From Table And Bed. Divorce A Mensa Et Thoro Indicates Legal Separation Without Legal Divorce."
            },
            {
                "img": "4.png",
                "title": "A Posteriori",
                "content": "From Later. An Argument Derived From Subsequent Event."
            },
            {
                "img": "5.png",
                "title": "A Priori",
                "content": "From Earlier. An Argument Derived From Previous Event."
            },
            {
                "img": "6.png",
                "title": "A Quo",
                "content": "From Which. Regarding A Court Below In An Appeal, Either A Court Of First Instance Or An Appellate Court, Known As The Court A Quo."
            },
            {
                "img": "7.png",
                "title": "A Vinculo Matrimonii ",
                "content": "From The Bond Of Matrimony."
            },
            {
                "img": "8.png",
                "title": "Ab Extra",
                "content": "From Outside. Concerning A Case, A Person May Have Received Some Funding From A 3Rd Party. This Funding May Have Been Considered Ab Extra."
            },
            {
                "img": "1.png",
                "title": "Ab Initio",
                "content": "From The Beginning. Commonly Used Referring To The Time A Contract, Statute, Marriage, Or Deed Become Legal. E.G The Couple Was Covered Ab Initio By Her Health Policy."
            },
            {
                "img": "2.png",
                "title": "Ab Initio ",
                "content": "From The Beginning."
            },
            {
                "img": "3.png",
                "title": "Absoluta Sententia Expositore Non Indiget ",
                "content": "An Absolute Judgment Needs No Expositor."
            },
            {
                "img": "4.png",
                "title": "Absque Hoc",
                "content": "Without This. Presenting The Negative Portion Of A Plea When Pleading At Common By Way A Special Traverse."
            },
            {
                "img": "5.png",
                "title": "Abundans Cautela Non Nocet ",
                "content": "Abundant Caution Does No Harm."
            },
            {
                "img": "6.png",
                "title": "Accessorium Non Ducit Sed Sequitur Suum Principale ",
                "content": "An Accessory Does Not Draw, But Follows Its Principal."
            },
            {
                "img": "7.png",
                "title": "Accessorius Sequitur ",
                "content": "One Who Is An Accessory To The Crime Cannot Be Guilty Of A More Serious Crime Than The Principal Offender."
            },
            {
                "img": "8.png",
                "title": "Acta Exteriora Iudicant Interiora Secreta ",
                "content": "Outward Acts Indicate The Inward Intent."
            },
            {
                "img": "1.png",
                "title": "Actio Non Accrevit Infra Sex Annos ",
                "content": "The Action Has Not Accrued Within Six Years."
            },
            {
                "img": "2.png",
                "title": "Actio Non Datur Non Damnificato ",
                "content": "An Action Is Not Given To One Who Is Not Injured."
            },
            {
                "img": "3.png",
                "title": "Actio Personalis Moritur Cum Persona ",
                "content": "A Personal Action Dies With The Person."
            },
            {
                "img": "4.png",
                "title": "Actiones Legis ",
                "content": "Law Suits."
            },
            {
                "img": "5.png",
                "title": "Actori Incumbit Onus Probatio",
                "content": "On The Plaintiff Rests The Proving. The Burden Of Proof Falls To The Plaintiff, Claimant, Or Petitioner According To Roman Law."
            },
            {
                "img": "6.png",
                "title": "Actus Nemini Facit Injuriam ",
                "content": "The Act Of The Law Does No One Wrong."
            },
            {
                "img": "7.png",
                "title": "Actus Non Facit Reum Nisi Mens Sit Rea ",
                "content": "The Act Does Not Make One Guilty Unless There Be A Criminal Intent."
            },
            {
                "img": "8.png",
                "title": "Actus Reus",
                "content": "Guilty Act. Part Of What Proves Criminal Liability (With Mens Rea)."
            },
            {
                "img": "1.png",
                "title": "Ad Coelum",
                "content": "To The Sky. Abbreviated From Cuius Est Solum Eius Est Usque Ad Coelum Et Ad Infernos Which Translates To [For] Whoever Owns [The] Soil, [It] Is His All The Way [Up] To Heaven And [Down] To Hell. The Principle That The Owner Of A Parcel Of Land Also Owns The Air Above And The Ground Below The Parcel."
            },
            {
                "img": "2.png",
                "title": "Ad Colligenda Bona",
                "content": "To Collect The Goods."
            },
            {
                "img": "3.png",
                "title": "Ad Ea Quae Frequentius Acciduunt Jura Adaptantur ",
                "content": "The Laws Are Adapted To Those Cases Which Occur More Frequently."
            },
            {
                "img": "4.png",
                "title": "Ad Hoc",
                "content": "For This. Generally Signifies A Solution Designed For A Specific Problem Or Task, Non-Generalizable, And Not Intended To Be Able To Be Adapted To Other Purposes."
            },
            {
                "img": "5.png",
                "title": "Ad Hominem",
                "content": "At The Person. Attacking An Opponent'S Character Rather Than Answering His Argument."
            },
            {
                "img": "6.png",
                "title": "Ad Idem",
                "content": "To The Same Thing. In Agreement."
            },
            {
                "img": "7.png",
                "title": "Ad Infinitum",
                "content": "To Infinity. To Continue Forever."
            },
            {
                "img": "8.png",
                "title": "Ad Litem",
                "content": "For The Case. Describes Those Designated To Represent Parties Deemed Incapable Of Representing Themselves, Such As A Child Or Incapacitated Adult."
            },
            {
                "img": "1.png",
                "title": "Ad Perpetuam Rei Memoriam ",
                "content": "For A Perpetual Memorial Of The Matter."
            },
            {
                "img": "2.png",
                "title": "Ad Quaestionem Facti Non Respondent Judices; Ad Quaestionem Legis Non Respondent Juratores ",
                "content": "The Judges Do Not Answer To A Question Of Fact; The Jury Do Not Answer To A Question Of Law."
            },
            {
                "img": "3.png",
                "title": "Ad Quod Damnum",
                "content": "According To The Harm. Used In Tort Law. Implies That The Reward Or Penalty Ought To Correspond To The Damage Suffered Or Inflicted."
            },
            {
                "img": "4.png",
                "title": "Ad Valorem",
                "content": "According To Value."
            },
            {
                "img": "5.png",
                "title": "Adjournment Sine Die",
                "content": "Adjournment Without A Day. When An Assembly Adjourns Without Setting A Date For Its Next Meeting."
            },
            {
                "img": "6.png",
                "title": "Aedificare In Tuo Proprio Solo Non Licet Quod Alteri Noceat ",
                "content": "It Is Not Lawful To Build On One's Own Land What May Be Injurious To Another."
            },
            {
                "img": "7.png",
                "title": "Aequitas Legem Sequitur ",
                "content": "Equity Follows The Law."
            },
            {
                "img": "8.png",
                "title": "Aequitas Nunquam Contravenit Legem ",
                "content": "Equity Never Contradicts The Law."
            },
            {
                "img": "1.png",
                "title": "Affidavit",
                "content": "He Has Sworn. A Formal Statement Of Fact."
            },
            {
                "img": "2.png",
                "title": "Alibi ",
                "content": "At Another Place, Elsewhere."
            },
            {
                "img": "3.png",
                "title": "Alienatio Rei Praefertur Juri Accrescendi ",
                "content": "Alienation Is Preferred By Law Rather Than Accumulation."
            },
            {
                "img": "4.png",
                "title": "Aliunde ",
                "content": "From Elsewhere, Or, From A Different Source."
            },
            {
                "img": "5.png",
                "title": "Allegans Contraria Non Est Audiendus ",
                "content": "One Making Contradictory Statements Is Not To Be Heard."
            },
            {
                "img": "6.png",
                "title": "Allegans Suam Turpitudinem Non Est Audiendus ",
                "content": "One Alleging His Own Infamy Is Not To Be Heard."
            },
            {
                "img": "7.png",
                "title": "Allegatio Contra Factum Non Est Admittenda ",
                "content": "An Allegation Contrary To A Deed Is Not To Be Heard."
            },
            {
                "img": "8.png",
                "title": "Alter Ego",
                "content": "Another I. A Second Identity Living Within A Person."
            },
            {
                "img": "1.png",
                "title": "Ambiguitas Contra Stipulatorem Est ",
                "content": "An Ambiguity Is Most Strongly Construed Against The Party Using It."
            },
            {
                "img": "2.png",
                "title": "Ambiguitas Verborum Patens Nulla Verificatione Excluditur ",
                "content": "A Patent Ambiguity Is Never Helped By Averment."
            },
            {
                "img": "3.png",
                "title": "Amicus Curiae",
                "content": "Friend Of The Court. A Person Who Offers Information To A Court Regarding A Case Before It."
            },
            {
                "img": "4.png",
                "title": "Angliae Jura In Omni Casu Libertati Dant Favorem ",
                "content": "The Laws Of England Are Favorable In Every Case To Liberty."
            },
            {
                "img": "5.png",
                "title": "Animo Furandi ",
                "content": "With An Intention Of Stealing."
            },
            {
                "img": "6.png",
                "title": "Animo Testandi ",
                "content": "With An Intention Of Making A Will."
            },
            {
                "img": "7.png",
                "title": "Animus Contrahendi",
                "content": "Contractual Intent. Intention To Contract."
            },
            {
                "img": "8.png",
                "title": "Animus Nocendi",
                "content": "Intention To Harm. The Subjective State Of Mind Of The Author Of A Crime, With Reference To The Exact Knowledge Of Illegal Content Of His Behaviour, And Of Its Possible Consequences."
            },
            {
                "img": "1.png",
                "title": "Animus Possidendi",
                "content": "Intention To Possess. In Order To Claim Possessory Rights, An Individual Must Establish Physical Control Of The Res And The Intention To Possess (I.E. Animus Possidendi)"
            },
            {
                "img": "2.png",
                "title": "Animus Revertendi",
                "content": "Intention To Return. Wild Animals, Such As Bees And Homing Pigeons, That By Habit Go 'Home' To Their Possessor. Used When Discussing Ferae Naturae."
            },
            {
                "img": "3.png",
                "title": "Annus Luctus ",
                "content": "The Year Of Mourning."
            },
            {
                "img": "4.png",
                "title": "Ante",
                "content": "Before."
            },
            {
                "img": "5.png",
                "title": "Aqua Currit Et Debet Currere, Ut Currere Solebat ",
                "content": "Water Runs And Ought To Run."
            },
            {
                "img": "6.png",
                "title": "Arbitrium Est Judicium ",
                "content": "An Award Is A Judgment."
            },
            {
                "img": "7.png",
                "title": "Arbor Dum Crescit; Lignum Cum Crescere Nescit ",
                "content": "A Tree While It Grows, Wood When It Cannot Grow."
            },
            {
                "img": "8.png",
                "title": "Argumentum Ab Auctoritate Fortissimum Est In Lege ",
                "content": "An Argument Drawn From Authority Is The Strongest In Law."
            },
            {
                "img": "1.png",
                "title": "Argumentum Ab Impossibilii Plurimum Valet In Lege ",
                "content": "An Argument From Impossibility Is Very Strong In Law."
            },
            {
                "img": "2.png",
                "title": "Argumentum Ad Hominem ",
                "content": "An Argument Directed A The Person."
            },
            {
                "img": "3.png",
                "title": "Argumentum Ad Ignoratiam ",
                "content": "An Argument Based Upon Ignorance (I.E. Of One'S Adversary)."
            },
            {
                "img": "4.png",
                "title": "Arma In Armatos Sumere Jura Sinunt ",
                "content": "The Laws Permit The Taking Up Of Arms Against The Armed."
            },
            {
                "img": "5.png",
                "title": "Assentio Mentium ",
                "content": "The Meeting Of Minds, I.E. Mutual Assent."
            },
            {
                "img": "6.png",
                "title": "Assignatus Utitur Jure Auctoris ",
                "content": "An Assignee Is Clothed With Rights Of His Assignor."
            },
            {
                "img": "7.png",
                "title": "Audi Alteram Partem",
                "content": "Hear The Other Side. Refers To The Idea That One Cannot Be Fairly Judged Unless The Cases For And Against Them Have Been Heard."
            },
            {
                "img": "8.png",
                "title": "Aula Regis ",
                "content": "The King'S Court."
            },
            {
                "img": "1.png",
                "title": "Benignior Sententia In Verbis Generalibus Seu Dubiis Est Preferenda ",
                "content": "The More Favorable Construction Is To Be Placed On General Or Doubtful Words."
            },
            {
                "img": "2.png",
                "title": "Bis Dat Qui Cito Dat ",
                "content": "He Gives (Pays) Twice Who Pays Promptly. ."
            },
            {
                "img": "3.png",
                "title": "Bona Fide",
                "content": "In Good Faith. Implies Sincere Good Intention Regardless Of Outcome."
            },
            {
                "img": "4.png",
                "title": "Bona Vacantia",
                "content": "Ownerless Goods."
            },
            {
                "img": "5.png",
                "title": "Boni Judicis Est Ampliare Jurisdictionem ",
                "content": "It Is The Part Of A Good Judge To Enlarge His Jurisdiction, I.E. Remedial Authority."
            },
            {
                "img": "6.png",
                "title": "Boni Judicis Est Judicium Sine Dilatione Mandare Executioni ",
                "content": "It Is The Duty Of A Good Judge To Cause Execution To Issue On A Judgment Without Delay."
            },
            {
                "img": "7.png",
                "title": "Boni Judicis Lites Dirimere Est ",
                "content": "It Is The Duty Of A Good Judge To Prevent Litigation."
            },
            {
                "img": "8.png",
                "title": "Bonus Judex Secundum Aequum Et Bonum Judicat Et Aequitatem Stricto Juri Praefert ",
                "content": "A Good Judge Decides According To Justice And Right And Prefers Equity To Strict Law."
            },
            {
                "img": "1.png",
                "title": "Breve Judiciale Non Cadit Pro Defectu Formae ",
                "content": "A Judicial Writing Does Not Fail Through Defect Of Form."
            },
            {
                "img": "2.png",
                "title": "Cadit Quaestio",
                "content": "The Question Falls. Indicates That A Settlement To A Dispute Or Issue Has Been Reached, And The Issue Is Now Resolved."
            },
            {
                "img": "3.png",
                "title": "Cassetur Billa (Breve) ",
                "content": "Let The Writ Be Quashed."
            },
            {
                "img": "4.png",
                "title": "Casus Belli",
                "content": "Case Of War. The Justification For Acts Of War."
            },
            {
                "img": "5.png",
                "title": "Casus Fortuitus",
                "content": "Fortuitous Event. Force Majeure, Specifically A Man-Made Inevitable Accident (E.G. Riots, Strikes, Civil War); Ex: When H.M.S. Bounty Was Destroyed By Hurricane Sandy, October 29, 2012, Casus Fortuitus Would Describe The H.M.S. Bounty Being At The Wrong Place When Hurricane Sandy Came Up The Coast.Hms Bounty Sinks Compare Vis Major (See Below)."
            },
            {
                "img": "6.png",
                "title": "Casus Fortuitus Non Est Spectandus; Et Nemo Tenetur Divinare ",
                "content": "A Fortuitous Event Is Not To Be Foreseen And No Person Is Bound To Divine It."
            },
            {
                "img": "7.png",
                "title": "Catalla Reputantur Inter Minima In Lege ",
                "content": "Chattels Are Considered In Law Among The Minor Things."
            },
            {
                "img": "8.png",
                "title": "Causa Proxima, Non Remota Spectatur ",
                "content": "The Immediate, And Not The Remote Cause Is To Be Considered."
            },
            {
                "img": "1.png",
                "title": "Caveat",
                "content": "May He Beware. When Used By Itself, Refers To A Qualification, Or Warning."
            },
            {
                "img": "2.png",
                "title": "Caveat Emptor",
                "content": "Let The Buyer Beware. In Addition To The General Warning, Also Refers To A Legal Doctrine Wherein A Buyer Could Not Get Relief From A Seller For Defects Present On Property Which Rendered It Unfit For Use."
            },
            {
                "img": "3.png",
                "title": "Caveat Venditor ",
                "content": "Let The Seller Beware."
            },
            {
                "img": "4.png",
                "title": "Cepi Corpus Et Est Languidum ",
                "content": "I Have Taken The Body And The Prisoner Is Sick."
            },
            {
                "img": "5.png",
                "title": "Cepi Corpus Et Paratum Habeo ",
                "content": "I Have Taken The Body And Have It Ready."
            },
            {
                "img": "6.png",
                "title": "Certiorari",
                "content": "To Be Apprised. A Type Of Writ Seeking Judicial Review."
            },
            {
                "img": "7.png",
                "title": "Ceteris Paribus",
                "content": "With Other Things The Same. More Commonly Rendered In English As 'All Other Things Being Equal."
            },
            {
                "img": "8.png",
                "title": "Cogitationis Poenam Nemo Patitur",
                "content": "Nobody Suffers Punishment For Mere Intent."
            },
            {
                "img": "1.png",
                "title": "Communio Bonorum",
                "content": "Community Of Property. The Aggregate Of Marital Property Under A Community Property Matrimonial Regime."
            },
            {
                "img": "2.png",
                "title": "Compensatio Morae",
                "content": "Balance Of Delay. Delay In Payment Or Performance On The Part Of Both The Debtor And The Creditor."
            },
            {
                "img": "3.png",
                "title": "Compos Mentis",
                "content": "Having Command Of Mind. Of Sound Mind. Also Used In The Negative 'Non Compos Mentis', Meaning 'Not Of Sound Mind'."
            },
            {
                "img": "4.png",
                "title": "Condicio Sine Qua Non",
                "content": "A Condition Without Which It Could Not Be. An Indispensable And Essential Action, Condition, Or Ingredient."
            },
            {
                "img": "5.png",
                "title": "Consensu ",
                "content": "Unanimously Or, By General Consent."
            },
            {
                "img": "6.png",
                "title": "Consensus Ad Idem",
                "content": "Agreement To The Same. Meeting Of The Minds, Mutual Assent, Or Concurrence Of Wills. Parties Must Be Of One Mind And Their Promises Must Relate To The Same Subject Or Object Also Consensus In Idem."
            },
            {
                "img": "7.png",
                "title": "Consensus Facit Legem",
                "content": "Consensus Makes The Law. Stipulates That When Two Or More Persons Arrive At A Good Faith Agreement, The Law Will Insist On That Agreement Being Carried Out."
            },
            {
                "img": "8.png",
                "title": "Consuetudo Loci Observanda Est ",
                "content": "The Custom Of The Place Is To Be Observed."
            },
            {
                "img": "1.png",
                "title": "Consuetudo Pro Lege Servatur",
                "content": "Custom Is Held As Law. Where No Laws Apply To A Given Situation, The Customs Of The Place And Time Will Have The Force Of Law."
            },
            {
                "img": "2.png",
                "title": "Contemporanea Expositio Est Optima Et Fortissima In Lege ",
                "content": "A Contemporaneous Exposition Is Best And Most Powerful In Law."
            },
            {
                "img": "3.png",
                "title": "Contra",
                "content": "Against. Used In Case Citations To Indicate That The Cited Source Directly Contradicts The Point Being Made."
            },
            {
                "img": "4.png",
                "title": "Contra Bonos Mores",
                "content": "Against Good Morals. Contracts So Made Are Generally Illegal And Unenforceable."
            },
            {
                "img": "5.png",
                "title": "Contra Legem",
                "content": "Against The Law. Used When A Court Or Tribunal Hands Down A Decision That Is Contrary To The Laws Of The Governing State."
            },
            {
                "img": "6.png",
                "title": "Contra Non Valentem Agere Nulla Currit Praescriptio ",
                "content": "No Prescription Runs Against A Person Not Able To Act."
            },
            {
                "img": "7.png",
                "title": "Contra Proferentem",
                "content": "Against The One Bringing Forth. Used In Contract Law To Stipulate That An Ambiguous Term In A Contract Shall Be Interpreted Against The Interests Of The Party That Insisted Upon The Term'S Inclusion. Prevents The Intentional Additions Of Ambiguous Terminology From Being Exploited By The Party Who Insisted On Its Inclusion."
            },
            {
                "img": "8.png",
                "title": "Contractus Est Quasi Actus Contra Actum ",
                "content": "A Contract Is An Act As It Were Against An Act."
            },
            {
                "img": "1.png",
                "title": "Contradictio In Adjecto",
                "content": "Contradiction In Itself. A Contradiction In Terms."
            },
            {
                "img": "2.png",
                "title": "Conventio Et Modus Vincunt Legem ",
                "content": "A Contract And Agreement Overcome The Law."
            },
            {
                "img": "3.png",
                "title": "Conventio Privatorum Non Potest Publico Juri Derogare ",
                "content": "An Agreement Of Private Persons Cannot Derogate From Public Right."
            },
            {
                "img": "4.png",
                "title": "Coram Domino Rege ",
                "content": "In The Presence Of Our Lord The King."
            },
            {
                "img": "5.png",
                "title": "Coram Non Judice",
                "content": "Before One Who Is Not A Judge. Refers To A Legal Proceeding Without A Judge, Or With A Judge Who Does Not Have Proper Jurisdiction."
            },
            {
                "img": "6.png",
                "title": "Corpus ",
                "content": "Body."
            },
            {
                "img": "7.png",
                "title": "Corpus Delicti",
                "content": "Body Of The Crime. A Person Cannot Be Convicted Of A Crime, Unless It Can Be Proven That The Crime Was Even Committed."
            },
            {
                "img": "8.png",
                "title": "Corpus Humanum Non Recipit Aestimationem ",
                "content": "A Human Body Is Not Susceptible Of Appraisement. ."
            },
            {
                "img": "1.png",
                "title": "Corpus Juris",
                "content": "Body Of Law. The Complete Collection Of Laws Of A Particular Jurisdiction Or Court."
            },
            {
                "img": "2.png",
                "title": "Corpus Juris Civilis",
                "content": "Body Of Civil Law. The Complete Collection Of Civil Laws Of A Particular Jurisdiction Or Court. Also Sometimes Used To Refer To The Code Of Justinian."
            },
            {
                "img": "3.png",
                "title": "Corpus Juris Gentium",
                "content": "Body Of The Law Of Nations. The Complete Collection Of International Law."
            },
            {
                "img": "4.png",
                "title": "Corpus Juris Secundum",
                "content": "An Encyclopedia Of Us Law Drawn From Us Federal And State Court Decisions."
            },
            {
                "img": "5.png",
                "title": "Crescente Malitia Crescere Debet Et Poena ",
                "content": "Vice Increasing, Punishment Ought Also To Increase."
            },
            {
                "img": "6.png",
                "title": "Crimen Falsi",
                "content": "Crime Of Falsifying. Forgery."
            },
            {
                "img": "7.png",
                "title": "Crimen Omnia Ex Se Nata Vitiat ",
                "content": "Crime Vitiates Every Thing, Which Springs From It."
            },
            {
                "img": "8.png",
                "title": "Crimen Trahit Personam ",
                "content": "The Crime Carries The Person."
            },
            {
                "img": "1.png",
                "title": "Cui Bono",
                "content": "As A Benefit To Whom?. Suggests That The Perpetrator(S) Of A Crime Can Often Be Found By Investigating Those Who Would Have Benefited Financially From The Crime, Even If It Is Not Immediately Obvious."
            },
            {
                "img": "2.png",
                "title": "Cuius Est Solum Eius Est Usque Ad Coelum Et Ad Inferos",
                "content": "For Whoever Owns The Soil, It Is Theirs Up To Heaven And Down To Hell. Used In Reference To The Rights Of Property Owners To The Air Above, And Land Below, Their Property."
            },
            {
                "img": "3.png",
                "title": "Cujus Est Dare, Ejus Est Disponere ",
                "content": "He Who Has A Right To Give Has The Right To Dispose Of The Gift."
            },
            {
                "img": "4.png",
                "title": "Cujus Est Solum, Ejus Est Usque Ad Coelam; Et Ad Inferos ",
                "content": "He Who Owns The Soil Owns It Up To The Sky; And To Its Depth."
            },
            {
                "img": "5.png",
                "title": "Cum Duo Inter Se Pugnantia Reperiuntur In Testamentis Ultimum Ratum Est ",
                "content": "When Two Things Repugnant To Each Other Are Found In A Will, The Last Is To Be Confirmed."
            },
            {
                "img": "6.png",
                "title": "Cursus Curiae Est Lex Curiae ",
                "content": "The Practice Of The Court Is The Law Of The Court."
            },
            {
                "img": "7.png",
                "title": "Custos Morum ",
                "content": "A Guardian Of Morals."
            },
            {
                "img": "8.png",
                "title": "Damnum Sine Injuria ",
                "content": "Damage Without Legal Injury."
            },
            {
                "img": "1.png",
                "title": "De Bonis Asportatis",
                "content": "Carrying Goods Away. Specifies That Larceny Was Taking Place In Addition To Any Other Crime Named. E.G. 'Trespass De Bonis Asportatis'."
            },
            {
                "img": "2.png",
                "title": "De Bonis Non Administratis",
                "content": "Of Goods Not Administered. Assets Of An Estate Remaining After The Death (Or Removal) Of The Designated Estate Administrator. An 'Administrator De Bonis Non Administratis' Will Then Be Appointed To Dispose Of These Goods."
            },
            {
                "img": "3.png",
                "title": "De Die In Diem",
                "content": "From Day To Day. Generally Refers To A Type Of Labor In Which The Worker Is Paid Fully At The Completion Of Each Day'S Work."
            },
            {
                "img": "4.png",
                "title": "De Facto",
                "content": "In Fact. Literally 'From Fact'; Often Used To Mean Something That Is True In Practice, But Has Not Been Officially Instituted Or Endorsed. 'For All Intents And Purposes'. Cf. De Jure."
            },
            {
                "img": "5.png",
                "title": "De Futuro",
                "content": "Concerning The Future. At A Future Date."
            },
            {
                "img": "6.png",
                "title": "De Integro",
                "content": "Concerning The Whole. Often Used To Mean 'Start It All Over', In The Context Of 'Repeat De Integro'."
            },
            {
                "img": "7.png",
                "title": "De Jure",
                "content": "According To Law. Literally 'From Law'; Something That Is Established In Law, Whether Or Not It Is True In General Practice. Cf. De Facto."
            },
            {
                "img": "8.png",
                "title": "De Lege Ferenda",
                "content": "Of The Law As It Should Be. Used In The Context Of 'How The Law Should Be', Such As For Proposed Legislation."
            },
            {
                "img": "1.png",
                "title": "De Lege Lata",
                "content": "Of The Law As It Is. Concerning The Law As It Exists, Without Consideration Of How Things Should Be."
            },
            {
                "img": "2.png",
                "title": "De Minimis",
                "content": "About The Smallest Things. Various Legal Areas Concerning Small Amounts Or Small Degrees."
            },
            {
                "img": "3.png",
                "title": "De Minimis Non Curat Lex",
                "content": "The Law Does Not Concern Itself With The Smallest [Things]. There Must Be A Minimal Level Of Substance Or Impact In Order To Bring A Legal Action."
            },
            {
                "img": "4.png",
                "title": "De Mortuis Nil Nisi Bonum",
                "content": "Of The Dead, [Speak] Nothing Unless Good. Social Convention That It Is Inappropriate To Speak Ill Of The Recently Deceased, Even If They Were An Enemy."
            },
            {
                "img": "5.png",
                "title": "De Novo",
                "content": "Anew. Often Used In The Context Of 'Trial De Novo'. A New Trial Ordered When The Previous One Failed To Reach A Conclusion."
            },
            {
                "img": "6.png",
                "title": "Debellatio",
                "content": "Warring Down. Complete Annihilation Of A Warring Party, Bringing About The End Of The Conflict."
            },
            {
                "img": "7.png",
                "title": "Debile Fundamentum Fallit Opus ",
                "content": "Where There Is A Weak Foundation, The Work Fails."
            },
            {
                "img": "8.png",
                "title": "Debita Sequuntur Personam Debitoria ",
                "content": "Debts Follow The Person Of The Debtor."
            },
            {
                "img": "1.png",
                "title": "Debitor Non Praesumitur Donare ",
                "content": "A Debtor Is Not Presumed To Make A Gift."
            },
            {
                "img": "2.png",
                "title": "Debitum Et Contractus Sunt Nullius Loci ",
                "content": "Debt And Contract Are Of No Particular Place."
            },
            {
                "img": "3.png",
                "title": "Debitum In Praesenti, Solvendum In Futuro ",
                "content": "A Present Debt Is To Be Discharged In The Future."
            },
            {
                "img": "4.png",
                "title": "Delegata Potestas Non Potest Delegari ",
                "content": "A Delegated Authority Cannot Be Again Delegated."
            },
            {
                "img": "5.png",
                "title": "Delegatus Non Potest Delegare",
                "content": "That Which Has Been Delegated Cannot Delegate [Further]."
            },
            {
                "img": "6.png",
                "title": "Deorum Injuriae Diis Curae",
                "content": "The Gods Take Care Of Injuries To The Gods. Blasphemy Is A Crime Against The State, Rather Than Against God."
            },
            {
                "img": "7.png",
                "title": "Derivativa Potestas Non Potest Esse Major Primitiva ",
                "content": "The Power Which Is Derived Cannot Be Greater Than That From Which It Is Derived."
            },
            {
                "img": "8.png",
                "title": "Deus Solus Haeredem Facere Potest, Non Homo ",
                "content": "God Alone, Not Man, Can Make An Heir."
            },
            {
                "img": "1.png",
                "title": "Dictum",
                "content": "(Thing) Said. A Statement Given Some Weight Or Consideration Due To The Respect Given The Person Making It."
            },
            {
                "img": "2.png",
                "title": "Dies Dominicus Non Est Juridicus ",
                "content": "Sunday Is Not A Day In Law."
            },
            {
                "img": "3.png",
                "title": "Discretio Est Discernere Per Legem Quid Sit Justum ",
                "content": "Discretion Is To Discern Through Law What Is Just."
            },
            {
                "img": "4.png",
                "title": "Doli Incapax",
                "content": "Incapable Of Guilt. Presumption That Young Children Or Persons With Diminished Mental Capacity Cannot Form The Intent To Commit A Crime."
            },
            {
                "img": "5.png",
                "title": "Dolus Specialis",
                "content": "Specific Deceit. Heavily Used In The Context Of Genocide In International Law."
            },
            {
                "img": "6.png",
                "title": "Dominium ",
                "content": "Ownership."
            },
            {
                "img": "7.png",
                "title": "Domitae Naturae",
                "content": "Tame By Nature. Tame Or Domesticated Animal. Also Called Mansuetae Naturae. Opposite Of Ferae Naturae (Below)"
            },
            {
                "img": "8.png",
                "title": "Domus Sua Cuique Est Tutissimum Refugium ",
                "content": "Every Man S House Is His Safest Refuge."
            },
            {
                "img": "1.png",
                "title": "Dona Clandestina Sunt Semper Suspiciosa ",
                "content": "Clandestine Gifts Are Always Suspicious."
            },
            {
                "img": "2.png",
                "title": "Donatio Mortis Causa",
                "content": "Deathbed Gift. Gift Causa Mortis; 'The Donor, Contemplating Imminent Death, Declares Words Of Present Gifting And Delivers The Gift To The Donee Or Someone Who Clearly Takes Possession On Behalf Of The Donee. The Gift Becomes Effective At Death But Remains Revocable Until That Time."
            },
            {
                "img": "3.png",
                "title": "Dormiunt Leges Aliquando, Nunquam Moriuntur ",
                "content": "The Laws Sometimes Sleep, But Never Die."
            },
            {
                "img": "4.png",
                "title": "Doti Lex Favet; Praemium Pudoris Est; Ideo Parcatur ",
                "content": "The Law Favors Dower; It Is The Reward Of Chastity, Therefore Let It Be Preserved."
            },
            {
                "img": "5.png",
                "title": "Dramatis Personae",
                "content": "Persons Of The Drama."
            },
            {
                "img": "6.png",
                "title": "Dubia In Meliorem Partem Interpretari Debent",
                "content": "Doubtful Things Should Be Interpreted In The Best Way. Often Spoken As 'To Give The Benefit Of The Doubt.'"
            },
            {
                "img": "7.png",
                "title": "Dubitante ",
                "content": "Doubting The Correctness Of The Decision."
            },
            {
                "img": "8.png",
                "title": "Duces Tecum",
                "content": "Bring With You. A 'Subpoena Duces Tecum' Is A Summons To Produce Physical Evidence For A Trial."
            },
            {
                "img": "1.png",
                "title": "Duo Non Possunt In Solido Unam Rem Possidere ",
                "content": "Two Cannot Possess One Thing Each In Entirety."
            },
            {
                "img": "2.png",
                "title": "Ei Incumbit Probatio Qui ",
                "content": "The Onus Of Proving A Fact Rests Upon The Man."
            },
            {
                "img": "3.png",
                "title": "Ei Incumbit Probatio Qui Dicit, Non Qui Negat ",
                "content": "The Burden Of The Proof Lies Upon Him Who Affirms, Not He Who Denies."
            },
            {
                "img": "4.png",
                "title": "Ejusdem Generis",
                "content": "Of The Same Class. Known As A 'Canon Of Construction', It States That When A Limited List Of Specific Things Also Includes A More General Class, That The Scope Of That More General Class Shall Be Limited To Other Items More Like The Specific Items In The List."
            },
            {
                "img": "5.png",
                "title": "Eo Nomine",
                "content": "By That Name."
            },
            {
                "img": "6.png",
                "title": "Erga Omnes",
                "content": "Towards All. Refers To Rights Or Obligations That Are Owed Towards All."
            },
            {
                "img": "7.png",
                "title": "Ergo",
                "content": "Therefore."
            },
            {
                "img": "8.png",
                "title": "Erratum",
                "content": "Having Been Made In Error."
            },
            {
                "img": "1.png",
                "title": "Error, Qui Non Resistitur Approbatur ",
                "content": "An Error Not Resisted Is Approved."
            },
            {
                "img": "2.png",
                "title": "Et Al.",
                "content": "And Others. Abbreviation Of Et Alii, Meaning 'And Others'."
            },
            {
                "img": "3.png",
                "title": "Et Cetera",
                "content": "And Other Things. Generally Used In The Sense Of 'And So Forth'."
            },
            {
                "img": "4.png",
                "title": "Et Seq.",
                "content": "And The Following Things. Abbreviation Of Et Sequens, Meaning 'And The Following Ones'. Used In Citations To Indicate That The Cited Portion Extends To The Pages Following The Cited Page."
            },
            {
                "img": "5.png",
                "title": "Et Uxor",
                "content": "And Wife. Usually Used Instead Of Naming A Man'S Wife As A Party In A Case."
            },
            {
                "img": "6.png",
                "title": "Et Vir",
                "content": "And Husband. Usually Used Instead Of Naming A Woman'S Husband As A Party In A Case."
            },
            {
                "img": "7.png",
                "title": "Ex Aequo Et Bono",
                "content": "Of Equity And [The] Good. Usually Defined As 'What Is Right And Good.' Used To Describe The Power Of A Judge Or Arbiter To Consider Only What Is Fair And Good For The Specific Case, And Not Necessarily What The Law May Require. In Courts, Usually Only Done If All Parties Agree."
            },
            {
                "img": "8.png",
                "title": "Ex Ante",
                "content": "Of Before. Essentially Meaning 'Before The Event', Usually Used When Forecasting Future Events."
            },
            {
                "img": "1.png",
                "title": "Ex Cathedra",
                "content": "From The Chair. Where Chair Refers To Authority Or Position. Authority Derived From One'S Position."
            },
            {
                "img": "2.png",
                "title": "Ex Concessis",
                "content": "From What Has Been Conceded Already. Often Used In A 'Guilt By Association' Context."
            },
            {
                "img": "3.png",
                "title": "Ex Delicto",
                "content": "From A Transgression. The Consequence Of A Crime Or Tort."
            },
            {
                "img": "4.png",
                "title": "Ex Dolo Malo Actio Non Oritur ",
                "content": "A Right Of Action Cannot Arise Out Of Fraud."
            },
            {
                "img": "5.png",
                "title": "Ex Facie",
                "content": "On The Face. If A Contract Is Blatantly And Obviously Incorrect Or Illegal, It Can Be Considered Void Ex Facie Without Any Further Analysis Or Arguments."
            },
            {
                "img": "6.png",
                "title": "Ex Fida Bona",
                "content": "Good Business Norms."
            },
            {
                "img": "7.png",
                "title": "Ex Gratia",
                "content": "By Favor. Something Done Voluntarily And With No Expectation Of A Legal Liability Arising Therefrom."
            },
            {
                "img": "8.png",
                "title": "Ex Injuria Jus Non Oritur",
                "content": "Law Does Not Arise From Injustice. A Principle In International Law That Unjust Acts Cannot Create Laws."
            },
            {
                "img": "1.png",
                "title": "Ex Nihilo Nil Fit ",
                "content": "From Nothing Nothing Comes."
            },
            {
                "img": "2.png",
                "title": "Ex Nudo Pacto Actio Non Oritur ",
                "content": "No Action Arises On A Contract Without A Consideration."
            },
            {
                "img": "3.png",
                "title": "Ex Nunc",
                "content": "From Now On. Term Used In Contract Law To Specify Terms That Are Voided Or Confirmed In Effect Only In The Future And Not Prior To The Contract, Or Its Adjudication. Cf. Ex Tunc."
            },
            {
                "img": "4.png",
                "title": "Ex Officio",
                "content": "From The Office. Something Done Or Realized By The Fact Of Holding An Office Or Position."
            },
            {
                "img": "5.png",
                "title": "Ex Parte",
                "content": "From [For] One Party. A Decision Reached, Or Case Brought, By Or For One Party Without The Other Party Being Present."
            },
            {
                "img": "6.png",
                "title": "Ex Post",
                "content": "From After. Based On Knowledge Of The Past."
            },
            {
                "img": "7.png",
                "title": "Ex Post Facto",
                "content": "From A Thing Done Afterward. Commonly Said As 'After The Fact.'"
            },
            {
                "img": "8.png",
                "title": "Ex Post Facto Law",
                "content": ". A Retroactive Law. E.G. A Law That Makes Illegal An Act That Was Not Illegal When It Was Done."
            },
            {
                "img": "1.png",
                "title": "Ex Praecedentibus Et Consequentibus Optima Fit Interpretatio ",
                "content": "The Best Interpretation Is Made From Things Preceding And Following."
            },
            {
                "img": "2.png",
                "title": "Ex Proprio Motu",
                "content": "By [One'S] Own Motion. Commonly Spoken As 'By One'S Own Accord.'"
            },
            {
                "img": "3.png",
                "title": "Ex Rel",
                "content": "Abbreviation Of Ex Relatione. Used When The Government Brings A Case That Arises From The Information Conveyed To It By A Third Party."
            },
            {
                "img": "4.png",
                "title": "Ex Tunc",
                "content": "From Then. Term Used In Contract Law To Specify Terms That Are Voided Or Confirmed In Effect From The Execution Of The Contract. Cf. Ex Nunc."
            },
            {
                "img": "5.png",
                "title": "Ex Turpi Causa Non Oritur Actio",
                "content": "From A Dishonorable Cause An Action Does Not Arise. A Party Cannot Bring A Legal Action For Consequences Of His Own Illegal Act."
            },
            {
                "img": "6.png",
                "title": "Exceptio Probat Regulam ",
                "content": "An Exception Proves The Rule."
            },
            {
                "img": "7.png",
                "title": "Executio Est Executio Juris Secundum Judicium ",
                "content": "Execution Is The Fulfillment Of The Law In Accordance With The Judgment."
            },
            {
                "img": "8.png",
                "title": "Executio Est Finis Et Fructus Legis ",
                "content": "An Execution Is The End And The Fruit Of The Law."
            },
            {
                "img": "1.png",
                "title": "Executio Legis Non Habet Injuriam ",
                "content": "Execution Of The Law Does No Injury."
            },
            {
                "img": "2.png",
                "title": "Exempli Gratia",
                "content": "For The Sake Of Example. Usually Abbreviated 'E.G.'."
            },
            {
                "img": "3.png",
                "title": "Expressio Unius Est Exclusio Alterius",
                "content": "The Express Mention Of One Thing Excludes All Others. When Items Are Listed, Anything Not Explicitly Stated Is Assumed To Not Be Included."
            },
            {
                "img": "4.png",
                "title": "Extant",
                "content": "Existing. Refers To Things That Are Currently Existing At A Given Point, Rather Than Things That Are No Longer So."
            },
            {
                "img": "5.png",
                "title": "Extra Legem Positus Est Civiliter Mortuus ",
                "content": "One Out Of The Pale Of The Law (I.E. An Outlaw) Is Civilly Dead."
            },
            {
                "img": "6.png",
                "title": "Faciendum ",
                "content": "Something Which Is To Be Done."
            },
            {
                "img": "7.png",
                "title": "Facio Ut Facias",
                "content": "I Do, That You May Do. A Type Of Contract Wherein One Party Agrees To Do Work For The Other, In Order That The Second Party Can Then Perform Some Work For The First In Exchange."
            },
            {
                "img": "8.png",
                "title": "Factum",
                "content": "Deed. 1. An Assured Statement Made; 2. Completion Of A Will And All Its Parts To Make It Valid And Legal; 3). Book Of Facts And Law Presented In A Canadian Court."
            },
            {
                "img": "1.png",
                "title": "Facultas Probationum Non Est Angustanda ",
                "content": "The Right Of Offering Proof Is Not To Be Narrowed."
            },
            {
                "img": "2.png",
                "title": "Falsa Demonstratio Non Nocet ",
                "content": "A False Description Does Not Vitiate."
            },
            {
                "img": "3.png",
                "title": "Fatetur Facinus Qui Judicium Fugit ",
                "content": "He Who Flees Judgment Confesses His Guilt."
            },
            {
                "img": "4.png",
                "title": "Favor Contractus",
                "content": "Favor Of The Contract. A Concept In Treaty Law That Prefers The Maintaining Of A Contract Over Letting It Expire For Purely Procedural Reasons."
            },
            {
                "img": "5.png",
                "title": "Felix Qui Potuit Rerum Cognoscere Causas ",
                "content": "Happy Is He Who Has Been Able To Understand The Causes Of Things."
            },
            {
                "img": "6.png",
                "title": "Felo De Se",
                "content": "Felon Of Himself. A Suicide. This Archaic Term Stems From English Common Law, Where Suicide Was Legally A Felony, Thus A Person Who Committed Suicide Was Treated As A Felon For Purposes Of Estate Disposal."
            },
            {
                "img": "7.png",
                "title": "Felonia Implicatur In Qualibet Proditione ",
                "content": "Felony Is Implied In Every Treason."
            },
            {
                "img": "8.png",
                "title": "Ferae Naturae",
                "content": "Wild Animals By Nature. Wild Animals Residing On Unowned Property Do Not Belong To Any Party In A Dispute On The Land. Opposite Of Domitae Naturae (Above)."
            },
            {
                "img": "1.png",
                "title": "Festinatio Justitiae Est Noverca Infortunii ",
                "content": "The Hurrying Of Justice Is The Stepmother Of Misfortune."
            },
            {
                "img": "2.png",
                "title": "Fiat",
                "content": "Let It Be Done. A Warrant Issued By A Judge For Some Legal Proceedings."
            },
            {
                "img": "3.png",
                "title": "Fiat Justitia Et Pereat Mundus",
                "content": "Let There Be Justice, Though The World Perish. Often Used As A Motto, Notably By Ferdinand I, Holy Roman Emperor."
            },
            {
                "img": "4.png",
                "title": "Fiat Justitia Ruat Caelum",
                "content": "Let Justice Be Done Though The Heavens Fall. Also Sometimes A Motto, A Legal Maxim That Justice Must Be Done Regardless Of The Result Otherwise."
            },
            {
                "img": "5.png",
                "title": "Fictio Cedit Veritati; Fictio Juris Non Est, Ubi Veritas ",
                "content": "Fiction Yields To Truth. Where Truth Is, Fiction Of Law Does Not Exist."
            },
            {
                "img": "6.png",
                "title": "Fides Servanda Est ",
                "content": "Good Faith Is To Be Preserved."
            },
            {
                "img": "7.png",
                "title": "Fieri Facias",
                "content": "May You Cause To Be Done. A Writ Ordering The Local Law Enforcement To Ensure That Damages Awarded By The Court Are Properly Recovered. A Writ Of Execution."
            },
            {
                "img": "8.png",
                "title": "Filiatio Non Potest Probari ",
                "content": "Filiation Cannot Be Proved."
            },
            {
                "img": "1.png",
                "title": "Firmior Et Potentior Est Operatio Legis Quam Dispositio Hominis ",
                "content": "The Operation Of Law Is Firmer And More Powerful Than The Will Of Man."
            },
            {
                "img": "2.png",
                "title": "Forma Legalis Forma Essentialis Est ",
                "content": "Legal Form Is Essential Form."
            },
            {
                "img": "3.png",
                "title": "Fortior Est Custodia Legis Quam Hominis ",
                "content": "The Custody Of The Law Is Stronger Than That Of Man."
            },
            {
                "img": "4.png",
                "title": "Fortis Attachiamentum, Validior Praesumptionem",
                "content": "Strong Attachment, The Stronger Presumption. When Determining Whether A Chattel Is A Fixture: 'Size Doesn't Matter, How Much Or Degree Chattel Is Attached To 'Land' And To 'What'"
            },
            {
                "img": "5.png",
                "title": "Forum Non Conveniens",
                "content": "Disagreeable Forum. A Concept Wherein A Court Refuses To Hear A Particular Matter, Citing A More Appropriate Forum For The Issue To Be Decided."
            },
            {
                "img": "6.png",
                "title": "Fractionem Diei Non Recipit Lex ",
                "content": "The Law Does Not Regard A Fraction Of A Day."
            },
            {
                "img": "7.png",
                "title": "Fraus Est Celare Fraudem ",
                "content": "It Is A Fraud To Conceal A Fraud."
            },
            {
                "img": "8.png",
                "title": "Fraus Est Odiosa Et Non Praesumenda ",
                "content": "Fraud Is Odious And Is Not To Be Presumed."
            },
            {
                "img": "1.png",
                "title": "Fraus Et Jus Nunquam Cohabitant ",
                "content": "Fraud And Justice Never Dwell Together."
            },
            {
                "img": "2.png",
                "title": "Fructus Industriales",
                "content": "Industrial Fruits. Emblements; In Property Law, A Co-Owner Profitng From Her Or His Fructus Industriales Is Solely Responsible For Any Losses That My Occur. (Vs. Fructus Naturales, See Below)."
            },
            {
                "img": "3.png",
                "title": "Fructus Naturales",
                "content": "Natural Fruits. Vegetation Naturally Growing From Old Roots (As Pasturage) Or From Trees (As Timber Or Fruit) (Vs. Fructus Industriales, See Above)."
            },
            {
                "img": "4.png",
                "title": "Frustra Probatur Quod Probatum Non Relevat ",
                "content": "That Is Proved In Vain Which When Proved Is Not Relevant."
            },
            {
                "img": "5.png",
                "title": "Fumus Boni Iuris",
                "content": "Smoke Of A Good Right. Refers To Having A Sufficient Legal Basis To Bring Legal Action."
            },
            {
                "img": "6.png",
                "title": "Functus Officio",
                "content": "Having Performed His Office. A Person, Court, Statute, Or Legal Document That Has No Legal Authority, Because Its Original Legal Purpose Has Been Fulfilled."
            },
            {
                "img": "7.png",
                "title": "Furor Contrahi Matrimonium Non Sinit, Quia Consensus Opus Est ",
                "content": "Insanity Prevents Marriage From Being Contracted Because Consent Is Needed."
            },
            {
                "img": "8.png",
                "title": "Generale Nihil Certum Implicat ",
                "content": "A General Expression Implies Nothing Certain."
            },
            {
                "img": "1.png",
                "title": "Generalia Praecedunt, Specialia Sequuntur ",
                "content": "Things General Precede, Things Special Follow."
            },
            {
                "img": "2.png",
                "title": "Generalia Specialibus Non Derogant",
                "content": "The General Does Not Detract From The Specific. Specifies That A Certain Matter Of Law Be Covered By The Most Specific Laws Pertaining, In The Event That Broader Laws Conflict With The Specific One."
            },
            {
                "img": "3.png",
                "title": "Generalis Regula Generaliter Est Intelligenda ",
                "content": "A General Rule Is To Be Generally Understood."
            },
            {
                "img": "4.png",
                "title": "Gravamen",
                "content": "Things Weighing Down. The Basic Element Or Complaint Of A Lawsuit."
            },
            {
                "img": "5.png",
                "title": "Gravius Est Divinam Quam Temporalem Laedere Majestatem ",
                "content": "It Is More Serious To Hurt Divine Than Temporal Majesty."
            },
            {
                "img": "6.png",
                "title": "Guardian Ad Litem",
                "content": "Guardian For The Case. An Independent Party Appointed In Family Law Disputes To Represent Parties That Cannot Represent Themselves, Such As Minors, Developmentally Disabled, Or Elderly."
            },
            {
                "img": "7.png",
                "title": "Habeas Corpus",
                "content": "May You Have The Body. A Writ Used To Challenge The Legality Of Detention. Orders The Detaining Party To 'Have The (Living) Body' Of The Detained Brought Before The Court Where The Detention Will Be Investigated."
            },
            {
                "img": "8.png",
                "title": "Hostis Humani Generis",
                "content": "Enemy Of The Human Race. A Party Considered To Be The Enemy Of All Nations, Such As Maritime Pirates."
            },
            {
                "img": "1.png",
                "title": "Ibid.",
                "content": "In The Same Place. Abbreviation Of Ibidem, Meaning 'In The Same Place. Used When Citing Sources, To Indicate The Cited Source Came From The Identical Location As The Preceding One."
            },
            {
                "img": "2.png",
                "title": "Id Est (I.E) ",
                "content": "That Is. Abbreviation Of Id Est, Meaning 'That Is', In The Sense Of Restating Something That May Not Have Been Clear."
            },
            {
                "img": "3.png",
                "title": "Id Quod Commune Est, Nostrum Esse Dicitur ",
                "content": "That Which Is Common Is Said To Be Ours."
            },
            {
                "img": "4.png",
                "title": "Idem",
                "content": "The Same. Used In Citations To Indicate The Cited Source Came From The Same Source As The Preceding One, Though Not Necessarily The Same Page Or Location. Cf. Ibid."
            },
            {
                "img": "5.png",
                "title": "Idem Nihil Dicere Et Insufficienter Dicere Est ",
                "content": "It Is The Same To Say Nothing As Not To Say Enough."
            },
            {
                "img": "6.png",
                "title": "Ignorantia Facti Excusat, Ignorantia Juris Non Excusat ",
                "content": "Ignorance Of Fact Excuses, Ignorance Of Law Does Not Excuse."
            },
            {
                "img": "7.png",
                "title": "Ignorantia Juris Non Excusat",
                "content": "Ignorance Of The Law Does Not Excuse. A Principle That States That Not Having Knowledge Of A Law Is Not An Excuse For Breaking It."
            },
            {
                "img": "8.png",
                "title": "Imperium In Imperio ",
                "content": "A Sovereignty Within A Sovereignty."
            },
            {
                "img": "1.png",
                "title": "Impotentia Excusat Legem ",
                "content": "Impossibility Is An Excuse In The Law."
            },
            {
                "img": "2.png",
                "title": "Imprimatur",
                "content": "Let It Be Printed. An Authorization For A Document To Be Printed. Used In The Context Of Approval By A Religious Body Or Other Censoring Authority."
            },
            {
                "img": "3.png",
                "title": "Impunitas Semper Ad Deteriora Invitat ",
                "content": "Impunity Always Leads To Greater Crimes."
            },
            {
                "img": "4.png",
                "title": "In Absentia",
                "content": "In Absence. A Legal Proceeding Conducted Without The Presence Of One Party Is Said To Be Conducted In Absentia, E.G., Trial In Absentia Or Being Sentenced In Absentia."
            },
            {
                "img": "5.png",
                "title": "In Aequali Jure Melior Est Conditio Possidentis ",
                "content": "When The Parties Have Equal Rights, The Condition Of The Possessor Is Better."
            },
            {
                "img": "6.png",
                "title": "In Alta Proditione Nullus Potest Esse Acessorius; Sed Principalis Solum Modo ",
                "content": "In High Treason No One Can Be An Accessory; But A Principal Only."
            },
            {
                "img": "7.png",
                "title": "In Anglia Non Est Interregnum ",
                "content": "In England There Is No Interregnum."
            },
            {
                "img": "8.png",
                "title": "In Articulo Mortis",
                "content": "At The Moment Of Death. Often Used In Probate Law, As Well As For Testimony In The Sense Of A Dying Declaration."
            },
            {
                "img": "1.png",
                "title": "In Camera",
                "content": "In The Chamber. Conducted In Private, Or In Secret. The Opposite Of In Open Court."
            },
            {
                "img": "2.png",
                "title": "In Casu Extremae Necessitatis Omnia Sunt Communia ",
                "content": "In A Case Of Extreme Necessity Everything Is Common. ."
            },
            {
                "img": "3.png",
                "title": "In Criminalibus Probationes Debent Esse Luce Clariores ",
                "content": "In Criminal Cases The Proofs Ought To Be Cleared Than The Light."
            },
            {
                "img": "4.png",
                "title": "In Curia",
                "content": "In Court. Conducted In Open Court. The Opposite Of In Camera."
            },
            {
                "img": "5.png",
                "title": "In Curia Domini Regis, Ipse In Propria Persona Jura Discernit ",
                "content": "In The King S Court, The King Himself In His Own Person Dispenses Justice."
            },
            {
                "img": "6.png",
                "title": "In Delicto ",
                "content": "At Fault."
            },
            {
                "img": "7.png",
                "title": "In Esse",
                "content": "In Existence. Actually Existing In Reality. Opposite Of In Posse."
            },
            {
                "img": "8.png",
                "title": "In Extenso",
                "content": "In The Extended. In Extended Form, Or At Full Length. Often Used To Refer To Publication Of Documents, Where It Means The Full Unabridged Document Is Published."
            },
            {
                "img": "1.png",
                "title": "In Extremis",
                "content": "In The Extreme. In Extreme Circumstances. Often Used To Refer To 'At The Point Of Death.'"
            },
            {
                "img": "2.png",
                "title": "In Fictione Legis Aequitas Existit ",
                "content": "A Legal Fiction Is Consistent With Equity."
            },
            {
                "img": "3.png",
                "title": "In Flagrante Delicto",
                "content": "In Blazing Offense. Caught In The Actual Act Of Committing A Crime. Often Used As A Euphemism For A Couple Caught In The Act Of Sexual Intercourse, Though It Technically Refers To Being 'Caught In The Act' Of Any Misdeed."
            },
            {
                "img": "4.png",
                "title": "In Forma Pauperis",
                "content": "In The Manner Of A Pauper. Someone Unable To Afford The Costs Associated With A Legal Proceeding. As This Will Not Be A Barrier To Seeking Justice, Such Persons Are Given In Forma Pauperis Status (Usually Abbreviated Ifp), Wherein Most Costs Are Waived Or Substantially Reduced."
            },
            {
                "img": "5.png",
                "title": "In Foro Conscientiae ",
                "content": "In The Forum Of Conscience."
            },
            {
                "img": "6.png",
                "title": "In Futuro",
                "content": "In The Future. Refers To Things To Come, Or Things That May Occur Later But Are Not So Now. As In In Futuro Debts, I.E. Debts Which Become Due And Payable In The Future."
            },
            {
                "img": "7.png",
                "title": "In Haec Verba",
                "content": "In These Words. Used When Including Text In A Complaint Verbatim, Where Its Appearance In That Form Is Germane To The Case, Or Is Required To Be Included."
            },
            {
                "img": "8.png",
                "title": "In Jure Non Remota Causa Sed Proxima Spectatur ",
                "content": "In Law Not The Remote But The Proximate Cause Is Looked At."
            },
            {
                "img": "1.png",
                "title": "In Limine",
                "content": "At The Threshold. A Motion To A Judge In A Case That Is Heard And Considered Outside The Presence Of The Jury."
            },
            {
                "img": "2.png",
                "title": "In Loco Parentis",
                "content": "In The Place Of A Parent. Used To Refer To A Person Or Entity Assuming The Normal Parental Responsibilities For A Minor. This Can Be Used In Transfers Of Legal Guardianship, Or In The Case Of Schools Or Other Institutions That Act In The Place Of The Parents On A Day-To-Day Basis."
            },
            {
                "img": "3.png",
                "title": "In Mitius",
                "content": "In The Milder. A Type Of Retroactive Law That Decriminalizes Offenses Committed In The Past. Also Known As An Amnesty Law."
            },
            {
                "img": "4.png",
                "title": "In Mortua Manu ",
                "content": "In A Dead Hand."
            },
            {
                "img": "5.png",
                "title": "In Novo Casu Novum Remedium Apponendum Est ",
                "content": "In A New Case A New Remedy Is To Be Applied."
            },
            {
                "img": "6.png",
                "title": "In Omni Re Nascitur Res Quae Ipsam Rem Exterminat ",
                "content": "In Everything Is Born That Which Destroys The Thing Itself."
            },
            {
                "img": "7.png",
                "title": "In Omnibus",
                "content": "In All. Used To Mean 'In Every Respect.' Something Applying To Every Aspect Of A Situation."
            },
            {
                "img": "8.png",
                "title": "In Pari Delicto",
                "content": "In Equal Offense. Used When Both Parties To A Case Are Equally At Fault."
            },
            {
                "img": "1.png",
                "title": "In Pari Materia",
                "content": "In The Same Matter. Refers To A Situation Where A Law Or Statute May Be Ambiguous, And Similar Laws Applying To The Matter Are Used To Interpret The Vague One."
            },
            {
                "img": "2.png",
                "title": "In Personam",
                "content": "In Person. Used In The Context Of 'Directed At This Particular Person', Refers To A Judgement Or Subpoena Directed At A Specific Named Individual. Cf. In Rem."
            },
            {
                "img": "3.png",
                "title": "In Pleno",
                "content": "In Full."
            },
            {
                "img": "4.png",
                "title": "In Prope Persona",
                "content": "On One'S Own Person. One Who Represents Themselves In Court Without The [Official] Assistance Of An Attorney."
            },
            {
                "img": "5.png",
                "title": "In Propria Persona",
                "content": "In One'S Own Proper Person. Alternate Form Of In Prope Persona. One Who Represents Themselves In Court Without The [Official] Assistance Of An Attorney."
            },
            {
                "img": "6.png",
                "title": "In Quo Quis Delinquit In Eo De Jure Est Puniendus ",
                "content": "In Whatever Thing One Offends In That He Is To Be Punished According To Law."
            },
            {
                "img": "7.png",
                "title": "In Re",
                "content": "In The Matter [Of]. Used In The Title Of A Decision Or Comment To Identify The Matter They Are Related To; Usually Used For A Case Where The Proceeding Is In Rem Or Quasi In Rem And Not In Personam (E.G. Probate Or Bankrupt Estate, Guardianship, Application For Laying Out A Public Highway) And Occasionally For An Ex Parte Proceeding (E.G. Application For A Writ Of Habeas Corpus)."
            },
            {
                "img": "8.png",
                "title": "In Re Dubia Magis Inficiatio Quam Affirmatio Intelligenda ",
                "content": "In A Doubtful Matter The Negative Is To Be Understood Rather Than The Affirmative."
            },
            {
                "img": "1.png",
                "title": "In Rem",
                "content": "About A Thing. Used In The Context Of A Case Against Property, As Opposed To A Particular Person. See Also In Rem Jurisdiction. Cf. In Personam."
            },
            {
                "img": "2.png",
                "title": "In Republica Maxime Conservanda Sunt Jura Belli ",
                "content": "In A State The Laws Of War Are To Be Especially Observed."
            },
            {
                "img": "3.png",
                "title": "In Situ",
                "content": "In Position. Often Used In The Context Of Decisions Or Rulings About A Property Or Thing 'Left In Place' After The Case As It Was Before."
            },
            {
                "img": "4.png",
                "title": "In Solidum",
                "content": "For The Whole. Jointly And Severally; Where A Group Of Persons Share Liability For A Debt, Such As Co-Signers To A Loan, The Debtor Can Sue A Single Party In Solidum, That Is, To Recover The Entire Amount Owed."
            },
            {
                "img": "5.png",
                "title": "In Terrorem",
                "content": "In Order To Frighten. A Warning Or Threat To Sue, Made In The Hopes Of Convincing The Other Party To Take Action To Avoid A Lawsuit."
            },
            {
                "img": "6.png",
                "title": "In Terrorem Clause",
                "content": "Clause 'In Order To Frighten'. A Clause In A Will That Threatens Any Party Who Contests The Will With Being Disinherited. Also Called A No-Contest Clause."
            },
            {
                "img": "7.png",
                "title": "In Testamentis Plenius Testatoris Intentionem Scrutamur ",
                "content": "In Wills We Seek Diligently The Intention Of The Testator."
            },
            {
                "img": "8.png",
                "title": "In Toto",
                "content": "In Total."
            },
            {
                "img": "1.png",
                "title": "In Traditionibus Scriptorum Non Quod Dictum Est, Sed Quod Gestum Est, Inspicitur ",
                "content": "In The Delivery Of Writings (Deeds), Not What Is Said But What Is Done Is To Be Considered."
            },
            {
                "img": "2.png",
                "title": "In Verbis, Non Verba Sed Res Et Ratio Quaerenda Est ",
                "content": "In Words, Not Words, But The Thing And The Meaning Are To Be Inquired Into."
            },
            {
                "img": "3.png",
                "title": "Indicia",
                "content": "Indications. Often Used In Copyright Notices. Refers To Distinctive Markings That Identify A Piece Of Intellectual Property."
            },
            {
                "img": "4.png",
                "title": "Infra",
                "content": "Below Or Under."
            },
            {
                "img": "5.png",
                "title": "Injuria Non Excusat Injuriam ",
                "content": "A Wrong Does Not Excuse A Wrong."
            },
            {
                "img": "6.png",
                "title": "Innuendo",
                "content": "By Nodding. An Intimation About Someone Or Something, Made Indirectly Or Vaguely Suggesting The Thing Being Implied. Often Used When The Implied Thing Is Negative Or Derogatory."
            },
            {
                "img": "7.png",
                "title": "Intentio Inservire Debet Legibus, Non Leges Intentioni ",
                "content": "Intention Ought To Be Subservient To The Laws, Not The Laws To The Intention."
            },
            {
                "img": "8.png",
                "title": "Inter Alia",
                "content": "Among Others. Used To Indicate An Item Cited Has Been Pulled From A Larger Or More Complete List."
            },
            {
                "img": "1.png",
                "title": "Inter Arma Enim Silent Leges",
                "content": "For Among Arms, The Laws Fall Silent. A Concept That During War, Many Illegal Activities Occur. Also Taken To Mean That In Times Of War, Laws Are Suppressed, Ostensibly For The Good Of The Country."
            },
            {
                "img": "2.png",
                "title": "Inter Rusticos",
                "content": "Among Rustics. Refers To Contract, Debts, Or Other Agreements Made Between Parties Who Are Not Legal Professionals."
            },
            {
                "img": "3.png",
                "title": "Inter Se",
                "content": "Amongst Themselves. Refers To Obligations Between Members Of The Same Group Or Party, Differentiated From The Whole Party'S Obligations To Another Party."
            },
            {
                "img": "4.png",
                "title": "Inter Vivos",
                "content": "Between The Living. Refers To A Gift Or Other Non-Sale Transfer Between Living Parties. This Is In Contrast To A Will, Where The Transfer Takes Effect Upon One Party'S Death."
            },
            {
                "img": "5.png",
                "title": "Interest Reipublicae Res Judicatas Non Rescindi ",
                "content": "It Is In The Interest Of The State That Things Adjudged Be Not Rescinded."
            },
            {
                "img": "6.png",
                "title": "Interest Reipublicae Suprema Hominum Testamenta Rata Haberi ",
                "content": "It Is In The Interest Of The State That Men S Last Wills Be Sustained."
            },
            {
                "img": "7.png",
                "title": "Interest Reipublicae Ut Quilibet Re Sua Bene Utatur ",
                "content": "It Is In The Interest Of The State That Every One Use Properly His Own Property."
            },
            {
                "img": "8.png",
                "title": "Interest Reipublicase Ut Sit Finis Litium ",
                "content": "It Is In The Interest Of The State That There Be An End To Litigation."
            },
            {
                "img": "1.png",
                "title": "Interim ",
                "content": "Temporary, In The Meanwhile."
            },
            {
                "img": "2.png",
                "title": "Interpretare Et Concordare Leges Legibus Est Optimus Interpretandi Modus ",
                "content": "To Interpret And Harmonize Laws Is The Best Method Of Interpretation."
            },
            {
                "img": "3.png",
                "title": "Interpretatio Fienda Est Ut Res Magis Valeat Quam Pereat ",
                "content": "Such A Construction Is To Be Made That The Thing May Have Effect Rather Than It Should Fail."
            },
            {
                "img": "4.png",
                "title": "Interruptio Multiplex Non Tollit Praescriptionem Semel Obtentam ",
                "content": "Repeated Interruption Does Not Defeat A Prescription Once Obtained."
            },
            {
                "img": "5.png",
                "title": "Intra",
                "content": "Within."
            },
            {
                "img": "6.png",
                "title": "Intra Fauces Terrae",
                "content": "Within The Jaws Of The Land. This Term Refers To A Nation'S Territorial Waters."
            },
            {
                "img": "7.png",
                "title": "Intra Legem",
                "content": "Within The Law. Used In Various Contexts To Refer To The Legal Foundation For A Thing."
            },
            {
                "img": "8.png",
                "title": "Intra Vires",
                "content": "Within The Powers. Something Done Which Requires Legal Authority, And The Act Is Performed Accordingly. Cf. Ultra Vires."
            },
            {
                "img": "1.png",
                "title": "Invito Beneficium Non Datur ",
                "content": "A Benefit Is Not Conferred Upon One Against His Consent."
            },
            {
                "img": "2.png",
                "title": "Ipse Dixit",
                "content": "He Himself Said It. An Assertion Given Undue Weight Solely By Virtue Of The Person Making The Assertion."
            },
            {
                "img": "3.png",
                "title": "Ipsissima Verba",
                "content": "The Very Words. Referring To A Document Or Ruling That Is Being Quoted By Another."
            },
            {
                "img": "4.png",
                "title": "Ipso Facto",
                "content": "By The Fact Itself. Used In The Context That One Event Is A Direct And Immediate Consequence Of Another. 'In And Of Itself.'"
            },
            {
                "img": "5.png",
                "title": "Ipso Jure",
                "content": "The Law Itself. By Operation Of Law."
            },
            {
                "img": "6.png",
                "title": "Ira Furor Brevis Est ",
                "content": "Anger Is Brief Insanity."
            },
            {
                "img": "7.png",
                "title": "Iter Arma Leges Silent ",
                "content": "In War The Laws Are Silent."
            },
            {
                "img": "8.png",
                "title": "Judex Non Calculat",
                "content": "The Judge Does Not Calculate. A Principle That Calculation Errors Made By The Court Do Not Invalidate The Judgement On A Technicality. Also Taken To Mean That The Judge Does Not Tally Up The Arguments Of Both Sides And Decide In Favor Of The More Numerous, But Rather Weighs All Of The Evidence Without Regard To The Number Of Arguments Made."
            },
            {
                "img": "1.png",
                "title": "Judex Est Lex Loquens ",
                "content": "A Judge Is The Law Speaking."
            },
            {
                "img": "2.png",
                "title": "Judex Non Potest Esse Testis In Propira Causa ",
                "content": "A Judge Cannot Be Witness In His Own Cause."
            },
            {
                "img": "3.png",
                "title": "Judex Non Potest Injuriam Sibi Datam Punire ",
                "content": "A Judge Cannon Punish A Wrong Done To Himself."
            },
            {
                "img": "4.png",
                "title": "Judex Non Reddit Plus Quam Quod Petens Ipse Requirit ",
                "content": "A Judge Does Not Give More Than The Plaintiff Himself Demands."
            },
            {
                "img": "5.png",
                "title": "Judiciis Posterioribus Fides Est Adhibenda ",
                "content": "Faith Must Be Given To Later Decisions."
            },
            {
                "img": "6.png",
                "title": "Judicis Est Judicare Secundum Allegata Et Probata ",
                "content": "It Is The Duty Of A Judge To Decide According To The Allegations And The Proofs."
            },
            {
                "img": "7.png",
                "title": "Judicium Non Debet Esse Illusorium, Suum Effectum Habere Debet ",
                "content": "A Judgment Ought Not To Be Illusory; It Ought To Have Its Proper Effect."
            },
            {
                "img": "8.png",
                "title": "Juduces Non Tenentur Exprimere Causam Sententiae Suae ",
                "content": "Judges Are Not Bound To Explain The Reason Of Their Judgment."
            },
            {
                "img": "1.png",
                "title": "Jura Naturae Sunt Immutabilia ",
                "content": "The Laws Of Nature Are Immutable."
            },
            {
                "img": "2.png",
                "title": "Jura Novit Curia",
                "content": "The Court Knows The Law. Concept That Parties To A Case Do Not Need To Define How The Law Applies To Their Case. The Court Is Solely Responsible For Determining What Laws Apply."
            },
            {
                "img": "3.png",
                "title": "Jura Publica Anteferenda Privatis Juribus ",
                "content": "Public Rights Are To Be Preferred To Private Rights."
            },
            {
                "img": "4.png",
                "title": "Juramentum Est Indivisibile Et Non Est Admittendum In Parte Verum Et In Parte Falsum ",
                "content": "An Oath Is Indivisible And It Is Not To Be Held Partly True And Partly False."
            },
            {
                "img": "5.png",
                "title": "Jurare Est Deum In Testem Vocare, Et Est Actus Divini Cultus ",
                "content": "To Swear Is To Call God To Witness And Is An Act Of Divine Worship."
            },
            {
                "img": "6.png",
                "title": "Jurat",
                "content": "(He) Swears. Appears At The End Of An Affidavit, Where The Party Making The Affirmation Signs The Oath, And The Information On Whom The Oath Was Sworn Before Is Placed."
            },
            {
                "img": "7.png",
                "title": "Juris Et De Jure",
                "content": "Of Law, And From Law. Irrebuttable Or Conclusive Presumptions Of Law. One Cannot Argue Against, Or Try To Otherwise Refute These."
            },
            {
                "img": "8.png",
                "title": "Jus",
                "content": "Law, Right. Essentially: Law."
            },
            {
                "img": "1.png",
                "title": "Jus Accrescendi",
                "content": "Right Of Survivorship; Right Of Accrual. (1) Right Of Survivorship: In Property Law, On The Death Of One Joint Tenant, That Tenant'S Interest Passes Automatically To The Surviving Tenant(S) To Hold Jointly Until The Estate Is Held By A Sole Tenant. The Only Way To Defeat The Right Of Survivorship Is To Sever The Joint Tenancy During The Lifetime Of The Parties, The Right Of Survivorshop Takes Priority Over A Will Or Interstate Accession Rules. (2) (Civil Law) Right Of Accrual: Right Of The Beneficiary To Succeed Proportionately To A Benefit That Another Beneficiary In The Same Will Cannot Or Does Not Want To Take."
            },
            {
                "img": "2.png",
                "title": "Jus Accrescendi Praefertur Oneribus ",
                "content": "The Right Of Survivorship Is Preferred To Incumbrances."
            },
            {
                "img": "3.png",
                "title": "Jus Ad Bellum",
                "content": "Laws To War. Refers To Legalities Considered Before Entering Into A War, To Ensure It Is Legal To Go To War Initially. Not To Be Confused With Ius In Bello (Q.V.), The 'Laws Of War' Concerning How War Is Carried Out."
            },
            {
                "img": "4.png",
                "title": "Jus Ad Rem; Jus In Re ",
                "content": "A Right To A Thing; A Right In A Thing."
            },
            {
                "img": "5.png",
                "title": "Jus Civile",
                "content": "Civil Law. A Codified Set Of Laws Concerning Citizenry, And How The Laws Apply To Them."
            },
            {
                "img": "6.png",
                "title": "Jus Cogens",
                "content": "Compelling Law. Internationally Agreed Laws That Bear No Deviation, And Do Not Require Treaties To Be In Effect. An Example Is Law Prohibiting Genocide."
            },
            {
                "img": "7.png",
                "title": "Jus Commune",
                "content": "Common Law. Not Actually Referring To Common Law, This Term Refers To Common Doctrine And Principles Of Civil Law That Underlie All Aspects Of The Legal System."
            },
            {
                "img": "8.png",
                "title": "Jus Dicere, Non Jus Dare ",
                "content": "To Declare The Law, Not To Make The Law."
            },
            {
                "img": "1.png",
                "title": "Jus Est Norma Recti; Et Quicquid Est Contra Normam Recti Est Injuria ",
                "content": "The Law Is A Rule Of Right; And Whatever Is Contrary To A Rule Of Right Is An Injury."
            },
            {
                "img": "2.png",
                "title": "Jus Gentium",
                "content": "Law Of Nations. Customary Law Followed By All Nations. Nations Being At Peace With One Another, Without Having To Have An Actual Peace Treaty In Force, Would Be An Example Of This Concept."
            },
            {
                "img": "3.png",
                "title": "Jus In Bello",
                "content": "Law In War. Laws Governing The Conduct Of Parties In War."
            },
            {
                "img": "4.png",
                "title": "Jus Inter Gentes",
                "content": "Law Between The Peoples. Laws Governing Treaties And International Agreements."
            },
            {
                "img": "5.png",
                "title": "Jus Naturale",
                "content": "Natural Law. Laws Common To All People, That The Average Person Would Find Reasonable, Regardless Of Their Nationality."
            },
            {
                "img": "6.png",
                "title": "Jus Naturale Est Quod Apud Omnes Homines Eandem Habet Potentiam ",
                "content": "Natural Right Is That Which Has The Same Force Among All Men."
            },
            {
                "img": "7.png",
                "title": "Jus Primae Noctis",
                "content": "Right Of The First Night. Supposed Right Of The Lord Of An Estate To Take The Virginity Of Women In His Estate On Their Wedding Night."
            },
            {
                "img": "8.png",
                "title": "Jus Quaesitum Tertio",
                "content": "Right To Third-Party Relief. Right Of A Third-Party Beneficiary To Sue In Order To Enforce A Third-Party Contract (I.E., The Opposite Of Privity Of Contract)."
            },
            {
                "img": "1.png",
                "title": "Jus Sanguinis",
                "content": "Right Of Blood. Social Law Concept Wherein Citizenship Of A Nation Is Determined By Having One Or Both Parents Being Citizens."
            },
            {
                "img": "2.png",
                "title": "Jus Scriptum Aut Non Scriptum ",
                "content": "The Written Law Or The Unwritten Law."
            },
            {
                "img": "3.png",
                "title": "Jus Soli",
                "content": "Right Of Soil. Social Law Concept Wherein Citizenship Of A Nation Is Determined By Place Of Birth."
            },
            {
                "img": "4.png",
                "title": "Jus Tertii",
                "content": "Law Of The Third. Arguments Made By A Third Party In Disputes Over Possession, The Intent Of Which Is To Question One Of The Principal Parties' Claims Of Ownership Or Rights To Ownership."
            },
            {
                "img": "5.png",
                "title": "Jusjurandum Inter Alios Factum Nec Nocere Nec Prodesse Debet ",
                "content": "An Oath Made Between Third Parties Ought Neither To Hurt Nor Profit."
            },
            {
                "img": "6.png",
                "title": "Justitia Est Duplec; Severe Puniens Et Vere Praeveniens ",
                "content": "Justice Is Two. Fold; Severely Punishing And In Reality Prohibiting (Offences)."
            },
            {
                "img": "7.png",
                "title": "Justitia Firmatur Solium ",
                "content": "The Throne Is Established By Justice."
            },
            {
                "img": "8.png",
                "title": "Justitia Nemini Neganda Est ",
                "content": "Justice Is To Be Denied To No One."
            },
            {
                "img": "1.png",
                "title": "Lacunae",
                "content": "Void, Gap. A Situation Arising That Is Not Covered By Any Law. Generally Used In International Law, As All Countries Codify According To Their Own Systems Of Law."
            },
            {
                "img": "2.png",
                "title": "Leges Humanae Nascuntur, Vivunt, Moriuntur",
                "content": "The Laws Of Man Are Born, Live, And Die. Illustrates That Laws Are Made, Are In Force For A Period, And Then Become Obsolete."
            },
            {
                "img": "3.png",
                "title": "Leges Posteriores Priores Contrarias Abrogant ",
                "content": "Subsequent Laws Repeal Prior Conflicting Ones."
            },
            {
                "img": "4.png",
                "title": "Legibus Sumptis Desinentibus Legibus Naturae Utendum Est ",
                "content": "When Laws Imposed By The State Fail, We Must Use The Laws Of Nature."
            },
            {
                "img": "5.png",
                "title": "Lex Aliquando Sequitur Aequitatem ",
                "content": "The Law Sometimes Follows Equity."
            },
            {
                "img": "6.png",
                "title": "Lex Citius Tolerare Vult Privatum Damnum Quam Publicum Malum ",
                "content": "The Law Would Rather Tolerate A Private Injury Than A Public Evil."
            },
            {
                "img": "7.png",
                "title": "Lex Commissoria",
                "content": "Forfeiture Clause For Nonperformance Of A Contract, Especially (1) A Provision That A Pledge Shall Be Forfeited If A Loan Is Defaulted, Or (2) A Condition That Money Paid On A Contract Of Sale Shall Be Forfeited And The Sale Rescinded If Outstanding Payments Are Defaulted. Also Known As A Pactum Commissorium."
            },
            {
                "img": "8.png",
                "title": "Lex Communis",
                "content": "Common Law. Alternate Form Of Jus Commune. Refers To Common Facets Of Civil Law That Underlie All Aspects Of The Law."
            },
            {
                "img": "1.png",
                "title": "Lex Dabit Remedium ",
                "content": "The Law Will Give A Remedy."
            },
            {
                "img": "2.png",
                "title": "Lex Dilationes Abhorret ",
                "content": "The Law Abhors Delays."
            },
            {
                "img": "3.png",
                "title": "Lex Est Judicum Tutissimus Ductor ",
                "content": "The Law Is The Safest Guide For Judges."
            },
            {
                "img": "4.png",
                "title": "Lex Est Sanctio Sancta Jubens Honesta Et Prohibens Contraria ",
                "content": "The Law Is A Sacred Sanction, Commanding What Is Right And Prohibiting The Contrary."
            },
            {
                "img": "5.png",
                "title": "Lex Indendit Vicinum Vicini Facta Scire ",
                "content": "The Law Presumes That One Neighbor Knows The Acts Of Another."
            },
            {
                "img": "6.png",
                "title": "Lex Lata",
                "content": "The Law Borne. The Law As It Has Been Enacted."
            },
            {
                "img": "7.png",
                "title": "Lex Loci",
                "content": "The Law Of The Place. The Law Of The Country, State, Or Locality Where The Matter Under Litigation Took Place. Usually Used In Contract Law, To Determine Which Laws Govern The Contract."
            },
            {
                "img": "8.png",
                "title": "Lex Necessitatis Est Lex Temporis I.E. Instantis ",
                "content": "The Law Of Necessity Is The Law Of Time, That Is Time Present."
            },
            {
                "img": "1.png",
                "title": "Lex Neminem Cogit Ad Vana Seu Impossiblia ",
                "content": "The Law Compels No One To Do Vain Or Impossible Things."
            },
            {
                "img": "2.png",
                "title": "Lex Nil Frustra Facit ",
                "content": "The Law Does Nothing In Vain."
            },
            {
                "img": "3.png",
                "title": "Lex Non A Rege Est Violanda ",
                "content": "The Law Must Not Be Violated Even By The King."
            },
            {
                "img": "4.png",
                "title": "Lex Non Deficere Potest In Justitia Exhibenda ",
                "content": "The Law Cannot Fail In Dispensing Justice."
            },
            {
                "img": "5.png",
                "title": "Lex Non Favet Delicatorum Votis ",
                "content": "The Law Does Not Favor The Wishes Of The Dainty."
            },
            {
                "img": "6.png",
                "title": "Lex Non Novit Patrem, Nec Matrem; Solam Veritatem ",
                "content": "The Law Does Not Know Neither Father Nor Mother, Only The Truth."
            },
            {
                "img": "7.png",
                "title": "Lex Non Oritur Ex Injuria ",
                "content": "The Law Does Not Arise From A Mere Injury."
            },
            {
                "img": "8.png",
                "title": "Lex Non Requirit Verificari Quod Apparet Curiae ",
                "content": "The Law Does Not Require That To Be Proved Which Is Apparent To The Court."
            },
            {
                "img": "1.png",
                "title": "Lex Plus Laudatur Quando Ratione Probatur ",
                "content": "The Law Is The More Praised When It Is Supported By Reason."
            },
            {
                "img": "2.png",
                "title": "Lex Posterior Derogat Priori",
                "content": "Later Law Removes The Earlier. More Recent Law Overrules Older Ones On The Same Matter."
            },
            {
                "img": "3.png",
                "title": "Lex Prospicit Not Respicit ",
                "content": "The Law Looks Forwared, Not Backward."
            },
            {
                "img": "4.png",
                "title": "Lex Punit Mendaciam ",
                "content": "The Law Punishes Falsehood."
            },
            {
                "img": "5.png",
                "title": "Lex Rejicit Superflua, Pugnatia, Incongrua ",
                "content": "The Law Rejects Superfluous, Contradictory And Incongruous Things."
            },
            {
                "img": "6.png",
                "title": "Lex Retro Non Agit",
                "content": "The Law Does Not Operate Retroactively. A Law Cannot Make Something Illegal That Was Legal At The Time It Was Performed. See Ex Post Facto Law."
            },
            {
                "img": "7.png",
                "title": "Lex Scripta",
                "content": "Written Law. Law That Specifically Codifies Something, As Opposed To Common Law Or Customary Law."
            },
            {
                "img": "8.png",
                "title": "Lex Specialis Derogat Legi Generali",
                "content": "Specific Law Takes Away From The General Law. Where Several Laws Apply To The Same Situation, The More Specific One(S) Take Precedence Over More General Ones."
            },
            {
                "img": "1.png",
                "title": "Lex Spectat Naturae Ordinem ",
                "content": "The Law Regards The Order Of Nature."
            },
            {
                "img": "2.png",
                "title": "Lex Succurrit Ignoranti ",
                "content": "The Law Succors The Ignorant."
            },
            {
                "img": "3.png",
                "title": "Lex Tutissima Cassis, Sub Clypeo Legis Nemo Decipitur ",
                "content": "Law Is The Safest Helmet; Under The Shield Of The Law No One Is Deceived."
            },
            {
                "img": "4.png",
                "title": "Lex Uno Ore Omnes Alloquitur ",
                "content": "The Law Speaks To All Through One Mouth."
            },
            {
                "img": "5.png",
                "title": "Liberum Veto",
                "content": "Free Veto. An Aspect Of A Unanimous Voting System, Whereby Any Member Can End Discussion On A Proposed Law."
            },
            {
                "img": "6.png",
                "title": "Lingua Franca",
                "content": "The Frankish Language. A Language Common To An Area That Is Spoken By All, Even If Not Their Mother Tongue. Term Derives From The Name Given To A Common Language Used By Traders In The Mediterranean Basin Dating From The Middle Ages."
            },
            {
                "img": "7.png",
                "title": "Lis Alibi Pendens",
                "content": "Lawsuit Elsewhere Pending. Refers To Requesting A Legal Dispute Be Heard That Is Also Being Heard By Another Court. To Avoid Possibly Contradictory Judgements, This Request Will Not Be Granted."
            },
            {
                "img": "8.png",
                "title": "Lis Pendens",
                "content": "Suit Pending. Often Used In The Context Of Public Announcements Of Legal Proceedings To Come. Compare Pendente Lite (Below)."
            },
            {
                "img": "1.png",
                "title": "Locus",
                "content": "Place."
            },
            {
                "img": "2.png",
                "title": "Locus Delicti",
                "content": "Place Of The Crime. Shorthand Version Of Lex Locus Delcti Commissi. The 'Scene Of The Crime'."
            },
            {
                "img": "3.png",
                "title": "Locus In Quo",
                "content": "The Place In Which. The Location Where A Cause Of Action Arose."
            },
            {
                "img": "4.png",
                "title": "Locus Poenitentiae",
                "content": "Place Of Repentance. When One Party Withdraws From A Contract Before All Parties Are Bound."
            },
            {
                "img": "5.png",
                "title": "Locus Standi",
                "content": "Place Of Standing. The Right Of A Party To Appear And Be Heard Before A Court."
            },
            {
                "img": "6.png",
                "title": "Longa Possessio Est Pacis Jus ",
                "content": "Long Possession Is The Law Of Peace."
            },
            {
                "img": "7.png",
                "title": "Longa Possessio Parit Jus Possidendi Et Tollit Actionem Vero Domino ",
                "content": "Long Possession Produces The Right Of Possession And Takes Away From The True Owner His Action."
            },
            {
                "img": "8.png",
                "title": "Magister Rerum Usus; Magistra Rerum Experientia ",
                "content": "Use Is The Master Of Things; Experience Is The Mistress Of Things."
            },
            {
                "img": "1.png",
                "title": "Major Continet In Se Minus ",
                "content": "The Greater Contains The Less."
            },
            {
                "img": "2.png",
                "title": "Majus Est Delictum Se Ipsum Occidere Quam Alium ",
                "content": "It Is A Greater Crime To Kill One S Self Than Another."
            },
            {
                "img": "3.png",
                "title": "Mala Fide",
                "content": "(In) Bad Faith. A Condition Of Being Fraudulent Or Deceptive In Act Or Belief."
            },
            {
                "img": "4.png",
                "title": "Mala Grammatica Non Vitiat Chartam ",
                "content": "Bad Grammar Does Not Vitiate A Deed."
            },
            {
                "img": "5.png",
                "title": "Mala In Se ",
                "content": "Bad In Themselves."
            },
            {
                "img": "6.png",
                "title": "Mala Prohibita ",
                "content": "Crimes Prohibited."
            },
            {
                "img": "7.png",
                "title": "Maleficia Propositis Distinguuntur",
                "content": "Evil Acts Are Distinguished From (Evil) Purposes/Crimes Are Distinguished By Evil Intent. Evil Acts Are Distinguished From Evil Purposes Crimes Are Distinguished By The Intention"
            },
            {
                "img": "8.png",
                "title": "Malitia Supplet Aesatem ",
                "content": "Malice Supplies Age."
            },
            {
                "img": "1.png",
                "title": "Malo Animo ",
                "content": "With Evil Intent."
            },
            {
                "img": "2.png",
                "title": "Malum In Se",
                "content": "Wrong In Itself. Something Considered A Universal Wrong Or Evil, Regardless Of The System Of Laws In Effect."
            },
            {
                "img": "3.png",
                "title": "Malum Prohibitum",
                "content": "Prohibited Wrong. Something Wrong Or Illegal By Virtue Of It Being Expressly Prohibited, That Might Not Otherwise Be So."
            },
            {
                "img": "4.png",
                "title": "Mandamus",
                "content": "We Command. A Writ Issue By A Higher Court To A Lower One, Ordering That Court Or Related Officials To Perform Some Administrative Duty. Often Used In The Context Of Legal Oversight Of Government Agencies."
            },
            {
                "img": "5.png",
                "title": "Mare Clausum",
                "content": "Closed Sea. A Body Of Water Under The Jurisdiction Of A State Or Nation, To Which Access Is Not Permitted, Or Is Tightly Regulated."
            },
            {
                "img": "6.png",
                "title": "Mare Liberum",
                "content": "Open Sea. A Body Of Water Open To All. Typically A Synonym For International Waters, Or In Other Legal Parlance, The 'High Seas'."
            },
            {
                "img": "7.png",
                "title": "Maximus Magister Erroris Populus Est ",
                "content": "The People Are The Greatest Master Of Error."
            },
            {
                "img": "8.png",
                "title": "Melior Est Conditio Possidentis, Ubi Neuter Jus Habet ",
                "content": "Better Is The Condition Of The Possessor Where Neither Of The Two Has The Right."
            },
            {
                "img": "1.png",
                "title": "Melior Testatoris In Testamentis Spectanda Est ",
                "content": "In Wills The Intention Of A Testator Is To Be Regarded."
            },
            {
                "img": "2.png",
                "title": "Meliorem Conditionem Suam Facere Potest Minor Deteriorem Nequaquam ",
                "content": "A Minor Can Make His Position Better, Never Worse."
            },
            {
                "img": "3.png",
                "title": "Mens Rea",
                "content": "Guilty Mind. One Of The Requirements For A Crime To Be Committed, The Other Being Actus Reus, The Guilt Act. This Essentially Is The Basis For The Notion That Those Without Sufficient Mental Capability Cannot Be Judged Guilty Of A Crime."
            },
            {
                "img": "4.png",
                "title": "Mentiri Est Contra Mentem Ire ",
                "content": "To Lie Is To Act Against The Mind."
            },
            {
                "img": "5.png",
                "title": "Merito Beneficium Legis Amittit, Qui Legem Ipsam Subvertere Intendit ",
                "content": "He Justly Loses The Benefit Of The Law Who Seeks To Infringe The Law."
            },
            {
                "img": "6.png",
                "title": "Minatur Innocentibus Qui Parcit Nocentibus ",
                "content": "He Threatens The Innocent Who Spares The Guilty."
            },
            {
                "img": "7.png",
                "title": "Misera Est Servitus, Ubi Jus Est Vagum Aut Incertum ",
                "content": "It Is A Miserable Slavery Where The Law Is Vague Or Uncertain."
            },
            {
                "img": "8.png",
                "title": "Modus Operandi",
                "content": "Manner Of Operation. A Person'S Particular Way Of Doing Things. Used When Using Behavioral Analysis While Investigating A Crime. Often Abbreviated 'M.O.'"
            },
            {
                "img": "1.png",
                "title": "Mora Accipiendi",
                "content": "Delay Of Creditor. Delay In Payment Or Performance In The Part Of The Creditor Or Obligor."
            },
            {
                "img": "2.png",
                "title": "Mora Solvendi",
                "content": "Delay Of Debtor. Delay In Payment Or Performance In The Part Of The Debtor Or The Obligee."
            },
            {
                "img": "3.png",
                "title": "Mors Dicitur Ultimum Supplicium ",
                "content": "Death Is Called The Extreme Penalty."
            },
            {
                "img": "4.png",
                "title": "Mortis Causa",
                "content": "In Contemplation Of Death. Gift Or Trust That Is Made In Contemplation Of Death."
            },
            {
                "img": "5.png",
                "title": "Mos Pro Lege",
                "content": "Custom For Law. That Which Is The Usual Custom Has The Force Of Law."
            },
            {
                "img": "6.png",
                "title": "Motion In Limine",
                "content": "Motion At The Start. Motions Offered At The Start Of A Trial, Often To Suppress Or Pre-Allow Certain Evidence Or Testimony."
            },
            {
                "img": "7.png",
                "title": "Muilta Exercitatione Facilius Quam Regulis Percipies ",
                "content": "You Will Perceive Many Things More Easily By Experience Than By Rules."
            },
            {
                "img": "8.png",
                "title": "Mutatis Mutandis",
                "content": "Having Changed [The Things That] Needed To Be Changed. A Caution To A Reader When Using One Example To Illustrate A Related But Slightly Different Situation. The Caution Is That The Reader Must Adapt The Example To Change What Is Needed For It To Apply To The New Situation."
            },
            {
                "img": "1.png",
                "title": "Nam Nemo Haeres Viventis ",
                "content": "For No One Is An Heir Of A Living Person."
            },
            {
                "img": "2.png",
                "title": "Naturae Vis Maxima Est ",
                "content": "The Force Of Nature Is The Greatest."
            },
            {
                "img": "3.png",
                "title": "Ne Exeat",
                "content": "Let Him Not Exit [The Republic]. Shortened Version Of Ne Exeat Repiblica: 'Let Him Not Exit The Republic'. A Writ To Prevent One Party To A Dispute From Leaving (Or Being Taken) From The Court'S Jurisdiction."
            },
            {
                "img": "4.png",
                "title": "Necessitas Inducit Privilegium Quoad Jura Privata ",
                "content": "With Respect To Private Rights Necessity Induces Privilege."
            },
            {
                "img": "5.png",
                "title": "Necessitas Non Habet Legem ",
                "content": "Necessity Has No Law."
            },
            {
                "img": "6.png",
                "title": "Necessitas Publica Est Major Quam Privata ",
                "content": "Public Necessity Is Greater Than Private Necessity."
            },
            {
                "img": "7.png",
                "title": "Negligentia Semper Habet Infortuniam Comitem ",
                "content": "Negligence Always Has Misfortune For A Companion."
            },
            {
                "img": "8.png",
                "title": "Negotiorum Gestio",
                "content": "Management Of Estate. Quasi-Contractual Obligation Arising From Good Works Affecting Other People, Obliging The Benefited Party (Dominus Negotii) To Reimburse The Gestor For The Cost That Was Used In Doing Good Works."
            },
            {
                "img": "1.png",
                "title": "Nemo Admittendus Est Inhabilitare Se Ipsum ",
                "content": "No One Is Allowed To Incapacitate Himself."
            },
            {
                "img": "2.png",
                "title": "Nemo Auditur Propriam Turpitudinem Allegans",
                "content": "No One Can Be Heard, Who Invokes His Own Guilt. Nobody Can Bring A Case That Stems From Their Own Illegal Act."
            },
            {
                "img": "3.png",
                "title": "Nemo Bis Punitur Pro Eodem Delicto ",
                "content": "No One Can Be Twice Punished For The Same Offence."
            },
            {
                "img": "4.png",
                "title": "Nemo Cogitur Suam Rem Vendere, Etiam Justo Pretio ",
                "content": "No One Is Bound To Sell His Own Property, Even For A Just Price."
            },
            {
                "img": "5.png",
                "title": "Nemo Contra Factum Suum Venire Potest ",
                "content": "No Man Can Contradict His Own Deed."
            },
            {
                "img": "6.png",
                "title": "Nemo Dat Quod Non Habet",
                "content": "No One Gives What He Does Not Have. If Someone Purchases Something That The Seller Has No Right To (Such As Stolen Property), The Purchaser Will Likewise Have No Legal Claim To The Thing Bought."
            },
            {
                "img": "7.png",
                "title": "Nemo Debet Esse Iudex In Propria",
                "content": "No One Shall Be A Judge In His Own Case. In The Past It Was Thought That It Included Just Two Rules Namely (1) Nemo Debet Esse Judex In Propria Causa (No One Shall Be A Judge In His Own Case)[Clarification Needed]"
            },
            {
                "img": "8.png",
                "title": "Nemo Ius Ignoratur Censetur",
                "content": "Not Knowing The Law Is Harmful. Everyone Should Know The Law. This Is Used In European Law-Countries With A History Of Roman Law, The 'Sentence' Was First Made By Aristotle."
            },
            {
                "img": "1.png",
                "title": "Nemo Judex In Sua Causa",
                "content": "No One Shall Be A Judge In His Own Case. Prevents Conflict Of Interest In Courts. Often Invoked When There Is Really No Conflict, But When There Is Even The Appearance Of One."
            },
            {
                "img": "2.png",
                "title": "Nemo Plus Juris Ad Alium Transferre Potest Quam Ipse Habet",
                "content": "No One Can Transfer A Greater Right Than He Himself Has. A Purchaser Of Stolen Goods Will Not Become The Rightful Owner Thereof, Since The Seller Himself Was Not The Owner To Begin With."
            },
            {
                "img": "3.png",
                "title": "Nemo Potest Contra Recordum Verificare Per Patriam ",
                "content": "No One Can Verify By The Country, That Is, Through A Jury, Against The Record."
            },
            {
                "img": "4.png",
                "title": "Nemo Potest Esse Tenens Et Dominus ",
                "content": "No One Can At The Same Time Be A Tenant And A Landlord (Of The Same Tenement)."
            },
            {
                "img": "5.png",
                "title": "Nemo Potest Facere Per Alium, Quod Per Se Non Potest ",
                "content": "No One Can Do Through Another What He Cannot Do Himself."
            },
            {
                "img": "6.png",
                "title": "Nemo Potest Mutare Consilium Suum In Alterius Injuriam ",
                "content": "No One Can Change His Purpose To The Injury Of Another."
            },
            {
                "img": "7.png",
                "title": "Nemo Praesumitur Esse Immemor Suae Aeternae Salutis Et Maxime In Articulo Mortis ",
                "content": "No One Is Presumed To Be Forgetful Of His Eternal Welfare, And Particularly In The Hour Of Death."
            },
            {
                "img": "8.png",
                "title": "Nemo Prohibetur Pluribus Defensionibus Uti ",
                "content": "No One Is Forbidden To Make Use Of Several Defences."
            },
            {
                "img": "1.png",
                "title": "Nemo Punitur Pro Alieno Delicto ",
                "content": "No One Is Punished For The Crime Of Another."
            },
            {
                "img": "2.png",
                "title": "Nemo Se Accusare Debet, Nisi Coram Deo ",
                "content": "No One Should Accuse Himself Except In The Presence Of God."
            },
            {
                "img": "3.png",
                "title": "Nemo Tenetur Accusare Se Ipsum Nisi Coram Deo ",
                "content": "No One Is Bound To Accuse Himself Except In The Presence Of God."
            },
            {
                "img": "4.png",
                "title": "Nemo Tenetur Armare Adversarium Contra Se ",
                "content": "No One Is Bound To Arm His Adversary Against Himself."
            },
            {
                "img": "5.png",
                "title": "Nexus ",
                "content": "Connection."
            },
            {
                "img": "6.png",
                "title": "Nihil Dicit",
                "content": "He Says Nothing. A Judgement Rendered In The Absence Of A Plea, Or In The Event One Party Refuses To Cooperate In The Proceedings."
            },
            {
                "img": "7.png",
                "title": "Nihil Quod Est Inconveniens Est Licitum ",
                "content": "Nothing Inconvenient Is Lawful."
            },
            {
                "img": "8.png",
                "title": "Nil Facit Error Nominis Cum De Corpore Constat ",
                "content": "An Error Of Name Makes Not Difference When It Appears From The Body Of The Instrument."
            },
            {
                "img": "1.png",
                "title": "Nisi",
                "content": "Unless. A Decree That Does Not Enter Into Force Unless Some Other Specified Condition Is Met."
            },
            {
                "img": "2.png",
                "title": "Nisi Prius",
                "content": "Unless First. Refers To The Court Of Original Jurisdiction In A Given Matter."
            },
            {
                "img": "3.png",
                "title": "Nolle Prosequi",
                "content": "Not To Prosecute. A Statement From The Prosecution That They Are Voluntarily Discontinuing (Or Will Not Initiate) Prosecution Of A Matter."
            },
            {
                "img": "4.png",
                "title": "Nolo Contendere",
                "content": "I Do Not Wish To Dispute. A Type Of Plea Whereby The Defendant Neither Admits Nor Denies The Charge. Commonly Interpreted As 'No Contest.'"
            },
            {
                "img": "5.png",
                "title": "Non Adimpleti Contractus",
                "content": "Of A Non-Completed Contract. In The Case Where A Contract Imposes Specific Obligations On Both Parties, One Side Cannot Sue The Other For Failure To Meet Their Obligations, If The Plaintiff Has Not Themselves Met Their Own."
            },
            {
                "img": "6.png",
                "title": "Non Bis In Idem",
                "content": "Not Twice In The Same. Prohibition Against Double Jeopardy. A Legal Action Cannot Be Brought Twice For The Same Act Or Offense."
            },
            {
                "img": "7.png",
                "title": "Non Compos Mentis",
                "content": "Not In Possession Of [One'S] Mind. Not Having Mental Capacity To Perform Some Legal Act"
            },
            {
                "img": "8.png",
                "title": "Non Constat",
                "content": "It Is Not Certain. Refers To Information Given By One Who Is Not Supposed To Give Testimony, Such As An Attorney Bringing Up New Information That Did Not Come From A Witness. Such Information Is Typically Nullified."
            },
            {
                "img": "1.png",
                "title": "Non Decipitur Qui Scit Se Decipi ",
                "content": "He Is Not Deceived Who Knows That He Is Deceived."
            },
            {
                "img": "2.png",
                "title": "Non Definitur In Jure Quid Sit Conatus ",
                "content": "What An Attempt Is, Is Not Defined In Law."
            },
            {
                "img": "3.png",
                "title": "Non Est Arctius Vinculum Inter Homines Quam Jusjurandum ",
                "content": "There Is No Stronger Link Among Men Than An Oath."
            },
            {
                "img": "4.png",
                "title": "Non Est Factum",
                "content": "It Is Not [My] Deed. A Method Whereby A Signatory To A Contract Can Invalidate It By Showing That His Signature To The Contract Was Made Unintentionally Or Without Full Understanding Of The Implications."
            },
            {
                "img": "5.png",
                "title": "Non Est Informatus ",
                "content": "He Is Not Informed."
            },
            {
                "img": "6.png",
                "title": "Non Est Inventus",
                "content": "He Is Not Found. Reported By A Sheriff On Writ When The Defendant Cannot Be Found In His County Or Jurisdiction."
            },
            {
                "img": "7.png",
                "title": "Non Facias Malum Ut Inde Veniat Bonum ",
                "content": "You Shall Not Do Evil That Good May Come Of It."
            },
            {
                "img": "8.png",
                "title": "Non Jus, Sed Seisina, Facit Stipitem ",
                "content": "Not Right, But Seisin Makes A Stock (From Which The Inheritance Must Descend)."
            },
            {
                "img": "1.png",
                "title": "Non Liquet",
                "content": "It Is Not Clear. A Type Of Verdict Where Positive Guilt Or Innocence Cannot Be Determined. Also Called 'Not Proven' In Legal Systems With Such Verdicts."
            },
            {
                "img": "2.png",
                "title": "Non Obstante Verdicto",
                "content": "Notwithstanding The Verdict. A Circumstance Where The Judge May Override The Jury Verdict And Reverse Or Modify The Decision."
            },
            {
                "img": "3.png",
                "title": "Non Refert Quid Notum Sit Judici Si Notum Non Sit In Forma Judicii ",
                "content": "It Matters Not What Is Known To The Judge If It Is Not Known Judicially."
            },
            {
                "img": "4.png",
                "title": "Non Sequitur ",
                "content": "An Inconsistent Statement, It Does Not Follow."
            },
            {
                "img": "5.png",
                "title": "Noscitur A Sociis",
                "content": "It Is Known By Friends. An Ambiguous Word Or Term Can Be Clarified By Considering The Whole Context In Which It Is Used, Without Having To Define The Term Itself."
            },
            {
                "img": "6.png",
                "title": "Nota Bene",
                "content": "Note Well. A Term Used To Direct The Reader To Cautionary Or Qualifying Statements For The Main Text."
            },
            {
                "img": "7.png",
                "title": "Novus Actus Interveniens",
                "content": "A New Action Coming Between. A Break In Causation (And Therefore Probably Liability) Because Something Else Has Happened To Remove The Causal Link."
            },
            {
                "img": "8.png",
                "title": "Nudum Pactum",
                "content": "Naked Promise. An Unenforceable Promise, Due To The Absence Of Consideration Or Value Exchanged For The Promise."
            },
            {
                "img": "1.png",
                "title": "Nulla Bona",
                "content": "No Goods. Notation Made When A Defendant Has No Tangible Property Available To Be Seized In Order To Comply With A Judgement."
            },
            {
                "img": "2.png",
                "title": "Nulla Poena Sine Lege",
                "content": "No Penalty Without A Law. One Cannot Be Prosecuted For Doing Something That Is Not Prohibited By Law."
            },
            {
                "img": "3.png",
                "title": "Nullum Crimen, Nulla Poena Sine Praevia Lege Poenali",
                "content": "No Crime, No Punishment Without A Previous Penal Law. One Cannot Be Prosecuted For Doing Something That Was Not Prohibited By Law At The Time And Place It Was Committed, Notwithstanding Laws Made Since That Time. A Form Of Prohibition On Retroactive Laws."
            },
            {
                "img": "4.png",
                "title": "Nullus Commodum Capere Potest Ex Sua Injuria Propria ",
                "content": "No One Can Derive An Advantage From His Own Wrong."
            },
            {
                "img": "5.png",
                "title": "Nullus Recedat E Curia Cancellaria Sine Remedio ",
                "content": "No One Should Depart From A Court Of Chancery Without A Remedy."
            },
            {
                "img": "6.png",
                "title": "Nunc Pro Tunc",
                "content": "Now For Then. An Action By A Court To Correct A Previous Procedural Or Clerical Error."
            },
            {
                "img": "7.png",
                "title": "Obiter Dictum",
                "content": "A Thing Said In Passing. In Law, An Observation By A Judge On Some Point Of Law Not Directly Relevant To The Case Before Him, And Thus Neither Requiring His Decision Nor Serving As A Precedent, But Nevertheless Of Persuasive Authority. In General, Any Comment, Remark Or Observation Made In Passing."
            },
            {
                "img": "8.png",
                "title": "Omne Sacramentum Debet Esse De Certa Scientia ",
                "content": "Every Oath Ought To Be Of Certain Knowledge."
            },
            {
                "img": "1.png",
                "title": "Omnia Delicta In Aperto Leviora Sunt ",
                "content": "All Crimes (Committed) In The Open Are (Considered) Lighter."
            },
            {
                "img": "2.png",
                "title": "Omnia Praesumuntur Contra Spoliatorem ",
                "content": "All Things Are Presumed Against A Wrongdoer."
            },
            {
                "img": "3.png",
                "title": "Omnis Innovatio Plus Novitate Perturbat Quam Utilitate Prodeat ",
                "content": "Every Innovation Disturbs More By Its Novelty Than It Benefits By Its Utility."
            },
            {
                "img": "4.png",
                "title": "Onus Probandi",
                "content": "Burden Of Proof."
            },
            {
                "img": "5.png",
                "title": "Optima Legum Interpres Est Consuetudo ",
                "content": "The Best Interpreter Of Laws Is Custom."
            },
            {
                "img": "6.png",
                "title": "Optimus Interpres Rerum Est Usus ",
                "content": "The Best Interpreter Of Things Is Usage."
            },
            {
                "img": "7.png",
                "title": "Pace",
                "content": "With Peace. Used To Say 'Contrary To The Opinion Of.' It Is A Polite Way Of Marking A Speaker'S Disagreement With Someone Or Some Body Of Thought."
            },
            {
                "img": "8.png",
                "title": "Pacta Privata Juri Publico Non Derogare Possunt ",
                "content": "Private Contracts Cannot Derogate From Public Law."
            },
            {
                "img": "1.png",
                "title": "Pacta Sunt Servanda",
                "content": "Agreements Must Be Kept. A Fundamental Principle Of Law."
            },
            {
                "img": "2.png",
                "title": "Par Delictum",
                "content": "Equal Fault. Used When Both Parties To A Dispute Are At Fault."
            },
            {
                "img": "3.png",
                "title": "Parens Patriae",
                "content": "Parent Of The Nation. Refers To The Power Of The State To Act As Parent To A Child When The Legal Parents Are Unable Or Unwilling."
            },
            {
                "img": "4.png",
                "title": "Pari Passu",
                "content": "On Equal Footing. Equal Ranking, Equal Priority (Usually Referring To Creditors)."
            },
            {
                "img": "5.png",
                "title": "Partus Sequitur Ventrem ",
                "content": "The Offspring Follows The Mother."
            },
            {
                "img": "6.png",
                "title": "Pater Est Quem Nuptiae Demonstrant ",
                "content": "The Father Is He Whom The Marriage Points Out."
            },
            {
                "img": "7.png",
                "title": "Pater Familias",
                "content": "Father Of The Family. The Head Of Household, For Purposes Of Considering The Rights And Responsibilities Thereof. (Civil Law) Bonus Paterfamilias: A Standard Of Care Equivalent To The Common Law Ordinary Reasonable Man."
            },
            {
                "img": "8.png",
                "title": "Peccata Contra Naturam Sunt Gravissima ",
                "content": "Wrongs Against Nature Are The Most Serious."
            },
            {
                "img": "1.png",
                "title": "Pendente Lite",
                "content": "While The Litigation Is Pending. Court Orders Used To Provide Relief Until The Final Judgement Is Rendered. Commonly Used In Divorce Proceedings. The Adverbial Form Of Lis Pendens (Above)."
            },
            {
                "img": "2.png",
                "title": "Pendente Lite Nihil Innovetur ",
                "content": "During Litigation Nothing Should Be Changed."
            },
            {
                "img": "3.png",
                "title": "Per Capita",
                "content": "By Head. Dividing Money Up Strictly And Equally According To The Number Of Beneficiaries"
            },
            {
                "img": "4.png",
                "title": "Per Contra",
                "content": "By That Against. Legal Shorthand For 'In Contrast To'."
            },
            {
                "img": "5.png",
                "title": "Per Curiam",
                "content": "Through The Court. A Decision Delivered By A Multi-Judge Panel, Such As An Appellate Court, In Which The Decision Is Said To Be Authored By The Court Itself, Instead Of Situations Where Those Individual Judges Supporting The Decision Are Named."
            },
            {
                "img": "6.png",
                "title": "Per Incuriam",
                "content": "By Their Neglect. A Judgement Given Without Reference To Precedent."
            },
            {
                "img": "7.png",
                "title": "Per Minas",
                "content": "Through Threats. Used As A Defense, When Illegal Acts Were Performed Under Duress."
            },
            {
                "img": "8.png",
                "title": "Per Proxima Amici",
                "content": "By Or Through The Next Friend. Employed When An Adult Brings Suit On Behalf Of A Minor, Who Was Unable To Maintain An Action On His Own Behalf At Common Law."
            },
            {
                "img": "1.png",
                "title": "Per Quod",
                "content": "By Which. Used In Legal Documents In The Same Sense As 'Whereby'. A Per Quod Statement Is Typically Used To Show That Specific Acts Had Consequences Which Form The Basis For The Legal Action."
            },
            {
                "img": "2.png",
                "title": "Per Se",
                "content": "By Itself. Something That Is, As A Matter Of Law."
            },
            {
                "img": "3.png",
                "title": "Per Stirpes",
                "content": "By Branch. An Estate Of A Decedent Is Distributed Per Stirpes, If Each Branch Of The Family Is To Receive An Equal Share Of An Estate."
            },
            {
                "img": "4.png",
                "title": "Periculum In Mora",
                "content": "Danger In Delay. A Condition Given To Support Requests For Urgent Action, Such As A Protective Order Or Restraining Order."
            },
            {
                "img": "5.png",
                "title": "Persona Non Grata",
                "content": "Unwelcome Person. A Person Who Is Officially Considered Unwelcome By A Host Country In Which They Are Residing In A Diplomatic Capacity. The Person Is Typically Expelled To Their Home Country."
            },
            {
                "img": "6.png",
                "title": "Posse Comitatus",
                "content": "Power Of The County. A Body Of Armed Citizens Pressed Into Service By Legal Authority, To Keep The Peace Or Pursue A Fugitive."
            },
            {
                "img": "7.png",
                "title": "Post Mortem",
                "content": "After Death. Refers To An Autopsy, Or As A Qualification As To When Some Event Occurred."
            },
            {
                "img": "8.png",
                "title": "Post Mortem Auctoris",
                "content": "After The Author'S Death. Used In Reference To Intellectual Property Rights, Which Usually Are Based Around The Author'S Lifetime."
            },
            {
                "img": "1.png",
                "title": "Praetor Peregrinus",
                "content": "Magistrate Of Foreigners. The Roman Praetor (Magistrate) Responsible For Matters Involving Non-Romans."
            },
            {
                "img": "2.png",
                "title": "Prima Facie",
                "content": "At First Face. A Matter That Appears To Be Sufficiently Based In The Evidence As To Be Considered True."
            },
            {
                "img": "3.png",
                "title": "Prima Impressionis ",
                "content": "On First Impression."
            },
            {
                "img": "4.png",
                "title": "Prior Tempore Potior Iure",
                "content": "Earlier In Time, Stronger In Law. (1) A Legal Principle That Older Laws Take Precedence Over Newer Ones. Another Name For This Principle Is Lex Posterior. (2) (Scots Law, Civil Law), Usually Translated As 'Prior In Time, Superior In Right', The Principle That Someone Who Registers (A Security Interest) Earlier Therefore Ranks Higher Than Other Creditors."
            },
            {
                "img": "5.png",
                "title": "Prius Quam Exaudias Ne Iudices",
                "content": "Before You Hear, Do Not Judge."
            },
            {
                "img": "6.png",
                "title": "Pro Bono",
                "content": "For Good. Professional Work Done For Free."
            },
            {
                "img": "7.png",
                "title": "Pro Bono Publico",
                "content": "For The Public Good."
            },
            {
                "img": "8.png",
                "title": "Pro Forma",
                "content": "As A Matter Of Form. Things Done As Formalities."
            },
            {
                "img": "1.png",
                "title": "Pro Hac Vice",
                "content": "For This Turn. Refers To A Lawyer Who Is Allowed To Participate (Only) In A Specific Case, Despite Being In A Jurisdiction In Which He Has Not Been Generally Admitted."
            },
            {
                "img": "2.png",
                "title": "Pro Per",
                "content": "Abbreviation Of Propria Persona, Meaning 'One'S Own Person'. Representing Oneself, Without Counsel. Also Known As Pro Se Representation."
            },
            {
                "img": "3.png",
                "title": "Pro Rata",
                "content": "From The Rate. A Calculation Adjusted Based On A Proportional Value Relevant To The Calculation. An Example Would Be A Tenant Being Charged A Portion Of A Month'S Rent Based On Having Lived There Less Than A Full Month. The Amount Charged Would Be Proportional To The Time Occupied."
            },
            {
                "img": "4.png",
                "title": "Pro Se",
                "content": "For Himself. Representing Oneself, Without Counsel. Also Known As Pro Per Representation."
            },
            {
                "img": "5.png",
                "title": "Pro Tanto",
                "content": "For So Much. A Partial Payment Of An Award Or Claim, Based On The Defendant'S Ability To Pay."
            },
            {
                "img": "6.png",
                "title": "Pro Tem",
                "content": "Abbreviation Of Pro Tempore, Meaning 'For The Time Being'. Something, Such As An Office Held, That Is Temporary."
            },
            {
                "img": "7.png",
                "title": "Pro Tempore",
                "content": "For The Time Being. Something, Such As An Office Held, That Is Temporary."
            },
            {
                "img": "8.png",
                "title": "Probatio Vincit Praesumptionem",
                "content": "Proof Overcomes Presumption."
            },
            {
                "img": "1.png",
                "title": "Propria Persona",
                "content": "Proper Person. Refers To One Representing Themselves Without The Services Of A Lawyer. Also Known As Pro Per Representation."
            },
            {
                "img": "2.png",
                "title": "Prout Patet Per Recordum",
                "content": "As Appears In The Record. Used To Cite Something That Has Already Been Admitted Into The Record. It Was Frequently Used In Pleadings, Generally Abbreviated 'Prout &C.', To Indicate That A Fact Was Supported By Documentary Evidence. Failure To Use This Phrase Correctly Could Be A Fatal Defect And So Cause A Case To Fail."
            },
            {
                "img": "3.png",
                "title": "Publici Juris ",
                "content": "Of Public Right."
            },
            {
                "img": "4.png",
                "title": "Qua",
                "content": "Which; As. In The Capacity Of."
            },
            {
                "img": "5.png",
                "title": "Quaeitur ",
                "content": "The Question Is Raised."
            },
            {
                "img": "6.png",
                "title": "Quaere",
                "content": "Query. Used In Legal Drafts To Call Attention To Some Uncertainty Or Inconsistency In The Material Being Cited."
            },
            {
                "img": "7.png",
                "title": "Quantum",
                "content": "How Much, An Amount."
            },
            {
                "img": "8.png",
                "title": "Quantum Meruit",
                "content": "As Much As It Deserves; As Much As She Or He Has Earned. In Contract Law, A Quasi-Contractual Remedy That Permits Partial Reasonable Payment For An Incomplete Piece Of Work (Services And/Or Materials), Assessed Proportionately, Where No Price Is Established When The Request Is Made."
            },
            {
                "img": "1.png",
                "title": "Quantum Valebant",
                "content": "As Much As They Were Worth. Under Common Law, A Remedy To Compute Reasonable Damages When A Contract Has Been Breached ' The Implied Promise Of Payment Of A Reasonable Price For Goods."
            },
            {
                "img": "2.png",
                "title": "Quareitur",
                "content": "It Is Sought. The Question Is Raised. Used To Declare That A Question Is Being Asked In The Following Verbiage."
            },
            {
                "img": "3.png",
                "title": "Quasi",
                "content": "As If. Resembling Or Being Similar To Something, Without Actually Being That Thing."
            },
            {
                "img": "4.png",
                "title": "Qui Facit Per Alium Facit Per Se",
                "content": "Who Acts Through Another, Acts Himself. One Who Delegates A Task To Another, Takes Full Responsibility For The Performance Of That Act As If He Himself Had Done It. Basis For The Law Of Agency."
            },
            {
                "img": "5.png",
                "title": "Qui Haeret In Litera, Haeret In Cortice ",
                "content": "He Who Stices To The Letter, Sticks To The Bark."
            },
            {
                "img": "6.png",
                "title": "Qui In Utero Est, Pro Jam Nato Habetur, Quoties De Ejus Commodo Quaeritur ",
                "content": "He Who Is In The Womb Is Considered As Already Born As Far As His Benefit Is Considered."
            },
            {
                "img": "7.png",
                "title": "Qui Non Habet Potestatem Alienandi, Habet Necessitatem Retinendi ",
                "content": "He Who Has Not The Power Of Alienating Is Under The Necessity Of Retaining."
            },
            {
                "img": "8.png",
                "title": "Qui Non Habet, Ille Non Dat ",
                "content": "He Who Has Not, Does Not Give."
            },
            {
                "img": "1.png",
                "title": "Qui Non Improbat, Approbat ",
                "content": "He Who Does Not Disapprove, Approves."
            },
            {
                "img": "2.png",
                "title": "Qui Non Obstat Quod Obstare Potest Facere Videtur ",
                "content": "He Who Does Not Prevent What He Is Able To Prevent, Is Considered As Committing The Thing."
            },
            {
                "img": "3.png",
                "title": "Qui Non Prohibet Quod Prohibere Potest Assentire Videtur ",
                "content": "He Who Does Not Prohibit When He Is Able To Prohibit, Is In Fault."
            },
            {
                "img": "4.png",
                "title": "Qui Peccat Ebrius, Luat Sobrius ",
                "content": "He Who Does Wrong When Drunk Must Be Punished When Sober."
            },
            {
                "img": "5.png",
                "title": "Qui Potest Et Debet Vetare Et Non Vetat Jubet ",
                "content": "He Who Is Able And Ought To Forbit And Does Not, Commands."
            },
            {
                "img": "6.png",
                "title": "Qui Prior Est Tempore Potior Est Jure ",
                "content": "He Who Is Prior In Time Is Stronger In Right."
            },
            {
                "img": "7.png",
                "title": "Qui Sentit Commodum, Debet Et Sentire Onus ",
                "content": "He Who Derives A Benefit Ought Also To Bear A Burden."
            },
            {
                "img": "8.png",
                "title": "Qui Tacet Consentire Videtur ",
                "content": "He Who Is Silent Appears To Consent."
            },
            {
                "img": "1.png",
                "title": "Qui Tam",
                "content": "Abbreviation Of Qui Tam Pro Domino Rege Quam Pro Se Ipso In Hac Parte Sequitur, Meaning 'Who Pursues In This Action As Much For The King As Himself'. In A Qui Tam Action, One Who Assists The Prosecution Of A Case Is Entitled To A Proportion Of Any Fines Or Penalties Assessed."
            },
            {
                "img": "2.png",
                "title": "Quid Pro Quo",
                "content": "This For That. An Equal Exchange Of Goods Or Services, Or Of Money (Or Other Consideration Of Equal Value) For Some Goods Or Services."
            },
            {
                "img": "3.png",
                "title": "Quidcquid Plantatur Solo, Solo Cedit ",
                "content": "Whatever Is Planted In Or Affixed To The Soil, Belongs To The Soil."
            },
            {
                "img": "4.png",
                "title": "Quo Ante",
                "content": "As Before. Returning To A Specific State Of Affairs Which Preceded Some Defined Action."
            },
            {
                "img": "5.png",
                "title": "Quo Warranto",
                "content": "By What Warrant. A Request Made To Someone Exercising Some Power, To Show By What Legal Right They Are Exercising That Power. A Type Of Writ."
            },
            {
                "img": "6.png",
                "title": "Quoad Hoc",
                "content": "As To This. Used To Mean 'With Respect To' Some Named Thing, Such As When Stating What The Law Is In Regards To That Named Thing."
            },
            {
                "img": "7.png",
                "title": "Quod Ab Initio Non Valet, In Tractu Temporis Non Convalescit ",
                "content": "What Is Not Valid In The Beginning Does Not Become Valid By Time."
            },
            {
                "img": "8.png",
                "title": "Quod Constat Curiae Opere Testium Non Indiget ",
                "content": "What Appears To The Court Needs Not The Help Of Witnesses."
            },
            {
                "img": "1.png",
                "title": "Quod Est Necessarium Est Licitum",
                "content": "What Is Necessary Is Lawful."
            },
            {
                "img": "2.png",
                "title": "Quod Necessarie Intelligitur, Id Non Deest ",
                "content": "What Is Necessarily Understood Is Not Wanting."
            },
            {
                "img": "3.png",
                "title": "Quod Necessitas Cogit, Defendit ",
                "content": "What Necessity Forces It Justifies."
            },
            {
                "img": "4.png",
                "title": "Quod Non Apparet, Non Est ",
                "content": "What Does Not Appear, Is Not."
            },
            {
                "img": "5.png",
                "title": "Quod Non Habet Principium Non Habet Finem ",
                "content": "What Has No Beginning Has No End."
            },
            {
                "img": "6.png",
                "title": "Quod Per Me Non Possum, Nec Per Alium ",
                "content": "What I Cannot Do Through Myself, I Cannot Do Through Another."
            },
            {
                "img": "7.png",
                "title": "Quod Prius Est Verius Est; Et Quod Prius Est Tempore Potius Est Jure ",
                "content": "What Is First Is More True; And What Is Prior In Time Is Stronger In Law."
            },
            {
                "img": "8.png",
                "title": "Quod Vanum Et Inutile Est, Lex Non Requirit ",
                "content": "The Law Does Not Require What Is Vain And Useless."
            },
            {
                "img": "1.png",
                "title": "Quoties In Verbis Nulla Est Ambiguitas, Ibi Nulla Expositio Contra Verba Expressa Fienda Est ",
                "content": "When There Is No Ambiguity In Words, Then No Exposition Contrary To The Expressed Words Is To Be Made."
            },
            {
                "img": "2.png",
                "title": "Rex Or Regina. King Or Queen.",
                "content": " In British Cases,You Will See R V Freeman Meaning Regina Against Freeman. Changes With King Or Queen On Throne At Time."
            },
            {
                "img": "3.png",
                "title": "Ratio Decidendi",
                "content": "Reason For The Decision. The Point In A Legal Proceeding, Or The Legal Precedent So Involved, Which Led To The Final Decision Being What It Was."
            },
            {
                "img": "4.png",
                "title": "Ratio Est Legis Anima, Mutata Legis Ratione Mutatur Et Lex ",
                "content": "Reason Is The Soul Of The Law; When The Reason Of The Law Changes The Law Also Is Changed."
            },
            {
                "img": "5.png",
                "title": "Ratio Scripta",
                "content": "Written Reason. The Popular Opinion Of Roman Law, Held By Those In The Medieval Period."
            },
            {
                "img": "6.png",
                "title": "Rationae Soli",
                "content": "By Reason Of The Soil. Certain Rights May Arise By Virtue Of Ownership Of The Soil Upon Which Wild Animals Are Found."
            },
            {
                "img": "7.png",
                "title": "Re ",
                "content": "In The Matter Of."
            },
            {
                "img": "8.png",
                "title": "Rebus Sic Stantibus",
                "content": "Things Thus Standing. A Qualification In A Treaty Or Contract, That Allows For Nullification In The Event Fundamental Circumstances Change."
            },
            {
                "img": "1.png",
                "title": "Recognition Is The Greatest Motivator ",
                "content": "Agnitio Est Maioribus Motivator."
            },
            {
                "img": "2.png",
                "title": "Reddendo Singula Singulis",
                "content": "Referring Solely To The Last. The Canon Of Construction That In A List Of Items Containing A Qualifying Phrase At The End, The Qualifier Refers Only To The Last Item In The List."
            },
            {
                "img": "3.png",
                "title": "Reprobata Pecunia Leberat Solventem ",
                "content": "Money Refused Releases The Debtor."
            },
            {
                "img": "4.png",
                "title": "Res",
                "content": "Thing, Matter, Issue, Affair."
            },
            {
                "img": "5.png",
                "title": "Res ",
                "content": "Matter, Affair, Thing, Circumstance."
            },
            {
                "img": "6.png",
                "title": "Res Communis",
                "content": "Common To All. Property Constructs Like Airspace And Water Rights Are Said To Be Res Communis ' That Is, A Thing Common To All, And That Could Not Be The Subject Of Ownership. With Airspace, The Difficulty Has Been To Identify Where The Fee Simple Holder'S Rights To The Heavens End. Water Is A Bit More Defined ' It Is Common Until Captured."
            },
            {
                "img": "7.png",
                "title": "Res Gestae",
                "content": "Things Done. Differing Meaning Depending On What Type Of Law Is Involved. May Refer To The Complete Act Of A Felony, From Start To Finish, Or May Refer To Statements Given That May Be Exempt From Hearsay Rules."
            },
            {
                "img": "8.png",
                "title": "Res Integra ",
                "content": "A Matter Untouched (By Decision)."
            },
            {
                "img": "1.png",
                "title": "Res Inter Alios Acta Alteri Nocere Non Debet ",
                "content": "Things Done Between Strangers Ought Not To Affect A Third Person, Who Is A Stranger To The Transaction."
            },
            {
                "img": "2.png",
                "title": "Res Ipsa Loquitur",
                "content": "The Thing Speaks For Itself. Used In Tort Law When There Is No Proof Of What Caused The Harm, But It Is Most Likely Only The Thing That Could Have Caused The Harm."
            },
            {
                "img": "3.png",
                "title": "Res Judicata",
                "content": "A Matter Judged. A Matter That Has Been Finally Adjudicated, Meaning No Further Appeals Or Legal Actions By The Involved Parties Is Now Possible."
            },
            {
                "img": "4.png",
                "title": "Res Nullis ",
                "content": "Nobody S Property."
            },
            {
                "img": "5.png",
                "title": "Res Nullius",
                "content": "Nobody'S Thing. Ownerless Property Or Goods. Such Property Or Goods Are Able And Subject To Being Owned By Anybody."
            },
            {
                "img": "6.png",
                "title": "Res Publica",
                "content": "Public Affair. All Things Subject To Concern By The Citizenry. The Root Of The Word Republic."
            },
            {
                "img": "7.png",
                "title": "Res Publica Christiana",
                "content": "Christian Public Affair. All Things Of Concern To The Worldwide Body Of Christianity."
            },
            {
                "img": "8.png",
                "title": "Respondeat Superior",
                "content": "Let The Master Answer. A Concept That The Master (E.G. Employer) Is Responsible For The Actions Of His Subordinates (E.G. Employees)."
            },
            {
                "img": "1.png",
                "title": "Restitutio In Integrum",
                "content": "Total Reinstatement. Restoration Of Something, Such As A Building Or Damaged Property, To Its Original Condition. In Contract Law, When Considering Breach Of Contract And Remedies, To Restore A Party To An Original Position."
            },
            {
                "img": "2.png",
                "title": "Rex Est Major Singulis, Minor Universis ",
                "content": "The King Is Greater Than Individuals, Less Than All The People."
            },
            {
                "img": "3.png",
                "title": "Rex Non Debet Judicare Sed Secundum Legem ",
                "content": "The King Ought Not To Judge But According To The Law."
            },
            {
                "img": "4.png",
                "title": "Rex Non Potest Peccare",
                "content": "The King Can Do No Wrong. Used To Describe The Basis For Sovereign Immunity."
            },
            {
                "img": "5.png",
                "title": "Rex Nunquma Moritur ",
                "content": "The King Never Dies."
            },
            {
                "img": "6.png",
                "title": "Rex Quod Injustum Est Facere Non Potest ",
                "content": "The King Cannot Do What Is Unjust."
            },
            {
                "img": "7.png",
                "title": "Salus Populi Est Suprema Lex ",
                "content": "The Safety Of The People Is The Supreme Law."
            },
            {
                "img": "8.png",
                "title": "Salus Populi Suprema Lex Esto",
                "content": "The Good Of The People Shall Be The Supreme Law. Used Variously As A Motto, A Reminder, Or A Notion Of How The Law And Governments In General Should Be."
            },
            {
                "img": "1.png",
                "title": "Scandalum Magnatum",
                "content": "Scandal Of The Magnates. Defamation Against A Peer In British Law. Now Repealed As A Specific Offense."
            },
            {
                "img": "2.png",
                "title": "Sciens ",
                "content": "Knowingly."
            },
            {
                "img": "3.png",
                "title": "Scienter",
                "content": "Knowingly. Used When Offenses Or Torts Were Committed With The Full Awareness Of The One So Committing."
            },
            {
                "img": "4.png",
                "title": "Scire Facias",
                "content": "Let Them Know. A Writ, Directing Local Officials To Officially Inform A Party Of Official Proceedings Concerning Them."
            },
            {
                "img": "5.png",
                "title": "Scire Feci",
                "content": "I Have Made Known. The Official Response Of The Official Serving A Writ Of Scire Facias, Informing The Court That The Writ Has Been Properly Delivered."
            },
            {
                "img": "6.png",
                "title": "Scribere Est Agere ",
                "content": "To Write Is To Act."
            },
            {
                "img": "7.png",
                "title": "Se Defendendo",
                "content": "Self-Defense. The Act Of Defending One'S Own Person Or Property, Or The Well-Being Or Property Of Another."
            },
            {
                "img": "8.png",
                "title": "Secundum Formam Statuti",
                "content": "According To The Form Of The Statute."
            },
            {
                "img": "1.png",
                "title": "Secus ",
                "content": "The Legal Position Is Different, It Is Otherwise."
            },
            {
                "img": "2.png",
                "title": "Semper Praesumitur Pro Legitimatione Puerorum ",
                "content": "Everything Is Presumed In Favor Of The Legitimacy Of Children."
            },
            {
                "img": "3.png",
                "title": "Semper Pro Matriomonio Praesumitur ",
                "content": "It Is Always Presumed In Favor Of Marriage."
            },
            {
                "img": "4.png",
                "title": "Sententia Interlocutoria Revocari Potest, Definitiva Non Potest ",
                "content": "An Interlocutory Order Can Be Revoked, A Final Order Cannot Be."
            },
            {
                "img": "5.png",
                "title": "Seriatim",
                "content": "In Series. Describes The Process In Which The Court Hears Assorted Matters In A Specific Order. Also Refers To An Occasion Where A Multiple-Judge Panel Will Issue Individual Opinions From The Members, Rather Than A Single Ruling From The Entire Panel."
            },
            {
                "img": "6.png",
                "title": "Servitia Personalia Sequuntur Personam ",
                "content": "Personal Services Follow The Person."
            },
            {
                "img": "7.png",
                "title": "Sic Utere Tuo Ut Alienum Non Laedas",
                "content": "Use Your Property So As Not To Injure That Of Your Neighbours. While An Individual Is Entitled To The Use And Enjoyment Of One'S Estate, The Right Is Not Without Limits. Restrictions Can Give Rise To Tort Actions Include Trespass, Negligence, Strict Liability, And Nuisance."
            },
            {
                "img": "8.png",
                "title": "Sic Utere Tuo Ut Alienum Non Laedas ",
                "content": "So Use Your Own As Not To Injure Another S Property."
            },
            {
                "img": "1.png",
                "title": "Simplex Commendatio Non Obligat ",
                "content": "A Simple Recommendation Does Not Bind."
            },
            {
                "img": "2.png",
                "title": "Sine Die",
                "content": "Without Day. Used When The Court Is Adjourning Without Specifying A Date To Re-Convene. See Also Adjournment Sine Die."
            },
            {
                "img": "3.png",
                "title": "Sine Qua Non",
                "content": "Without Which, Nothing. Refers To Some Essential Event Or Action, Without Which There Can Be No Specified Consequence."
            },
            {
                "img": "4.png",
                "title": "Situs",
                "content": "The Place. Used To Refer To Laws Specific To The Location Where Specific Property Exists, Or Where An Offense Or Tort Was Committed."
            },
            {
                "img": "5.png",
                "title": "Solutio Indebiti",
                "content": "Performance Of Something Not Due. Undue Performance Or Payment, Obliging The Enrichee (Accipiens) To Return The Undue Payment Or Compensate The Impoverishee (Solvens) For The Undue Performance"
            },
            {
                "img": "6.png",
                "title": "Stare Decisis",
                "content": "To Stand By [Things] Decided. The Obligation Of A Judge To Stand By A Prior Precedent."
            },
            {
                "img": "7.png",
                "title": "Statu Quo",
                "content": "The State In Which. In Contract Law, In A Case Of Innocent Representation, The Injured Party Is Entitled To Be Replaced In Statu Quo. Note The Common Usage Is Status Quo From The Latin Status Quo Ante, The 'State In Which Before' Or 'The State Of Affairs That Existed Previously.'"
            },
            {
                "img": "8.png",
                "title": "Stet ",
                "content": "Do Not Delete, Let It Stand."
            },
            {
                "img": "1.png",
                "title": "Stratum",
                "content": "A Covering, From Neuter Past Participle Of Sternere, To Spread. In Property Law, Condominiums Has Said To Occupy Stratum Many Stories About The Ground. Stratum Can Also Be A Societial Level Made Up Of Individuals With Similar Status Of Social, Cultural Or Economic Nature. Stratum Can Refer To Classification In An Organized System Along The Lines Of Layers, Levels, Divisions, Or Similar Grouping."
            },
            {
                "img": "2.png",
                "title": "Sua Sponte",
                "content": "Of Its Own Accord. Some Action Taken By The Public Prosecutor Or Another Official Body, Without The Prompting Of A Plaintiff Or Another Party. (Compare Ex Proprio Motu, Ex Mero Motu Which Are Used For Courts)."
            },
            {
                "img": "3.png",
                "title": "Sub Judice",
                "content": "Under The Judge. Refers To A Matter Currently Being Considered By The Court."
            },
            {
                "img": "4.png",
                "title": "Sub Modo",
                "content": "Subject To Modification. Term In Contract Law That Allows Limited Modifications To A Contract After The Original Form Has Been Agreed To By All Parties."
            },
            {
                "img": "5.png",
                "title": "Sub Nomine",
                "content": "Under The Name. Abbreviated Sub Nom.; Used In Case Citations To Indicate That The Official Name Of A Case Changed During The Proceedings, Usually After Appeal (E.G., Rev'D Sub Nom. And Aff'D Sub Nom.)"
            },
            {
                "img": "6.png",
                "title": "Sub Silentio",
                "content": "Under Silence. A Ruling, Order, Or Other Court Action Made Without Specifically Stating The Ruling, Order, Or Action. The Effect Of The Ruling Or Action Is Implied By Related And Subsequent Actions, But Not Specifically Stated."
            },
            {
                "img": "7.png",
                "title": "Sublata Causa, Tollitur Effectus ",
                "content": "The Cause Being Removed, The Effect Ceases."
            },
            {
                "img": "8.png",
                "title": "Sublato Fundamento, Cadit Opus ",
                "content": "The Foundation Being Removed, The Structure Falls."
            },
            {
                "img": "1.png",
                "title": "Subpoena",
                "content": "Under Penalty. A Writ Compelling Testimony, The Production Of Evidence, Or Some Other Action, Under Penalty For Failure To Do So."
            },
            {
                "img": "2.png",
                "title": "Subpoena Ad Testificandum",
                "content": "Under Penalty To Be Witnessed. An Order Compelling An Entity To Give Oral Testimony In A Legal Matter."
            },
            {
                "img": "3.png",
                "title": "Subpoena Duces Tecum",
                "content": "Bring With You Under Penalty. An Order Compelling An Entity To Produce Physical Evidence Or Witness In A Legal Matter."
            },
            {
                "img": "4.png",
                "title": "Subsequens Matrimonium Tollit Peccatum Praecedens ",
                "content": "A Subsequent Marriage Removes The Preceding Wrong."
            },
            {
                "img": "5.png",
                "title": "Suggestio Falsi",
                "content": "False Suggestion. A False Statement Made In The Negotiation Of A Contract."
            },
            {
                "img": "6.png",
                "title": "Sui Generis",
                "content": "Of Its Own Kind/Genus. Something That Is Unique Amongst A Group."
            },
            {
                "img": "7.png",
                "title": "Sui Juris",
                "content": "Of His Own Right. Refers To One Legally Competent To Manage His Own Affairs. Also Spelled Sui Iuris."
            },
            {
                "img": "8.png",
                "title": "Summa Ratio Est Quae Pro Religione Facit ",
                "content": "The Highest Reason Is That Which Makes For Religion, I.E. Religion Dictates."
            },
            {
                "img": "1.png",
                "title": "Suo Motu",
                "content": "Of Its Own Motion. Refers To A Court Or Other Official Agency Taking Some Action On Its Own Accord (Synonyms: Ex Proprio Motu, Ex Mero Motu). Similar To Sua Sponte."
            },
            {
                "img": "2.png",
                "title": "Supersedeas",
                "content": "Refrain From. A Bond Tendered By An Appellant As Surety To The Court, Requesting A Delay Of Payment For Awards Or Damages Granted, Pending The Outcome Of The Appeal."
            },
            {
                "img": "3.png",
                "title": "Suppressio Veri",
                "content": "Suppression Of The Truth. Willful Concealment Of The Truth When Bound To Reveal It, Such As Withholding Details Of Damage From An Auto Accident From A Prospective Buyer Of The Car In That Accident."
            },
            {
                "img": "4.png",
                "title": "Suppressio Veri Expressio Falsi ",
                "content": "A Suppression Of Truth Is Equivalent To An Expression Of Falsehood."
            },
            {
                "img": "5.png",
                "title": "Supra",
                "content": "Above. Used In Citations To Refer To A Previously Cited Source."
            },
            {
                "img": "6.png",
                "title": "Talis Qualis ",
                "content": "Such As It Is."
            },
            {
                "img": "7.png",
                "title": "Tantum Et Tale",
                "content": "Thus And Such. (Scots Law) 'As Is', To Disclaim Implied Warranties, As In To Purchase Or Convey Something Tantum Et Tale."
            },
            {
                "img": "8.png",
                "title": "Terra Firma ",
                "content": "Solid Ground."
            },
            {
                "img": "1.png",
                "title": "Terra Nullius",
                "content": "No One'S Land. Land That Has Never Been Part Of A Sovereign State, Or Land Which A Sovereign State Has Relinquished Claim To."
            },
            {
                "img": "2.png",
                "title": "Testamenta Latissimam Interpretationem Habere Debent ",
                "content": "Testaments Ought To Have The Broadest Interpretation."
            },
            {
                "img": "3.png",
                "title": "Traditio Loqui Chartam Facit ",
                "content": "Delivery Makes A Deed Speak."
            },
            {
                "img": "4.png",
                "title": "Transit Terra Cum Onere ",
                "content": "The Land Passes With Its Burden."
            },
            {
                "img": "5.png",
                "title": "Trial De Novo",
                "content": "Trial Anew. A Completely New Trial Of A Matter Previously Judged. It Specifically Refers To A Replacement Trial For The Previous One, And Not An Appeal Of The Previous Decision."
            },
            {
                "img": "6.png",
                "title": "Trinoda Necessitas",
                "content": "Three-Knotted Need. Refers To A Threefold Tax Levied On Anglo-Saxon Citizens To Cover Roads, Buildings, And The Military."
            },
            {
                "img": "7.png",
                "title": "Uberrima Fides",
                "content": "Most Abundant Faith. Concept In Contract Law Specifying That All Parties Must Act With The Utmost Good Faith."
            },
            {
                "img": "8.png",
                "title": "Ubi Eadem Ratio Ibi Idem Jus, Et De Similibus Idem Est Judicium ",
                "content": "When There Is The Same Reason, Then The Law Is The Same, And The Same Judgment Should Be Rendered As To Similar Things."
            },
            {
                "img": "1.png",
                "title": "Ubi Jus Ibi Remedium Est ",
                "content": "Where There Is A Right There Is A Remedy."
            },
            {
                "img": "2.png",
                "title": "Ubi Non Est Principalis, Non Potest Esse Accessorius ",
                "content": "Where There Is No Principal, There Can Be No Accessory."
            },
            {
                "img": "3.png",
                "title": "Ubi Nullum Matrimonium, Ibi Nulla Dos Es ",
                "content": "Where There Is No Marriage, There Is No Dower."
            },
            {
                "img": "4.png",
                "title": "Ultima Voluntas Testatoris Est Perimplenda Secundum Veram Intentionem Suam ",
                "content": "The Last Will Of A Testator Is To Be Fulfilled According To His True Intentio."
            },
            {
                "img": "5.png",
                "title": "Ultra Posse Nemo Obligatur",
                "content": "No One Is Obligated (To Do) More Than He Can. Specifies That One Should Do What He Can To Support The Community, But Since Everyone Has Different Levels Of Ability, It Cannot Be Expected That All Will Perform The Same."
            },
            {
                "img": "6.png",
                "title": "Ultra Vires",
                "content": "Beyond The Powers. An Act That Requires Legal Authority To Perform, But Which Is Done Without Obtaining That Authority."
            },
            {
                "img": "7.png",
                "title": "Universitas Personarum",
                "content": "Totality Of People. Aggregate Of People, Body Corporate, As In A College, Corporation, Or State"
            },
            {
                "img": "8.png",
                "title": "Universitas Rerum",
                "content": "Totality Of Things. Aggregate Of Things."
            },
            {
                "img": "1.png",
                "title": "Uno Flatu",
                "content": "In One Breath. Used To Criticize Inconsistencies In Speech Or Testimony, As In: One Says One Thing, And In The Same Breath, Says Another Contradictory Thing."
            },
            {
                "img": "2.png",
                "title": "Ut Poena Ad Paucos, Metus Ad Omnes, Perveniat ",
                "content": "That Punishment May Come To A Few, The Fear Of It Should Affect All."
            },
            {
                "img": "3.png",
                "title": "Uti Possidetis",
                "content": "As You Possess. Ancient Concept Regarding Conflicts, Wherein All Property Possessed By The Parties At The Conclusion Of The Conflict Shall Remain Owned By Those Parties Unless Treaties To The Contrary Are Enacted."
            },
            {
                "img": "4.png",
                "title": "Utile Per Inutile Non Vitiatur ",
                "content": "What Is Useful Is Not Vitiated By The Useless."
            },
            {
                "img": "5.png",
                "title": "Uxor",
                "content": "Wife. Used In Documents In Place Of The Wife'S Name. Usually Abbreviated Et Ux."
            },
            {
                "img": "6.png",
                "title": "Vel Non",
                "content": "Or Not. Used When Considering Whether Some Event Or Situation Is Either Present Or It Is Not."
            },
            {
                "img": "7.png",
                "title": "Verba Chartarum Fortius Accipiuntur Contra Preferentem ",
                "content": "The Words Of Deeds Are Accepted More Strongly Against The Person Offering Them."
            },
            {
                "img": "8.png",
                "title": "Verba Debent Intelligi Cum Effectu ",
                "content": "Words Ought To Be Understood With Effect."
            },
            {
                "img": "1.png",
                "title": "Verba Intentioni, Non E Contra, Debent Inservire ",
                "content": "Words Ought To Serve The Intention, Not The Reverse."
            },
            {
                "img": "2.png",
                "title": "Verbatim ",
                "content": "Word By Word, Exactly."
            },
            {
                "img": "3.png",
                "title": "Veto",
                "content": "I Forbid. The Power Of An Executive To Prevent An Action, Especially The Enactment Of Legislation."
            },
            {
                "img": "4.png",
                "title": "Vi Et Armis ",
                "content": "With The Force And Arms."
            },
            {
                "img": "5.png",
                "title": "Via Antiqua Via Est Tuta ",
                "content": "The Old Way Is The Safe Way."
            },
            {
                "img": "6.png",
                "title": "Vice Versa",
                "content": "The Other Way Around. Something That Is The Same Either Way."
            },
            {
                "img": "7.png",
                "title": "Vice Versa ",
                "content": "The Other Way Around."
            },
            {
                "img": "8.png",
                "title": "Vide",
                "content": "See. Used In Citations To Refer The Reader To Another Location."
            },
            {
                "img": "1.png",
                "title": "Videlicet",
                "content": "Contraction Of Videre Licet, Meaning 'It Is Permitted To See'. Used In Documents To Mean 'Namely' Or 'That Is'. Usually Abbreviated Viz."
            },
            {
                "img": "2.png",
                "title": "Vigilantibus Non Dormientibus Aequitas Subvenit",
                "content": "Equity Aids The Vigilant, Not The Sleeping. Concept That If An Opposing Party Unreasonably Delays Bringing An Action, That It Is No Longer Considered Just To Hear Their Claim, Due To Fundamental Changes In Circumstance Brought Upon By Their Delay."
            },
            {
                "img": "3.png",
                "title": "Vigilantibus Non Dormientibus Jura Subveniunt ",
                "content": "The Laws Serve The Vigilant, Not Those Who Sleep."
            },
            {
                "img": "4.png",
                "title": "Vinculum Juris",
                "content": "The Chains Of The Law. Something Which Is Legally Binding."
            },
            {
                "img": "5.png",
                "title": "Vir Et Uxor Consentur In Lege Una Persona ",
                "content": "A Husband And Wife Are Regarded In Law As One Person."
            },
            {
                "img": "6.png",
                "title": "Vis Major",
                "content": "Greater Or Superior Force. Force Majeure, Specifically Events Over Which No Humans Have Control, And So Cannot Be Held Responsible. Equivalent To An 'Act Of God'. Compare Casus Fortuitus (See Above)."
            },
            {
                "img": "7.png",
                "title": "Visitationem Commendamus ",
                "content": "We Recommend A Visitation."
            },
            {
                "img": "8.png",
                "title": "Viz.",
                "content": "Abbreviation Of Videlicet. Namely."
            },
            {
                "img": "1.png",
                "title": "Volens ",
                "content": "Willing."
            },
            {
                "img": "2.png",
                "title": "Volenti Non Fit Injuria",
                "content": "Injury Is Not Done To The Willing. Notion That A Person Cannot Bring A Claim Against Another For Injury, If Said Person Willingly Placed Themselves In A Situation Where They Knew Injury Could Result."
            },
            {
                "img": "3.png",
                "title": "Voluntas In Delictis Non Exitus Spectatur ",
                "content": "In Offences The Intent And Not The Result Is Looked At."
            },
            {
                "img": "4.png",
                "title": "Voluntas Reputatur Pro Facto ",
                "content": "The Will Is Taken For The Deed."
            },
        ];
    };
    MaximsPage.prototype.handleClick = function (url) {
        this.iab.create(url, "_system");
    };
    MaximsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-maxims',template:/*ion-inline-start:"D:\IONIC\app_v1.72\03\src\pages\maxims\maxims.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Law Today</ion-title>   \n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n \n	<div padding>\n    <ion-segment [(ngModel)]="misc">\n    \n      <ion-segment-button value="syllabus">\n        Syllabus\n      </ion-segment-button>\n      <ion-segment-button value="maxims">\n        Maxims\n      </ion-segment-button>\n\n    </ion-segment>\n   \n  </div>\n  \n  <div [ngSwitch]="misc">\n    <ion-list *ngSwitchCase="\'maxims\'">\n          <ion-item *ngFor="let item of maxims" (click)="goToExamDetail(item)" >\n        <ion-avatar item-start>\n          <img src="assets/images/avatar/{{ item.img }}">\n        </ion-avatar>\n        <h2>{{ item.title }}</h2>\n        <h3>{{ item.content }}</h3> \n        </ion-item>\n      </ion-list>\n  \n    <ion-list *ngSwitchCase="\'syllabus\'">\n      <ion-item  *ngFor="let item1 of states" >\n        <ion-avatar item-start>\n          <img src="assets/images/states/{{ item1.img }}">\n        </ion-avatar>\n        <h2>{{ item1.title }}</h2>\n        <ion-avatar  item-end>\n         <a href="#" (click)=handleClick(item1.pdf)> <img src="assets/images/states/pdf.png"></a>\n        </ion-avatar>\n        </ion-item>\n      </ion-list>\n    \n  \n  </div>\n\n  \n\n<ion-footer >\n  \n</ion-footer>\n'/*ion-inline-end:"D:\IONIC\app_v1.72\03\src\pages\maxims\maxims.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
    ], MaximsPage);
    return MaximsPage;
}());

//# sourceMappingURL=maxims.js.map

/***/ }),

/***/ 389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GenerateTestListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_messages_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_category_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__generate_quiz_generate_quiz__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__generate_catgeory_list_generate_catgeory_list__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__generate_test_modal_generate_test_modal__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_login__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var GenerateTestListPage = /** @class */ (function () {
    function GenerateTestListPage(navCtrl, navParams, storage, modalCtrl, messages, categoryService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.modalCtrl = modalCtrl;
        this.messages = messages;
        this.categoryService = categoryService;
        this.generatedHistoryData = [];
        this.limit = 10;
        this.offset = 0;
    }
    GenerateTestListPage.prototype.ionViewDidLoad = function () {
        this.getGeneratedTestData();
    };
    GenerateTestListPage.prototype.goToStartTest = function (data) {
        if (JSON.parse(data.questions).length > 0) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__generate_quiz_generate_quiz__["a" /* GenerateQuizPage */], { test: data });
        }
    };
    GenerateTestListPage.prototype.generateTestResultModal = function (val) {
        var modalOptions = {
            enableBackdropDismiss: false
        };
        var generateTestModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_7__generate_test_modal_generate_test_modal__["a" /* GenerateTestModalPage */], { data: val }, modalOptions);
        generateTestModal.onDidDismiss(function (data) {
        });
        generateTestModal.present();
    };
    GenerateTestListPage.prototype.getGeneratedTestData = function (infiniteScroll) {
        var _this = this;
        this.messages.showLoader();
        var params = "?offset=" +
            this.offset +
            "&limit=" +
            this.limit;
        this.categoryService.getGeneratedTestHistory(params).subscribe(function (response) {
            _this.messages.hideLoader();
            _this.generatedHistoryData = response;
            _this.totalItems = _this.generatedHistoryData.length;
            if (infiniteScroll) {
                infiniteScroll.complete();
            }
            _this.content.resize();
        }, function (err) {
            if (err.status == 401) {
                if (_this.storage.remove("userInfo") ||
                    _this.storage.remove("name") ||
                    _this.storage.remove("email") ||
                    _this.storage.remove("role")) {
                    _this.storage.remove("userInfo");
                    _this.storage.remove("name");
                    _this.storage.remove("email");
                    _this.storage.remove("role");
                    _this.storage.remove("isSubscribed");
                }
                _this.messages.showToast("Force Logout due to multiple device login.", undefined, "toast-danger");
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__login_login__["a" /* LoginPage */]);
            }
            _this.messages.hideLoader();
        });
    };
    GenerateTestListPage.prototype.loadMore = function (infiniteScroll) {
        var _this = this;
        if (this.totalItems > this.limit) {
            this.offset += this.limit;
            setTimeout(function () {
                _this.getGeneratedTestData(infiniteScroll);
                if (_this.offset >= _this.totalItems) {
                    infiniteScroll.enable(false);
                }
            }, 100);
        }
        else {
            infiniteScroll.enable(false);
        }
    };
    GenerateTestListPage.prototype.generateTestRemove = function (val) {
        var _this = this;
        var params = "/" + val;
        this.categoryService.getGeneratedTestRemove(params).subscribe(function (response) {
            _this.messages.showToast("Test delete successfull", undefined, "toast-success");
            _this.getGeneratedTestData();
        }, function (err) {
            _this.messages.hideLoader();
            _this.messages.showToast(err.error.message, undefined, "toast-danger");
        });
    };
    GenerateTestListPage.prototype.generateNewTest = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__generate_catgeory_list_generate_catgeory_list__["a" /* GenerateCatgeoryListPage */]);
    };
    GenerateTestListPage.prototype.onPlayTest = function (data) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__generate_quiz_generate_quiz__["a" /* GenerateQuizPage */], { test: data });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["Content"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["Content"])
    ], GenerateTestListPage.prototype, "content", void 0);
    GenerateTestListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-generate-test-list',template:/*ion-inline-start:"D:\IONIC\app_v1.72\03\src\pages\generate-test-list\generate-test-list.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Generated Test</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content #content>\n  <ion-grid margin-bottom *ngIf="totalItems > 0">\n    <ion-row>\n      <ion-col col-12>\n        <ion-list no-lines no-margin text-wrap>\n          <ion-item class="feature-test__item" *ngFor="let test of generatedHistoryData">\n            <h2 class="text-primary">{{test.name}}</h2>\n            <div text-right>\n              <button ion-button color="danger" (click)="generateTestRemove(test.id)">\n                Delete\n              </button>\n              <button ion-button color="primary" (click)="onPlayTest(test)">\n                Play\n              </button>\n              <!-- <button ion-button color="primary" (click)="generateTestResultModal(test)">\n                Analyse\n              </button> -->\n            </div>\n          </ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-item class="list-result" *ngIf="totalItems <=0">\n    <ion-icon color="grey" ios="ios-alert-outline" md="ios-alert-outline"></ion-icon>\n    <h4 class="list-result-title">\n      No generated test data found.\n    </h4>\n  </ion-item>\n</ion-content>\n<ion-footer>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-12>\n        <button class="square" no-margin ion-button block color="primary" (click)="generateNewTest()">Generate New Test</button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-footer>\n'/*ion-inline-end:"D:\IONIC\app_v1.72\03\src\pages\generate-test-list\generate-test-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["ModalController"],
            __WEBPACK_IMPORTED_MODULE_3__services_messages_service__["a" /* MessagesServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_4__services_category_service__["a" /* CategoryServiceProvider */]])
    ], GenerateTestListPage);
    return GenerateTestListPage;
}());

//# sourceMappingURL=generate-test-list.js.map

/***/ }),

/***/ 390:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowcorrectmodalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_bookmark_service__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ShowcorrectmodalPage = /** @class */ (function () {
    function ShowcorrectmodalPage(navCtrl, formBuilder, navParams, viewCtrl, bookmarkService) {
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.bookmarkService = bookmarkService;
        this.isFormSubmitted = false;
        this.question = navParams.get('question') ? navParams.get('question') : '';
        this.reportForm = this.formBuilder.group({
            question_id: [
                this.question.id ? this.question.id : '',
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required
                ])
            ],
            message: [
                "",
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required
                ])
            ]
        });
    }
    ShowcorrectmodalPage.prototype.ionViewDidLoad = function () {
    };
    ShowcorrectmodalPage.prototype.remove_linebreaks = function (str) {
        return str.replace(/\\r\\n/g, "");
    };
    ShowcorrectmodalPage.prototype.dismiss = function (val) {
        this.viewCtrl.dismiss(val);
    };
    ShowcorrectmodalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-showcorrectmodal',template:/*ion-inline-start:"D:\IONIC\app_v1.72\03\src\pages\showcorrectmodal\showcorrectmodal.html"*/'<ion-content class="report-modal-page">\n  <div padding class="bg-white">\n    <h6 style="margin-bottom:0px;">Correct Answer</h6>\n   \n      <ion-row>\n        <ion-col>\n          <div class="report-modal-page">\n            <div [innerHtml]="remove_linebreaks(question.exam)"></div>\n            <div [innerHtml]="remove_linebreaks(question.name)"></div>  \n            <div *ngFor="let option of question.answers; let i = index">\n            <div style="background-color: #94ee96" *ngIf="option.is_correct == 1" [innerHtml]="remove_linebreaks(option.answer)"></div>\n        </div>\n          </div>\n        </ion-col>\n      </ion-row>\n     \n      <ion-row>\n        <ion-col col-6>\n          <button ion-button type="button" block text-capitalize color="gray" small (click)="dismiss()">\n            Go Back\n          </button>\n        </ion-col>\n      \n      </ion-row>\n    \n  </div>\n</ion-content>\n'/*ion-inline-end:"D:\IONIC\app_v1.72\03\src\pages\showcorrectmodal\showcorrectmodal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"],
            __WEBPACK_IMPORTED_MODULE_3__services_bookmark_service__["a" /* BookmarkServiceProvider */]])
    ], ShowcorrectmodalPage);
    return ShowcorrectmodalPage;
}());

//# sourceMappingURL=showcorrectmodal.js.map

/***/ }),

/***/ 391:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GenerateReviewTestPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reportmodal_reportmodal__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_messages_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_bookmark_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__question_attempted_question_attempted__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var GenerateReviewTestPage = /** @class */ (function () {
    function GenerateReviewTestPage(navCtrl, navParams, bookmarkService, messages, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.bookmarkService = bookmarkService;
        this.messages = messages;
        this.modalCtrl = modalCtrl;
        this.questionData = [];
        this.test = {};
        this.questionsData = [];
        this.questionItems = {};
        this.selectedAnswer = {};
        this.index = 0;
        this.bookmarkData = [];
        this.test = navParams.get("data") ? navParams.get("data") : "";
        if (this.test) {
            this.questionData = this.test.questions;
            this.answerData = this.test.answers;
            this.loadQuestion(0);
        }
    }
    GenerateReviewTestPage.prototype.ionViewDidLoad = function () {
    };
    GenerateReviewTestPage.prototype.getSelectedAnswer = function (val) {
        if (this.answerData.length > 0 && val) {
            var selectedRes = this.answerData.find(function (x) { return x.question_id == val.id; });
            if (selectedRes && selectedRes != -1) {
                this.selectedAnswer = selectedRes;
            }
        }
    };
    GenerateReviewTestPage.prototype.presentReportModal = function () {
        var _this = this;
        if (this.questionItems) {
            var modalOptions = {
                cssClass: "uc-report-modal",
                enableBackdropDismiss: false
            };
            var reportModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__reportmodal_reportmodal__["a" /* ReportmodalPage */], { question: this.questionItems }, modalOptions);
            reportModal.onDidDismiss(function (data) {
                if (data) {
                    _this.messages.showToast("Successfull reported", undefined, "toast-success");
                }
            });
            reportModal.present();
        }
    };
    GenerateReviewTestPage.prototype.getBookmarkData = function () {
        var _this = this;
        this.messages.showLoader();
        this.bookmarkService.getBookmarks().subscribe(function (response) {
            _this.messages.hideLoader();
            if (!response.error) {
                _this.bookmarkData = response;
            }
        }, function (err) {
            _this.messages.hideLoader();
        });
    };
    GenerateReviewTestPage.prototype.addBookmark = function () {
        var _this = this;
        if (this.questionItems) {
            var data = {
                question_id: this.questionItems.id
            };
            this.selectedBookmark = this.questionItems.id;
            this.bookmarkService.AddBookmark(data).subscribe(function (data) {
                _this.getBookmarkData();
                _this.getSelectedBookmark(_this.questionItems);
            }, function (err) {
            });
        }
    };
    GenerateReviewTestPage.prototype.getSelectedBookmark = function (val) {
        if (this.bookmarkData.length > 0 && val) {
            var selectedRes = this.bookmarkData.find(function (x) { return x.question_id == val.id; });
            if (selectedRes && selectedRes != -1) {
                this.selectedBookmark = selectedRes.id;
            }
        }
    };
    GenerateReviewTestPage.prototype.remove_linebreaks = function (str) {
        return str.replace(/\\r\\n/g, "");
    };
    /**
     * Load Question by Index
     * @param i
     */
    GenerateReviewTestPage.prototype.loadQuestion = function (i) {
        if (i < this.questionData.length) {
            this.questionItems = this.questionData[i];
            this.getSelectedAnswer(this.questionItems);
        }
        else {
        }
    };
    GenerateReviewTestPage.prototype.onQuestionAttempted = function () {
        var _this = this;
        var modalOptions = {
            cssClass: "uc-report-modal",
            enableBackdropDismiss: false
        };
        var rs = {
            questions: this.questionData,
            answers: this.answerData
        };
        var attemptmodal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__question_attempted_question_attempted__["a" /* QuestionAttemptedModalPage */], { data: rs }, modalOptions);
        attemptmodal.onDidDismiss(function (data) {
            if (data) {
                //   console.log (data);
                _this.index = data - 1;
                _this.loadQuestion(_this.index);
            }
        });
        attemptmodal.present();
    };
    GenerateReviewTestPage.prototype.onPrev = function () {
        if (this.index > 0) {
            this.index = this.index - 1;
            this.loadQuestion(this.index);
        }
    };
    /**
     * Submit Answer
     */
    GenerateReviewTestPage.prototype.onNext = function () {
        if (this.index < this.questionData.length) {
            this.index = this.index + 1;
            this.loadQuestion(this.index);
        }
    };
    GenerateReviewTestPage.prototype.onCompleted = function () {
        this.navCtrl.pop();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Content"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Content"])
    ], GenerateReviewTestPage.prototype, "content", void 0);
    GenerateReviewTestPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-generate-review-test",template:/*ion-inline-start:"D:\IONIC\app_v1.72\03\src\pages\generate-review-test\generate-review-test.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Review Answers</ion-title>\n\n    <!-- <ion-buttons end *ngIf="index + 1 <= questionData.length">\n\n      <button ion-button (click)="presentReportModal()">\n\n        <img class="bookmark" src="assets/images/cat/edit.png" />\n\n      </button>\n\n      <button *ngIf="questionItems.id != selectedBookmark" ion-button (click)="addBookmark()">\n\n        <img class="bookmark" src="assets/images/cat/bookmark.png" />\n\n      </button>\n\n      <button ion-button *ngIf="selectedBookmark && questionItems.id == selectedBookmark" (click)="addBookmark()">\n\n        <img class="bookmark" src="assets/images/cat/bookmarked.png" />\n\n      </button>\n\n    </ion-buttons> -->\n\n  </ion-navbar>\n\n</ion-header>\n\n \n\n<ion-content #content padding>\n\n  <div class="question-content" *ngIf="index + 1 <= questionData.length">\n\n    <div class="question-name">{{index + 1}}/{{questionData.length}} - <div\n\n        [innerHtml]="remove_linebreaks(questionItems.name)"></div>\n\n    </div>\n\n    <ion-list margin-vertical class="list-radio" radio-group>\n\n      <ng-container *ngFor="let option of questionItems.answers; let i = index">\n\n        <ion-item text-wrap class="list-option" *ngIf="selectedAnswer !=\'\'"\n\n          [ngClass]="{\'bg-success\': option.is_correct == 1, \'bg-danger\':selectedAnswer.id == option.id && option.is_correct==0 }">\n\n          <ion-icon name="radio-button-off" *ngIf="option.is_correct != 1" item-start></ion-icon>\n\n          <ion-icon name="radio-button-on" color="white" *ngIf="option.is_correct == 1" item-start></ion-icon>\n\n          <ion-label>{{option.answer}}</ion-label>\n\n        </ion-item>\n\n        <ion-item text-wrap class="list-option" *ngIf="selectedAnswer == \'\'" [ngClass]="{\'bg-success\': option.is_correct == 1}">\n\n          <ion-icon name="radio-button-off" *ngIf="option.is_correct != 1" item-start></ion-icon>\n\n          <ion-icon name="radio-button-on" color="white" *ngIf="option.is_correct == 1" item-start></ion-icon>\n\n          <ion-label>{{option.answer}}</ion-label>\n\n        </ion-item>\n\n      </ng-container>\n\n    </ion-list>\n\n    <button ion-button color="danger" (click)="presentReportModal()">\n\n      Report Question\n\n     </button>\n\n  </div>\n\n  <ng-container *ngIf="index + 1 > questionData.length">\n\n    <ion-item class="list-result">\n\n      <ion-icon color="success" ios="ios-checkmark-circle-outline" md="ios-checkmark-circle-outline"></ion-icon>\n\n      <h4 class="list-result-title ">\n\n        Congratulations! You have review answers successfully.\n\n      </h4>\n\n    </ion-item>\n\n  </ng-container>\n\n</ion-content>\n\n<ion-footer>\n\n  <ion-grid>\n\n    <ion-row *ngIf="index + 1 <= questionData.length">\n\n      <ion-col col-5>\n\n        <button type="button" class="square" no-margin ion-button block color="primary" (click)="onPrev()">Prev</button>\n\n      </ion-col>\n\n      <ion-col col-2>\n\n        <button type="button" class="square" no-margin ion-button block color="gray"\n\n        (click)="onQuestionAttempted()">\n\n          {{index + 1}}/{{questionData.length}} \n\n        </button>\n\n      </ion-col>\n\n      <ion-col col-5>\n\n        <button class="square" no-margin ion-button block color="primary" (click)="onNext()">Next</button>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row *ngIf="index + 1 > questionData.length">\n\n      <ion-col>\n\n        <button class="square" no-margin ion-button block color="success" (click)="onCompleted()">Completed</button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-footer>\n\n'/*ion-inline-end:"D:\IONIC\app_v1.72\03\src\pages\generate-review-test\generate-review-test.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_4__services_bookmark_service__["a" /* BookmarkServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_3__services_messages_service__["a" /* MessagesServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"]])
    ], GenerateReviewTestPage);
    return GenerateReviewTestPage;
}());

//# sourceMappingURL=generate-review-test.js.map

/***/ }),

/***/ 392:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GenerateCatgeoryListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_messages_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_category_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__generate_questions_generate_questions__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var GenerateCatgeoryListPage = /** @class */ (function () {
    function GenerateCatgeoryListPage(navCtrl, navParams, storage, messages, categoryService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.messages = messages;
        this.categoryService = categoryService;
        this.categoryTestData = [];
        this.questionsavedata = 'questiondata';
        this.getCategoryTestData();
    }
    GenerateCatgeoryListPage.prototype.ionViewDidLoad = function () {
    };
    GenerateCatgeoryListPage.prototype.getCategoryTestData = function () {
        var _this = this;
        this.storage.get(this.questionsavedata).then(function (val) {
            if (val != null && val != undefined) {
                //  console.log('data loaded')
                if (!val.error) {
                    var result = val.data;
                    if (result) {
                        _this.categoryTestData = result.map(function (el) {
                            el.topics = el.topics.map(function (e) {
                                var t = Object.assign({}, e);
                                t.isChecked = false;
                                return t;
                            });
                            var o = Object.assign({}, el);
                            o.isChecked = false;
                            return o;
                        });
                    }
                }
            }
        }, function (err) {
            if (err.status == 401) {
                if (_this.storage.remove("userInfo") ||
                    _this.storage.remove("name") ||
                    _this.storage.remove("email") ||
                    _this.storage.remove("role")) {
                    _this.storage.remove("userInfo");
                    _this.storage.remove("name");
                    _this.storage.remove("email");
                    _this.storage.remove("role");
                    _this.storage.remove("isSubscribed");
                }
                _this.messages.showToast("Force Logout due to multiple device login.", undefined, "toast-danger");
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */]);
            }
            _this.messages.hideLoader();
        });
    };
    GenerateCatgeoryListPage.prototype.getCheckedCategory = function () {
        var _this = this;
        this.selectedCategoryData = [];
        this.categoryTestData.forEach(function (v, i) {
            if (v.isChecked == true) {
                _this.selectedCategoryData.push(v);
            }
            else {
                v.topics.forEach(function (t, i) {
                    if (t.isChecked == true) {
                        if (_this.selectedCategoryData.length > 0) {
                            if (_this.selectedCategoryData.filter(function (value) { return value.id == v.id; }).length > 0) {
                            }
                            else {
                                _this.selectedCategoryData.push(v);
                            }
                        }
                        else {
                            _this.selectedCategoryData.push(v);
                        }
                    }
                });
            }
        });
        if (this.selectedCategoryData.length > 0) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__generate_questions_generate_questions__["a" /* GenerateQuestionsPage */], { data: this.selectedCategoryData });
        }
        else {
            this.messages.showToast("please select atleast one category or type", undefined, "toast-danger");
        }
    };
    GenerateCatgeoryListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-generate-catgeory-list',template:/*ion-inline-start:"D:\IONIC\app_v1.72\03\src\pages\generate-catgeory-list\generate-catgeory-list.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Catgeories & Topics</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list class="list-default list-wrap ">\n    <ng-container *ngFor="let cat of categoryTestData; let i= index">\n      <ion-item padding-left>\n        <ion-label>{{cat.name}}</ion-label>\n        <ion-checkbox item-end [(ngModel)]="cat.isChecked"></ion-checkbox>\n      </ion-item>\n      <div class="topic__item" *ngIf="cat.topics">\n        <ng-container *ngFor="let topic of cat.topics; let i= index">\n          <ion-item padding-left>\n            <ion-label>{{topic.name}}</ion-label>\n            <ion-checkbox item-end [(ngModel)]="topic.isChecked"></ion-checkbox>\n          </ion-item>\n        </ng-container>\n      </div>\n    </ng-container>\n  </ion-list>\n</ion-content>\n<ion-footer>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-12>\n        <button class="square" no-margin ion-button block color="primary" (click)="getCheckedCategory()">Next</button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-footer>\n'/*ion-inline-end:"D:\IONIC\app_v1.72\03\src\pages\generate-catgeory-list\generate-catgeory-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3__services_messages_service__["a" /* MessagesServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_4__services_category_service__["a" /* CategoryServiceProvider */]])
    ], GenerateCatgeoryListPage);
    return GenerateCatgeoryListPage;
}());

//# sourceMappingURL=generate-catgeory-list.js.map

/***/ }),

/***/ 393:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GenerateQuestionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_messages_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_category_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__generate_quiz_generate_quiz__ = __webpack_require__(175);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var GenerateQuestionsPage = /** @class */ (function () {
    function GenerateQuestionsPage(navCtrl, modalCtrl, messages, categoryService, _formBuilder, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.messages = messages;
        this.categoryService = categoryService;
        this._formBuilder = _formBuilder;
        this.navParams = navParams;
        this.generateData = [];
        this.selectedTopicData = [];
        this.topicList = [];
        this.isFormSubmitted = false;
        this.isQuestionCount = false;
        this.generateData = this.navParams.get('data') ? this.navParams.get('data') : '';
        this.generateForm = this._formBuilder.group({
            name: [
                "",
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required
                ])
            ],
            data: this._formBuilder.array([]),
        });
        var control = this.generateForm.controls['data'];
        this.selectedTopicData = [];
        this.generateData.forEach(function (item) {
            if (item.isChecked == true) {
                if (item.topics.filter(function (value) { return value.isChecked == true; }).length > 0) {
                    item.topics.forEach(function (el) {
                        if (el.isChecked == true) {
                            _this.selectedTopicData.push(el);
                            control.push(_this.createData(el, 2));
                        }
                    });
                }
                else {
                    _this.selectedTopicData.push(item);
                    control.push(_this.createData(item, 1));
                }
            }
            else {
                item.topics.forEach(function (el) {
                    if (el.isChecked == true) {
                        _this.selectedTopicData.push(el);
                        control.push(_this.createData(el, 2));
                    }
                });
            }
        });
    }
    GenerateQuestionsPage.prototype.ionViewDidLoad = function () {
    };
    GenerateQuestionsPage.prototype.createData = function (val, type) {
        return new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormGroup */]({
            id: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */](val.id, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required),
            type: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */](type, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required),
            question_count: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required)
        });
    };
    GenerateQuestionsPage.prototype.isFieldValid = function (fieldValue) {
        if (fieldValue) {
            return true;
        }
        return false;
    };
    GenerateQuestionsPage.prototype.onFormSubmit = function () {
        var _this = this;
        this.isFormSubmitted = true;
        if (this.generateForm.valid) {
            this.messages.showLoader();
            var formdata = {
                name: this.generateForm.value.name,
                data: JSON.stringify(this.generateForm.value.data)
            };
            this.categoryService.generateTest(formdata).subscribe(function (data) {
                _this.messages.hideLoader();
                _this.navCtrl.popToRoot();
                if (JSON.parse(data.questions).length > 0) {
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__generate_quiz_generate_quiz__["a" /* GenerateQuizPage */], { test: data });
                }
            }, function (err) {
                _this.messages.hideLoader();
            });
        }
        else {
            if (this.generateForm.value.name == '') {
                this.messages.showToast("Test name is required", undefined, "toast-danger");
            }
            else if (this.generateForm.value.data) {
                this.generateForm.value.data.forEach(function (v, i) {
                    if (v.question_count == '') {
                        _this.isQuestionCount = true;
                    }
                    else {
                        _this.isQuestionCount = false;
                    }
                });
                if (this.isQuestionCount) {
                    this.messages.showToast("Question count is required", undefined, "toast-danger");
                }
            }
        }
    };
    GenerateQuestionsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-generate-questions',template:/*ion-inline-start:"D:\IONIC\app_v1.72\03\src\pages\generate-questions\generate-questions.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Generate Test</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]="generateForm" (ngSubmit)="onFormSubmit()">\n    <ion-grid  no-padding >\n      <ion-row>\n        <ion-col col-12 class="form-float-field">\n          <ion-label>Enter test name</ion-label>\n          <ion-input autocomplete="off" formControlName="name" name="name" type="text" required>\n          </ion-input>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-grid no-padding formArrayName="data">\n      <ion-row *ngFor="let item of selectedTopicData; let i=index" [formGroupName]="i">\n        <ion-col>\n          <p>{{item.name}}</p>\n        </ion-col>\n        <ion-col col-auto>\n          <ion-input type="ext" hidden formControlName="id" inputmode="tel">\n          </ion-input>\n          <ion-input type="text" hidden formControlName="type" inputmode="tel">\n          </ion-input>\n          <ion-input type="number" class="question_qty" formControlName="question_count" inputmode="tel" required>\n          </ion-input>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n</ion-content>\n<ion-footer>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-12>\n        <button class="square" no-margin ion-button block color="primary" (click)="getCheckedTopic()">Next</button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-footer>\n<ion-footer>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-12>\n        <button block ion-button color="primary" type="button" (click)="onFormSubmit()">Generate</button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-footer>\n'/*ion-inline-end:"D:\IONIC\app_v1.72\03\src\pages\generate-questions\generate-questions.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"],
            __WEBPACK_IMPORTED_MODULE_2__services_messages_service__["a" /* MessagesServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_3__services_category_service__["a" /* CategoryServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], GenerateQuestionsPage);
    return GenerateQuestionsPage;
}());

//# sourceMappingURL=generate-questions.js.map

/***/ }),

/***/ 394:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GenerateTestModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GenerateTestModalPage = /** @class */ (function () {
    function GenerateTestModalPage(navParams, viewCtrl) {
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.testData = [];
        this.testData = this.navParams.get('data') ? this.navParams.get('data') : '';
        this.totalQuestion = JSON.parse(this.testData.questions).length;
    }
    GenerateTestModalPage.prototype.ionViewDidLoad = function () {
    };
    GenerateTestModalPage.prototype.ucDateTransform = function (value) {
        if (value) {
            if (value.toString().indexOf(' ') === -1) {
                value = value + ' 00:00:00';
            }
            var temp = value.toString().replace(/ /g, 'T');
            var today = new Date(temp);
            var dd = today.getDate();
            var mm = today.getMonth() + 1; //January is 0!
            var yyyy = today.getFullYear();
            if (dd < 10) {
                dd = '0' + dd;
            }
            if (mm < 10) {
                mm = '0' + mm;
            }
            return dd + '/' + mm + '/' + yyyy;
        }
        else {
            return null;
        }
    };
    GenerateTestModalPage.prototype.dismiss = function (val) {
        this.viewCtrl.dismiss(val);
    };
    GenerateTestModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-generate-test-modal',template:/*ion-inline-start:"D:\IONIC\app_v1.72\03\src\pages\generate-test-modal\generate-test-modal.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Generated Test Result</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-card *ngIf="testData">\n\n    <ion-card-content>\n\n      <ion-grid class="result-info">\n\n        <ion-row>\n\n          <ion-col col-6 class="result-info__col">\n\n            <div class="badge badge-primary">\n\n              <strong>{{totalQuestion?totalQuestion:0}}</strong>\n\n              <p>Total Questions</p>\n\n            </div>\n\n          </ion-col>\n\n          <ion-col col-6 class="result-info__col">\n\n            <div class="badge badge-warning">\n\n              <strong>{{testData.attemted?testData.attemted:0}}</strong>\n\n              <p>Total Attempted</p>\n\n            </div>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col col-6 class="result-info__col">\n\n            <div class="badge badge-success">\n\n              <strong>{{testData.correct? testData.correct: 0}}</strong>\n\n              <p>Total Correct</p>\n\n            </div>\n\n          </ion-col>\n\n          <ion-col col-6 class="result-info__col">\n\n            <div class="badge badge-danger">\n\n              <strong>{{testData.incorrect? testData.incorrect: 0 }}</strong>\n\n              <p>Total Incorrect</p>\n\n            </div>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n      <ion-row>\n\n        <ion-col>\n\n          <ion-icon name="calendar"></ion-icon>&nbsp;<span>{{ucDateTransform(testData.created_at)}}</span>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-content>\n\n<ion-footer>\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col col-12>\n\n        <button ion-button type="button" block text-capitalize color="gray" (click)="dismiss()">\n\n          Back\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-footer>\n\n'/*ion-inline-end:"D:\IONIC\app_v1.72\03\src\pages\generate-test-modal\generate-test-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"]])
    ], GenerateTestModalPage);
    return GenerateTestModalPage;
}());

//# sourceMappingURL=generate-test-modal.js.map

/***/ }),

/***/ 395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookmarkPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_messages_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_bookmark_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__bookmark_play_bookmark_play__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { QuizPage } from '../quiz/quiz';




var BookmarkPage = /** @class */ (function () {
    function BookmarkPage(navCtrl, navParams, storage, messages, bookmarkService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.messages = messages;
        this.bookmarkService = bookmarkService;
        this.bookmarkData = [];
    }
    BookmarkPage.prototype.ionViewDidLoad = function () {
    };
    BookmarkPage.prototype.ionViewWillEnter = function () {
        this.getBookmarkData();
    };
    BookmarkPage.prototype.remove_linebreaks = function (str) {
        return str.replace(/\\r\\n/g, "");
    };
    BookmarkPage.prototype.getBookmarkData = function () {
        var _this = this;
        this.messages.showLoader();
        this.bookmarkService.getBookmarks().subscribe(function (response) {
            _this.messages.hideLoader();
            if (!response.error) {
                _this.bookmarkData = response;
            }
        }, function (err) {
            if (err.status == 401) {
                if (_this.storage.remove("userInfo") ||
                    _this.storage.remove("name") ||
                    _this.storage.remove("email") ||
                    _this.storage.remove("role")) {
                    _this.storage.remove("userInfo");
                    _this.storage.remove("name");
                    _this.storage.remove("email");
                    _this.storage.remove("role");
                    _this.storage.remove("isSubscribed");
                }
                _this.messages.showToast("Force Logout due to multiple device login.", undefined, "toast-danger");
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */]);
            }
            _this.messages.hideLoader();
        });
    };
    BookmarkPage.prototype.hide = function () {
        if (this.hideMe != true) {
            this.hideMe = true;
        }
        else {
            this.hideMe = false;
        }
    };
    BookmarkPage.prototype.deleteBookmarkData = function (val) {
        var _this = this;
        // this.messages.showLoader();
        var data = {
            question_id: val
        };
        this.bookmarkService.AddBookmark(data).subscribe(function (response) {
            // this.messages.hideLoader();
            if (!response.error) {
                _this.messages.showToast("Delete bookmark question successfully", undefined, "toast-success");
                _this.getBookmarkData();
            }
        }, function (err) {
            // this.messages.hideLoader();
        });
    };
    BookmarkPage.prototype.goToStartFreeTest = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__bookmark_play_bookmark_play__["a" /* BookmarkPlayPage */], { bookmarkQuestions: this.bookmarkData });
    };
    BookmarkPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-bookmark',template:/*ion-inline-start:"D:\IONIC\app_v1.72\03\src\pages\bookmark\bookmark.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Bookmark List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ng-container *ngIf="bookmarkData.length > 0">\n    \n    <ion-card *ngFor="let item of bookmarkData; let i = index">\n      <ion-card-content *ngIf="item.question">\n       <div [innerHtml]="remove_linebreaks(item.question.name)">\n       </div>\n        <ng-container *ngFor="let choice of item.question.answers; let j=index">\n          <p *ngIf="choice.is_correct == 1 && hideMe">{{choice.answer}}</p>\n        </ng-container>\n\n      </ion-card-content>\n      <ion-row>\n        <ion-col text-right>\n          <button ion-button icon-start clear small (click)="deleteBookmarkData(item.question_id)">\n            <ion-icon ios="md-trash" md="md-trash"></ion-icon>\n          </button>\n        </ion-col>\n      </ion-row>\n    </ion-card>\n  </ng-container>  \n  <ion-item class="list-result" *ngIf="bookmarkData.length <=0">\n    <ion-icon color="grey" ios="ios-alert-outline" md="ios-alert-outline"></ion-icon>\n    <h4 class="list-result-title">\n      No bookmark question data\n    </h4>\n  </ion-item>\n</ion-content>\n<ion-footer [hidden]="bookmarkData.length <=0">\n  <ion-grid>\n    <ion-row>\n      <ion-col col-6>\n      <button ion-button block color="primary" *ngIf="hideMe != true" (click)="hide()">Show Answers</button>\n       <button ion-button block color="danger" *ngIf="hideMe == true" (click)="hide()">Hide Answers</button>\n      </ion-col>\n      <ion-col col-6>\n        <button ion-button block color="primary" (click)="goToStartFreeTest()">\n          Play Bookmarks\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-footer>\n'/*ion-inline-end:"D:\IONIC\app_v1.72\03\src\pages\bookmark\bookmark.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3__services_messages_service__["a" /* MessagesServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_4__services_bookmark_service__["a" /* BookmarkServiceProvider */]])
    ], BookmarkPage);
    return BookmarkPage;
}());

//# sourceMappingURL=bookmark.js.map

/***/ }),

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookmarkPlayPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_alerts_service__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reportmodal_reportmodal__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_bookmark_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_messages_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__question_attempted_question_attempted__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { visitValue } from "@angular/compiler/src/util";




/**
 * Generated class for the QuizPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BookmarkPlayPage = /** @class */ (function () {
    function BookmarkPlayPage(navCtrl, alertService, bookmarkService, messages, formBuilder, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.alertService = alertService;
        this.bookmarkService = bookmarkService;
        this.messages = messages;
        this.formBuilder = formBuilder;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.questionData = [];
        this.questionsData = [];
        this.selectMultipleAnswer = [];
        this.questionItems = {};
        this.index = 0;
        this.requestArray = [];
        this.requestAssessment = {
            result: "",
            data: []
        };
        this.result = [];
        /**
         * Clear Form Array Data
         */
        this.clearFormArray = function (formArray) {
            while (formArray.length !== 0) {
                formArray.removeAt(0);
            }
        };
        this.questionData = navParams.get("bookmarkQuestions") ? navParams.get("bookmarkQuestions") : "";
        this.questionForm = this.formBuilder.group({
            option: formBuilder.array([]),
            answer_text: [""]
        });
        this.getAssessmentData();
    }
    BookmarkPlayPage.prototype.ionViewDidLoad = function () {
    };
    /**
     * Get Assessment Data
     * @param id
     */
    BookmarkPlayPage.prototype.getAssessmentData = function () {
        this.loadQuestion(0);
    };
    /**
     * Load Question by Index
     * @param i
     */
    BookmarkPlayPage.prototype.loadQuestion = function (i) {
        if (i < this.questionData.length) {
            this.questionItems = this.questionData[i].question;
            var option = this.questionForm.controls.option;
            this.getSelectedAnswer(this.questionItems);
            this.clearFormArray(option);
        }
    };
    BookmarkPlayPage.prototype.presentReportModal = function () {
        var _this = this;
        if (this.questionItems) {
            var modalOptions = {
                cssClass: "uc-report-modal",
                enableBackdropDismiss: false
            };
            var reportModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__reportmodal_reportmodal__["a" /* ReportmodalPage */], { question: this.questionItems }, modalOptions);
            reportModal.onDidDismiss(function (data) {
                if (data) {
                    _this.messages.showToast("Successfull reported", undefined, "toast-success");
                }
            });
            reportModal.present();
        }
    };
    /**
     * Submit Answer
     */
    BookmarkPlayPage.prototype.onAnswer = function () {
        if (this.index < this.questionData.length) {
            var res = this.getResult(this.questionForm.value.option);
            this.processResult(res);
        }
    };
    BookmarkPlayPage.prototype.onCompleted = function () {
        this.navCtrl.pop();
    };
    BookmarkPlayPage.prototype.getSelectedAnswer = function (val) {
        if (this.result.length > 0 && val) {
            var selectedRes = this.result.find(function (x) { return x.question_id == val.id; });
            if (selectedRes && selectedRes != -1) {
                this.selectedChecked = selectedRes.id;
            }
        }
    };
    BookmarkPlayPage.prototype.onQuestionAttempted = function () {
        var _this = this;
        var modalOptions = {
            cssClass: "uc-report-modal",
            enableBackdropDismiss: false
        };
        var rs = {
            questions: this.questionData,
            answers: this.result
        };
        var attemptmodal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_7__question_attempted_question_attempted__["a" /* QuestionAttemptedModalPage */], { data: rs }, modalOptions);
        attemptmodal.onDidDismiss(function (data) {
            if (data) {
                //   console.log (data);
                _this.index = data - 2;
                var res = _this.getResult(_this.questionForm.value.option);
                _this.processResult(res);
            }
        });
        attemptmodal.present();
    };
    BookmarkPlayPage.prototype.loadPreviousQuestion = function () {
        if (this.index > 0) {
            this.index = this.index - 1;
            this.loadQuestion(this.index);
        }
    };
    BookmarkPlayPage.prototype.functiontofindIndexByKeyValue = function (arraytosearch, key, valuetosearch) {
        for (var i = 0; i < arraytosearch.length; i++) {
            if (arraytosearch[i][key] == valuetosearch) {
                return i;
            }
        }
        return -1;
    };
    BookmarkPlayPage.prototype.processResult = function (res) {
        if (this.index < this.questionData.length) {
            if (this.result.length > 0 && res) {
                var resultIndex = this.functiontofindIndexByKeyValue(this.result, 'question_id', res.question_id);
                if (resultIndex != -1) {
                    this.result[resultIndex] = res;
                }
                else {
                    this.result.push(res);
                }
            }
            else {
                if (res) {
                    this.result.push(res);
                }
            }
            this.questionForm.value.question_id = this.questionItems.id;
            this.requestArray.push(this.questionForm.value);
            this.index = this.index + 1;
            this.index = this.index > this.questionData.length ? this.questionData.length : this.index;
            this.loadQuestion(this.index);
        }
    };
    /**
     * Single Select Option
     * @param event
     */
    BookmarkPlayPage.prototype.onSelect = function (event) {
        var option = this.questionForm.controls.option;
        this.clearFormArray(option);
        option.push(new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */](parseInt(event)));
        this.selectedQuestionVal = event;
    };
    /**
     * Get Final Result
     * @param answers
     */
    BookmarkPlayPage.prototype.getResult = function (answers) {
        var _this = this;
        this.questionItems.answers.forEach(function (option) {
            if (answers.indexOf(option.id) >= 0) {
                _this.selectedAnswer = option;
            }
        });
        return this.selectedAnswer;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Content"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Content"])
    ], BookmarkPlayPage.prototype, "content", void 0);
    BookmarkPlayPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-bookmark-play",template:/*ion-inline-start:"D:\IONIC\app_v1.72\03\src\pages\bookmark-play\bookmark-play.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Law Today</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content #content padding>\n\n  <ng-container *ngIf="index + 1 <= questionData.length">\n\n    <form [formGroup]="questionForm" (ngSubmit)="onAnswer()">\n\n      <div class="question-content">\n\n        <h3> {{questionItems.name}}</h3>\n\n        <ion-list margin-vertical class="list-radio" radio-group (ionChange)="onSelect($event)">\n\n          <ion-item text-wrap class="list-option" *ngFor="let option of questionItems.answers">\n\n            <ion-label>{{option.answer}}</ion-label>\n\n            <ion-radio value="{{option.id}}" item-start [checked]="selectedChecked && option.id == selectedChecked"></ion-radio>\n\n          </ion-item>\n\n        </ion-list>\n\n        \n\n      </div>\n\n    </form>\n\n    <button ion-button color="danger" (click)="presentReportModal()">\n\n      Report Question\n\n     </button>\n\n  </ng-container>\n\n  <ng-container *ngIf="index + 1 > questionData.length">\n\n    <ion-item class="list-result">\n\n      <ion-icon color="success" ios="ios-checkmark-circle-outline" md="ios-checkmark-circle-outline"></ion-icon>\n\n      <h4 class="list-result-title ">\n\n        Congratulations! You have completed the test.\n\n      </h4>\n\n    </ion-item>\n\n  </ng-container>\n\n</ion-content>\n\n<ion-footer>\n\n  <ion-grid>\n\n    <ion-row *ngIf="index + 1 <= questionData.length">\n\n      <ion-col col-5>\n\n        <button type="button" class="square" no-margin ion-button block color="primary"\n\n          (click)="loadPreviousQuestion()">Prev</button>\n\n      </ion-col>\n\n      <ion-col col-2>\n\n        <button type="button" class="square" no-margin ion-button block color="gray"\n\n          (click)="onQuestionAttempted()">\n\n          {{index + 1}}/{{questionData.length}} \n\n        </button>\n\n      </ion-col>\n\n      <ion-col col-5>\n\n        <button class="square" no-margin ion-button block color="primary" (click)="onAnswer()">Next</button>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row *ngIf="index + 1 > questionData.length">\n\n      <ion-col>\n\n        <button class="square" no-margin ion-button block color="success" (click)="onCompleted()">Finish</button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n \n\n</ion-footer>\n\n'/*ion-inline-end:"D:\IONIC\app_v1.72\03\src\pages\bookmark-play\bookmark-play.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_2__services_alerts_service__["a" /* AlertServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_5__services_bookmark_service__["a" /* BookmarkServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_6__services_messages_service__["a" /* MessagesServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"]])
    ], BookmarkPlayPage);
    return BookmarkPlayPage;
}());

//# sourceMappingURL=bookmark-play.js.map

/***/ }),

/***/ 397:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_category_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_messages_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HistoryPage = /** @class */ (function () {
    function HistoryPage(navCtrl, navParams, messages, storage, categoryService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.messages = messages;
        this.storage = storage;
        this.categoryService = categoryService;
        this.testResultData = [];
    }
    HistoryPage.prototype.ionViewDidLoad = function () {
    };
    HistoryPage.prototype.ionViewWillEnter = function () {
        this.getTestResultData();
    };
    HistoryPage.prototype.ucDateTransform = function (value) {
        if (value) {
            if (value.toString().indexOf(' ') === -1) {
                value = value + ' 00:00:00';
            }
            var temp = value.toString().replace(/ /g, 'T');
            var today = new Date(temp);
            var dd = today.getDate();
            var mm = today.getMonth() + 1; //January is 0!
            var yyyy = today.getFullYear();
            if (dd < 10) {
                dd = '0' + dd;
            }
            if (mm < 10) {
                mm = '0' + mm;
            }
            return dd + '/' + mm + '/' + yyyy;
        }
        else {
            return null;
        }
    };
    HistoryPage.prototype.getTestResultData = function () {
        var _this = this;
        this.messages.showLoader();
        this.categoryService.getResult().subscribe(function (response) {
            _this.messages.hideLoader();
            if (!response.error) {
                _this.testResultData = response;
            }
        }, function (err) {
            if (err.status == 401) {
                if (_this.storage.remove("userInfo") ||
                    _this.storage.remove("name") ||
                    _this.storage.remove("email") ||
                    _this.storage.remove("role")) {
                    _this.storage.remove("userInfo");
                    _this.storage.remove("name");
                    _this.storage.remove("email");
                    _this.storage.remove("role");
                    _this.storage.remove("isSubscribed");
                }
                _this.messages.showToast("Force Logout due to multiple device login.", undefined, "toast-danger");
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
            }
            _this.messages.hideLoader();
        });
    };
    HistoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-history',template:/*ion-inline-start:"D:\IONIC\app_v1.72\03\src\pages\history\history.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>History</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ng-container *ngIf="testResultData.length > 0">\n    <ion-card *ngFor="let result of testResultData">\n      <ion-card-header *ngIf="result.test">\n        {{result.test.name}}\n      </ion-card-header>\n      <ion-card-content>\n        <ion-grid class="result-info">\n          <ion-row>\n            <ion-col col-6 class="result-info__col">\n              <div class="badge badge-primary">\n                <strong>{{result.total}}</strong>\n                <p>Total Questions</p>\n              </div>\n            </ion-col>\n            <ion-col col-6 class="result-info__col">\n              <div class="badge badge-warning">\n                <strong>{{result.attemted}}</strong>\n                <p>Total Attempted</p>\n              </div>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-6 class="result-info__col">\n              <div class="badge badge-success">\n                <strong>{{result.correct}}</strong>\n                <p>Total Correct</p>\n              </div>\n            </ion-col>\n            <ion-col col-6 class="result-info__col">\n              <div class="badge badge-danger">\n                <strong>{{result.incorrect}}</strong>\n                <p>Total Incorrect</p>\n              </div>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n        <ion-row>\n          <ion-col>\n            <ion-icon name="calendar"></ion-icon>&nbsp;<span>{{ucDateTransform(result.created_at)}}</span>\n          </ion-col>\n        </ion-row>\n      </ion-card-content>\n    </ion-card>\n  </ng-container>\n\n  <ion-item class="list-result" *ngIf="testResultData.length <=0">\n    <ion-icon color="grey" ios="ios-alert-outline" md="ios-alert-outline"></ion-icon>\n    <h4 class="list-result-title">\n      No history data found.\n    </h4>\n  </ion-item>\n</ion-content>\n'/*ion-inline-end:"D:\IONIC\app_v1.72\03\src\pages\history\history.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_4__services_messages_service__["a" /* MessagesServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3__services_category_service__["a" /* CategoryServiceProvider */]])
    ], HistoryPage);
    return HistoryPage;
}());

//# sourceMappingURL=history.js.map

/***/ }),

/***/ 398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants_regex__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl, formBuilder, navParams) {
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.navParams = navParams;
        this.isFormSubmitted = false;
        this.contactForm = this.formBuilder.group({
            user_name: [
                "",
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_3__constants_regex__["a" /* Regex */].AlphaNumberic),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].minLength(3),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].maxLength(30)
                ])
            ],
            user_mobile: [
                "",
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_3__constants_regex__["a" /* Regex */].Number),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].minLength(10),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].maxLength(10)
                ])
            ]
        });
    }
    ContactPage.prototype.ionViewDidLoad = function () {
        this.isFormSubmitted = false;
        this.contactForm
            .get("user_name")
            .setValidators(__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].compose([
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required,
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_3__constants_regex__["a" /* Regex */].AlphaNumberic),
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].minLength(3),
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].maxLength(30)
        ]));
        this.contactForm
            .get("user_mobile")
            .setValidators(__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].compose([
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required,
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_3__constants_regex__["a" /* Regex */].Number),
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].minLength(10),
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].maxLength(10)
        ]));
    };
    ContactPage.prototype.numberOnly = function (event) {
        var charCode = event.which ? event.which : event.keyCode;
        console.info(charCode);
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
        return true;
    };
    ContactPage.prototype.onSignup = function () {
        this.isFormSubmitted = true;
    };
    ContactPage.prototype.isFieldValid = function (fieldValue) {
        if (fieldValue) {
            return true;
        }
        return false;
    };
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-contact',template:/*ion-inline-start:"D:\IONIC\app_v1.72\03\src\pages\contact\contact.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Contact Us</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content no-padding class="contact-section-bg">\n  <div class="section contact-section">\n    <form [formGroup]="contactForm" novalidate (ngSubmit)="onSignup()">\n      <ion-row>\n        <ion-col class="form-float-field">\n          <ion-item>\n            <ion-label color="primary" floating>Name</ion-label>\n            <ion-input formControlName="user_name" [class.error-box]="false" name="name" type="text" required>\n            </ion-input>\n          </ion-item>\n          <span class="error-msg"\n            [hidden]="!(contactForm.controls.user_name.hasError(\'required\') && (contactForm.controls[\'user_name\'].dirty || isFormSubmitted) && isFieldValid(\'user_name\'))">\n            Full Name is required.\n          </span>\n          <span class="error-msg"\n            [hidden]="!(contactForm.controls.user_name.hasError(\'minlength\') && (contactForm.controls[\'user_name\'].dirty || isFormSubmitted) && !contactForm.controls[\'user_name\'].errors?.required && !contactForm.controls.user_name.hasError(\'pattern\'))">\n            Full Name minimum length is 3.\n          </span>\n          <span class="error-msg"\n            [hidden]="!(contactForm.controls.user_name.hasError(\'maxlength\') && (contactForm.controls[\'user_name\'].dirty || isFormSubmitted) && !contactForm.controls[\'user_name\'].errors?.required && !contactForm.controls.user_name.hasError(\'pattern\'))">\n            Full Name maximum length is 30.\n          </span>\n          <span class="error-msg"\n            [hidden]="!(contactForm.controls.user_name.hasError(\'pattern\') && (contactForm.controls[\'user_name\'].dirty || isFormSubmitted) && !contactForm.controls[\'user_name\'].errors?.required)">\n            Please enter alphabets only.\n          </span>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col class="form-float-field">\n          <ion-item>\n            <ion-label color="primary" floating>Phone</ion-label>\n            <ion-input formControlName="user_mobile" [class.error-box]="false" name="user_mobile" type="number"\n              required>\n            </ion-input>\n          </ion-item>\n          <span class="error-msg"\n            [hidden]="!(contactForm.controls[\'user_mobile\'].errors?.required && (contactForm.controls[\'user_mobile\'].dirty || isFormSubmitted)  &&  isFieldValid(\'user_mobile\'))">\n            Phone is required.\n          </span>\n          <span class="error-msg"\n            [hidden]="!(contactForm.controls.user_mobile.hasError(\'minlength\') && (contactForm.controls[\'user_mobile\'].dirty || isFormSubmitted) && !contactForm.controls[\'user_mobile\'].errors?.required && !contactForm.controls.user_mobile.hasError(\'pattern\'))">\n            Phone minimum length is 10.\n          </span>\n          <span class="error-msg"\n            [hidden]="!(contactForm.controls.user_mobile.hasError(\'maxlength\') && (contactForm.controls[\'user_mobile\'].dirty || isFormSubmitted) && !contactForm.controls[\'user_mobile\'].errors?.required && !contactForm.controls.user_mobile.hasError(\'pattern\'))">\n            Phone maximum length is 10.\n          </span>\n          <span class="error-msg"\n            [hidden]="!(contactForm.controls.user_mobile.hasError(\'pattern\') && (contactForm.controls[\'user_mobile\'].dirty || isFormSubmitted) && !contactForm.controls[\'user_mobile\'].errors?.required)">\n            Please enter number only.\n          </span>\n        </ion-col>\n      </ion-row>\n\n      <ion-row margin-top align-items-center>\n        <ion-col col-12 text-left>\n          <button block ion-button color="primary" type="submit">Request a Call Back</button>\n        </ion-col>\n      </ion-row>\n      <div class="contact-detail" margin-top>\n        <ion-item-group>\n\n          <ion-item-divider color="primary">Customer Support</ion-item-divider>\n          <ion-item>\n            <ion-icon ios="ios-mail" md="ios-mail" item-start></ion-icon>\n            Email: <a href="mailto:lawtodayin@gmail.in">lawtodayin@gmail.com</a>\n          </ion-item>\n          <ion-item>\n            <ion-icon name="logo-whatsapp" item-start> </ion-icon>\n            Whatsapp No: <a href="tel:+919582041578">+91-9582041578</a>\n          </ion-item>\n          <ion-item>\n            <ion-icon name="paper-plane" item-start> </ion-icon>\n            Telegram: <a href="https://t.me/judiciarytoday">@judiciarytoday</a>\n          </ion-item>\n\n        </ion-item-group>\n      </div>\n    </form>\n  </div>\n</ion-content>\n'/*ion-inline-end:"D:\IONIC\app_v1.72\03\src\pages\contact\contact.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 399:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = /** @class */ (function () {
    function AboutPage(popoverCtrl) {
        this.popoverCtrl = popoverCtrl;
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-about",template:/*ion-inline-start:"D:\IONIC\app_v1.72\03\src\pages\about\about.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>About Us</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content no-padding text-center>\n  <img src="assets/images/about.jpg" />\n  <ion-list no-lines no-margin class="feature__list">\n    <ion-item text-wrap>\n      <h2 class="title">Looking Forward:</h2>\n      <p>I had always felt a need for a good mobile application for the preparation of judicial services examination but was unable to find any on the market which is good enough and had sufficient database of questions with correct answers. Therefore, the need for an application which has enough questions to actually help and aspirant exhaustively and comprihensively was felt. Hence this application was made to keep this need to help aspirants and young advocates to learn law in an interactive way so that they can access it anywhere and anytime without needing to carry bulky books everywhere.\n<br><br>\nOver the period of time i intent to add many other important features required for a comprehensive preparation for judicial service, a following features are intended to be added:\n</p>\n\n<ul>\n	<li>Mains Question Bank</li>\n	<li>Landmark and Latest Judgements</li>\n	<li>Study Material</li>\n	<li>Bareacts</li>\n	<li>Legal Maxims</li>\n	<li>Question/Answers and Discussion page</li>\n</ul>\n<p>\nInitially i wanted to make this Website/App free to use by serving ads since there are costs involved in maintaining the Website/App some of which are Server maintainance, hiring developers to improve the Website/App, getting questions typed, and other costs of managing resources. But unfortunately the revenue from ad views was not enough to maintain these resources and i had to switch to freemium in which some resources are free to use but so have to be paid so that we can support the app. I have tried to keep the prices as low as possible so that anyone would be easily able to acquire membership and for thos who are unable to pay due to financial reasons can drop me a mail at lawtodayin@gmail.com and if the case seems fit, I would offer him/her free membership.\n<br><br>\nLastly, I wish that you have a wonderful experience while using the Website/App and and any feedback that you have for me will be highly appreciated.\n</p>\n       \n    </ion-item>\n  </ion-list>\n <!-- \n   <hr/>\n  <ion-list  no-lines no-margin class="feature__list">\n    <ion-item text-wrap>\n      <h2 class="title">Our Goal</h2>\n      <p>When looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of\n        letters, as opposed to using \'Content here, Lorem Ipsum has been the industry\'s standard dummy text ever since.\n      </p>\n    </ion-item>   \n  </ion-list>\n  -->\n</ion-content>\n'/*ion-inline-end:"D:\IONIC\app_v1.72\03\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["PopoverController"]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 400:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_messages_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__change_password_change_password__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__verifyemail_verifyemail__ = __webpack_require__(401);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl, navParams, messages, modalCtrl, storage, auth) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.messages = messages;
        this.modalCtrl = modalCtrl;
        this.storage = storage;
        this.auth = auth;
        this.ischangePicture = false;
        this.imgData = [
            {
                id: 1,
                url: 'assets/images/avatar/1.png'
            },
            {
                id: 2,
                url: 'assets/images/avatar/2.png'
            },
            {
                id: 3,
                url: 'assets/images/avatar/3.png'
            },
            {
                id: 4,
                url: 'assets/images/avatar/4.png'
            },
            {
                id: 5,
                url: 'assets/images/avatar/5.png'
            },
            {
                id: 6,
                url: 'assets/images/avatar/6.png'
            },
            {
                id: 7,
                url: 'assets/images/avatar/7.png'
            },
            {
                id: 8,
                url: 'assets/images/avatar/8.png'
            },
            {
                id: 9,
                url: 'assets/images/avatar/9.png'
            },
            {
                id: 10,
                url: 'assets/images/avatar/10.png'
            },
            {
                id: 11,
                url: 'assets/images/avatar/11.png'
            },
            {
                id: 12,
                url: 'assets/images/avatar/12.png'
            }
        ];
        this.storage.get('profile')
            .then(function (data) {
            _this.myProfile = data;
        });
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
    };
    ProfilePage.prototype.ionViewWillEnter = function () {
        this.getUserData();
        this.getReferralData();
    };
    ProfilePage.prototype.changePicture = function () {
        this.ischangePicture = !this.ischangePicture;
    };
    ProfilePage.prototype.setProfileImage = function (val) {
        this.storage.set('profile', val);
        this.myProfile = val;
        var data = {
            id: this.myProfile.id,
            url: this.myProfile.url
        };
        this.auth.SetAvatar(data).subscribe(function (Response) {
            //   console.log(Response)
        }, function (err) {
            //    console.log(err)
        });
    };
    ProfilePage.prototype.getProfileImage = function () {
        this.storage.get('profile')
            .then(function (data) {
        });
    };
    ProfilePage.prototype.getUserData = function () {
        var _this = this;
        this.messages.showLoader();
        this.auth.getUserDetail().subscribe(function (response) {
            _this.messages.hideLoader();
            if (!response.error) {
                _this.userData = response;
            }
        }, function (err) {
            if (err.status == 401) {
                if (_this.storage.remove("userInfo") ||
                    _this.storage.remove("name") ||
                    _this.storage.remove("email") ||
                    _this.storage.remove("role")) {
                    _this.storage.remove("userInfo");
                    _this.storage.remove("name");
                    _this.storage.remove("email");
                    _this.storage.remove("role");
                    _this.storage.remove("isSubscribed");
                }
                _this.messages.showToast("Force Logout due to multiple device login.", undefined, "toast-danger");
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */]);
            }
            _this.messages.hideLoader();
        });
    };
    ProfilePage.prototype.getReferralData = function () {
        var _this = this;
        this.messages.showLoader();
        this.auth.getUserReferrals().subscribe(function (response) {
            //   console.log(response)
            if (!response.error) {
                _this.referralData = response;
            }
        }, function (err) {
            //    console.log(err)
        });
    };
    ProfilePage.prototype.goToverify = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__verifyemail_verifyemail__["a" /* VerifyemailPage */]);
    };
    ProfilePage.prototype.goToChangePassword = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__change_password_change_password__["a" /* ChangePasswordPage */]);
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-profile',template:/*ion-inline-start:"D:\IONIC\app_v1.72\03\src\pages\profile\profile.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>My Profile</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-item-group *ngIf="userData">\n\n    <ion-item-divider no-padding padding-top text-center color="primary">\n      <ion-label no-margin>\n        <img class="user-pic" [src]="myProfile? myProfile.url :\'assets/images/user_pic.png\'" />\n        <ion-scroll class="story" scrollX="true" *ngIf="ischangePicture">\n          <div class="story_scroll" *ngFor="let item of imgData" (click)="setProfileImage(item)">\n            <div class="story_img_bg">\n              <img no-margin no-padding class="story_img profile-bg-color" [src]="item.url" alt=""\n                [class.active]="item.id == (myProfile ? myProfile.id :\'\')" />\n            </div>\n          </div>\n        </ion-scroll>\n        <button no-margin ion-button type="button" block text-capitalize color="primary" (click)="changePicture()">\n          {{ischangePicture ? \'Cancel\': \'Change Profile Picture\'}}\n        </button>\n      </ion-label>\n    </ion-item-divider>\n    <ion-item>\n      <ion-icon ios="md-person" md="md-person" item-start></ion-icon>\n      Name: {{userData.name}}\n    </ion-item>\n    <ion-item>\n      <ion-icon ios="ios-mail" md="ios-mail" item-start></ion-icon>\n      Email: <a href="mailto:{{userData.email}}">{{userData.email}}</a>\n   \n    </ion-item>\n    <ion-item>\n      <ion-icon ios="ios-call" md="ios-call" item-start></ion-icon>\n      Phone No: <a href="tel:{{userData.phone_number}}">{{userData.phone_number}}</a>\n    </ion-item>\n  </ion-item-group>\n\n  <div padding *ngIf="userData">\n    <button ion-button type="button" block text-capitalize color="danger"  *ngIf="userData.is_email_verified!=1" (click)="goToverify()">Verify Email</button> \n    <button ion-button type="button" block text-capitalize color="success"  *ngIf="userData.is_email_verified==1">Verified</button> \n    <button ion-button type="button" block text-capitalize color="primary" (click)="goToChangePassword()">\n      Change Password\n    </button>\n  </div>\n\n  <ion-list *ngIf="referralData" class="list" no-padding padding-top text-left color="primary">\n    <ion-grid>\n      <ion-row>\n        <ion-col col-12>\n          <h4 text-center class="uc-title"><h3>Total People Referred: {{ referralData.length }}</h3></h4>\n        </ion-col>\n      </ion-row></ion-grid> \n    <ion-item *ngFor="let item of referralData">\n      <h2><ul><li>{{ item }}</li></ul></h2>\n      </ion-item>\n    </ion-list>\n    <ion-grid>\n      <ion-row>\n        <ion-col col-12>\n          <h4 text-center class="uc-title">Free Subscription</h4>\n        </ion-col>\n      </ion-row>\n      <ion-card >\n        <ion-card-content>\n          <div text-wrap >\n            <ul>\n            <p strong>How to get Subscription for free:<br></p>\n           <li> <p>1. Share the link to the app/website with your friends.</p></li>\n           <li> <p>2. Ask them to sign up and put your registered email id in referral column  on sign up page.</p></li>\n           <li> <p> 3. Get 5 people to sign up.</p></li>\n           <li> <p> 4. Drop us an email at lawtodayin@gmail.com that 5 people you referred have signed up.</p></li>\n           <li> <p> 5. We will give you 1 month membership free when 5 people you referred signs up.</p></li>\n           <li>  <p>6. We will give you 3 month membership free when 15 people you referred signs up.<br><br></p></li>\n           <li> <p>Tip: Make sure that the person you have referred has put your emial id in \'Referral Code" Column when they Sign up. Only people who fill your email id as \'Referral Code\' column and verify their email id in profile page will be counted as your referral.</p></li>\n          </ul>\n          </div>\n          </ion-card-content>\n        </ion-card>\n    </ion-grid>\n</ion-content>\n'/*ion-inline-end:"D:\IONIC\app_v1.72\03\src\pages\profile\profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_3__services_messages_service__["a" /* MessagesServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["ModalController"],
            __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthServiceProvider */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerifyemailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_messages_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__change_password_change_password__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_bookmark_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_auth_service__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var VerifyemailPage = /** @class */ (function () {
    function VerifyemailPage(navCtrl, navParams, bookmarkService, messages, auth, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.bookmarkService = bookmarkService;
        this.messages = messages;
        this.auth = auth;
        this.formBuilder = formBuilder;
        this.loginpage = __WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */];
        this.changepasswordpage = __WEBPACK_IMPORTED_MODULE_5__change_password_change_password__["a" /* ChangePasswordPage */];
        this.isFormSubmitted = true;
        this.isOtpFormSubmitted = true;
        this.isForgotPassForm = true;
        this.isOtpForm = true;
        this.onForgotSubmit();
        this.otpForm = this.formBuilder.group({
            otp: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required])],
            email: [""]
        });
    }
    VerifyemailPage.prototype.ionViewDidLoad = function () {
    };
    VerifyemailPage.prototype.isFieldValid = function (fieldValue) {
        if (fieldValue) {
            return true;
        }
        return false;
    };
    VerifyemailPage.prototype.onForgotSubmit = function () {
        this.bookmarkService.SendemailOtp().subscribe(function (data) {
            //     console.log(data)
        }, function (err) {
            //    console.log(err)
        });
    };
    VerifyemailPage.prototype.onOtpFormSubmit = function () {
        var _this = this;
        this.isOtpFormSubmitted = true;
        if (this.otpForm.valid) {
            this.messages.showLoader();
            this.bookmarkService.VerifyemailOtp(this.otpForm.value).subscribe(function (data) {
                _this.messages.hideLoader();
                _this.messages.showToast(data.message, undefined, "toast-success");
                _this.navCtrl.pop();
            }, function (err) {
                _this.messages.hideLoader();
                _this.messages.showToast('Please enter correct OTP', undefined, "toast-danger");
            });
        }
        else {
            this.messages.hideLoader();
        }
    };
    VerifyemailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-verifyemail",template:/*ion-inline-start:"D:\IONIC\app_v1.72\03\src\pages\verifyemail\verifyemail.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Verify Email</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content no-padding class="forgot-section-bg">\n  <div class="section forgot-section">\n    <ion-row margin-vertical>\n      <ion-col text-center>\n        <img class="logo" src="assets/images/logo.png" alt="logo">\n      </ion-col>\n    </ion-row>\n   \n    <form [formGroup]="otpForm" *ngIf="isOtpForm" novalidate (ngSubmit)="onOtpFormSubmit()">\n      <ion-row>\n        <ion-col col-12>\n          <p class="text text-info">\n            We have sent a 4 digit OTP to your registered email address. Please enter your OTP -\n            Make sure to check the spam folder or add no-reply@lawtoday.co.in an trusted mail id.\n          </p>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col class="form-float-field">\n          <ion-item>\n            <ion-label color="primary" floating>Otp</ion-label>\n            <ion-input [class.error-box]="false" formControlName="otp" name="otp" type="text" required></ion-input>\n          </ion-item>\n          <span class="error-msg"\n            [hidden]="!(otpForm.controls[\'otp\'].errors?.required && (otpForm.controls[\'otp\'].dirty || isOtpFormSubmitted) &&  isFieldValid(\'otp\'))">\n            OTP is required.\n          </span>\n        </ion-col>\n      </ion-row>\n      <ion-row margin-vertical align-items-center>\n        <ion-col col-12 text-left>\n          <button block ion-button color="primary" type="submit">Submit</button>\n        </ion-col>\n      </ion-row>\n    </form>\n  </div>\n</ion-content>\n'/*ion-inline-end:"D:\IONIC\app_v1.72\03\src\pages\verifyemail\verifyemail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_6__services_bookmark_service__["a" /* BookmarkServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_4__services_messages_service__["a" /* MessagesServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_7__services_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], VerifyemailPage);
    return VerifyemailPage;
}());

//# sourceMappingURL=verifyemail.js.map

/***/ }),

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopicListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_messages_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_category_service__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { GenerateTestModalPage } from '../generate-test-modal/generate-test-modal';

// import { GenerateQuizPage } from '../generate-quiz/generate-quiz';
var TopicListPage = /** @class */ (function () {
    function TopicListPage(navCtrl, modalCtrl, messages, categoryService, navParams) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.messages = messages;
        this.categoryService = categoryService;
        this.navParams = navParams;
        this.topicData = [];
        var result = this.navParams.get('catIds') ? this.navParams.get('catIds') : '';
        if (result) {
            this.loadTopics(result);
        }
    }
    TopicListPage.prototype.ionViewDidLoad = function () {
    };
    TopicListPage.prototype.loadTopics = function (val) {
        var _this = this;
        this.messages.showLoader();
        var params = "?ids=" + val;
        this.categoryService.getTopics(params).subscribe(function (response) {
            _this.messages.hideLoader();
            var result = response;
            if (result) {
                _this.topicData = result.map(function (el) {
                    var o = Object.assign({}, el);
                    o.isChecked = false;
                    return o;
                });
            }
        }, function (err) {
            _this.messages.hideLoader();
        });
    };
    TopicListPage.prototype.getCheckedTopic = function () {
        var _this = this;
        this.selectedTopicData = [];
        this.topicData.forEach(function (v, i) {
            if (v.isChecked == true) {
                _this.selectedTopicData.push(v);
            }
        });
        if (this.selectedTopicData.length > 0) {
            this.generateTestModal(this.selectedTopicData);
        }
        else {
            this.messages.showToast("Topic is required", undefined, "toast-danger");
        }
    };
    TopicListPage.prototype.generateTestModal = function (val) {
    };
    TopicListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-topic-list',template:/*ion-inline-start:"D:\IONIC\app_v1.72\03\src\pages\topic-list\topic-list.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Topics</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list class="list-default list-wrap ">\n    <ion-item padding-left *ngFor="let topic of topicData; let i= index">\n      <ion-label>{{topic.name}}</ion-label>\n      <ion-checkbox [(ngModel)]="topic.isChecked"></ion-checkbox>\n    </ion-item>\n  </ion-list>\n</ion-content>\n<ion-footer>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-12>\n        <button class="square" no-margin ion-button block color="primary" (click)="getCheckedTopic()">Next</button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-footer>\n'/*ion-inline-end:"D:\IONIC\app_v1.72\03\src\pages\topic-list\topic-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"],
            __WEBPACK_IMPORTED_MODULE_2__services_messages_service__["a" /* MessagesServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_3__services_category_service__["a" /* CategoryServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], TopicListPage);
    return TopicListPage;
}());

//# sourceMappingURL=topic-list.js.map

/***/ }),

/***/ 403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(408);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 408:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_selectable__ = __webpack_require__(445);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__(725);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_stepper__ = __webpack_require__(727);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_stepper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ionic_stepper__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_brmasker_ionic_3__ = __webpack_require__(729);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_in_app_browser__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_sqlite__ = __webpack_require__(735);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_network__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_storage__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_http__ = __webpack_require__(737);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_common_http__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_social_sharing__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_network_service__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_web_service__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_auth_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_messages_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_alerts_service__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_ad_service__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__app_component__ = __webpack_require__(738);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_home_home__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_login_login__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_settings_settings__ = __webpack_require__(739);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_signup_signup__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_forgot_password_forgot_password__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_change_password_change_password__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_category_test_type_category_test_type__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_test_test__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_quiz_quiz__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_contact_contact__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_about_about__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_privacy_privacy__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_terms_terms__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_instructions_instructions__ = __webpack_require__(740);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_exam_notification_exam_notification__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_bookmark_bookmark__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_profile_profile__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__services_bookmark_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__services_category_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__pages_flash_card_flash_card__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__pages_maxims_maxims__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__pages_caselaws_caselaws__ = __webpack_require__(741);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__pages_bookmark_play_bookmark_play__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__pages_review_test_review_test__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__pages_reportmodal_reportmodal__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__pages_showcorrectmodal_showcorrectmodal__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__pages_history_history__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__pages_catgeory_list_catgeory_list__ = __webpack_require__(742);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__pages_topic_list_topic_list__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__pages_generate_test_modal_generate_test_modal__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__pages_generate_quiz_generate_quiz__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__pages_generate_review_test_generate_review_test__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__pages_generate_test_list_generate_test_list__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__pages_generate_catgeory_list_generate_catgeory_list__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__pages_generate_questions_generate_questions__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__pages_exam_notification_detail_exam_notification_detail__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__pages_subscription_subscription__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__pages_leaderboard_leaderboard__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__pages_question_attempted_question_attempted__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__pages_verifyemail_verifyemail__ = __webpack_require__(401);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};































































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_22__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_23__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_privacy_privacy__["a" /* PrivacyPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_terms_terms__["a" /* TermsPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_instructions_instructions__["a" /* InstructionsPage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_exam_notification_exam_notification__["a" /* ExamNotificationPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_forgot_password_forgot_password__["a" /* ForgotPasswordPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_change_password_change_password__["a" /* ChangePasswordPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_category_test_type_category_test_type__["a" /* CategoryTestTypePage */],
                __WEBPACK_IMPORTED_MODULE_62__pages_verifyemail_verifyemail__["a" /* VerifyemailPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_test_test__["a" /* TestPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_quiz_quiz__["a" /* QuizPage */],
                __WEBPACK_IMPORTED_MODULE_60__pages_leaderboard_leaderboard__["a" /* LeaderboardPage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_bookmark_bookmark__["a" /* BookmarkPage */],
                __WEBPACK_IMPORTED_MODULE_39__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_42__pages_flash_card_flash_card__["a" /* FlashCardPage */],
                __WEBPACK_IMPORTED_MODULE_43__pages_maxims_maxims__["a" /* MaximsPage */],
                __WEBPACK_IMPORTED_MODULE_44__pages_caselaws_caselaws__["a" /* CaselawsPage */],
                __WEBPACK_IMPORTED_MODULE_45__pages_bookmark_play_bookmark_play__["a" /* BookmarkPlayPage */],
                __WEBPACK_IMPORTED_MODULE_46__pages_review_test_review_test__["a" /* ReviewTestPage */],
                __WEBPACK_IMPORTED_MODULE_47__pages_reportmodal_reportmodal__["a" /* ReportmodalPage */],
                __WEBPACK_IMPORTED_MODULE_48__pages_showcorrectmodal_showcorrectmodal__["a" /* ShowcorrectmodalPage */],
                __WEBPACK_IMPORTED_MODULE_49__pages_history_history__["a" /* HistoryPage */],
                __WEBPACK_IMPORTED_MODULE_50__pages_catgeory_list_catgeory_list__["a" /* CatgeoryListPage */],
                __WEBPACK_IMPORTED_MODULE_51__pages_topic_list_topic_list__["a" /* TopicListPage */],
                __WEBPACK_IMPORTED_MODULE_52__pages_generate_test_modal_generate_test_modal__["a" /* GenerateTestModalPage */],
                __WEBPACK_IMPORTED_MODULE_53__pages_generate_quiz_generate_quiz__["a" /* GenerateQuizPage */],
                __WEBPACK_IMPORTED_MODULE_54__pages_generate_review_test_generate_review_test__["a" /* GenerateReviewTestPage */],
                __WEBPACK_IMPORTED_MODULE_55__pages_generate_test_list_generate_test_list__["a" /* GenerateTestListPage */],
                __WEBPACK_IMPORTED_MODULE_56__pages_generate_catgeory_list_generate_catgeory_list__["a" /* GenerateCatgeoryListPage */],
                __WEBPACK_IMPORTED_MODULE_57__pages_generate_questions_generate_questions__["a" /* GenerateQuestionsPage */],
                __WEBPACK_IMPORTED_MODULE_58__pages_exam_notification_detail_exam_notification_detail__["a" /* ExamNotificationDetailPage */],
                __WEBPACK_IMPORTED_MODULE_59__pages_subscription_subscription__["a" /* SubscriptionPage */],
                __WEBPACK_IMPORTED_MODULE_61__pages_question_attempted_question_attempted__["a" /* QuestionAttemptedModalPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_6_brmasker_ionic_3__["a" /* BrMaskerModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicModule"].forRoot(__WEBPACK_IMPORTED_MODULE_22__app_component__["a" /* MyApp */], {
                    scrollAssist: true,
                    autoFocusAssist: true
                }, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_12__ionic_storage__["a" /* IonicStorageModule */].forRoot({
                    name: "lawtoday_db",
                    storeName: "lawtoday_db",
                    driverOrder: ["indexeddb", "sqlite", "websql"]
                }),
                __WEBPACK_IMPORTED_MODULE_3_ionic_selectable__["a" /* IonicSelectableModule */],
                __WEBPACK_IMPORTED_MODULE_5_ionic_stepper__["IonicStepperModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicApp"]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_22__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_23__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_privacy_privacy__["a" /* PrivacyPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_terms_terms__["a" /* TermsPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_instructions_instructions__["a" /* InstructionsPage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_exam_notification_exam_notification__["a" /* ExamNotificationPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_62__pages_verifyemail_verifyemail__["a" /* VerifyemailPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_forgot_password_forgot_password__["a" /* ForgotPasswordPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_change_password_change_password__["a" /* ChangePasswordPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_category_test_type_category_test_type__["a" /* CategoryTestTypePage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_test_test__["a" /* TestPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_quiz_quiz__["a" /* QuizPage */],
                __WEBPACK_IMPORTED_MODULE_60__pages_leaderboard_leaderboard__["a" /* LeaderboardPage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_bookmark_bookmark__["a" /* BookmarkPage */],
                __WEBPACK_IMPORTED_MODULE_39__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_43__pages_maxims_maxims__["a" /* MaximsPage */],
                __WEBPACK_IMPORTED_MODULE_44__pages_caselaws_caselaws__["a" /* CaselawsPage */],
                __WEBPACK_IMPORTED_MODULE_42__pages_flash_card_flash_card__["a" /* FlashCardPage */],
                __WEBPACK_IMPORTED_MODULE_45__pages_bookmark_play_bookmark_play__["a" /* BookmarkPlayPage */],
                __WEBPACK_IMPORTED_MODULE_46__pages_review_test_review_test__["a" /* ReviewTestPage */],
                __WEBPACK_IMPORTED_MODULE_47__pages_reportmodal_reportmodal__["a" /* ReportmodalPage */],
                __WEBPACK_IMPORTED_MODULE_48__pages_showcorrectmodal_showcorrectmodal__["a" /* ShowcorrectmodalPage */],
                __WEBPACK_IMPORTED_MODULE_49__pages_history_history__["a" /* HistoryPage */],
                __WEBPACK_IMPORTED_MODULE_50__pages_catgeory_list_catgeory_list__["a" /* CatgeoryListPage */],
                __WEBPACK_IMPORTED_MODULE_51__pages_topic_list_topic_list__["a" /* TopicListPage */],
                __WEBPACK_IMPORTED_MODULE_52__pages_generate_test_modal_generate_test_modal__["a" /* GenerateTestModalPage */],
                __WEBPACK_IMPORTED_MODULE_53__pages_generate_quiz_generate_quiz__["a" /* GenerateQuizPage */],
                __WEBPACK_IMPORTED_MODULE_54__pages_generate_review_test_generate_review_test__["a" /* GenerateReviewTestPage */],
                __WEBPACK_IMPORTED_MODULE_55__pages_generate_test_list_generate_test_list__["a" /* GenerateTestListPage */],
                __WEBPACK_IMPORTED_MODULE_56__pages_generate_catgeory_list_generate_catgeory_list__["a" /* GenerateCatgeoryListPage */],
                __WEBPACK_IMPORTED_MODULE_57__pages_generate_questions_generate_questions__["a" /* GenerateQuestionsPage */],
                __WEBPACK_IMPORTED_MODULE_58__pages_exam_notification_detail_exam_notification_detail__["a" /* ExamNotificationDetailPage */],
                __WEBPACK_IMPORTED_MODULE_59__pages_subscription_subscription__["a" /* SubscriptionPage */],
                __WEBPACK_IMPORTED_MODULE_61__pages_question_attempted_question_attempted__["a" /* QuestionAttemptedModalPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_social_sharing__["a" /* SocialSharing */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_sqlite__["a" /* SQLite */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_network__["a" /* Network */],
                __WEBPACK_IMPORTED_MODULE_16__services_network_service__["a" /* NetworkService */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicErrorHandler"] },
                __WEBPACK_IMPORTED_MODULE_19__services_messages_service__["a" /* MessagesServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_20__services_alerts_service__["a" /* AlertServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_21__services_ad_service__["a" /* AdServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_17__services_web_service__["a" /* WebServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_18__services_auth_service__["a" /* AuthServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_40__services_bookmark_service__["a" /* BookmarkServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_41__services_category_service__["a" /* CategoryServiceProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BASE_URL; });
/* unused harmony export API_BASE_URL */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CONFIG; });
var BASE_URL = 'https://lawtoday.co.in/qb1/public/';
var API_BASE_URL = 'https://lawtoday.co.in/qb1/public/api/';
// export const API_BASE_URL: string = 'https://localhost:8000/api/';
var CONFIG = {
    API_LOGIN_URL: { URL: API_BASE_URL + 'login', METHOD: 'POST' },
    API_GUESTLOGIN_URL: { URL: API_BASE_URL + 'guestlogin', METHOD: 'POST' },
    API_REGISTER_URL: { URL: API_BASE_URL + 'register', METHOD: 'POST' },
    API_SENDOTP_URL: { URL: API_BASE_URL + 'forgot_password', METHOD: 'POST' },
    API_SENDEMAILOTP_URL: { URL: API_BASE_URL + 'emailverifyotp', METHOD: 'POST' },
    API_VERIFYEMAILOTP_URL: { URL: API_BASE_URL + 'verifyemailotp', METHOD: 'POST' },
    API_VERIFYOTP_URL: { URL: API_BASE_URL + 'verify_otp', METHOD: 'POST' },
    API_RESET_PASSWORD_URL: { URL: API_BASE_URL + 'reset_password', METHOD: 'POST' },
    API_GET_USER_URL: { URL: API_BASE_URL + 'me', METHOD: 'GET' },
    API_GET_USER_REFERRAL_URL: { URL: API_BASE_URL + 'referral', METHOD: 'GET' },
    API_PAYMENT_SUCCESS_URL: { URL: API_BASE_URL + 'success', METHOD: 'POST' },
    API_UPDATE_USER_URL: { URL: API_BASE_URL + 'update_userdata', METHOD: 'POST' },
    API_CHANGEPASSWORD_URL: { URL: API_BASE_URL + 'me/change_password', METHOD: 'PUT' },
    API_LOGOUT_URL: { URL: API_BASE_URL + 'logout', METHOD: 'DELETE' },
    API_GET_BOOKMARKS_URL: { URL: API_BASE_URL + 'bookmarks', METHOD: 'GET' },
    API_ADD_BOOKMARKS_URL: { URL: API_BASE_URL + 'bookmarks', METHOD: 'POST' },
    API_GET_CATEGORIES_URL: { URL: API_BASE_URL + 'categories', METHOD: 'GET' },
    API_GET_TOPICS_URL: { URL: API_BASE_URL + 'topics', METHOD: 'GET' },
    API_SAVE_TEST_RESULT_URL: { URL: API_BASE_URL + 'response', METHOD: 'POST' },
    API_SAVE_TEST_SCORE_URL: { URL: API_BASE_URL + 'savescore', METHOD: 'POST' },
    API_GET_SAVED_SCORE_URL: { URL: API_BASE_URL + 'sendallscore', METHOD: 'GET' },
    API_SAVE_GENERATE_TEST_RESULT_URL: { URL: API_BASE_URL + 'test_generate', METHOD: 'PUT' },
    API_GENERATE_TEST_URL: { URL: API_BASE_URL + 'test_generate', METHOD: 'POST' },
    API_GENERATE_TEST_DELETE_URL: { URL: API_BASE_URL + 'test_generate', METHOD: 'DELETE' },
    API_GET_GENERATED_TEST_HISTORY_URL: { URL: API_BASE_URL + 'test_generate/history', METHOD: 'GET' },
    API_GET_TEST_HISTORY_URL: { URL: API_BASE_URL + 'response', METHOD: 'GET' },
    API_ADD_REPORT_URL: { URL: API_BASE_URL + 'report', METHOD: 'POST' },
    API_UPDATE_PROFILE_PICTURE_URL: { URL: API_BASE_URL + 'avatar', METHOD: 'POST' },
    API_NOTIFICATIONS_URL: { URL: API_BASE_URL + 'notifications', METHOD: 'GET' },
    API_NOTIFICATION_DETAIL_URL: { URL: API_BASE_URL + 'notification', METHOD: 'GET' },
    API_CASELAWS_URL: { URL: API_BASE_URL + 'caselaws', METHOD: 'GET' },
    API_GET_SUBSCRIPTION_URL: { URL: API_BASE_URL + 'plans', METHOD: 'GET' },
};
//# sourceMappingURL=config.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportmodalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_bookmark_service__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ReportmodalPage = /** @class */ (function () {
    function ReportmodalPage(navCtrl, formBuilder, navParams, viewCtrl, bookmarkService) {
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.bookmarkService = bookmarkService;
        this.isFormSubmitted = false;
        this.question = navParams.get('question') ? navParams.get('question') : '';
        this.reportForm = this.formBuilder.group({
            question_id: [
                this.question.id ? this.question.id : '',
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required
                ])
            ],
            message: [
                "",
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required
                ])
            ]
        });
    }
    ReportmodalPage.prototype.ionViewDidLoad = function () {
    };
    ReportmodalPage.prototype.remove_linebreaks = function (str) {
        return str.replace(/\\r\\n/g, "");
    };
    /**
     * Report Form Submit
     */
    ReportmodalPage.prototype.onReport = function () {
        var _this = this;
        this.isFormSubmitted = true;
        if (this.reportForm.valid) {
            this.bookmarkService.AddReport(this.reportForm.value).subscribe(function (data) {
                _this.dismiss(true);
            }, function (err) {
            });
        }
    };
    ReportmodalPage.prototype.isFieldValid = function (fieldValue) {
        if (fieldValue) {
            return true;
        }
        return false;
    };
    ReportmodalPage.prototype.dismiss = function (val) {
        this.viewCtrl.dismiss(val);
    };
    ReportmodalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-reportmodal',template:/*ion-inline-start:"D:\IONIC\app_v1.72\03\src\pages\reportmodal\reportmodal.html"*/'<ion-content class="report-modal-page">\n  <div padding class="bg-white">\n    <h6 style="margin-bottom:0px;">Report Question</h6>\n    <form [formGroup]="reportForm" (ngSubmit)="onReport()">\n      <ion-row>\n        <ion-col>\n          <div class="question-name">\n            <div [innerHtml]="remove_linebreaks(question.name)"></div>\n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col class="form-float-field">\n          <ion-label style="margin-top:0px;">Message</ion-label>\n          <div class="border">\n            <ion-input formControlName="message" [class.error-box]="false" name="message" required></ion-input>\n          </div>\n          <span class="error-msg"\n            [hidden]="!(reportForm.controls[\'message\'].errors?.required && (reportForm.controls[\'message\'].dirty || isFormSubmitted)  &&  isFieldValid(\'message\'))">\n            message is required\n          </span>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-6>\n          <button ion-button type="button" block text-capitalize color="gray" small (click)="dismiss()">\n            Cancel\n          </button>\n        </ion-col>\n        <ion-col col-6>\n          <button block ion-button color="primary" small type="button" (click)="onReport()">Submit</button>\n        </ion-col>\n      </ion-row>\n    </form>\n  </div>\n</ion-content>\n'/*ion-inline-end:"D:\IONIC\app_v1.72\03\src\pages\reportmodal\reportmodal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"],
            __WEBPACK_IMPORTED_MODULE_3__services_bookmark_service__["a" /* BookmarkServiceProvider */]])
    ], ReportmodalPage);
    return ReportmodalPage;
}());

//# sourceMappingURL=reportmodal.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionAttemptedModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var QuestionAttemptedModalPage = /** @class */ (function () {
    function QuestionAttemptedModalPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.question = [];
        this.attemtedData = [];
        var data = navParams.get('data') ? navParams.get('data') : '';
        this.question = data.questions;
        this.attemtedData = data.answers;
    }
    QuestionAttemptedModalPage.prototype.ionViewDidLoad = function () {
    };
    QuestionAttemptedModalPage.prototype.isAttempted = function (val) {
        if (this.attemtedData.length > 0 && val) {
            var selectedRes = this.attemtedData.find(function (x) { return x.question_id == val; });
            if (selectedRes && selectedRes != -1) {
                return true;
            }
            else {
                return false;
            }
        }
    };
    QuestionAttemptedModalPage.prototype.onGotoQuestion = function (i) {
        // console.log(i)
        this.dismiss(i);
    };
    QuestionAttemptedModalPage.prototype.dismiss = function (val) {
        this.viewCtrl.dismiss(val);
    };
    QuestionAttemptedModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-question-attempted',template:/*ion-inline-start:"D:\IONIC\app_v1.72\03\src\pages\question-attempted\question-attempted.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Go-To Question</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-2 *ngFor="let item of question; let i=index" (click)="onGotoQuestion(i+1)">\n        <button class="uc-question__item"  [class.attempted]="isAttempted(item.question_id)"\n        >{{i+1}}</button>\n       \n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n<ion-footer> \n  <ion-row>\n    <ion-col col-12>\n      <button ion-button type="button" block text-capitalize color="primary" (click)="dismiss()">\n       Back\n      </button>\n    </ion-col>\n  </ion-row>\n</ion-footer>\n'/*ion-inline-end:"D:\IONIC\app_v1.72\03\src\pages\question-attempted\question-attempted.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"]])
    ], QuestionAttemptedModalPage);
    return QuestionAttemptedModalPage;
}());

//# sourceMappingURL=question-attempted.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlertServiceProvider = /** @class */ (function () {
    function AlertServiceProvider(alertCtrl) {
        this.alertCtrl = alertCtrl;
    }
    AlertServiceProvider.prototype.showConfirmAlert = function (title, msg, backdrop, btnyes, btnno) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var confirm = _this.alertCtrl.create({
                title: title,
                message: msg,
                enableBackdropDismiss: backdrop,
                buttons: [
                    {
                        text: btnno ? btnno : 'No',
                        handler: function () {
                            reject(false);
                        }
                    },
                    {
                        text: btnyes ? btnyes : 'Yes',
                        handler: function () {
                            resolve(true);
                        }
                    }
                ]
            });
            confirm.present();
        });
    };
    AlertServiceProvider.prototype.showAlert = function (title, msg, backdrop) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var alert = _this.alertCtrl.create({
                title: title,
                message: msg,
                enableBackdropDismiss: backdrop,
                buttons: [
                    {
                        text: 'Ok',
                        handler: function () {
                            resolve(true);
                        }
                    }
                ]
            });
            alert.present();
        });
    };
    AlertServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"]])
    ], AlertServiceProvider);
    return AlertServiceProvider;
}());

//# sourceMappingURL=alerts.service.js.map

/***/ }),

/***/ 738:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_social_sharing__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_contact_contact__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_about_about__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_privacy_privacy__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_terms_terms__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_messages_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_auth_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_profile_profile__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_leaderboard_leaderboard__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_subscription_subscription__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

















var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, events, ngZone, auth, messages, socialSharing, store) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.events = events;
        this.ngZone = ngZone;
        this.auth = auth;
        this.messages = messages;
        this.socialSharing = socialSharing;
        this.store = store;
        this.isLogin = false;
        // this.onLoginasguest()
        this.initializeApp();
        this.menuPages = [
            {
                title: "Home",
                component: __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                icon: "assets/images/menu/home.png",
                url: "",
                is_social: false,
                index: true
            },
            {
                title: "Subscribe/Buy",
                component: __WEBPACK_IMPORTED_MODULE_16__pages_subscription_subscription__["a" /* SubscriptionPage */],
                icon: "assets/images/menu/subscription.png",
                url: "",
                is_social: false,
                index: false
            },
            {
                title: "Leaderboard",
                component: __WEBPACK_IMPORTED_MODULE_15__pages_leaderboard_leaderboard__["a" /* LeaderboardPage */],
                icon: "assets/images/menu/leader.png",
                url: "",
                is_social: false,
                index: false
            },
            {
                title: "Profile",
                component: __WEBPACK_IMPORTED_MODULE_14__pages_profile_profile__["a" /* ProfilePage */],
                icon: "assets/images/menu/profile.png",
                url: "",
                is_social: false,
                index: false
            },
            {
                title: "About",
                component: __WEBPACK_IMPORTED_MODULE_9__pages_about_about__["a" /* AboutPage */],
                icon: "assets/images/menu/about.png",
                url: "",
                is_social: false,
                index: false
            },
            {
                title: "Share",
                component: "",
                icon: "assets/images/menu/social_share.png",
                url: "",
                is_social: true,
                index: false
            },
            // {
            //   title: "Rate",
            //   component: "",
            //   icon: "assets/images/menu/rate.png",
            //   url: "https://play.google.com/store/apps/details?id=com.skp.lawtoday",
            //   is_social: false,
            //   index: false
            // },
            // {
            //   title: "Instructions",
            //   component: InstructionsPage,
            //   icon: "assets/images/menu/instructions.png",
            //   url: "",
            //   is_social: false,
            //   index: false
            // },
            {
                title: "Contact",
                component: __WEBPACK_IMPORTED_MODULE_8__pages_contact_contact__["a" /* ContactPage */],
                icon: "assets/images/menu/contact.png",
                url: "",
                is_social: false,
                index: false
            },
            {
                title: "Terms Of Service",
                component: __WEBPACK_IMPORTED_MODULE_11__pages_terms_terms__["a" /* TermsPage */],
                icon: "assets/images/menu/terms.png",
                url: "",
                is_social: false,
                index: false
            },
            {
                title: "Privacy and Policy",
                component: __WEBPACK_IMPORTED_MODULE_10__pages_privacy_privacy__["a" /* PrivacyPage */],
                icon: "assets/images/menu/privacy.png",
                url: "",
                is_social: false,
                index: false
            }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            _this.loadProfile();
            _this.store.get('email')
                .then(function (val) {
                _this.currentUser = val;
            });
            _this.store.get("userInfo").then(function (val) {
                if (val) {
                    //  console.log('Value Found')
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */];
                }
                else {
                    //   console.log('Value Not Found')
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */];
                }
            });
        });
    };
    //nLoginasguest() {
    // this.store.get("userInfo").then((val) => {
    //   if (val) {
    //     console.log('Value Found in Guest Login')
    //   } else {
    //     console.log('Trying to log in as guest')
    //     this.messages.showLoader();
    //     this.guestform = 
    //       {
    //           "email": "guestuser2@gmail.com",
    //           "password": "123456789",
    //       };
    //       let l = Math.floor(Math.random()*999999);
    //       let p = 'guestuser'+l+'@lawtoday.co.in';
    //       this.guestform.email = p;
    //       console.log(this.guestform)
    //  this.auth.loginasguest(this.guestform).subscribe(
    //    (data: any) => {
    //     this.rootPage = HomePage;
    //     this.messages.showToast("Welcome! Login Successfull", undefined, "toast-success");
    //      console.log(data)
    //      this.messages.hideLoader();
    //    },
    //    err => {
    //      console.log(err)
    //      this.messages.hideLoader();
    //   }
    //  );
    //   }
    // });
    //  
    //}
    MyApp.prototype.loadProfile = function () {
        var _this = this;
        this.store.get('email')
            .then(function (val) {
            _this.currentUser = val;
        });
        this.store.get('profile')
            .then(function (data) {
            _this.myProfile = data;
        });
    };
    MyApp.prototype.menuClosed = function () {
        var _this = this;
        //code to execute when menu has closed
        this.ngZone.run(function () {
            _this.loadProfile();
        });
        this.events.publish("menu:closed", "");
    };
    MyApp.prototype.menuOpened = function () {
        var _this = this;
        //code to execute when menu ha opened
        this.ngZone.run(function () {
            _this.loadProfile();
        });
        this.events.publish("menu:opened", "");
    };
    MyApp.prototype.openPage = function (page) {
        if (page.index) {
            this.nav.setRoot(page.component);
        }
        else {
            if (page.url) {
                window.open(page.url, "_system");
            }
            else if (page.is_social) {
                this.shareInfo();
            }
            else {
                if (page.component) {
                    this.nav.push(page.component);
                }
            }
        }
    };
    MyApp.prototype.shareInfo = function () {
        this.socialSharing
            .share("Download Law Today: No.1 app for judiciary preparations", "Law today is an online quiz app to help you prepare for Preliminary Objective test of Judicial Servies Examination with a question bank of 10,000+ questions and all previous year question papers. ", "", "https://play.google.com/store/apps/details?id=com.skp.lawtoday")
            .then(function () {
        })
            .catch(function () {
        });
    };
    MyApp.prototype.logout = function () {
        var _this = this;
        this.auth.logout().subscribe(function (data) {
            _this.messages.hideLoader();
            _this.messages.showToast("User logout successful", undefined, "toast-success");
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */]);
        }, function (err) {
            _this.messages.hideLoader();
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Nav"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Nav"])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"D:\IONIC\app_v1.72\03\src\app\app.html"*/'<ion-menu class="menu-content" [content]="content" (ionOpen)="menuOpened()" (ionClose)="menuClosed()"  type="overlay">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>\n\n        <img class="user-pic" [src]="myProfile? myProfile.url :\'assets/images/user_pic.png\'" alt="logo">\n\n        <h6>{{currentUser}}</h6>\n\n      </ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <ion-list no-lines class="menu">\n\n      <ng-container *ngFor="let p of menuPages">\n\n        <button menuClose ion-item detail-none (click)="openPage(p)">\n\n          <img class="menu__icon" [src]="p.icon" alt="icon" />\n\n          {{p.title}} \n\n        </button>\n\n      </ng-container>\n\n      <button menuClose ion-item detail-none (click)="logout()">\n\n        <img class="menu__icon" src="assets/images/menu/logout.png" alt="icon" />\n\n        Logout\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<ion-nav [root]="rootPage" #content swipeEnabled="false" swipeBackEnabled="false"></ion-nav>\n\n'/*ion-inline-end:"D:\IONIC\app_v1.72\03\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"],
            __WEBPACK_IMPORTED_MODULE_13__services_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_12__services_messages_service__["a" /* MessagesServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_social_sharing__["a" /* SocialSharing */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 739:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SettingsPage = /** @class */ (function () {
    function SettingsPage(popoverCtrl, events) {
        this.popoverCtrl = popoverCtrl;
        this.events = events;
    }
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-settings",template:/*ion-inline-start:"D:\IONIC\app_v1.72\03\src\pages\settings\settings.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Settings</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content no-padding>\n\n  <ion-list radio-group>\n\n    <ion-list-header>\n\n      <h2>Manage Exam Alert</h2>\n\n    </ion-list-header>\n\n    <ion-item>\n\n      <ion-radio dark item-left></ion-radio>\n\n      <ion-label>Subscribe only selected category</ion-label>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-radio dark item-left></ion-radio>\n\n      <ion-label>Subscribe to all exam alerts</ion-label>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-radio dark item-left></ion-radio>\n\n      <ion-label>Stop all exam alerts</ion-label>\n\n    </ion-item>\n\n  </ion-list>\n\n  <ion-list>\n\n    <ion-list-header>\n\n      <h2>Registered Account</h2>\n\n    </ion-list-header>\n\n    <ion-item>\n\n      <ion-label>Subscribe only selected category</ion-label>\n\n    </ion-item>\n\n  </ion-list>\n\n  <ion-list>\n\n    <ion-list-header>\n\n      <h2>Other</h2>\n\n    </ion-list-header>\n\n    <ion-item>\n\n      <ion-label>How its worka?</ion-label>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>About Law Today</ion-label>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Change Password</ion-label>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\IONIC\app_v1.72\03\src\pages\settings\settings.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["PopoverController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 740:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InstructionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants_config__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InstructionsPage = /** @class */ (function () {
    function InstructionsPage(navCtrl, l, s) {
        this.navCtrl = navCtrl;
        this.l = l;
        this.s = s;
        this.showLoader();
        this.safeWebUrl = this.s.bypassSecurityTrustResourceUrl(__WEBPACK_IMPORTED_MODULE_3__constants_config__["a" /* BASE_URL */] + "instructions");
    }
    InstructionsPage.prototype.removeLoading = function () {
        this.loader.dismiss();
    };
    InstructionsPage.prototype.showLoader = function () {
        this.loader = this.l.create();
        this.loader.present();
    };
    InstructionsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-instructions',template:/*ion-inline-start:"D:\IONIC\app_v1.72\03\src\pages\instructions\instructions.html"*/'<ion-header no-border-bottom>\n  <ion-navbar class="uc-header header-dark">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Instructions\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <iframe [src]="safeWebUrl" frameborder="0" style="width:100%; min-height:320px; height:100%;" (load)="removeLoading()"></iframe>\n</ion-content>\n'/*ion-inline-end:"D:\IONIC\app_v1.72\03\src\pages\instructions\instructions.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"], __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */]])
    ], InstructionsPage);
    return InstructionsPage;
}());

//# sourceMappingURL=instructions.js.map

/***/ }),

/***/ 741:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CaselawsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__exam_notification_detail_exam_notification_detail__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_messages_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_bookmark_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CaselawsPage = /** @class */ (function () {
    function CaselawsPage(navCtrl, navParams, storage, notificationService, messages) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.notificationService = notificationService;
        this.messages = messages;
        this.misc = "cases";
        this.caselawData = [];
        this.getcaselawData();
    }
    CaselawsPage.prototype.goToExamDetail = function (val) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__exam_notification_detail_exam_notification_detail__["a" /* ExamNotificationDetailPage */], { data: val });
    };
    CaselawsPage.prototype.getcaselawData = function () {
        var _this = this;
        this.messages.showLoader();
        this.notificationService.getCaselaws().subscribe(function (response) {
            _this.messages.hideLoader();
            if (!response.error) {
                _this.caselawData = response;
                //   console.log(this.caselawData)
            }
        }, function (err) {
            if (err.status == 401) {
                if (_this.storage.remove("userInfo") ||
                    _this.storage.remove("name") ||
                    _this.storage.remove("email") ||
                    _this.storage.remove("role")) {
                    _this.storage.remove("userInfo");
                    _this.storage.remove("name");
                    _this.storage.remove("email");
                    _this.storage.remove("role");
                    _this.storage.remove("isSubscribed");
                }
                _this.messages.showToast("Force Logout due to multiple device login.", undefined, "toast-danger");
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */]);
            }
            _this.messages.hideLoader();
        });
    };
    CaselawsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-caselaws',template:/*ion-inline-start:"D:\IONIC\app_v1.72\03\src\pages\caselaws\caselaws.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Law Today</ion-title>   \n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n \n	<div padding>\n    <ion-segment [(ngModel)]="misc">\n      <ion-segment-button value="cases">\n        Case Laws\n      </ion-segment-button>\n    </ion-segment>\n  </div>\n  \n  <div [ngSwitch]="misc">\n\n    <ng-container *ngIf="caselawData.length <= 0">\n      <ion-item class="list-result">\n        <ion-icon color="grey" ios="ios-alert-outline" md="ios-alert-outline"></ion-icon>\n        <p>No Case Laws yet! Coming Soon...</p>\n      </ion-item>\n    </ng-container>\n    <ng-container *ngIf="caselawData.length >= 0">\n    <ion-list *ngSwitchCase="\'cases\'">\n      <ion-item *ngFor="let item of caselawData" (click)="goToExamDetail(item)">\n              <h2>{{item.title}}</h2>\n        </ion-item>\n      </ion-list>\n    </ng-container>\n  \n\n  </div>\n\n  \n\n<ion-footer >\n  \n</ion-footer>\n'/*ion-inline-end:"D:\IONIC\app_v1.72\03\src\pages\caselaws\caselaws.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_5__services_bookmark_service__["a" /* BookmarkServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_4__services_messages_service__["a" /* MessagesServiceProvider */]])
    ], CaselawsPage);
    return CaselawsPage;
}());

//# sourceMappingURL=caselaws.js.map

/***/ }),

/***/ 742:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CatgeoryListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_messages_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_category_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__topic_list_topic_list__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







// import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
var CatgeoryListPage = /** @class */ (function () {
    function CatgeoryListPage(navCtrl, 
        // private sqlite: SQLite,
        navParams, storage, messages, categoryService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.messages = messages;
        this.categoryService = categoryService;
        this.categoryTestData = [];
        this.getCategoryTestData();
    }
    CatgeoryListPage.prototype.ionViewDidLoad = function () {
    };
    CatgeoryListPage.prototype.getCategoryTestData = function () {
        var _this = this;
        this.messages.showLoader();
        this.categoryService.getCategories().subscribe(function (response) {
            _this.messages.hideLoader();
            if (!response.error) {
                var result = response.data;
                if (result) {
                    _this.categoryTestData = result.map(function (el) {
                        el.topics = el.topics.map(function (e) {
                            var t = Object.assign({}, e);
                            t.isChecked = false;
                            return t;
                        });
                        var o = Object.assign({}, el);
                        o.isChecked = false;
                        return o;
                    });
                }
            }
        }, function (err) {
            if (err.status == 401) {
                if (_this.storage.remove("userInfo") ||
                    _this.storage.remove("name") ||
                    _this.storage.remove("email") ||
                    _this.storage.remove("role")) {
                    _this.storage.remove("userInfo");
                    _this.storage.remove("name");
                    _this.storage.remove("email");
                    _this.storage.remove("role");
                    _this.storage.remove("isSubscribed");
                }
                _this.messages.showToast("Force Logout due to multiple device login.", undefined, "toast-danger");
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */]);
            }
            _this.messages.hideLoader();
        });
    };
    CatgeoryListPage.prototype.getCheckedCategory = function () {
        var _this = this;
        this.selectedCategoryData = [];
        this.categoryTestData.forEach(function (v, i) {
            if (v.isChecked == true) {
                _this.selectedCategoryData.push(v);
            }
            else {
                v.topics.forEach(function (t, i) {
                    if (t.isChecked == true) {
                        _this.selectedCategoryData.push(v);
                    }
                });
            }
        });
        if (this.selectedCategoryData.length > 0) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__topic_list_topic_list__["a" /* TopicListPage */], { data: this.selectedCategoryData });
        }
        else {
            this.messages.showToast("please select atleast one category or type", undefined, "toast-danger");
        }
    };
    CatgeoryListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-catgeory-list',template:/*ion-inline-start:"D:\IONIC\app_v1.72\03\src\pages\catgeory-list\catgeory-list.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Catgeories & Topics</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list class="list-default list-wrap ">\n    <ng-container *ngFor="let cat of categoryTestData; let i= index">\n      <ion-item padding-left>\n        <ion-label>{{cat.name}}</ion-label>\n        <ion-checkbox item-end [(ngModel)]="cat.isChecked"></ion-checkbox>\n      </ion-item>\n      <div class="topic__item" *ngIf="cat.topics">\n        <ng-container *ngFor="let topic of cat.topics; let i= index">\n          <ion-item padding-left>\n            <ion-label>{{topic.name}}</ion-label>\n            <ion-checkbox item-end [(ngModel)]="topic.isChecked"></ion-checkbox>\n          </ion-item>\n        </ng-container>\n      </div>\n    </ng-container>\n  </ion-list>\n</ion-content>\n<ion-footer>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-12>\n        <button class="square" no-margin ion-button block color="primary" (click)="getCheckedCategory()">Next</button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-footer>\n'/*ion-inline-end:"D:\IONIC\app_v1.72\03\src\pages\catgeory-list\catgeory-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3__services_messages_service__["a" /* MessagesServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_4__services_category_service__["a" /* CategoryServiceProvider */]])
    ], CatgeoryListPage);
    return CatgeoryListPage;
}());

//# sourceMappingURL=catgeory-list.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__constants_config__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_throw__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_timeout__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_timeout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_timeout__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var WebServiceProvider = /** @class */ (function () {
    function WebServiceProvider(http, platform) {
        this.http = http;
        this.platform = platform;
        this.endPointApiUrl = "";
        this.baseCountry = "";
        this.isLogin = false;
        this.userInfo = {};
        this.isConnect = false;
        this.dp = new __WEBPACK_IMPORTED_MODULE_3__angular_common__["d" /* DatePipe */]("en-US");
        this.localCountries = "assets/data/countries.json";
    }
    WebServiceProvider_1 = WebServiceProvider;
    /**
     * Method to call any API with following parameters
     *
     * @param apiPath - Path of API to call
     * @param body - Body or data to be send to API for processing for POST APIs
     * @param get_params - Query string params for GET APIs
     */
    WebServiceProvider.prototype.callAPI = function (apiPath, body, get_params) {
        var h = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */](WebServiceProvider_1.headers);
        var opt = {};
        opt.headers = h;
        if (apiPath.METHOD == "GET") {
            var url = apiPath.URL + get_params;
            return this.http.get(url, opt);
        }
        if (apiPath.METHOD == "PUT") {
            var url = apiPath.URL + get_params;
            return this.http.put(url, body, opt);
        }
        if (apiPath.METHOD == "POST") {
            var url = apiPath.URL;
            if (get_params && get_params.length > 0) {
                for (var i = 0; i < get_params.length; i++) {
                    url = url.replace("{param" + (i + 1) + "}", get_params[i]);
                }
            }
            return this.http.post(url, body, opt);
        }
        if (apiPath.METHOD == "DELETE") {
            var url = apiPath.URL + get_params;
            return this.http.delete(url, opt);
        }
    };
    WebServiceProvider.prototype.login = function (data) {
        var url = __WEBPACK_IMPORTED_MODULE_5__constants_config__["b" /* CONFIG */].API_LOGIN_URL;
        return this.http.post(url, data || {}, {
            headers: WebServiceProvider_1.headers
        });
    };
    WebServiceProvider.prototype.register = function (data) {
        var url = __WEBPACK_IMPORTED_MODULE_5__constants_config__["b" /* CONFIG */].API_REGISTER_URL;
        return this.http.post(url, data || {}, {
            headers: WebServiceProvider_1.headers
        });
    };
    WebServiceProvider.prototype.uploadDocuments = function (data) {
        var url = __WEBPACK_IMPORTED_MODULE_5__constants_config__["b" /* CONFIG */].API_UPLOAD_DOCUMENTS_URL;
        return this.http.post(url, data || {}, {
            headers: WebServiceProvider_1.headers
        });
    };
    WebServiceProvider.headers = { "Content-Type": "application/json" };
    WebServiceProvider = WebServiceProvider_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["Platform"]])
    ], WebServiceProvider);
    return WebServiceProvider;
    var WebServiceProvider_1;
}());

//# sourceMappingURL=web-service.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Regex; });
var Regex = {
    Email: /^(([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5}){1,25})+([;.](([a-zA-Z0-9_\-\.]+)@{[a-zA-Z0-9_\-\.]+0\.([a-zA-Z]{2,5}){1,25})+)*$/,
    Number: /^[0-9]+$/,
    AlphaNumberic: /^[a-zA-Z,'-'' '\.0-9\n]+$/,
    Address: /^[a-zA-Z0-9'\.\-\s\,]+$/,
    Alphabetic: /^[a-zA-Z]+$/,
    Phone: /^[a-zA-Z0-9+-.]+$/,
    Decimal: /^[0-9.]+$/,
    Url: /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9]\.[^\s]{2,})/,
    //Url:/(((http|ftp|https):\/{2})+(([0-9a-z_-]+\.)+(aero|asia|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|ac|ad|ae|af|ag|ai|al|am|an|ao|aq|ar|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|co|cr|cu|cv|cx|cy|cz|cz|de|dj|dk|dm|do|dz|ec|ee|eg|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|in|io|iq|ir|is|it|je|jm|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mk|ml|mn|mn|mo|mp|mr|ms|mt|mu|mv|mw|mx|my|mz|na|nc|ne|nf|ng|ni|nl|no|np|nr|nu|nz|nom|pa|pe|pf|pg|ph|pk|pl|pm|pn|pr|ps|pt|pw|py|qa|re|ra|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sj|sk|sl|sm|sn|so|sr|st|su|sv|sy|sz|tc|td|tf|tg|th|tj|tk|tl|tm|tn|to|tp|tr|tt|tv|tw|tz|ua|ug|uk|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|ye|yt|yu|za|zm|zw|arpa)(:[0-9]+)?((\/([~0-9a-zA-Z\#\+\%@\.\/_-]+))?(\?[0-9a-zA-Z\+\%@\/&\[\];=_-]+)?)?))\b/,
    Company: /^[0-9a-zA-Z,.@:|-\s\r\n]+$/,
    Password: /^(?=.*[A-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@*!^])\S{6,}$/
};
//# sourceMappingURL=regex.js.map

/***/ })

},[403]);
//# sourceMappingURL=main.js.map