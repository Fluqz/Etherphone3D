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
/* harmony import */ var _theremin_theremin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./theremin/theremin */ "./src/app/theremin/theremin.ts");
/* harmony import */ var _scene_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scene-manager */ "./src/app/scene-manager.ts");
/* harmony import */ var _theremin_theremin3D__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./theremin/theremin3D */ "./src/app/theremin/theremin3D.ts");
/* harmony import */ var _object_control__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./object-control */ "./src/app/object-control.ts");
/* harmony import */ var _tools_drag_window__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tools/drag-window */ "./src/app/tools/drag-window.ts");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./storage */ "./src/app/storage.ts");
/* harmony import */ var _beatmachine_beat_machine__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./beatmachine/beat-machine */ "./src/app/beatmachine/beat-machine.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _theremin_theremin_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./theremin/theremin.component */ "./src/app/theremin/theremin.component.ts");
/* harmony import */ var _selected_menu_selected_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./selected-menu/selected.component */ "./src/app/selected-menu/selected.component.ts");
/* harmony import */ var _beatmachine_beat_machine_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./beatmachine/beat-machine.component */ "./src/app/beatmachine/beat-machine.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");














function AppComponent_div_1_theremin_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "theremin", 10);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("theremin", ctx_r1.theremin)("theremin3D", ctx_r1.theremin3D);
} }
function AppComponent_div_1_selected_menu_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "selected-menu", 11);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("theremin3D", ctx_r2.theremin3D);
} }
function AppComponent_div_1_beatmachine_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "beatmachine", 12);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("theremin3D", ctx_r3.theremin3D);
} }
function AppComponent_div_1_dashboard_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "dashboard", 13);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("theremin", ctx_r4.theremin)("theremin3D", ctx_r4.theremin3D);
} }
function AppComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function AppComponent_div_1_Template_div_mouseenter_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.mouseenterUI(); })("mouseleave", function AppComponent_div_1_Template_div_mouseleave_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.mouseenterUI(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_1_Template_div_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.setCamera("perspective"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "P");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_1_Template_div_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.setCamera("orthographic"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "O");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AppComponent_div_1_theremin_8_Template, 1, 2, "theremin", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AppComponent_div_1_selected_menu_9_Template, 1, 1, "selected-menu", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AppComponent_div_1_beatmachine_10_Template, 1, 1, "beatmachine", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AppComponent_div_1_dashboard_11_Template, 1, 2, "dashboard", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.theremin && ctx_r0.theremin3D);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.theremin3D);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.theremin3D);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.theremin3D);
} }
class AppComponent {
    constructor(zone) {
        this.zone = zone;
        this.UIHidden = false;
        this.dragWindow = new _tools_drag_window__WEBPACK_IMPORTED_MODULE_5__["DragWindow"]();
    }
    ngAfterViewInit() {
        this.container = document.querySelector('#webGL');
        this.sm = new _scene_manager__WEBPACK_IMPORTED_MODULE_2__["SceneManager"](this.container);
        window.setTimeout(() => {
            this.theremin = new _theremin_theremin__WEBPACK_IMPORTED_MODULE_1__["Theremin"]();
            this.serializeIn(_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"].load());
            this.theremin.toggleOnOff(false);
            this.theremin3D = new _theremin_theremin3D__WEBPACK_IMPORTED_MODULE_3__["Theremin3D"](this.theremin);
            this.objCtrl = new _object_control__WEBPACK_IMPORTED_MODULE_4__["ObjectControl"](this.theremin3D);
            // this.theremin.toggleOnOff(false)
            this.loop();
        });
        this.resizeEvent = this.onResize.bind(this);
        window.onresize = this.resizeEvent;
        this.mouseDownEvent = this.onMouseDown.bind(this);
        document.addEventListener('mousedown', this.mouseDownEvent, false);
        this.mouseUpEvent = this.onMouseUp.bind(this);
        document.addEventListener('mouseup', this.mouseUpEvent, false);
        this.mouseMovevent = this.onMouseMove.bind(this);
        document.addEventListener('mousemove', this.mouseMovevent, false);
        this.keydownEvent = this.onkeydown.bind(this);
        document.addEventListener('keydown', this.keydownEvent, false);
        this.keyupEvent = this.onkeyup.bind(this);
        document.addEventListener('keyup', this.keyupEvent, false);
    }
    // private fixedUpdateTiming: number = 20;
    // private physicsTimeSimulated:number = Date.now();
    // private _deltaTime: number = 0;
    // private lastUpdate: number = Date.now();
    loop() {
        // while(this.physicsTimeSimulated < Date.now()){
        //   this.fixedUpdate()
        //   this.physicsTimeSimulated += this.fixedUpdateTiming
        // }
        this.update();
        // this._deltaTime = Date.now() - this.lastUpdate;
        // this.lastUpdate = Date.now();
        this.zone.runOutsideAngular(() => {
            this.AFID = window.requestAnimationFrame(this.loop.bind(this));
        });
    }
    update() {
        // console.log('update')
        this.theremin.update();
        this.theremin3D.update();
        this.sm.update();
    }
    fixedUpdate() {
        // console.log('fixed update')
    }
    rotateCamera(e) {
        let axis = e.target.getAttribute('axis');
        if (axis == 'x')
            axis = 'y';
        else if (axis == 'y')
            axis = 'z';
        else if (axis == 'z')
            axis = 'x';
        // this.rotateCamera(axis)
        e.target.setAttribute('axis', axis);
    }
    setCamera(type) {
        if (type == 'orthographic') {
            _scene_manager__WEBPACK_IMPORTED_MODULE_2__["SceneManager"].activeCamera = _scene_manager__WEBPACK_IMPORTED_MODULE_2__["CameraType"].ORTHOGRAPHIC;
            _scene_manager__WEBPACK_IMPORTED_MODULE_2__["SceneManager"].orthographic.position.set(0, 0, 2);
        }
        else if (type == 'perspective')
            _scene_manager__WEBPACK_IMPORTED_MODULE_2__["SceneManager"].activeCamera = _scene_manager__WEBPACK_IMPORTED_MODULE_2__["CameraType"].PERSPECTIVE;
        _scene_manager__WEBPACK_IMPORTED_MODULE_2__["SceneManager"].orbitCamera = _scene_manager__WEBPACK_IMPORTED_MODULE_2__["SceneManager"].currentCamera;
    }
    mouseenterUI() {
        this.UIHidden = this.objCtrl.dragObj;
    }
    onMouseDown(e) {
        this.dragWindow.onMouseDown(e);
    }
    onMouseMove(e) {
        this.dragWindow.onMouseMove(e);
    }
    onMouseUp(e) {
        this.dragWindow.onMouseUp(e);
    }
    onkeydown(e) {
    }
    onkeyup(e) {
        console.log(e);
        if (e.key == ' ' && e.code == 'Space') {
            this.theremin.toggleOnOff();
        }
        else if (e.key == 'p' && e.code == 'KeyP') {
            this.theremin.toggleOnOff();
        }
    }
    onResize() {
        this.sm.resize();
    }
    serializeIn(file) {
        let obj = JSON.parse(file);
        if (obj['theremin'])
            this.theremin.serializeIn(obj['theremin']);
        if (obj['beatmachine']) {
            _beatmachine_beat_machine__WEBPACK_IMPORTED_MODULE_7__["BeatMachine"].bpm = obj['beatmachine']['bpm'];
            _beatmachine_beat_machine__WEBPACK_IMPORTED_MODULE_7__["BeatMachine"].beats = obj['beatmachine']['beats'];
            _beatmachine_beat_machine__WEBPACK_IMPORTED_MODULE_7__["BeatMachine"].noteDuration = obj['beatmachine']['noteDuration'];
        }
    }
    serializeOut() {
        let samples = [];
        let obj = {
            theremin: this.theremin.serializeOut(),
            beatmachine: {
                bpm: _beatmachine_beat_machine__WEBPACK_IMPORTED_MODULE_7__["BeatMachine"].bpm,
                beats: _beatmachine_beat_machine__WEBPACK_IMPORTED_MODULE_7__["BeatMachine"].beats,
                noteDuration: _beatmachine_beat_machine__WEBPACK_IMPORTED_MODULE_7__["BeatMachine"].noteDuration,
            }
        };
        return JSON.stringify(obj);
    }
    unloadNotification($event) {
        this.ngOnDestroy();
    }
    ngOnDestroy() {
        window.cancelAnimationFrame(this.AFID);
        _storage__WEBPACK_IMPORTED_MODULE_6__["Storage"].save(this.serializeOut());
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], hostBindings: function AppComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("beforeunload", function AppComponent_beforeunload_HostBindingHandler($event) { return ctx.unloadNotification($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 2, vars: 1, consts: [["id", "webGL"], ["id", "ui-wrapper", 3, "mouseenter", "mouseleave", 4, "ngIf"], ["id", "ui-wrapper", 3, "mouseenter", "mouseleave"], [1, "btn", 3, "click"], ["id", "obj-menu", 1, "drag-window"], [1, "drag-bar"], [3, "theremin", "theremin3D", 4, "ngIf"], [3, "theremin3D", 4, "ngIf"], ["class", "drag-window", 3, "theremin3D", 4, "ngIf"], ["class", "drag-window", 3, "theremin", "theremin3D", 4, "ngIf"], [3, "theremin", "theremin3D"], [3, "theremin3D"], [1, "drag-window", 3, "theremin3D"], [1, "drag-window", 3, "theremin", "theremin3D"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_div_1_Template, 12, 4, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", true);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _theremin_theremin_component__WEBPACK_IMPORTED_MODULE_9__["ThereminView"], _selected_menu_selected_component__WEBPACK_IMPORTED_MODULE_10__["Selected"], _beatmachine_beat_machine_component__WEBPACK_IMPORTED_MODULE_11__["BeatMachineView"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__["Dashboard"]], styles: ["#pause-btn[_ngcontent-%COMP%] {\r\n\r\n    position: absolute;\r\n    top: -40px;\r\n    left: 0;\r\n\r\n    width: 30px;\r\n    height: 30px;\r\n\r\n    line-height: 30px;\r\n\r\n    text-align: center;\r\n\r\n    border-radius: 100%;\r\n\r\n    background-color: #390642;\r\n    color: white;\r\n    font-size: 11px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTs7SUFFSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLE9BQU87O0lBRVAsV0FBVztJQUNYLFlBQVk7O0lBRVosaUJBQWlCOztJQUVqQixrQkFBa0I7O0lBRWxCLG1CQUFtQjs7SUFFbkIseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbiNwYXVzZS1idG4ge1xyXG5cclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogLTQwcHg7XHJcbiAgICBsZWZ0OiAwO1xyXG5cclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG5cclxuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG5cclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG5cclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzOTA2NDI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                template: `

    <div id="webGL"></div>


    <div *ngIf="true" id="ui-wrapper" (mouseenter)="mouseenterUI()" (mouseleave)="mouseenterUI()">

      <div>

        <div class="btn" (click)="setCamera('perspective')">P</div>

        <div class="btn" (click)="setCamera('orthographic')">O</div>

      </div>


      <div id="obj-menu" class="drag-window">

          <div class="drag-bar"></div>

          <theremin *ngIf="theremin && theremin3D" [theremin]="theremin" [theremin3D]="theremin3D"></theremin>

          <selected-menu *ngIf="theremin3D" [theremin3D]="theremin3D"></selected-menu>

          <beatmachine *ngIf="theremin3D" class="drag-window" [theremin3D]="theremin3D"></beatmachine>

      </div>


      <!--<mixer *ngIf="theremin3D" class="drag-window" [theremin3D]="theremin3D"></mixer>-->

      <dashboard *ngIf="theremin3D" class="drag-window" [theremin]="theremin" [theremin3D]="theremin3D"></dashboard>

    </div>
        
  `,
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }]; }, { unloadNotification: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:beforeunload', ['$event']]
        }] }); })();


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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _selected_menu_selected_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./selected-menu/selected.component */ "./src/app/selected-menu/selected.component.ts");
/* harmony import */ var _beatmachine_track_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./beatmachine/track.component */ "./src/app/beatmachine/track.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _theremin_theremin_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./theremin/theremin.component */ "./src/app/theremin/theremin.component.ts");
/* harmony import */ var _beatmachine_beat_machine_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./beatmachine/beat-machine.component */ "./src/app/beatmachine/beat-machine.component.ts");










class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _selected_menu_selected_component__WEBPACK_IMPORTED_MODULE_4__["Selected"],
        _beatmachine_track_component__WEBPACK_IMPORTED_MODULE_5__["TrackView"],
        _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["Dashboard"],
        _theremin_theremin_component__WEBPACK_IMPORTED_MODULE_7__["ThereminView"],
        _beatmachine_beat_machine_component__WEBPACK_IMPORTED_MODULE_8__["BeatMachineView"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _selected_menu_selected_component__WEBPACK_IMPORTED_MODULE_4__["Selected"],
                    _beatmachine_track_component__WEBPACK_IMPORTED_MODULE_5__["TrackView"],
                    _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["Dashboard"],
                    _theremin_theremin_component__WEBPACK_IMPORTED_MODULE_7__["ThereminView"],
                    _beatmachine_beat_machine_component__WEBPACK_IMPORTED_MODULE_8__["BeatMachineView"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/axes-behaviours/axes-behaviour.ts":
/*!***************************************************!*\
  !*** ./src/app/axes-behaviours/axes-behaviour.ts ***!
  \***************************************************/
/*! exports provided: AxesBehaviour */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AxesBehaviour", function() { return AxesBehaviour; });
class AxesBehaviour {
    constructor(axis) {
        this.name = '';
        this.sF = 10;
        this.min = 0;
        this.max = 1000;
        this.muted = false;
        this.axis = axis;
    }
    compute1DPosition(note) { }
    processAlongDimension(note, position) { }
}


/***/ }),

/***/ "./src/app/axes-behaviours/frequency-shfit.ts":
/*!****************************************************!*\
  !*** ./src/app/axes-behaviours/frequency-shfit.ts ***!
  \****************************************************/
/*! exports provided: FrequencyShift */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrequencyShift", function() { return FrequencyShift; });
/* harmony import */ var _axes_behaviour__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./axes-behaviour */ "./src/app/axes-behaviours/axes-behaviour.ts");
/* harmony import */ var _data_frequency_of_notes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/frequency-of-notes */ "./src/app/data/frequency-of-notes.ts");


class FrequencyShift extends _axes_behaviour__WEBPACK_IMPORTED_MODULE_0__["AxesBehaviour"] {
    constructor(axis) {
        super(axis);
        this.noteData = [];
        this.keydown = false;
        this.name = 'Frequency Shift';
        this.sF = 10;
        this.min = 0;
        this.max = 2000;
        this.muted = false;
        window.addEventListener('keydown', this.onkeydown.bind(this));
        window.addEventListener('keyup', this.onkeyup.bind(this));
    }
    onkeydown(e) {
        if (e.key == 's')
            this.keydown = true;
    }
    onkeyup(e) {
        if (e.key == 's')
            this.keydown = false;
    }
    snapToNote(frequency) {
        if (!this.keydown)
            return frequency;
        let nearest = 1000;
        let currentNote;
        _data_frequency_of_notes__WEBPACK_IMPORTED_MODULE_1__["NoteDataClass"].data.forEach(data => {
            if (nearest > Math.abs(frequency - data.frequency)) {
                nearest = Math.abs(frequency - data.frequency);
                currentNote = data;
            }
        });
        return currentNote.frequency;
    }
    compute1DPosition(note) {
        note.position[this.axis] = note.frequency / this.sF;
    }
    processAlongDimension(note, position) {
        if (this.axis == null)
            return;
        if (this.muted)
            return;
        let frequency = Math.round((position[this.axis] * this.sF) * 100) / 100;
        note.frequency = this.snapToNote(frequency);
    }
}


/***/ }),

/***/ "./src/app/axes-behaviours/octivator.ts":
/*!**********************************************!*\
  !*** ./src/app/axes-behaviours/octivator.ts ***!
  \**********************************************/
/*! exports provided: Octivator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Octivator", function() { return Octivator; });
/* harmony import */ var _axes_behaviour__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./axes-behaviour */ "./src/app/axes-behaviours/axes-behaviour.ts");
/* harmony import */ var tone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tone */ "./node_modules/tone/build/esm/index.js");


class Octivator extends _axes_behaviour__WEBPACK_IMPORTED_MODULE_0__["AxesBehaviour"] {
    constructor(axis) {
        super(axis);
        this.oscs = [];
        this.name = 'Octivator';
        this.sF = 10;
        this.min = 0;
        this.max = 100;
        this.muted = false;
    }
    compute1DPosition(note) {
    }
    // Minus value go low, plus go high
    processAlongDimension(note, position) {
        if (this.axis == null)
            return;
        if (this.muted)
            return;
        let count = Math.round(note.position[this.axis] / this.sF);
        let multipier = count + 1;
        count = Math.abs(count);
        // if(this.currentMultiplier == multipier) return
        this.currentMultiplier = multipier;
        this.oscs.forEach(osc => {
            osc.stop();
            osc.disconnect();
        });
        this.oscs = [];
        let neg = false;
        if (multipier < 0)
            neg = true;
        for (let i = 1; i <= count; i++) {
            let osc = tone__WEBPACK_IMPORTED_MODULE_1__["context"].createOscillator();
            // osc.type = node.wave
            // osc.type = 'sine'
            // osc.connect(entity.gain)
            // if(neg)
            //     osc.frequency.setValueAtTime(entity.frequency / multipier, Tone.context.currentTime)
            // else osc.frequency.setValueAtTime(multipier * entity.frequency, Tone.context.currentTime)
            osc.start();
            this.oscs.push(osc);
        }
    }
    createOctave(frequency) {
    }
}


/***/ }),

/***/ "./src/app/axes-behaviours/volume-shift.ts":
/*!*************************************************!*\
  !*** ./src/app/axes-behaviours/volume-shift.ts ***!
  \*************************************************/
/*! exports provided: VolumeShift */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VolumeShift", function() { return VolumeShift; });
/* harmony import */ var _axes_behaviour__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./axes-behaviour */ "./src/app/axes-behaviours/axes-behaviour.ts");
/* harmony import */ var _theremin_note__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../theremin/note */ "./src/app/theremin/note.ts");


class VolumeShift extends _axes_behaviour__WEBPACK_IMPORTED_MODULE_0__["AxesBehaviour"] {
    constructor(axis) {
        super(axis);
        this.name = 'Volume Shift';
        this.sF = 100;
        this.min = 0;
        this.max = 100;
        this.muted = false;
    }
    compute1DPosition(note) {
        if (note instanceof _theremin_note__WEBPACK_IMPORTED_MODULE_1__["Note"])
            note.position[this.axis] = note.volume * this.sF;
    }
    processAlongDimension(note, position) {
        if (this.axis == null)
            return;
        if (this.muted)
            return;
        note.volume = position[this.axis] / this.sF;
    }
}


/***/ }),

/***/ "./src/app/beatmachine/beat-machine.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/beatmachine/beat-machine.component.ts ***!
  \*******************************************************/
/*! exports provided: BeatMachineView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeatMachineView", function() { return BeatMachineView; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _beat_machine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./beat-machine */ "./src/app/beatmachine/beat-machine.ts");
/* harmony import */ var _track_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./track.component */ "./src/app/beatmachine/track.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");







const _c0 = ["tracks"];
function BeatMachineView_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BeatMachineView_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.play(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BeatMachineView_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BeatMachineView_div_2_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.pause(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BeatMachineView_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 20);
} if (rf & 2) {
    const beat_r8 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("left", beat_r8 * (100 / ctx_r2.beats), "%");
} }
function BeatMachineView_track_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "track", 21, 22);
} if (rf & 2) {
    const note_r9 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("note", note_r9)("beats", ctx_r3.beats);
} }
class BeatMachineView {
    constructor(zone) {
        this.zone = zone;
        this._samples = [];
    }
    ngAfterViewInit() {
    }
    play() {
        //Theremin.togglePlay(false)
        this.notes.forEach(note => {
            note.ctrl.stop();
        });
        _beat_machine__WEBPACK_IMPORTED_MODULE_1__["BeatMachine"].stop();
        // this.zone.runOutsideAngular(()=> {
        //   this.playTO = window.setInterval(()=> { this.computeTime() }, 20)
        // })
        _beat_machine__WEBPACK_IMPORTED_MODULE_1__["BeatMachine"].start(this.samples);
    }
    pause() {
        _beat_machine__WEBPACK_IMPORTED_MODULE_1__["BeatMachine"].stop();
        window.clearInterval(this.playTO);
    }
    // SAMPLE DOESNT KNOW ITS LENGTH OR SCHEDULE TIME ??
    get samples() {
        if (!this.tracks)
            return;
        this._samples = [];
        this.tracks.forEach(track => {
            this._samples.push(...track.samples);
        });
        return this._samples;
    }
    get notes() {
        return this.theremin3D.notes3D;
    }
    computeTime() {
        this.time = ((_beat_machine__WEBPACK_IMPORTED_MODULE_1__["BeatMachine"].time % (_beat_machine__WEBPACK_IMPORTED_MODULE_1__["BeatMachine"].secondsPerBeat * _beat_machine__WEBPACK_IMPORTED_MODULE_1__["BeatMachine"].beats)) / (_beat_machine__WEBPACK_IMPORTED_MODULE_1__["BeatMachine"].secondsPerBeat * _beat_machine__WEBPACK_IMPORTED_MODULE_1__["BeatMachine"].beats)) * 100;
        return this.time;
    }
    // public get currentBeat() { return BeatMachine.currentNote }
    get bpm() { return _beat_machine__WEBPACK_IMPORTED_MODULE_1__["BeatMachine"].bpm; }
    set bpm(bpm) {
        _beat_machine__WEBPACK_IMPORTED_MODULE_1__["BeatMachine"].bpm = bpm;
    }
    get beats() { return _beat_machine__WEBPACK_IMPORTED_MODULE_1__["BeatMachine"].beats; }
    set beats(beats) { _beat_machine__WEBPACK_IMPORTED_MODULE_1__["BeatMachine"].beats = beats; }
    get beatsArray() {
        let array = [];
        for (let i = 0; i < _beat_machine__WEBPACK_IMPORTED_MODULE_1__["BeatMachine"].beats; i++)
            array.push(i);
        return array;
    }
    get noteDuration() { return _beat_machine__WEBPACK_IMPORTED_MODULE_1__["BeatMachine"].noteDuration; }
    set noteDuration(duration) {
        switch (duration) {
            case '1':
            case '1/2':
            case '1/4':
            case '1/8':
            case '1/16':
            case '1/32':
            case '1/64':
                _beat_machine__WEBPACK_IMPORTED_MODULE_1__["BeatMachine"].noteDuration = duration;
                break;
        }
    }
    ngOnDestroy() {
        this.pause();
    }
}
BeatMachineView.ɵfac = function BeatMachineView_Factory(t) { return new (t || BeatMachineView)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); };
BeatMachineView.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BeatMachineView, selectors: [["beatmachine"]], viewQuery: function BeatMachineView_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true, _track_component__WEBPACK_IMPORTED_MODULE_2__["TrackView"]);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.tracks = _t);
    } }, inputs: { theremin3D: "theremin3D" }, decls: 26, vars: 8, consts: [[2, "margin", "15px 0px"], ["class", "btn play", 3, "click", 4, "ngIf"], ["class", "btn pause", 3, "click", 4, "ngIf"], ["type", "number", 3, "value", "change"], ["name", "noteDuration", 3, "change"], ["value", "1"], ["value", "1/2"], ["value", "1/4"], ["value", "1/8"], ["value", "1/16"], ["value", "1/32"], ["value", "1/64"], ["id", "timeline-wrapper"], ["id", "timeline-pointer"], ["id", "timeline"], ["class", "beat-marking", 3, "left", 4, "ngFor", "ngForOf"], ["id", "tracks-wrapper"], ["class", "track-timeline", 3, "note", "beats", 4, "ngFor", "ngForOf"], [1, "btn", "play", 3, "click"], [1, "btn", "pause", 3, "click"], [1, "beat-marking"], [1, "track-timeline", 3, "note", "beats"], ["tracks", ""]], template: function BeatMachineView_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BeatMachineView_div_1_Template, 1, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BeatMachineView_div_2_Template, 1, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function BeatMachineView_Template_input_change_3_listener($event) { return ctx.bpm = $event.target.value; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function BeatMachineView_Template_input_change_4_listener($event) { return ctx.beats = $event.target.value; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "select", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function BeatMachineView_Template_select_change_5_listener($event) { return ctx.noteDuration = $event.target.value; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "1/2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "1/4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "1/8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "1/16");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "1/32");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "1/64");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, BeatMachineView_div_23_Template, 1, 2, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, BeatMachineView_track_25_Template, 2, 2, "track", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.theremin3D);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.theremin3D);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.bpm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.beats);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("left", ctx.time, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.beatsArray);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.notes);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _track_component__WEBPACK_IMPORTED_MODULE_2__["TrackView"]], styles: ["[_nghost-%COMP%] {\n      \n      display:block;    \n      width: 100%;\n      height: auto;\n      padding: 20px;\n      color: #fefefe;\n  \n      resize: vertical;\n      overflow: auto;\n    }\n\n\n    #timeline-wrapper[_ngcontent-%COMP%] {\n\n      position: relative;\n      width: 80%;\n      height: 100%;\n      color: #000;\n    }\n\n    #timeline-pointer[_ngcontent-%COMP%] {\n      position:absolute;\n      top: 0px;\n      margin-left: 50px;\n\n      width: 1px;\n      height: 100%;\n      background-color: #000;\n    }\n\n    #timeline[_ngcontent-%COMP%] {\n      position: absolute;\n      top: -10px;\n      width: calc(100% - 50px);\n      height: 10px;\n      margin-left: 50px;\n      background-color: #FFaa00;\n    }\n\n\n    .beat-marking[_ngcontent-%COMP%] {\n      position: absolute;\n      top: 0px;\n      width: 1px;\n      height: 100%;\n      background-color: #000;\n    }\n\n    #tracks-wrapper[_ngcontent-%COMP%] {\n\n      overflow-x: hidden;\n      overflow-y: auto;\n      max-height: 150px;\n      height: 100%;\n      width: 100%\n    }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BeatMachineView, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'beatmachine',
                // INSIDE THE TIMELINE ARE ALL THE INSTRUMENTS IN THIS CASE THE SAMPLES WHICH ARE ALL THE NOTES OR CHORDS WITHOUT A PARENT
                // EACH INSTRUMENT HAS ITS OWN DRAW LINE
                template: `  

      
    <div style="margin: 15px 0px;">

      <div *ngIf="theremin3D" class="btn play" (click)="play()"></div>

      <div *ngIf="theremin3D" class="btn pause" (click)="pause()"></div>

      <input type="number" [value]="bpm" (change)="bpm = $event.target.value" />

      <input type="number" [value]="beats" (change)="beats = $event.target.value" />

      <select name="noteDuration" (change)="noteDuration = $event.target.value">

          <option value="1">1</option>
          <option value="1/2">1/2</option>
          <option value="1/4">1/4</option>
          <option value="1/8">1/8</option>
          <option value="1/16">1/16</option>
          <option value="1/32">1/32</option>
          <option value="1/64">1/64</option>

      </select>

    </div>

    

    <div id="timeline-wrapper">

        <div id="timeline-pointer" [style.left.%]="time"></div>

        <div id="timeline">
            <div *ngFor="let beat of beatsArray" class="beat-marking" [style.left.%]="beat*(100/beats)"></div>
        </div>
        
        <div id="tracks-wrapper">
          <track #tracks *ngFor="let note of notes" [note]="note" [beats]="beats" class="track-timeline" />
        </div>

    </div>


  `,
                styles: [
                    `

    :host {
      
      display:block;    
      width: 100%;
      height: auto;
      padding: 20px;
      color: #fefefe;
  
      resize: vertical;
      overflow: auto;
    }


    #timeline-wrapper {

      position: relative;
      width: 80%;
      height: 100%;
      color: #000;
    }

    #timeline-pointer {
      position:absolute;
      top: 0px;
      margin-left: 50px;

      width: 1px;
      height: 100%;
      background-color: #000;
    }

    #timeline {
      position: absolute;
      top: -10px;
      width: calc(100% - 50px);
      height: 10px;
      margin-left: 50px;
      background-color: #FFaa00;
    }


    .beat-marking {
      position: absolute;
      top: 0px;
      width: 1px;
      height: 100%;
      background-color: #000;
    }

    #tracks-wrapper {

      overflow-x: hidden;
      overflow-y: auto;
      max-height: 150px;
      height: 100%;
      width: 100%
    }


    `
                ],
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }]; }, { theremin3D: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['theremin3D']
        }], tracks: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"],
            args: ['tracks', { read: _track_component__WEBPACK_IMPORTED_MODULE_2__["TrackView"] }]
        }] }); })();


/***/ }),

/***/ "./src/app/beatmachine/beat-machine.ts":
/*!*********************************************!*\
  !*** ./src/app/beatmachine/beat-machine.ts ***!
  \*********************************************/
/*! exports provided: BeatMachine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeatMachine", function() { return BeatMachine; });
/* harmony import */ var tone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tone */ "./node_modules/tone/build/esm/index.js");

class BeatMachine {
    constructor() {
        // Tone.context = new AudioContext()
        // BeatMachine.masterNode = Tone.context.createGain()
        // BeatMachine.masterNode.gain.value = .3
        // BeatMachine.masterNode.connect(Tone.context.destination)
    }
    static get instance() {
        if (BeatMachine._instance == null)
            BeatMachine._instance = new BeatMachine();
        return BeatMachine._instance;
    }
    set setSamplesInQueue(val) {
        BeatMachine.samplesInQueue = val;
    }
    static get time() { return tone__WEBPACK_IMPORTED_MODULE_0__["context"].currentTime - BeatMachine.startTime; }
    static add(sample) {
        BeatMachine.samplesInQueue.push(sample);
    }
    static remove(sample) {
        BeatMachine.samplesInQueue.splice(BeatMachine.samplesInQueue.indexOf(sample), 1);
    }
    static start(samples) {
        if (samples != null)
            BeatMachine.samplesInQueue = samples;
        if (BeatMachine.isPlaying)
            BeatMachine.stop();
        BeatMachine.isPlaying = true;
        BeatMachine.startTime = tone__WEBPACK_IMPORTED_MODULE_0__["context"].currentTime;
        // check if context is in suspended state (autoplay policy)
        if (tone__WEBPACK_IMPORTED_MODULE_0__["context"].state === 'suspended') {
            tone__WEBPACK_IMPORTED_MODULE_0__["context"].resume();
        }
        BeatMachine.scheduler(); // kick off scheduling
    }
    static stop() {
        BeatMachine.isPlaying = false;
        window.clearTimeout(BeatMachine.TOID);
    }
    static nextNote() {
        BeatMachine.secondsPerBeat = 60 / BeatMachine.bpm;
        BeatMachine.nextNoteTime += BeatMachine.secondsPerBeat;
        BeatMachine.currentNote += 1;
        if (BeatMachine.currentNote == BeatMachine.beats)
            BeatMachine.currentNote = 0;
    }
    static scheduleNote(beatNumber, time) {
        // console.log(beatNumber, time)
        BeatMachine.samplesInQueue.forEach(sample => {
            if (sample.scheduleTime == beatNumber) {
                // console.log('play', sample.scheduleTime, sample.length * BeatMachine.secondsPerBeat)
                sample.note.play(sample.length * BeatMachine.secondsPerBeat);
                sample.note.ctrl.play(sample.length * BeatMachine.secondsPerBeat);
            }
        });
    }
    static scheduler() {
        while (BeatMachine.nextNoteTime < BeatMachine.time + BeatMachine.scheduleAhead) {
            BeatMachine.scheduleNote(BeatMachine.currentNote, BeatMachine.nextNoteTime);
            BeatMachine.nextNote();
            // console.log(BeatMachine.currentNote)
        }
        BeatMachine.TOID = window.setTimeout(BeatMachine.scheduler, BeatMachine.lookahead);
    }
}
BeatMachine.bpm = 200;
BeatMachine.beats = 16;
BeatMachine.noteDuration = '1';
BeatMachine.samplesInQueue = [];
BeatMachine.isPlaying = false;
BeatMachine.lookahead = 25; // MS
BeatMachine.scheduleAhead = .1; // Seconds
BeatMachine.currentNote = 0; // 1/4 Note
BeatMachine.nextNoteTime = 0; // 1/4 Note
BeatMachine.secondsPerBeat = 0;
BeatMachine.startTime = 0;


/***/ }),

/***/ "./src/app/beatmachine/track.component.ts":
/*!************************************************!*\
  !*** ./src/app/beatmachine/track.component.ts ***!
  \************************************************/
/*! exports provided: TrackView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackView", function() { return TrackView; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _object_control__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../object-control */ "./src/app/object-control.ts");
/* harmony import */ var _beat_machine__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./beat-machine */ "./src/app/beatmachine/beat-machine.ts");
/* harmony import */ var _tools_tools__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tools/tools */ "./src/app/tools/tools.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function TrackView_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function TrackView_div_3_Template_div_mousedown_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const sample_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.sampleMouseDown($event, sample_r1); })("mousemove", function TrackView_div_3_Template_div_mousemove_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const sample_r1 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.sampleMouseMove($event, sample_r1); })("mouseup", function TrackView_div_3_Template_div_mouseup_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const sample_r1 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.sampleMouseUp($event, sample_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function TrackView_div_3_Template_div_mousedown_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const sample_r1 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.sampleMouseDown($event, sample_r1); })("mousemove", function TrackView_div_3_Template_div_mousemove_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const sample_r1 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.sampleMouseMove($event, sample_r1); })("mouseup", function TrackView_div_3_Template_div_mouseup_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const sample_r1 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.sampleMouseUp($event, sample_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sample_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx_r0.color)("left", sample_r1.scheduleTime * (100 / ctx_r0.beats), "%")("width", 100 / ctx_r0.beats, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", sample_r1.id);
} }
class TrackView {
    constructor(hostRef) {
        this.hostRef = hostRef;
        // public set samples(val: Sample[]) {}
        // public activeSample: Sample
        this.samples = [];
        this.host = this.hostRef.nativeElement;
    }
    get color() {
        return '#' + this.note.ctrl.color.getHexString();
    }
    ngAfterViewInit() {
        console.log('track note', this.note);
        this.doubleClickEvent = this.onDoubleClick.bind(this);
        this.host.addEventListener('dblclick', this.doubleClickEvent, false);
        this.clickEvent = this.onClick.bind(this);
        this.host.addEventListener('click', this.clickEvent, false);
    }
    createSample(length, scheduleTime) {
        let sample = {
            id: _tools_tools__WEBPACK_IMPORTED_MODULE_3__["Tools"].getUniqueID(),
            note: this.note,
            scheduleTime: scheduleTime,
            length: 1
        };
        console.log('sample', sample);
        this.samples.push(sample);
        _beat_machine__WEBPACK_IMPORTED_MODULE_2__["BeatMachine"].add(sample);
        return sample;
    }
    removeSample(sample) {
        _beat_machine__WEBPACK_IMPORTED_MODULE_2__["BeatMachine"].remove(sample);
        let i = this.samples.indexOf(sample);
        return this.samples.splice(i, 1);
    }
    onDoubleClick(e) {
        // Remove Sample on dblclick directly on sample
        if (e.target.classList.contains('sample')) {
            let id = e.target.getAttribute('id');
            this.samples.forEach(sample => {
                if (id == sample.id)
                    this.removeSample(sample);
            });
        }
        else if (e.target.classList.contains('creation-click-zone')) { // Create sample
            let rect = e.target.getBoundingClientRect();
            // Cutting to beat begin
            let x = e.clientX - rect.left;
            let scheduleTime = (x / e.target.clientWidth) * 100;
            scheduleTime /= 100 / this.beats;
            scheduleTime = Math.trunc(scheduleTime);
            this.createSample(_beat_machine__WEBPACK_IMPORTED_MODULE_2__["BeatMachine"].nextNoteTime, scheduleTime);
        }
    }
    onClick(e) {
        _object_control__WEBPACK_IMPORTED_MODULE_1__["ObjectControl"].selectedObj = this.note.obj;
    }
    sampleMouseDown(e, sample) {
        let ele = e.target;
        let sampleEle = ele.closest('.sample');
    }
    sampleMouseUp(e, sample) {
    }
    sampleMouseMove(e, sample) {
    }
}
TrackView.ɵfac = function TrackView_Factory(t) { return new (t || TrackView)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
TrackView.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TrackView, selectors: [["track"]], inputs: { note: "note", beats: "beats" }, decls: 4, vars: 4, consts: [[1, "note-title"], [1, "creation-click-zone"], ["class", "sample", 3, "id", "background-color", "left", "width", 4, "ngFor", "ngForOf"], [1, "sample", 3, "id"], [1, "sample-start", 3, "mousedown", "mousemove", "mouseup"], [1, "sample-end", 3, "mousedown", "mousemove", "mouseup"]], template: function TrackView_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TrackView_div_3_Template, 3, 7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx.color);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.note.ctrl.type);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.samples);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: ["[_nghost-%COMP%] {\n\n      display:block;\n      width: 100%;\n      height: 20px;\n      line-height: 20px;\n      background-color: #ddd;\n      color: #000;\n      border-bottom: 1px solid #FFaa00;\n      padding: 0px;\n      margin: 0px;\n    }\n    [_nghost-%COMP%]:last-child() {\n        border-bottom: none;\n    }\n\n    .note-title[_ngcontent-%COMP%] {\n        display: inline-block;\n        width: 50px;\n        height: 100%;\n        line-height: inherit;\n        padding: 0px 3px;\n        border-right: 1px solid #3f3f3f;\n        vertical-align: top;\n    }\n\n    .creation-click-zone[_ngcontent-%COMP%] {\n      position: relative;\n      display: inline-block;\n\n      width: calc(100% - 50px);\n      height: 100%;\n      vertical-align: top;\n\n    }\n\n    .sample[_ngcontent-%COMP%] {\n      position: absolute;\n      top: 10%;\n      left: 0px;\n\n      width: 10px;\n      height: 80%;\n      background-color: #00DDAA;\n      \n    }\n\n    .sample-start[_ngcontent-%COMP%], .sample-end[_ngcontent-%COMP%] {\n      position:absolute;\n      top:0px;\n      width: 4px;\n      height:100%;\n      display: inline-block;\n      cursor: col-resize;\n    }\n    .sample-start[_ngcontent-%COMP%]{\n      left: 0px;\n    }\n    .sample-end[_ngcontent-%COMP%] {\n      right: 0px;\n    }\n    .sample-start[_ngcontent-%COMP%]:hover, .sample-end[_ngcontent-%COMP%]:hover {\n      background-color:#458459;\n    }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TrackView, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'track',
                template: `
  
    <div class="note-title" [style.backgroundColor]="color">{{ note.ctrl.type }}</div>

    <div class="creation-click-zone">

        <div *ngFor="let sample of samples" 
          class="sample" 
          data-id="{{sample.id}}" 
          [style.background-color]="color" 
          [style.left.%]="sample.scheduleTime * (100/beats)" 
          [style.width.%]="100 / beats">

            <div class="sample-start" (mousedown)="sampleMouseDown($event, sample)" (mousemove)="sampleMouseMove($event, sample)" (mouseup)="sampleMouseUp($event, sample)"></div>
            <div class="sample-end" (mousedown)="sampleMouseDown($event, sample)" (mousemove)="sampleMouseMove($event, sample)" (mouseup)="sampleMouseUp($event, sample)"></div>

        </div>

    </div>


  `,
                styles: [
                    `
      
    :host {

      display:block;
      width: 100%;
      height: 20px;
      line-height: 20px;
      background-color: #ddd;
      color: #000;
      border-bottom: 1px solid #FFaa00;
      padding: 0px;
      margin: 0px;
    }
    :host:last-child() {
        border-bottom: none;
    }

    .note-title {
        display: inline-block;
        width: 50px;
        height: 100%;
        line-height: inherit;
        padding: 0px 3px;
        border-right: 1px solid #3f3f3f;
        vertical-align: top;
    }

    .creation-click-zone {
      position: relative;
      display: inline-block;

      width: calc(100% - 50px);
      height: 100%;
      vertical-align: top;

    }

    .sample {
      position: absolute;
      top: 10%;
      left: 0px;

      width: 10px;
      height: 80%;
      background-color: #00DDAA;
      
    }

    .sample-start,
    .sample-end {
      position:absolute;
      top:0px;
      width: 4px;
      height:100%;
      display: inline-block;
      cursor: col-resize;
    }
    .sample-start{
      left: 0px;
    }
    .sample-end {
      right: 0px;
    }
    .sample-start:hover,
    .sample-end:hover {
      background-color:#458459;
    }
      `
                ]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { note: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['note']
        }], beats: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['beats']
        }] }); })();


/***/ }),

/***/ "./src/app/color.ts":
/*!**************************!*\
  !*** ./src/app/color.ts ***!
  \**************************/
/*! exports provided: Color */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Color", function() { return Color; });
class Color {
}
Color.X = 0xFFFFFF;
Color.Y = 0xFFFFFF;
Color.Z = 0xFFFFFF;
Color.BG = 0x020202;


/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: Dashboard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dashboard", function() { return Dashboard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _object_control__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../object-control */ "./src/app/object-control.ts");
/* harmony import */ var _theremin_note3D__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../theremin/note3D */ "./src/app/theremin/note3D.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function Dashboard_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Dashboard_div_3_div_1_Template_div_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const note_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.selectNote($event, note_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Note ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Dashboard_div_3_div_1_Template_div_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const note_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.toggleMute(note_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "M");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Dashboard_div_3_div_1_Template_div_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const note_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.delete(note_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "X");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const note_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx_r2.selectedNote == note_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", note_r1.ctrl.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](note_r1.ctrl.id);
} }
function Dashboard_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Dashboard_div_3_div_1_Template, 8, 4, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const note_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isNote(note_r1));
} }
class Dashboard {
    constructor(hostRef) {
        this.hostRef = hostRef;
        this.host = this.hostRef.nativeElement;
    }
    set selectedNote(val) {
        this._selectedNote = val;
        _object_control__WEBPACK_IMPORTED_MODULE_1__["ObjectControl"].selectedObj = val.obj;
    }
    get selectedNote() {
        if (_object_control__WEBPACK_IMPORTED_MODULE_1__["ObjectControl"].selected != null)
            return _object_control__WEBPACK_IMPORTED_MODULE_1__["ObjectControl"].selected;
        return this._selectedNote = null;
    }
    get notes() { return this.theremin3D.notes3D; }
    ngAfterViewInit() {
    }
    selectNote(e, note) {
        this.selectedNote = note;
    }
    toggleMute(note) {
        if (note.ctrl.muted)
            note.ctrl.unmute();
        else
            note.ctrl.mute();
    }
    delete(note) {
        this.theremin3D.removeNote3D(note);
        this.theremin.deleteNote(note.ctrl);
    }
    isNote(note) { return note instanceof _theremin_note3D__WEBPACK_IMPORTED_MODULE_2__["Note3D"]; }
}
Dashboard.ɵfac = function Dashboard_Factory(t) { return new (t || Dashboard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
Dashboard.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Dashboard, selectors: [["dashboard"]], inputs: { theremin: "theremin", theremin3D: "theremin3D" }, decls: 4, vars: 1, consts: [[1, "drag-bar"], [1, "dashboard-cont"], [4, "ngFor", "ngForOf"], ["class", "dashboard-item", 3, "id", "active", "click", 4, "ngIf"], [1, "dashboard-item", 3, "id", "click"], [1, "dashboard-item-inner"], [1, "btn", "mute", 3, "click"], [1, "btn", "delete", 3, "click"]], template: function Dashboard_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "DASHBOARD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, Dashboard_div_3_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.notes);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: ["[_nghost-%COMP%] {\n\n        position: absolute;\n        right: 0px;\n        top: 0px;\n    \n        width: 200px;\n        color: #fefefe;\n    }\n      \n    .dashboard-cont[_ngcontent-%COMP%] {\n\n        width: 100%;\n        height: auto;\n\n        max-height: 150px;\n\n        overflow-y: auto;\n\n        padding: 5px;\n    }\n\n    .dashboard-item[_ngcontent-%COMP%] {\n\n      width: 100%;\n      height: 30px;\n    }\n\n    .dashboard-item.active[_ngcontent-%COMP%] {\n      background-color: #3f3f3f;\n    }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Dashboard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'dashboard',
                template: `
    
  <div class="drag-bar">DASHBOARD</div>

  <div class="dashboard-cont">

      <div *ngFor="let note of notes">

          <div *ngIf="isNote(note)" [id]="note.ctrl.id" (click)="selectNote($event, note)" class="dashboard-item" [class.active]="selectedNote == note">
              Note
              <div  class="dashboard-item-inner">{{note.ctrl.id}}</div>
              <div class="btn mute" (click)="toggleMute(note)">M</div>
              <div class="btn delete" (click)="delete(note)">X</div>
              
          </div>
          
      </div>
      
  </div>
  
  
  `,
                styles: [
                    `
      
    :host {

        position: absolute;
        right: 0px;
        top: 0px;
    
        width: 200px;
        color: #fefefe;
    }
      
    .dashboard-cont {

        width: 100%;
        height: auto;

        max-height: 150px;

        overflow-y: auto;

        padding: 5px;
    }

    .dashboard-item {

      width: 100%;
      height: 30px;
    }

    .dashboard-item.active {
      background-color: #3f3f3f;
    }

      `
                ]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { theremin: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['theremin']
        }], theremin3D: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['theremin3D']
        }] }); })();


/***/ }),

/***/ "./src/app/data/frequency-of-notes.ts":
/*!********************************************!*\
  !*** ./src/app/data/frequency-of-notes.ts ***!
  \********************************************/
/*! exports provided: NoteDataClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoteDataClass", function() { return NoteDataClass; });
class NoteDataClass {
}
NoteDataClass.data = [
    { note: 'C0', frequency: 16.35 },
    { note: 'C#0/Db0', frequency: 17.32 },
    { note: 'D0', frequency: 18.35 },
    { note: 'D#0/Eb0', frequency: 19.45 },
    { note: 'E0', frequency: 20.60 },
    { note: 'F0', frequency: 21.83 },
    { note: 'F#0/Gb0', frequency: 23.12 },
    { note: 'G0', frequency: 24.50 },
    { note: 'G#0/Ab0', frequency: 25.96 },
    { note: 'A0', frequency: 27.50 },
    { note: 'A#0/Bb0', frequency: 29.14 },
    { note: 'B0', frequency: 30.87 },
    { note: 'C1', frequency: 32.70 },
    { note: 'C#1/Db1', frequency: 34.65 },
    { note: 'D1', frequency: 36.71 },
    { note: 'D#1/Eb1', frequency: 38.89 },
    { note: 'E1', frequency: 41.20 },
    { note: 'F1', frequency: 43.65 },
    { note: 'F#1/Gb1', frequency: 46.25 },
    { note: 'G1', frequency: 49.00 },
    { note: 'G#1/Ab1', frequency: 51.91 },
    { note: 'A1', frequency: 55.00 },
    { note: 'A#1/Bb1', frequency: 58.27 },
    { note: 'B1', frequency: 61.74 },
    { note: 'C2', frequency: 65.41 },
    { note: 'C#2/Db2', frequency: 69.30 },
    { note: 'D2', frequency: 73.42 },
    { note: 'D#2/Eb2', frequency: 77.78 },
    { note: 'E2', frequency: 82.41 },
    { note: 'F2', frequency: 87.31 },
    { note: 'F#2/Gb2', frequency: 92.50 },
    { note: 'G2', frequency: 98.00 },
    { note: 'G#2/Ab2', frequency: 103.83 },
    { note: 'A2', frequency: 110.00 },
    { note: 'A#2/Bb2', frequency: 116.54 },
    { note: 'B2', frequency: 123.47 },
    { note: 'C3', frequency: 130.81 },
    { note: 'C#3/Db3', frequency: 138.59 },
    { note: 'D3', frequency: 146.83 },
    { note: 'D#3/Eb3', frequency: 155.56 },
    { note: 'E3', frequency: 164.81 },
    { note: 'F3', frequency: 174.61 },
    { note: 'F#3/Gb3', frequency: 185.00 },
    { note: 'G3', frequency: 196.00 },
    { note: 'G#3/Ab3', frequency: 207.65 },
    { note: 'A3', frequency: 220.00 },
    { note: 'A#3/Bb3', frequency: 233.08 },
    { note: 'B3', frequency: 246.94 },
    { note: 'C4', frequency: 261.63 },
    { note: 'C#4/Db4', frequency: 277.18 },
    { note: 'D4', frequency: 293.66 },
    { note: 'D#4/Eb4', frequency: 311.13 },
    { note: 'E4', frequency: 329.63 },
    { note: 'F4', frequency: 349.23 },
    { note: 'F#4/Gb4', frequency: 369.99 },
    { note: 'G4', frequency: 392.00 },
    { note: 'G#4/Ab4', frequency: 415.30 },
    { note: 'A4', frequency: 440.00 },
    { note: 'A#4/Bb4', frequency: 466.16 },
    { note: 'B4', frequency: 493.88 },
    { note: 'C5', frequency: 523.25 },
    { note: 'C#5/Db5', frequency: 554.37 },
    { note: 'D5', frequency: 587.33 },
    { note: 'D#5/Eb5', frequency: 622.25 },
    { note: 'E5', frequency: 659.25 },
    { note: 'F5', frequency: 698.46 },
    { note: 'F#5/Gb5', frequency: 739.99 },
    { note: 'G5', frequency: 783.99 },
    { note: 'G#5/Ab5', frequency: 830.61 },
    { note: 'A5', frequency: 880.00 },
    { note: 'A#5/Bb5', frequency: 932.33 },
    { note: 'B5', frequency: 987.77 },
    { note: 'C6', frequency: 1046.50 },
    { note: 'C#6/Db6', frequency: 1108.73 },
    { note: 'D6', frequency: 1174.66 },
    { note: 'D#6/Eb6', frequency: 1244.51 },
    { note: 'E6', frequency: 1318.51 },
    { note: 'F6', frequency: 1396.91 },
    { note: 'F#6/Gb6', frequency: 1479.98 },
    { note: 'G6', frequency: 1567.98 },
    { note: 'G#6/Ab6', frequency: 1661.22 },
    { note: 'A6', frequency: 1760.00 },
    { note: 'A#6/Bb6', frequency: 1864.66 },
    { note: 'B6', frequency: 1975.53 },
    { note: 'C7', frequency: 2093.00 },
    { note: 'C#7/Db7', frequency: 2217.46 },
    { note: 'D7', frequency: 2349.32 },
    { note: 'D#7/Eb7', frequency: 2489.02 },
    { note: 'E7', frequency: 2637.02 },
    { note: 'F7', frequency: 2793.83 },
    { note: 'F#7/Gb7', frequency: 2959.96 },
    { note: 'G7', frequency: 3135.96 },
    { note: 'G#7/Ab7', frequency: 3322.44 },
    { note: 'A7', frequency: 3520.00 },
    { note: 'A#7/Bb7', frequency: 3729.31 },
    { note: 'B7', frequency: 3951.07 },
    { note: 'C8', frequency: 4186.01 },
    { note: 'C#8/Db8', frequency: 4434.92 },
    { note: 'D8', frequency: 4698.63 },
    { note: 'D#8/Eb8', frequency: 4978.03 },
    { note: 'E8', frequency: 5274.04 },
    { note: 'F8', frequency: 5587.65 },
    { note: 'F#8/Gb8', frequency: 5919.91 },
    { note: 'G8', frequency: 6271.93 },
    { note: 'G#8/Ab8', frequency: 6644.88 },
    { note: 'A8', frequency: 7040.00 },
    { note: 'A#8/Bb8', frequency: 7458.62 },
    { note: 'B8', frequency: 7902.13 },
];


/***/ }),

/***/ "./src/app/object-control.ts":
/*!***********************************!*\
  !*** ./src/app/object-control.ts ***!
  \***********************************/
/*! exports provided: ObjectControl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjectControl", function() { return ObjectControl; });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var _theremin_theremin3D__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./theremin/theremin3D */ "./src/app/theremin/theremin3D.ts");
/* harmony import */ var _scene_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scene-manager */ "./src/app/scene-manager.ts");



class ObjectControl {
    constructor(_theremin3D) {
        this.dragObj = false;
        this.keyMap = new Map();
        ObjectControl.theremin3D = _theremin3D;
        this.mouseDown = false;
        this.mouse = new three__WEBPACK_IMPORTED_MODULE_0__["Vector3"]();
        this.ip = new three__WEBPACK_IMPORTED_MODULE_0__["Vector3"]();
        this.offset = new three__WEBPACK_IMPORTED_MODULE_0__["Vector3"]();
        this.moveTo = new three__WEBPACK_IMPORTED_MODULE_0__["Vector3"]();
        this.raycaster = new three__WEBPACK_IMPORTED_MODULE_0__["Raycaster"]();
        this.plane = new three__WEBPACK_IMPORTED_MODULE_0__["Plane"](new three__WEBPACK_IMPORTED_MODULE_0__["Vector3"](0, 1, 0), 0);
        _scene_manager__WEBPACK_IMPORTED_MODULE_2__["SceneManager"].renderer.domElement.addEventListener('mousedown', this.onMouseDown.bind(this), false);
        _scene_manager__WEBPACK_IMPORTED_MODULE_2__["SceneManager"].renderer.domElement.addEventListener('mouseup', this.onMouseUp.bind(this), false);
        _scene_manager__WEBPACK_IMPORTED_MODULE_2__["SceneManager"].renderer.domElement.addEventListener('mousemove', this.onMouseMove.bind(this), false);
        // document.addEventListener('mouseleave', this.onLeaveContainer.bind(this), false)
        _scene_manager__WEBPACK_IMPORTED_MODULE_2__["SceneManager"].renderer.domElement.addEventListener('touchstart', this.onTouchStart.bind(this), false);
        _scene_manager__WEBPACK_IMPORTED_MODULE_2__["SceneManager"].renderer.domElement.addEventListener('touchend', this.onTouchEnd.bind(this), false);
        _scene_manager__WEBPACK_IMPORTED_MODULE_2__["SceneManager"].renderer.domElement.addEventListener('touchcancel', this.onTouchCancel.bind(this), false);
        _scene_manager__WEBPACK_IMPORTED_MODULE_2__["SceneManager"].renderer.domElement.addEventListener('touchmove', this.onTouchMove.bind(this), false);
        _scene_manager__WEBPACK_IMPORTED_MODULE_2__["SceneManager"].renderer.domElement.addEventListener('keyup', this.onKeyUp.bind(this), false);
        _scene_manager__WEBPACK_IMPORTED_MODULE_2__["SceneManager"].renderer.domElement.addEventListener('keydown', this.onKeyDown.bind(this), false);
    }
    static get selectedObj() { return ObjectControl._selectedObj; }
    static set selectedObj(obj) {
        if (obj != null && obj != undefined) {
            if (ObjectControl._selectedObj != obj && ObjectControl.selected) {
                ObjectControl.selected.unselect();
            }
            ObjectControl._selectedObj = obj;
            switch (obj.name) {
                case 'osc.3D':
                case 'chord.3D':
                    ObjectControl.selected = ObjectControl.theremin3D.getNoteByObj(obj);
                    break;
                default:
                    if (obj.parent instanceof three__WEBPACK_IMPORTED_MODULE_0__["Scene"]) {
                        ObjectControl.selectedObj = null;
                    }
                    else {
                        ObjectControl.selectedObj = obj.parent;
                        return;
                    }
            }
            if (ObjectControl.selected)
                ObjectControl.selected.select();
            else
                ObjectControl._selectedObj = null;
        }
        else {
            if (ObjectControl.selected != null && ObjectControl.selected != undefined) {
                ObjectControl.selected.unselect();
                ObjectControl.selected = null;
            }
            ObjectControl._selectedObj = null;
        }
    }
    collectRaycastObjs() {
        let objs = [];
        ObjectControl.theremin3D.notes3D.forEach(note => {
            objs.push(note.obj);
        });
        return objs;
    }
    // ON KEY DOWN SWITCH NOTE/CHORD TO OLD POSITION WHEN CLICKED
    // ON KEY UP SWITCH BACK TO CURRENT POSITION
    // EVENTS
    onMouseDown(event) {
        // console.log(event)
        this.mouseDown = true;
        this.mouse.x = (event.clientX / _scene_manager__WEBPACK_IMPORTED_MODULE_2__["SceneManager"].w) * 2 - 1;
        this.mouse.y = -(event.clientY / _scene_manager__WEBPACK_IMPORTED_MODULE_2__["SceneManager"].h) * 2 + 1;
        let vector = new three__WEBPACK_IMPORTED_MODULE_0__["Vector3"](this.mouse.x, this.mouse.y, .5);
        vector.unproject(_scene_manager__WEBPACK_IMPORTED_MODULE_2__["SceneManager"].currentCamera);
        this.raycaster.setFromCamera(this.mouse, _scene_manager__WEBPACK_IMPORTED_MODULE_2__["SceneManager"].currentCamera);
        let intersects = this.raycaster.intersectObjects(this.collectRaycastObjs(), true);
        if (intersects.length > 0) {
            _scene_manager__WEBPACK_IMPORTED_MODULE_2__["SceneManager"].orbit.enabled = false;
            if (intersects[0].object) {
                ObjectControl.selectedObj = intersects[0].object;
                if (ObjectControl.selected) {
                    this.dragObj = true;
                    // If no shift key
                    if (!event.shiftKey) {
                        ObjectControl.selectedObjs.forEach(obj => { ObjectControl.theremin3D.getNoteByObj(obj).unselect(); });
                        ObjectControl.selectedObjs = [];
                        ObjectControl.selectedObjs.push(intersects[0].object);
                        // console.log(intersects[0].object,this.theremin3D.getNoteByObj(intersects[0].object))
                        // console.log('no shift', this.selected)
                        this.plane.setFromNormalAndCoplanarPoint(_scene_manager__WEBPACK_IMPORTED_MODULE_2__["SceneManager"].currentCamera.getWorldDirection(this.plane.normal), intersects[0].object.position);
                        this.raycaster.ray.intersectPlane(this.plane, this.ip);
                        this.offset.copy(this.ip.sub(intersects[0].object.position));
                        // init move so its not at (0, 0, 0)
                        this.moveTo.copy(intersects[0].object.position);
                        ObjectControl.selected.select();
                    }
                    else if (!ObjectControl.selectedObjs.includes(intersects[0].object)) {
                        ObjectControl.selectedObj = intersects[0].object;
                        ObjectControl.selectedObjs.push(intersects[0].object);
                        // Select all selected objs
                        ObjectControl.selectedObjs.forEach(obj => {
                            ObjectControl.theremin3D.getNoteByObj(obj).select();
                        });
                    }
                }
                else {
                    ObjectControl.selectedObjs = [];
                }
            }
            else {
                ObjectControl.selectedObjs = [];
                ObjectControl.selectedObj = null;
            }
        }
        else {
            ObjectControl.selectedObjs = [];
            ObjectControl.selectedObj = null;
        }
        // SceneSetup.instance.onMouseDown(event)
        console.log('CURRENTLY SELECTED: ', ObjectControl.selectedObjs, '  Main: ', ObjectControl.selected);
    }
    onMouseUp(event) {
        this.mouseDown = false;
        this.dragObj = false;
        _scene_manager__WEBPACK_IMPORTED_MODULE_2__["SceneManager"].orbit.enabled = true;
        if (!event.shiftKey) {
            // this.selected = null
            // this.selectedObjs = []
        }
        if (ObjectControl.selected) {
            ObjectControl.selected.mouseUp();
        }
        if (ObjectControl.selectedObjs.length > 1) {
        }
        // SceneSetup.instance.onMouseUp(event)
    }
    onMouseMove(event) {
        // event.preventDefault()
        this.mouse.x = (event.clientX / _scene_manager__WEBPACK_IMPORTED_MODULE_2__["SceneManager"].w) * 2 - 1;
        this.mouse.y = -(event.clientY / _scene_manager__WEBPACK_IMPORTED_MODULE_2__["SceneManager"].h) * 2 + 1;
        this.raycaster.setFromCamera(this.mouse, _scene_manager__WEBPACK_IMPORTED_MODULE_2__["SceneManager"].currentCamera);
        if (this.mouseDown) {
            // When selected calc position
            if (ObjectControl.selectedObjs.length == 1 && ObjectControl.selected) { // MULTIPLE? WHY length = 1
                // HIDE MENU
                this.raycaster.ray.intersectPlane(this.plane, this.ip);
                this.moveTo.copy(this.ip.sub(this.offset));
                // if(this.XKey) this.moveTo.x = this.moveTo.x
                // if(Y || Y == undefined) tmpPos.y = (moveTo.y)
                // if(Z || Z == undefined) tmpPos.z = (moveTo.z)
                // Move SELECTED
                _theremin_theremin3D__WEBPACK_IMPORTED_MODULE_1__["Theremin3D"].moveNote(ObjectControl.selected, this.moveTo);
            }
        }
        else {
            // HOVER OBJ
            let intersects = this.raycaster.intersectObjects(ObjectControl.theremin3D.objs, true);
            if (intersects.length > 0) {
            }
        }
    }
    onTouchStart(event) {
        this.onMouseDown(event);
    }
    onTouchEnd(event) {
        this.onMouseUp(event);
    }
    onTouchCancel(event) {
        this.onMouseUp(event);
    }
    onTouchMove(event) {
        this.onMouseMove(event);
    }
    onLeaveContainer() {
        console.log('left');
        ObjectControl.selected = null;
        this.mouseDown = false;
    }
    // onkeydown = onkeyup = {
    //     e = e || event; // to deal with IE
    //     map[e.keyCode] = e.type == 'keydown';
    //     /* insert conditional here */
    // }
    onKeyDown(e) {
        // MAKE POSSIBLE TO CLICK TWO KEYS e.g. X AND Y AND DONT CHANGE Z 
        const key = e.key.toLowerCase();
        if (key == 'x' || key == 'y' || key == 'z' || key == '<') {
            this.XKey = false;
            this.YKey = false;
            this.ZKey = false;
            this.keyMap.set(key, e.type == 'keydown');
            if (this.keyMap.get('x')) {
                this.XKey = true;
            }
            if (this.keyMap.get('y')) {
                this.YKey = true;
            }
            if (this.keyMap.get('z') || this.keyMap.get('<')) {
                this.ZKey = true;
            }
        }
    }
    onKeyUp(e) {
        const key = e.key.toLowerCase();
        if (key == 'x' || key == 'y' || key == 'z' || key == '<') {
            this.keyMap.set(key, e.type == 'keydown');
            if (this.keyMap.get('x') && this.keyMap.get('y') ||
                this.keyMap.get('x') && (this.keyMap.get('z') || this.keyMap.get('<')) ||
                this.keyMap.get('y') && (this.keyMap.get('z') || this.keyMap.get('<')) ||
                this.keyMap.get('x') && this.keyMap.get('y') && (this.keyMap.get('z') || this.keyMap.get('<'))) {
                if (this.keyMap.get(key)) {
                    this.XKey = false;
                }
            }
            else {
                this.XKey = true;
                this.YKey = true;
                this.ZKey = true;
            }
        }
    }
    onResize() {
    }
}
ObjectControl.selectedObjs = [];


/***/ }),

/***/ "./src/app/scene-manager.ts":
/*!**********************************!*\
  !*** ./src/app/scene-manager.ts ***!
  \**********************************/
/*! exports provided: CameraType, SceneManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CameraType", function() { return CameraType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SceneManager", function() { return SceneManager; });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls */ "./node_modules/three/examples/jsm/controls/OrbitControls.js");
/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./color */ "./src/app/color.ts");




var CameraType;
(function (CameraType) {
    CameraType[CameraType["PERSPECTIVE"] = 0] = "PERSPECTIVE";
    CameraType[CameraType["ORTHOGRAPHIC"] = 1] = "ORTHOGRAPHIC";
})(CameraType || (CameraType = {}));
class SceneManager {
    constructor(container) {
        this.container = container;
        SceneManager.w = window.innerWidth;
        SceneManager.h = window.innerHeight;
        SceneManager.activeCamera = CameraType.PERSPECTIVE;
        SceneManager.renderer = new three__WEBPACK_IMPORTED_MODULE_0__["WebGLRenderer"]({ antialias: true });
        SceneManager.renderer.setSize(SceneManager.w, SceneManager.h);
        SceneManager.renderer.setClearColor(_color__WEBPACK_IMPORTED_MODULE_2__["Color"].BG);
        SceneManager.renderer.toneMapping = three__WEBPACK_IMPORTED_MODULE_0__["Uncharted2ToneMapping"];
        this.container.append(SceneManager.renderer.domElement);
        SceneManager.perspective = new three__WEBPACK_IMPORTED_MODULE_0__["PerspectiveCamera"](50, SceneManager.w / SceneManager.h, .1, 10000);
        SceneManager.perspective.position.set(50, 50, 50);
        SceneManager.orthographic = new three__WEBPACK_IMPORTED_MODULE_0__["OrthographicCamera"](SceneManager.w / -2, SceneManager.w / 2, SceneManager.h / 2, SceneManager.h / -2, .1, 1000);
        SceneManager.orthographic.position.set(0, 0, 5);
        SceneManager.orthographic.zoom = 50;
        SceneManager.scene = new three__WEBPACK_IMPORTED_MODULE_0__["Scene"]();
        SceneManager.scene.background = new three__WEBPACK_IMPORTED_MODULE_0__["Color"](_color__WEBPACK_IMPORTED_MODULE_2__["Color"].BG);
        // this.scene.add(new GridHelper(1000, 100, new THREE.Color(0xAAAAAA)))
        // this.scene.add(new AxesHelper(100))
        SceneManager.orbitCamera = SceneManager.perspective;
        this.createAxes();
        this.createLight();
        // this.addCubeMap()
    }
    static get currentCamera() {
        return this.activeCamera == CameraType.PERSPECTIVE ? SceneManager.perspective : SceneManager.orthographic;
    }
    static set orbitCamera(camera) {
        if (SceneManager.orbit) {
            SceneManager.orbit.reset();
            SceneManager.orbit.dispose();
        }
        if (camera instanceof three__WEBPACK_IMPORTED_MODULE_0__["PerspectiveCamera"]) {
            SceneManager.orbit = new three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_1__["OrbitControls"](camera, SceneManager.renderer.domElement);
            SceneManager.orbit.enableDamping = true;
            SceneManager.orbit.dampingFactor = .2;
        }
        else if (camera instanceof three__WEBPACK_IMPORTED_MODULE_0__["OrthographicCamera"]) {
            SceneManager.orbit = new three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_1__["OrbitControls"](camera, SceneManager.renderer.domElement);
            SceneManager.orbit.enableDamping = true;
            SceneManager.orbit.dampingFactor = .2;
            SceneManager.orbit.enableRotate = false;
        }
    }
    createAxes() {
        let points = [];
        // X
        points.push(new three__WEBPACK_IMPORTED_MODULE_0__["Vector3"](-10000, 0, 0));
        points.push(new three__WEBPACK_IMPORTED_MODULE_0__["Vector3"](10000, 0, 0));
        let geometry = new three__WEBPACK_IMPORTED_MODULE_0__["BufferGeometry"]().setFromPoints(points);
        let material = new three__WEBPACK_IMPORTED_MODULE_0__["LineBasicMaterial"]({ color: _color__WEBPACK_IMPORTED_MODULE_2__["Color"].X });
        this.x = new three__WEBPACK_IMPORTED_MODULE_0__["Line"](geometry, material);
        this.x.position.set(0, 0, 0);
        SceneManager.scene.add(this.x);
        // Y
        points = [];
        points.push(new three__WEBPACK_IMPORTED_MODULE_0__["Vector3"](0, -10000, 0));
        points.push(new three__WEBPACK_IMPORTED_MODULE_0__["Vector3"](0, 10000, 0));
        geometry = new three__WEBPACK_IMPORTED_MODULE_0__["BufferGeometry"]().setFromPoints(points);
        material = new three__WEBPACK_IMPORTED_MODULE_0__["LineBasicMaterial"]({ color: _color__WEBPACK_IMPORTED_MODULE_2__["Color"].Y });
        this.y = new three__WEBPACK_IMPORTED_MODULE_0__["Line"](geometry, material);
        this.y.position.set(0, 0, 0);
        SceneManager.scene.add(this.y);
        // Z
        points = [];
        points.push(new three__WEBPACK_IMPORTED_MODULE_0__["Vector3"](0, 0, -10000));
        points.push(new three__WEBPACK_IMPORTED_MODULE_0__["Vector3"](0, 0, 10000));
        geometry = new three__WEBPACK_IMPORTED_MODULE_0__["BufferGeometry"]().setFromPoints(points);
        material = new three__WEBPACK_IMPORTED_MODULE_0__["LineBasicMaterial"]({ color: _color__WEBPACK_IMPORTED_MODULE_2__["Color"].Z });
        this.z = new three__WEBPACK_IMPORTED_MODULE_0__["Line"](geometry, material);
        this.z.position.set(0, 0, 0);
        SceneManager.scene.add(this.z);
    }
    createLight() {
        let hemi = new three__WEBPACK_IMPORTED_MODULE_0__["HemisphereLight"](0xFFFdEF, 0xFFFedF, .8);
        SceneManager.scene.add(hemi);
    }
    addCubeMap() {
        SceneManager.scene.background = new three__WEBPACK_IMPORTED_MODULE_0__["CubeTextureLoader"]()
            .setPath('/assets/images/milky-way/')
            .load([
            'px.png',
            'nx.png',
            'py.png',
            'ny.png',
            'pz.png',
            'nz.png'
        ]);
    }
    update() {
        if (SceneManager.orbit)
            SceneManager.orbit.update();
        if (SceneManager.activeCamera == CameraType.PERSPECTIVE)
            SceneManager.renderer.render(SceneManager.scene, SceneManager.perspective);
        else if (SceneManager.activeCamera == CameraType.ORTHOGRAPHIC)
            SceneManager.renderer.render(SceneManager.scene, SceneManager.orthographic);
        // console.log(Theremin.instance.sounds, Theremin3D.instance.sounds3D)
    }
    distanceToCenter(pos) {
        return pos.distanceTo(SceneManager.scene.position);
    }
    // ROTATE CAMERA ON KEY 1 2 3 or SHIFT 1 2 3 for negative area to be aligned to a axes
    rotateCamera(axis) {
        if (axis == 'x') {
            SceneManager.perspective.position.set(0, 0, this.distanceToCenter(SceneManager.perspective.position));
        }
        else if (axis == 'y') {
            SceneManager.perspective.position.set(this.distanceToCenter(SceneManager.perspective.position), 0, 0);
        }
        else if (axis == 'z') {
            SceneManager.perspective.position.set(this.distanceToCenter(SceneManager.perspective.position), 0, 0);
        }
    }
    resize() {
        SceneManager.w = this.container.clientWidth;
        SceneManager.h = this.container.clientHeight;
        SceneManager.perspective.aspect = SceneManager.w / SceneManager.h;
        SceneManager.perspective.updateProjectionMatrix();
        SceneManager.renderer.setPixelRatio(SceneManager.w / SceneManager.h);
        SceneManager.renderer.setSize(SceneManager.w, SceneManager.h);
    }
}
SceneManager.environmentObjs = [];


/***/ }),

/***/ "./src/app/selected-menu/selected.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/selected-menu/selected.component.ts ***!
  \*****************************************************/
/*! exports provided: Selected */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Selected", function() { return Selected; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _object_control__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../object-control */ "./src/app/object-control.ts");
/* harmony import */ var _theremin_note3D__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../theremin/note3D */ "./src/app/theremin/note3D.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");






function Selected_div_0_select_6_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "select", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function Selected_div_0_select_6_Template_select_change_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r4.setWave($event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Sine");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Square");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Sawtooth");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Triangle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function Selected_div_0_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Part of chord ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function Selected_div_0_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Alarm: A Note is already part of chord... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Selected_div_0_div_10_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r6.groupSoundEntities(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Group");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Ungroup");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function Selected_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Wave");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, Selected_div_0_select_6_Template, 9, 0, "select", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, Selected_div_0_span_7_Template, 2, 0, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Selected_div_0_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.toggleMuteSelected(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Mute/Unmute");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, Selected_div_0_div_10_Template, 6, 0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.selected.ctrl.type + " id:" + ctx_r0.selected.ctrl.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isNote);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.selectedObjs.length > 1);
} }
class Selected {
    get selected() { return _object_control__WEBPACK_IMPORTED_MODULE_1__["ObjectControl"].selected; }
    get selectedObjs() { return _object_control__WEBPACK_IMPORTED_MODULE_1__["ObjectControl"].selectedObjs; }
    get isNote() { return this.selected instanceof _theremin_note3D__WEBPACK_IMPORTED_MODULE_2__["Note3D"]; }
    ngAfterViewInit() {
    }
    isSelected(type) {
        if (_object_control__WEBPACK_IMPORTED_MODULE_1__["ObjectControl"].selected && _object_control__WEBPACK_IMPORTED_MODULE_1__["ObjectControl"].selected != null)
            return true;
        else
            return false;
    }
    changeVolume() {
    }
    setWave(wave) {
        this.selected.ctrl.wave = wave;
    }
    toggleMuteSelected() {
        if (_object_control__WEBPACK_IMPORTED_MODULE_1__["ObjectControl"].selected.ctrl.muted)
            _object_control__WEBPACK_IMPORTED_MODULE_1__["ObjectControl"].selected.unmute();
        else
            _object_control__WEBPACK_IMPORTED_MODULE_1__["ObjectControl"].selected.mute();
    }
    groupSoundEntities() {
        // let ses: Sound[] = []
        // let ses3D: Sound3D[] = []
        // ObjectControl.selectedObjs.forEach(obj => {
        //   // Collect all selected Sounds
        //   ses.push(this.theremin3D.getNoteByObj(obj).ctrl)
        //   // Collect all selected Sound3D's
        //   ses3D.push(this.theremin3D.getNoteByObj(obj))
        // })
        // // Make Chord from Sounds
        // let chord = this.theremin3D.theremin.groupNotesToChord(ses)
        // // Add 3D objs to new Chord3D obj
        // this.theremin3D.groupNotesToChord(chord, ses3D)
    }
    ungroupSoundEntities() {
        // let ses: Sound[] = []
        // let ses3D: Sound3D[] = []
        // ObjectControl.selectedObjs.forEach(obj => {
        //   ses3D.push(this.theremin3D.getNoteByObj(obj))
        //   ses.push(this.theremin3D.getNoteByObj(obj).ctrl)
        // })
        // let chord = this.theremin3D.theremin.ungroupNotes(ses)
        // this.theremin3D.ungroupNotes(ses3D, chord)
    }
}
Selected.ɵfac = function Selected_Factory(t) { return new (t || Selected)(); };
Selected.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Selected, selectors: [["selected-menu"]], inputs: { theremin3D: "theremin3D" }, decls: 1, vars: 1, consts: [["id", "selected-menu", 4, "ngIf"], ["id", "selected-menu"], ["for", "wave"], ["id", "wave", "name", "wave", 3, "change", 4, "ngIf"], [4, "ngIf"], [3, "click"], ["id", "wave", "name", "wave", 3, "change"], ["value", "sine"], ["value", "square"], ["value", "sawtooth"], ["value", "triangle"]], template: function Selected_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Selected_div_0_Template, 11, 4, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selected);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_x"]], styles: ["[_nghost-%COMP%] {\n        \n        display:block;    \n        width: 100%;\n        height: auto;\n        color: #fefefe;\n    \n        resize: vertical;\n        overflow: auto;\n    }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Selected, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'selected-menu',
                templateUrl: './selected.component.html',
                styles: [
                    `
    :host {
        
        display:block;    
        width: 100%;
        height: auto;
        color: #fefefe;
    
        resize: vertical;
        overflow: auto;
    }
    `
                ]
            }]
    }], null, { theremin3D: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['theremin3D']
        }] }); })();


/***/ }),

/***/ "./src/app/storage.ts":
/*!****************************!*\
  !*** ./src/app/storage.ts ***!
  \****************************/
/*! exports provided: Storage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Storage", function() { return Storage; });
class Storage {
    static load() {
        return window.localStorage.getItem(Storage.baseName + "-save");
    }
    static save(file) {
        window.localStorage.setItem(Storage.baseName + "-save", file);
    }
}
Storage.baseName = "etherphone";


/***/ }),

/***/ "./src/app/theremin/axis.ts":
/*!**********************************!*\
  !*** ./src/app/theremin/axis.ts ***!
  \**********************************/
/*! exports provided: Axis */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Axis", function() { return Axis; });
var Axis;
(function (Axis) {
    Axis["x"] = "x";
    Axis["y"] = "y";
    Axis["z"] = "z";
})(Axis || (Axis = {}));


/***/ }),

/***/ "./src/app/theremin/note.ts":
/*!**********************************!*\
  !*** ./src/app/theremin/note.ts ***!
  \**********************************/
/*! exports provided: Note */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Note", function() { return Note; });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var _theremin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./theremin */ "./src/app/theremin/theremin.ts");
/* harmony import */ var tone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tone */ "./node_modules/tone/build/esm/index.js");
/* harmony import */ var _tools_tools__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tools/tools */ "./src/app/tools/tools.ts");




class Note {
    constructor() {
        this.isPlaying = false;
        this.muted = false;
        this.id = _tools_tools__WEBPACK_IMPORTED_MODULE_3__["Tools"].getUniqueID();
        this.type = 'note';
        this.color = new three__WEBPACK_IMPORTED_MODULE_0__["Color"]().setHSL(Math.random(), 0.7, Math.random() * 0.2 + 0.05);
        this.gain = new tone__WEBPACK_IMPORTED_MODULE_2__["Gain"]();
        this.volume = 0;
        this.gain.connect(_theremin__WEBPACK_IMPORTED_MODULE_1__["Theremin"].masterVolume);
        this.osc = new tone__WEBPACK_IMPORTED_MODULE_2__["Oscillator"](this.frequency);
        this.osc.connect(this.gain);
        this.frequency = 0;
        this.position = new three__WEBPACK_IMPORTED_MODULE_0__["Vector3"](0, 0, 0);
    }
    get frequency() { return this._frequency; }
    set frequency(val) {
        if (val == null)
            return;
        this._frequency = Math.abs(val);
        this.osc.frequency.setValueAtTime(this._frequency, tone__WEBPACK_IMPORTED_MODULE_2__["context"].currentTime);
    }
    get volume() { return this._volume; }
    set volume(val) {
        if (val == null)
            return;
        this._volume = Math.abs(val);
        this.gain.gain.value = val;
    }
    get wave() { return this._wave; }
    set wave(val) {
        this._wave = val;
        if (val && this.osc)
            this.osc.type = this._wave;
    }
    update() {
    }
    // public createOsc() {
    //     this.gainNode = this.audioContext.createGain()
    //     this.osc = this.audioContext.createOscillator()
    //     this.osc.type = 'sine'
    //     this.osc.connect(this.gainNode)
    //     this.gainNode.connect(this.audioContext.destination)
    //     this.osc.frequency.value = this._frequency
    //     this.volume = this.volume
    //     this.position = new Vector3(_frequency / Theremin.instance.X.sF, this.volume * Theremin.instance.Y.sF, 0)
    // }
    destroy() {
        // this.gainNode.gain.setValueAtTime(this.gainNode.gain.value, this.audioContext.currentTime)
        // this.gainNode.gain.exponentialRampToValueAtTime(.0000001, length + .03)
        window.setTimeout(() => {
            this.osc.disconnect();
            this.osc = null;
        }, 40);
        this.wave = null;
        this._volume = null;
        this.color = null;
        this.position = null;
        this.type = null;
        this.id = null;
        this.isPlaying = null;
        this.muted = null;
    }
    play(length) {
        this.isPlaying = true;
        this.osc.stop(tone__WEBPACK_IMPORTED_MODULE_2__["context"].currentTime);
        this.osc.start(tone__WEBPACK_IMPORTED_MODULE_2__["context"].currentTime);
        // let convolver = reverb()
        // this.osc.connect(convolver)
        // this.gainNode.gain.setValueAtTime(this.gainNode.gain.value, this.audioContext.currentTime)
        // this.gainNode.gain.exponentialRampToValueAtTime(.0001, length + .03)
        // this.osc.stop(Tone.context.currentTime + length + .03)
        if (length != undefined)
            this.osc.stop(tone__WEBPACK_IMPORTED_MODULE_2__["context"].currentTime + length);
    }
    stop() {
        this.isPlaying = false;
        if (!this.osc)
            return;
        // this.gainNode.gain.setValueAtTime(this.gainNode.gain.value, this.audioContext.currentTime)
        // this.gainNode.gain.exponentialRampToValueAtTime(.0001, this.audioContext.currentTime + .03)
        this.osc.stop(tone__WEBPACK_IMPORTED_MODULE_2__["context"].currentTime + .03);
    }
    mute() {
        this.muted = true;
    }
    addReverb() {
    }
    unmute() {
        this.muted = false;
        this.gain.gain.setValueAtTime(this._volume, tone__WEBPACK_IMPORTED_MODULE_2__["context"].currentTime);
    }
    serializeOut() {
        return {
            id: this.id,
            color: this.color.getHex(),
            frequency: this.frequency,
            volume: this.volume,
            wave: this.wave,
        };
    }
    serializeIn(obj) {
        console.log('obj', obj);
        this.id = obj['id'];
        this.color.setHex(obj['color']);
        this.frequency = obj['frequency'];
        this.volume = obj['volume'];
        // this.wave = obj['wave']
    }
}


/***/ }),

/***/ "./src/app/theremin/note3D.ts":
/*!************************************!*\
  !*** ./src/app/theremin/note3D.ts ***!
  \************************************/
/*! exports provided: Note3D */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Note3D", function() { return Note3D; });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var _tools_labels_distance_label__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tools/labels/distance-label */ "./src/app/tools/labels/distance-label.ts");
/* harmony import */ var _tools_labels_memory_label__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tools/labels/memory-label */ "./src/app/tools/labels/memory-label.ts");
/* harmony import */ var _tools_labels_axes_label__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tools/labels/axes-label */ "./src/app/tools/labels/axes-label.ts");
/* harmony import */ var _tools_tools__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tools/tools */ "./src/app/tools/tools.ts");
/* harmony import */ var tone__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tone */ "./node_modules/tone/build/esm/index.js");






class Note3D {
    constructor(note) {
        this.ctrl = note;
        this.obj = new three__WEBPACK_IMPORTED_MODULE_0__["Mesh"](new three__WEBPACK_IMPORTED_MODULE_0__["SphereBufferGeometry"](2, 20, 20), new three__WEBPACK_IMPORTED_MODULE_0__["MeshStandardMaterial"]({
            color: this.ctrl.color,
        }));
        this.obj.name = 'osc.3D';
        this.obj.userData.id = note.id;
        this.position = new three__WEBPACK_IMPORTED_MODULE_0__["Vector3"]();
        this.distanceLabel = new _tools_labels_distance_label__WEBPACK_IMPORTED_MODULE_1__["DistanceLabel"](this);
        this.memoryLabel = new _tools_labels_memory_label__WEBPACK_IMPORTED_MODULE_2__["MemoryLabel"](this);
        this.axesLabel = new _tools_labels_axes_label__WEBPACK_IMPORTED_MODULE_3__["AxesLabel"](this);
        this.distanceLabel.enabled = false;
        this.memoryLabel.enabled = false;
        this.axesLabel.enabled = true;
        // LoadingManager.loadGLTF('/assets/models/shape.glb', (gltf)=> {
        //     const uniform = {
        //         uColor : {
        //             value: new Color(1, 1, 0)
        //         },
        //         time: {
        //             type: 'f',
        //             value: Tone.context.currentTime
        //         }
        //     }
        //     this.obj.geometry = gltf.children[0].geometry
        //     this.obj.material = new ShaderMaterial({
        //         // wireframe: true,
        //         uniforms: uniform,
        //         vertexShader: VertexShader.distortion,
        //         fragmentShader: FragmentShader.meshbasicmaterial
        //     })
        // })
        this.move(this.ctrl.position);
    }
    get position() { return this.obj.position; }
    set position(val) {
        if (val == null)
            return;
        this.obj.position.copy(val);
    }
    update() {
        this.move(this.ctrl.position);
        this.distanceLabel.update();
        this.memoryLabel.update();
        this.axesLabel.update();
        if (this.obj && this.obj.material['uniforms'])
            this.obj.material['uniforms'].time.value = tone__WEBPACK_IMPORTED_MODULE_5__["context"].currentTime;
    }
    move(moveTo) {
        this.position = moveTo;
    }
    select() {
        if (this.axesLabel.enabled)
            this.axesLabel.reset();
    }
    unselect() {
    }
    play(length) {
        console.log('length', length * 1000);
        this.obj.scale.set(2, 2, 2);
        window.setTimeout(() => {
            this.obj.scale.set(1, 1, 1);
        }, length * 1000);
    }
    mouseUp() {
    }
    mute() {
        this.ctrl.mute();
    }
    unmute() {
        this.ctrl.unmute();
    }
    destroy() {
        if (this.distanceLabel) {
            this.distanceLabel.enabled = false;
            this.distanceLabel = null;
        }
        if (this.memoryLabel) {
            this.memoryLabel.enabled = false;
            this.memoryLabel = null;
        }
        if (this.axesLabel) {
            this.axesLabel.enabled = false;
            this.axesLabel = null;
        }
        _tools_tools__WEBPACK_IMPORTED_MODULE_4__["Tools"].dispose(this.obj);
    }
}


/***/ }),

/***/ "./src/app/theremin/theremin.component.ts":
/*!************************************************!*\
  !*** ./src/app/theremin/theremin.component.ts ***!
  \************************************************/
/*! exports provided: ThereminView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThereminView", function() { return ThereminView; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _theremin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./theremin */ "./src/app/theremin/theremin.ts");



class ThereminView {
    constructor(hostRef) {
        this.hostRef = hostRef;
        this.host = this.hostRef.nativeElement;
    }
    get behaviours() { return _theremin__WEBPACK_IMPORTED_MODULE_1__["Theremin"].axesBehaviours; }
    getBehaviourByAxis(axis) {
        for (let b of _theremin__WEBPACK_IMPORTED_MODULE_1__["Theremin"].axesBehaviours) {
            if (b.axis == axis)
                return b;
        }
    }
    ngAfterViewInit() {
    }
    reset() {
        this.theremin3D.reset();
        this.theremin.reset();
    }
    addOsc(frequency, cb) {
        let note = this.theremin.addNote(frequency == undefined ? 100 : frequency);
        let note3D = this.theremin3D.addNote3D(note);
        if (cb)
            cb(note3D);
    }
    toggleAxesLabel() {
        this.theremin3D.notes3D.forEach(note => {
            note.axesLabel.enabled = !note.axesLabel.enabled;
            note.axesLabel.update();
        });
    }
    toggleMemoryLabel() {
        this.theremin3D.notes3D.forEach(note => {
            note.memoryLabel.enabled = !note.memoryLabel.enabled;
            note.memoryLabel.update();
        });
    }
    toggleDistanceLabel() {
        this.theremin3D.notes3D.forEach(note => {
            note.distanceLabel.enabled = !note.distanceLabel.enabled;
            note.distanceLabel.update();
        });
    }
}
ThereminView.ɵfac = function ThereminView_Factory(t) { return new (t || ThereminView)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
ThereminView.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ThereminView, selectors: [["theremin"]], inputs: { theremin: "theremin", theremin3D: "theremin3D" }, decls: 10, vars: 0, consts: [[1, "btn", 3, "click"], [1, "btn", "b", "gap-r", 3, "click"]], template: function ThereminView_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ThereminView_Template_div_click_0_listener() { return ctx.reset(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "New");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ThereminView_Template_div_click_2_listener() { return ctx.addOsc(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Plus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ThereminView_Template_div_click_4_listener() { return ctx.toggleMemoryLabel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Memory Label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ThereminView_Template_div_click_6_listener() { return ctx.toggleDistanceLabel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Distance Label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ThereminView_Template_div_click_8_listener() { return ctx.toggleAxesLabel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Axes Label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [""] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ThereminView, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'theremin',
                template: `

        <div class="btn" (click)="reset()">New</div>

        <div class="btn" (click)="addOsc()">Plus</div>

        <!--<label for="x">X</label>
        <select name="x">
            <option *ngFor="let b of behaviours; let i = index" value="i">{{ b.name }}</option>
        </select>
        
        <label for="y">Y</label>
        <select name="y">
            <option *ngFor="let b of behaviours; let i = index" value="i">{{ b.name }}</option>
        </select>
        
        <label for="z">Z</label>
        <select name="z">
            <option *ngFor="let b of behaviours; let i = index" value="i">{{ b.name }}</option>
        </select>-->
        
        <div class="btn b gap-r" (click)="toggleMemoryLabel()">Memory Label</div>
        <div class="btn b gap-r" (click)="toggleDistanceLabel()">Distance Label</div>
        <div class="btn b gap-r" (click)="toggleAxesLabel()">Axes Label</div>

    `,
                styles: [
                    `
        `
                ]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { theremin: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['theremin']
        }], theremin3D: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['theremin3D']
        }] }); })();


/***/ }),

/***/ "./src/app/theremin/theremin.ts":
/*!**************************************!*\
  !*** ./src/app/theremin/theremin.ts ***!
  \**************************************/
/*! exports provided: Theremin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Theremin", function() { return Theremin; });
/* harmony import */ var _note__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./note */ "./src/app/theremin/note.ts");
/* harmony import */ var _axes_behaviours_frequency_shfit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../axes-behaviours/frequency-shfit */ "./src/app/axes-behaviours/frequency-shfit.ts");
/* harmony import */ var _axes_behaviours_volume_shift__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../axes-behaviours/volume-shift */ "./src/app/axes-behaviours/volume-shift.ts");
/* harmony import */ var _axes_behaviours_octivator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../axes-behaviours/octivator */ "./src/app/axes-behaviours/octivator.ts");
/* harmony import */ var _axis__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./axis */ "./src/app/theremin/axis.ts");
/* harmony import */ var tone__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tone */ "./node_modules/tone/build/esm/index.js");






class Theremin {
    constructor() {
        this.muted = false;
        this.notes = [];
        this.isPlaying = true;
        Theremin.instance = this;
        this.volume = .7;
        Theremin.masterVolume = new tone__WEBPACK_IMPORTED_MODULE_5__["Gain"](this.volume).toDestination();
        this.storedVolume = Theremin.masterVolume.gain.value;
        Theremin.masterVolume.gain.value = this.volume;
        Theremin.x = new _axes_behaviours_frequency_shfit__WEBPACK_IMPORTED_MODULE_1__["FrequencyShift"]();
        Theremin.y = new _axes_behaviours_volume_shift__WEBPACK_IMPORTED_MODULE_2__["VolumeShift"]();
        Theremin.z = new _axes_behaviours_octivator__WEBPACK_IMPORTED_MODULE_3__["Octivator"]();
    }
    static get x() { return Theremin._x; }
    static set x(behaviour) {
        Theremin._x = behaviour;
        Theremin._x.axis = _axis__WEBPACK_IMPORTED_MODULE_4__["Axis"].x;
    }
    static get y() { return Theremin._y; }
    static set y(behaviour) {
        Theremin._y = behaviour;
        Theremin._y.axis = _axis__WEBPACK_IMPORTED_MODULE_4__["Axis"].y;
    }
    static get z() { return Theremin._z; }
    static set z(behaviour) {
        Theremin._z = behaviour;
        Theremin._z.axis = _axis__WEBPACK_IMPORTED_MODULE_4__["Axis"].z;
    }
    update() {
        for (let note of this.notes) {
            Theremin.computePosition(note);
        }
    }
    setAxisbehaviour(axis, behaviour) {
    }
    reset() {
        let notes = [];
        this.notes.forEach(note => { notes.push(note); });
        notes.forEach(note => this.deleteNote(note));
        this.notes = [];
        Theremin.masterVolume.gain.setValueAtTime(.8, tone__WEBPACK_IMPORTED_MODULE_5__["context"].currentTime);
        Theremin.x = new _axes_behaviours_frequency_shfit__WEBPACK_IMPORTED_MODULE_1__["FrequencyShift"]();
        Theremin.y = new _axes_behaviours_volume_shift__WEBPACK_IMPORTED_MODULE_2__["VolumeShift"]();
        Theremin.z = new _axes_behaviours_octivator__WEBPACK_IMPORTED_MODULE_3__["Octivator"]();
    }
    addNote(frequency) {
        let sn = new _note__WEBPACK_IMPORTED_MODULE_0__["Note"]();
        this.notes.push(sn);
        sn.play();
        return sn;
    }
    deleteNote(note) {
        if (!note)
            return false;
        let i = this.notes.indexOf(note);
        if (i != -1) {
            note.destroy();
            this.notes.splice(i, 1);
            return true;
        }
        return false;
    }
    groupNotesToChord(_ses) {
        // let chord = new Chord(_ses)
        // this.notes.push(chord)
        // chord.notes.forEach(se => {
        //     se.parent = chord
        //     // if(se.parent) {
        //     // }
        // })
        // return chord
    }
    ungroupNotes(_ses) {
        return null;
    }
    // public removeNoteFromChord(chord: Chord, note: Note) {
    //     let i = chord.notes.indexOf(note)
    //     if(i >= 0) chord.notes.splice(i, 1)
    //     this.notes.push(note)
    // }
    // public splitChord(chord: Chord) {
    //     chord.notes.forEach(note => {
    //         this.notes.push(note)
    //     })
    // }
    static computePosition(note) {
        if (Theremin.x)
            Theremin.x.compute1DPosition(note);
        if (Theremin.y)
            Theremin.y.compute1DPosition(note);
        if (Theremin.z)
            Theremin.z.compute1DPosition(note);
    }
    static computeFromPosition(note, position) {
        if (Theremin.x)
            Theremin.x.processAlongDimension(note, position);
        if (Theremin.y)
            Theremin.y.processAlongDimension(note, position);
        if (Theremin.z)
            Theremin.z.processAlongDimension(note, position);
    }
    mute() {
        this.muted = true;
        Theremin.masterVolume.gain.setValueAtTime(0, tone__WEBPACK_IMPORTED_MODULE_5__["context"].currentTime);
    }
    toggleOnOff(play) {
        if (play == undefined)
            play = !this.isPlaying;
        this.isPlaying = play;
        Theremin.masterVolume.gain.setValueAtTime(play ? this.storedVolume : 0, tone__WEBPACK_IMPORTED_MODULE_5__["context"].currentTime);
    }
    serializeOut() {
        let _notes = [];
        this.notes.forEach(note => {
            _notes.push(note.serializeOut());
        });
        return {
            notes: _notes,
            masterVolume: Theremin.masterVolume.gain.value,
            x: Theremin.x.name,
            y: Theremin.y.name,
            z: Theremin.z.name,
        };
    }
    serializeIn(obj) {
        if (obj['notes'] && obj['notes'].length > 0) {
            for (let note of obj['notes']) {
                let n = this.addNote();
                n.serializeIn(note);
                Theremin.computePosition(n);
            }
        }
        if (obj['masterVolume'])
            Theremin.masterVolume.gain.setValueAtTime(obj['masterVolume'], tone__WEBPACK_IMPORTED_MODULE_5__["context"].currentTime);
        if (obj['x']) {
        }
        if (obj['y']) {
        }
        if (obj['z']) {
        }
    }
}
Theremin.axesBehaviours = [];


/***/ }),

/***/ "./src/app/theremin/theremin3D.ts":
/*!****************************************!*\
  !*** ./src/app/theremin/theremin3D.ts ***!
  \****************************************/
/*! exports provided: Theremin3D */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Theremin3D", function() { return Theremin3D; });
/* harmony import */ var _theremin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./theremin */ "./src/app/theremin/theremin.ts");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var _note3D__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./note3D */ "./src/app/theremin/note3D.ts");
/* harmony import */ var _scene_manager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../scene-manager */ "./src/app/scene-manager.ts");




class Theremin3D {
    constructor(ctrl) {
        this.notes3D = [];
        this.objs = [];
        Theremin3D.instance = this;
        this.theremin = ctrl;
        this.obj = new three__WEBPACK_IMPORTED_MODULE_1__["Object3D"]();
        this.obj.name = 'theremin.3D';
        this.theremin.notes.forEach(note3D => {
            this.addNote3D(note3D);
        });
    }
    update() {
        for (let note3D of this.notes3D) {
            note3D.update();
        }
    }
    static moveNote(note3D, position) {
        _theremin__WEBPACK_IMPORTED_MODULE_0__["Theremin"].computeFromPosition(note3D.ctrl, position);
        note3D.update();
    }
    getNoteByObj(obj) {
        for (let i = 0; i < this.notes3D.length; i++) {
            if (this.notes3D[i].obj === obj) {
                return this.notes3D[i];
            }
        }
        return null;
    }
    getNoteByID(id) {
        for (let i = 0; i < this.notes3D.length; i++) {
            if (this.notes3D[i].ctrl.id === id) {
                return this.notes3D[i];
            }
        }
        return null;
    }
    addNote3D(note) {
        let note3D = new _note3D__WEBPACK_IMPORTED_MODULE_2__["Note3D"](note);
        this.notes3D.push(note3D);
        this.objs.push(note3D.obj);
        _scene_manager__WEBPACK_IMPORTED_MODULE_3__["SceneManager"].scene.add(note3D.obj);
        return note3D;
    }
    removeNote3D(note3D) {
        if (!note3D)
            return false;
        let i = this.notes3D.indexOf(note3D);
        if (i != -1) {
            this.notes3D.splice(i, 1);
            _scene_manager__WEBPACK_IMPORTED_MODULE_3__["SceneManager"].scene.remove(note3D.obj);
            note3D.destroy();
            return true;
        }
        return false;
    }
    // public groupNotesToChord(chord: Chord, _ses: Note3D[]) : Chord3D {
    //     let chord3D = new Chord3D(chord, _ses)
    //     this.notes3D.push(chord3D)
    //     this.objs.push(chord3D.obj)
    //     return chord3D
    // }
    // public ungroupNotes(_ses: Note3D[], chord: Chord3D) {
    //     _ses.forEach(se => {
    //         if(se instanceof Note3D) {
    //             let note = (se as Note3D)
    //             if((note.ctrl as Note).parent) {
    //                 chord.removeNote(note)
    //             }
    //         }
    //     })
    // }
    reset() {
        let note3Ds = [];
        this.notes3D.forEach(note3D => { note3Ds.push(note3D); });
        note3Ds.forEach(note3D => {
            this.removeNote3D(note3D);
        });
    }
}


/***/ }),

/***/ "./src/app/tools/drag-window.ts":
/*!**************************************!*\
  !*** ./src/app/tools/drag-window.ts ***!
  \**************************************/
/*! exports provided: DragWindow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragWindow", function() { return DragWindow; });
class DragWindow {
    constructor(_dragbarClassName, _dragElementClassName) {
        this.mouseDown = false;
        this.top = 0;
        this.left = 0;
        this.dragbarClassName = _dragbarClassName || 'drag-bar';
        this.dragElementClassName = _dragElementClassName || 'drag-window';
    }
    onMouseDown(e) {
        this.mouseDown = true;
        if (e.target.classList.contains(this.dragbarClassName)) {
            this.window = e.target.closest('.' + this.dragElementClassName);
            let rect = this.window.getBoundingClientRect();
            this.left = rect.left;
            this.top = rect.top;
            this.xOffset = e.pageX - this.left;
            this.yOffset = e.pageY - this.top;
        }
        else
            this.window = null;
    }
    onMouseMove(e) {
        // IF WINDOW IS TOO BIG TO BE DRAGED 
        // SHRINK DOWN AND CALC RECT OFFSET TO SET LEFT AND TOP
        if (this.mouseDown && this.window) {
            let window = this.window.closest('.' + this.dragElementClassName);
            this.left = e.pageX - this.xOffset;
            this.top = e.pageY - this.yOffset;
            window.style.position = 'absolute';
            window.style.left = this.left + 'px';
            window.style.top = this.top + 'px';
            window.style.width = '300px';
            window.style.height = 'auto';
            window.style.overflow = 'hidden';
        }
    }
    onMouseUp(e) {
        this.mouseDown = false;
        this.window = null;
        this.top = 0;
        this.left = 0;
    }
}


/***/ }),

/***/ "./src/app/tools/labels/axes-label.ts":
/*!********************************************!*\
  !*** ./src/app/tools/labels/axes-label.ts ***!
  \********************************************/
/*! exports provided: AxesLine, AxesLabel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AxesLine", function() { return AxesLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AxesLabel", function() { return AxesLabel; });
/* harmony import */ var _scene_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../scene-manager */ "./src/app/scene-manager.ts");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");


class AxesLine {
    constructor(color, name) {
        this.name = name;
        this.color = color;
        this.p1 = new three__WEBPACK_IMPORTED_MODULE_1__["Vector3"]();
        this.p2 = new three__WEBPACK_IMPORTED_MODULE_1__["Vector3"]();
        this.lineGeo = new three__WEBPACK_IMPORTED_MODULE_1__["BufferGeometry"]();
        this.obj = new three__WEBPACK_IMPORTED_MODULE_1__["Line"](this.lineGeo, new three__WEBPACK_IMPORTED_MODULE_1__["LineBasicMaterial"]({ color: new three__WEBPACK_IMPORTED_MODULE_1__["Color"](this.color) }));
    }
    update() {
        this.lineGeo.setFromPoints([this.p1, this.p2]);
    }
}
class AxesLabel {
    constructor(_note) {
        this._enabled = false;
        this.note = _note;
        this.start = new three__WEBPACK_IMPORTED_MODULE_1__["Vector3"]();
        this.end = new three__WEBPACK_IMPORTED_MODULE_1__["Vector3"]();
        this.createLabel();
    }
    get enabled() { return this._enabled; }
    set enabled(val) {
        this._enabled = val;
        this.obj.visible = val;
        this.update();
    }
    reset() {
        this.end.copy(this.note.ctrl.position);
        this.update();
    }
    update() {
        if (!this._enabled)
            return;
        this.end.copy(this.note.ctrl.position);
        this.x.p1.setX(this.start.x);
        this.x.p1.setY(this.end.y);
        this.x.p1.setZ(this.start.z);
        this.x.p2.setX(this.end.x);
        this.x.p2.setY(this.end.y);
        this.x.p2.setZ(this.start.z);
        this.x.update();
        this.y.p1.copy(this.start);
        this.y.p2.setX(this.start.x);
        this.y.p2.setY(this.end.y);
        this.y.p2.setZ(this.start.z);
        this.y.update();
        this.z.p1.setX(this.end.x);
        this.z.p1.setY(this.end.y);
        this.z.p1.setZ(this.start.z);
        this.z.p2.setX(this.end.x);
        this.z.p2.setY(this.end.y);
        this.z.p2.setZ(this.end.z);
        this.z.update();
    }
    createLabel() {
        this.obj = new three__WEBPACK_IMPORTED_MODULE_1__["Object3D"]();
        this.obj.name = 'distancelabel.obj';
        this.obj.visible = this._enabled;
        this.x = new AxesLine(this.note.ctrl.color.getHex(), 'x');
        this.obj.add(this.x.obj);
        this.y = new AxesLine(this.note.ctrl.color.getHex(), 'y');
        this.obj.add(this.y.obj);
        this.z = new AxesLine(this.note.ctrl.color.getHex(), 'z');
        this.obj.add(this.z.obj);
        _scene_manager__WEBPACK_IMPORTED_MODULE_0__["SceneManager"].scene.add(this.obj);
    }
}


/***/ }),

/***/ "./src/app/tools/labels/distance-label.ts":
/*!************************************************!*\
  !*** ./src/app/tools/labels/distance-label.ts ***!
  \************************************************/
/*! exports provided: DistanceLabel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DistanceLabel", function() { return DistanceLabel; });
/* harmony import */ var _scene_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../scene-manager */ "./src/app/scene-manager.ts");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var src_app_color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/color */ "./src/app/color.ts");



class DistanceLabel {
    constructor(_note) {
        this.labels = [];
        this._enabled = false;
        this.sides = ['top', 'bottom', 'left', 'right', 'front', 'back'];
        this.pairs = [
            ['top', 'bottom'],
            ['left', 'right'],
            ['front', 'back'],
        ];
        this.note = _note;
        this.raycaster = new three__WEBPACK_IMPORTED_MODULE_1__["Raycaster"]();
        this.raycaster.near = .001;
        this.raycaster.far = 1000;
        this.createLabel();
    }
    get enabled() { return this._enabled; }
    set enabled(val) {
        this._enabled = val;
        this.obj.visible = val;
    }
    update() {
        if (!this._enabled)
            return;
        this.labels.forEach(label => {
            label.update();
        });
    }
    showHideLabel(side, show) {
        this.labels.forEach(label => {
            if (label.side == side) {
                if (show)
                    label.show();
                else
                    label.hide();
            }
        });
    }
    createLabel() {
        this.obj = new three__WEBPACK_IMPORTED_MODULE_1__["Object3D"]();
        this.obj.name = 'distancelabel.obj';
        this.obj.visible = this._enabled;
        let label;
        this.sides.forEach(side => {
            label = new DistanceLine(side, this.note.ctrl.position);
            this.labels.push(label);
            this.obj.add(label.obj);
        });
        _scene_manager__WEBPACK_IMPORTED_MODULE_0__["SceneManager"].scene.add(this.obj);
    }
    getLabelBySide(side) {
        for (let i = 0; i < this.labels.length; i++) {
            if (this.labels[i].side == side)
                return this.labels[i];
        }
    }
    getOppositeLabel(label) {
        let oLabel;
        let index;
        this.pairs.forEach(pair => {
            index = pair.indexOf(label.side);
            if (index != -1)
                oLabel = pair[index];
        });
        return this.getLabelBySide(oLabel);
    }
}
class DistanceLine {
    constructor(_side, _start, _end) {
        this.points = [];
        this.side = _side;
        this.start = _start;
        this.end = _end;
        if (_end == undefined)
            this.end = new three__WEBPACK_IMPORTED_MODULE_1__["Vector3"]();
        this.raycaster = new three__WEBPACK_IMPORTED_MODULE_1__["Raycaster"]();
        this.raycaster.near = .001;
        this.raycaster.far = 1000;
        this.direction = new three__WEBPACK_IMPORTED_MODULE_1__["Vector3"]();
        this.create();
    }
    create() {
        this.enabled = true;
        this.obj = new three__WEBPACK_IMPORTED_MODULE_1__["Object3D"]();
        this.obj.name = 'label.obj';
        this.lineGeo = new three__WEBPACK_IMPORTED_MODULE_1__["BufferGeometry"]();
        this.line = new three__WEBPACK_IMPORTED_MODULE_1__["Line"](this.lineGeo, new three__WEBPACK_IMPORTED_MODULE_1__["LineBasicMaterial"]({
            color: src_app_color__WEBPACK_IMPORTED_MODULE_2__["Color"].X,
            transparent: true,
            opacity: .4
        }));
        this.line.name = 'line.mesh';
        this.obj.add(this.line);
        this.computeDirection();
    }
    raycastObjs(callback) {
        this.raycaster.set(this.start, this.direction);
        this.intersects = this.raycaster.intersectObjects(_scene_manager__WEBPACK_IMPORTED_MODULE_0__["SceneManager"].environmentObjs, true);
        if (this.intersects.length > 0) {
            this.distance = this.intersects[0].distance;
            this.end.copy(this.intersects[0].point);
            callback();
        }
        else
            this.intersects = null;
    }
    computeDirection() {
        switch (this.side) {
            case 'back':
                return this.direction.set(0, 0, -1);
                break;
            case 'right':
                return this.direction.set(1, 0, 0);
                break;
            case 'front':
                return this.direction.set(0, 0, 1);
                break;
            case 'left':
                return this.direction.set(-1, 0, 0);
                break;
            case 'top':
                return this.direction.set(0, 1, 0);
                break;
            case 'bottom':
                return this.direction.set(0, -1, 0);
                break;
        }
        return null;
    }
    hide() {
        this.enabled = false;
    }
    show() {
        this.enabled = true;
    }
    update() {
        this.raycastObjs(() => {
            this.updateLine([this.start, this.end]);
        });
    }
    updateLine(points) {
        this.points = points;
        this.lineGeo.setFromPoints(this.points);
    }
}


/***/ }),

/***/ "./src/app/tools/labels/memory-label.ts":
/*!**********************************************!*\
  !*** ./src/app/tools/labels/memory-label.ts ***!
  \**********************************************/
/*! exports provided: MemoryLabel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemoryLabel", function() { return MemoryLabel; });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var _scene_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../scene-manager */ "./src/app/scene-manager.ts");
/* harmony import */ var src_app_color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/color */ "./src/app/color.ts");



class MemoryLabel {
    constructor(note) {
        this._enabled = false;
        this.note = note;
        this.storedStart = new three__WEBPACK_IMPORTED_MODULE_0__["Vector3"]();
        this.start = new three__WEBPACK_IMPORTED_MODULE_0__["Vector3"]();
        this.end = new three__WEBPACK_IMPORTED_MODULE_0__["Vector3"]();
        this.createLabel();
    }
    get enabled() { return this._enabled; }
    set enabled(val) {
        this._enabled = val;
        this.obj.visible = val;
        if (val) {
            this.start.copy(this.note.ctrl.position);
            this.storedStart.copy(this.note.ctrl.position);
        }
        this.update();
    }
    update() {
        if (!this._enabled)
            return;
        this.sphere.position.copy(this.storedStart);
        this.end.copy(this.note.ctrl.position);
        this.lineGeo.setFromPoints([this.storedStart, this.end]);
    }
    showHideLabel(side, show) {
    }
    createLabel() {
        this.obj = new three__WEBPACK_IMPORTED_MODULE_0__["Object3D"]();
        this.obj.name = 'memorylabel.obj';
        this.obj.visible = this._enabled;
        this.lineGeo = new three__WEBPACK_IMPORTED_MODULE_0__["BufferGeometry"]();
        this.line = new three__WEBPACK_IMPORTED_MODULE_0__["Line"](this.lineGeo, new three__WEBPACK_IMPORTED_MODULE_0__["LineBasicMaterial"]({ color: src_app_color__WEBPACK_IMPORTED_MODULE_2__["Color"].X, transparent: true, opacity: .2 }));
        this.line.name = 'line.obj';
        this.obj.add(this.line);
        this.sphere = new three__WEBPACK_IMPORTED_MODULE_0__["Mesh"](new three__WEBPACK_IMPORTED_MODULE_0__["SphereBufferGeometry"](.1), new three__WEBPACK_IMPORTED_MODULE_0__["MeshBasicMaterial"]({ color: src_app_color__WEBPACK_IMPORTED_MODULE_2__["Color"].X, transparent: true, opacity: .2 }));
        this.sphere.name = 'sphere.obj';
        this.sphere.position.copy(this.start);
        this.obj.add(this.sphere);
        _scene_manager__WEBPACK_IMPORTED_MODULE_1__["SceneManager"].scene.add(this.obj);
    }
}


/***/ }),

/***/ "./src/app/tools/tools.ts":
/*!********************************!*\
  !*** ./src/app/tools/tools.ts ***!
  \********************************/
/*! exports provided: Tools */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tools", function() { return Tools; });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");

class Tools {
    static getUniqueID() {
        Tools.uid += 1;
        return Tools.uid;
    }
    static spliceElementFromArray(element, array) {
        let i = array.indexOf(element);
        if (i >= 0) {
            return array.splice(i, 1);
        }
        else
            return null;
    }
    static dispose(obj) {
        obj.traverse(object => {
            if (object instanceof three__WEBPACK_IMPORTED_MODULE_0__["Object3D"] || object instanceof three__WEBPACK_IMPORTED_MODULE_0__["Mesh"] || object instanceof three__WEBPACK_IMPORTED_MODULE_0__["Group"] || object instanceof three__WEBPACK_IMPORTED_MODULE_0__["Scene"])
                return;
            if (object.geometry)
                object.geometry.dispose();
            if (object.material) {
                if (object.material.length) {
                    for (const material of object.material)
                        cleanMaterial(material);
                }
                else
                    cleanMaterial(object.material);
            }
            else {
                for (const material of object.material)
                    cleanMaterial(material);
            }
        });
        const cleanMaterial = material => {
            material.dispose();
            // dispose textures
            for (const key of Object.keys(material)) {
                const value = material[key];
                if (value && typeof value === 'object' && 'minFilter' in value) {
                    console.log('dispose texture!');
                    value.dispose();
                }
            }
        };
    }
}
Tools.uid = 0;


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

module.exports = __webpack_require__(/*! D:\Data\web-development\Theremin3D\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map