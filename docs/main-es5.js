function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _circle_circle_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./circle/circle.model */
    "./src/app/circle/circle.model.ts");
    /* harmony import */


    var _rect_rect_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./rect/rect.model */
    "./src/app/rect/rect.model.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _shared_chain_comparer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./shared/chain-comparer */
    "./src/app/shared/chain-comparer.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _circle_circle_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./circle/circle.component */
    "./src/app/circle/circle.component.ts");
    /* harmony import */


    var _rect_rect_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./rect/rect.component */
    "./src/app/rect/rect.component.ts");

    function AppComponent__svg_g_2__svg_g_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "g", 5);
      }

      if (rf & 2) {
        var shape_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("model", shape_r1);
      }
    }

    function AppComponent__svg_g_2__svg_g_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "g", 6);
      }

      if (rf & 2) {
        var shape_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("model", shape_r1);
      }
    }

    function AppComponent__svg_g_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "g");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent__svg_g_2__svg_g_1_Template, 1, 1, "g", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent__svg_g_2__svg_g_2_Template, 1, 1, "g", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var shape_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", shape_r1.type === "circle");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", shape_r1.type === "rect");
      }
    }

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent() {
        var _this = this;

        _classCallCheck(this, AppComponent);

        this.shapes = [new _circle_circle_model__WEBPACK_IMPORTED_MODULE_1__["Circle"]({
          x: 50,
          y: 50
        }), new _circle_circle_model__WEBPACK_IMPORTED_MODULE_1__["Circle"]({
          x: 100,
          y: 150
        }), new _circle_circle_model__WEBPACK_IMPORTED_MODULE_1__["Circle"]({
          x: 150,
          y: 50
        }), new _circle_circle_model__WEBPACK_IMPORTED_MODULE_1__["Circle"]({
          x: 200,
          y: 200
        }), new _rect_rect_model__WEBPACK_IMPORTED_MODULE_2__["Rect"]({
          x: 250,
          y: 50
        }), new _rect_rect_model__WEBPACK_IMPORTED_MODULE_2__["Rect"]({
          x: 300,
          y: 160
        }), new _rect_rect_model__WEBPACK_IMPORTED_MODULE_2__["Rect"]({
          x: 360,
          y: 50
        }), new _rect_rect_model__WEBPACK_IMPORTED_MODULE_2__["Rect"]({
          x: 450,
          y: 200
        })];
        this.shapes.forEach(function (s) {
          s.isHovered.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])()).subscribe(function () {
            return _this.updateOrder();
          });
          s.isDragged.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])()).subscribe(function () {
            return _this.updateOrder();
          });
        });
      }

      _createClass(AppComponent, [{
        key: "updateOrder",
        value: function updateOrder() {
          if (this.shapes.find(function (s) {
            return s.isDragged.value;
          })) return;
          this.shapes = this.shapes.sort(function (a, b) {
            return new _shared_chain_comparer__WEBPACK_IMPORTED_MODULE_4__["ChainComparer"](a, b).compareBy(function (shape) {
              return shape.isHovered.value;
            }).compareBy(function (shape) {
              return shape.x.value;
            }).compareBy(function (shape) {
              return shape.y.value;
            }).evaluate();
          });
        }
      }, {
        key: "onmove",
        value: function onmove(e) {
          var _a;

          (_a = this.shapes.find(function (s) {
            return s.isDragged.value;
          })) === null || _a === void 0 ? void 0 : _a.mouseMove.next({
            x: e.x,
            y: e.y
          });
        }
      }, {
        key: "onup",
        value: function onup(e) {
          var _a;

          (_a = this.shapes.find(function (s) {
            return s.isDragged.value;
          })) === null || _a === void 0 ? void 0 : _a.isDragged.next(false);
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      hostBindings: function AppComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousemove", function AppComponent_mousemove_HostBindingHandler($event) {
            return ctx.onmove($event);
          })("mouseleave", function AppComponent_mouseleave_HostBindingHandler($event) {
            return ctx.onup($event);
          })("mouseup", function AppComponent_mouseup_HostBindingHandler($event) {
            return ctx.onup($event);
          });
        }
      },
      decls: 3,
      vars: 1,
      consts: [[1, "root"], [2, "width", "100%", "height", "100%"], [4, "ngFor", "ngForOf"], ["app-circle", "", 3, "model", 4, "ngIf"], ["app-rect", "", 3, "model", 4, "ngIf"], ["app-circle", "", 3, "model"], ["app-rect", "", 3, "model"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent__svg_g_2_Template, 3, 2, "g", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.shapes);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _circle_circle_component__WEBPACK_IMPORTED_MODULE_6__["CircleComponent"], _rect_rect_component__WEBPACK_IMPORTED_MODULE_7__["RectComponent"]],
      styles: ["div.root[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxXQUFXO0lBQ1gsWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2LnJvb3Qge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], function () {
        return [];
      }, {
        onmove: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['mousemove', ['$event']]
        }],
        onup: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['mouseleave', ['$event']]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['mouseup', ['$event']]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _circle_circle_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./circle/circle.component */
    "./src/app/circle/circle.component.ts");
    /* harmony import */


    var _rect_rect_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./rect/rect.component */
    "./src/app/rect/rect.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _circle_circle_component__WEBPACK_IMPORTED_MODULE_4__["CircleComponent"], _rect_rect_component__WEBPACK_IMPORTED_MODULE_5__["RectComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _circle_circle_component__WEBPACK_IMPORTED_MODULE_4__["CircleComponent"], _rect_rect_component__WEBPACK_IMPORTED_MODULE_5__["RectComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/circle/circle.component.ts":
  /*!********************************************!*\
    !*** ./src/app/circle/circle.component.ts ***!
    \********************************************/

  /*! exports provided: CircleComponent */

  /***/
  function srcAppCircleCircleComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CircleComponent", function () {
      return CircleComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_shape_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../shared/shape.component */
    "./src/app/shared/shape.component.ts");

    var _c0 = ["app-circle", ""];

    var CircleComponent = /*#__PURE__*/function (_shared_shape_compone) {
      _inherits(CircleComponent, _shared_shape_compone);

      var _super = _createSuper(CircleComponent);

      function CircleComponent() {
        _classCallCheck(this, CircleComponent);

        return _super.apply(this, arguments);
      }

      return CircleComponent;
    }(_shared_shape_component__WEBPACK_IMPORTED_MODULE_1__["ShapeComponent"]);

    CircleComponent.ɵfac = function CircleComponent_Factory(t) {
      return ɵCircleComponent_BaseFactory(t || CircleComponent);
    };

    CircleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CircleComponent,
      selectors: [["", "app-circle", ""]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      attrs: _c0,
      decls: 6,
      vars: 26,
      consts: [["r", "25"], ["width", "100", "height", "100", 1, "overlay", 3, "mouseover", "mouseout", "mousedown", "mouseup"]],
      template: function CircleComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "circle", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "circle", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "circle", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "circle", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "rect", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function CircleComponent_Template__svg_rect_mouseover_5_listener() {
            return ctx.model.isHovered.next(true);
          })("mouseout", function CircleComponent_Template__svg_rect_mouseout_5_listener() {
            return ctx.model.isHovered.next(false);
          })("mousedown", function CircleComponent_Template__svg_rect_mousedown_5_listener() {
            return ctx.model.isDragged.next(true);
          })("mousedown", function CircleComponent_Template__svg_rect_mousedown_5_listener($event) {
            return ctx.lastMousePosition = {
              x: $event.x,
              y: $event.y
            };
          })("mouseup", function CircleComponent_Template__svg_rect_mouseup_5_listener() {
            return ctx.model.isDragged.next(false);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("hovered", ctx.model.isHovered.value)("pressed", ctx.model.isDragged.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("cx", ctx.model.x.value + 25)("cy", ctx.model.y.value + 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("hovered", ctx.model.isHovered.value)("pressed", ctx.model.isDragged.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("cx", ctx.model.x.value + 75)("cy", ctx.model.y.value + 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("hovered", ctx.model.isHovered.value)("pressed", ctx.model.isDragged.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("cx", ctx.model.x.value + 25)("cy", ctx.model.y.value + 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("hovered", ctx.model.isHovered.value)("pressed", ctx.model.isDragged.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("cx", ctx.model.x.value + 75)("cy", ctx.model.y.value + 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("x", ctx.model.x.value)("y", ctx.model.y.value);
        }
      },
      styles: ["circle[_ngcontent-%COMP%] {\n    fill: transparent;\n    stroke: gray;\n    stroke-width: 2px;\n}\ncircle.hovered[_ngcontent-%COMP%] {\n    fill: #ff8080;\n    fill-opacity: 0.7;\n    stroke: #ff8080;\n}\ncircle.pressed.hovered[_ngcontent-%COMP%] {\n    fill: #ff8080;\n    fill-opacity: 1;\n    stroke: red;\n    stroke-width: 4px;\n}\nrect.overlay[_ngcontent-%COMP%] {\n    fill: transparent;\n    stroke: transparent;\n    stroke-width: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2lyY2xlL2NpcmNsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZixXQUFXO0lBQ1gsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9jaXJjbGUvY2lyY2xlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJjaXJjbGUge1xuICAgIGZpbGw6IHRyYW5zcGFyZW50O1xuICAgIHN0cm9rZTogZ3JheTtcbiAgICBzdHJva2Utd2lkdGg6IDJweDtcbn1cbmNpcmNsZS5ob3ZlcmVkIHtcbiAgICBmaWxsOiAjZmY4MDgwO1xuICAgIGZpbGwtb3BhY2l0eTogMC43O1xuICAgIHN0cm9rZTogI2ZmODA4MDtcbn1cbmNpcmNsZS5wcmVzc2VkLmhvdmVyZWQge1xuICAgIGZpbGw6ICNmZjgwODA7XG4gICAgZmlsbC1vcGFjaXR5OiAxO1xuICAgIHN0cm9rZTogcmVkO1xuICAgIHN0cm9rZS13aWR0aDogNHB4O1xufVxucmVjdC5vdmVybGF5IHtcbiAgICBmaWxsOiB0cmFuc3BhcmVudDtcbiAgICBzdHJva2U6IHRyYW5zcGFyZW50O1xuICAgIHN0cm9rZS13aWR0aDogMDtcbn1cbiJdfQ== */"]
    });

    var ɵCircleComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](CircleComponent);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CircleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: '[app-circle]',
          templateUrl: './circle.component.svg',
          styleUrls: ['./circle.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/circle/circle.model.ts":
  /*!****************************************!*\
    !*** ./src/app/circle/circle.model.ts ***!
    \****************************************/

  /*! exports provided: Circle */

  /***/
  function srcAppCircleCircleModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Circle", function () {
      return Circle;
    });
    /* harmony import */


    var _shared_shape_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../shared/shape.model */
    "./src/app/shared/shape.model.ts");

    var Circle = /*#__PURE__*/function (_shared_shape_model__) {
      _inherits(Circle, _shared_shape_model__);

      var _super2 = _createSuper(Circle);

      function Circle(position) {
        var _this2;

        _classCallCheck(this, Circle);

        _this2 = _super2.call(this, position);
        _this2.type = "circle";
        return _this2;
      }

      return Circle;
    }(_shared_shape_model__WEBPACK_IMPORTED_MODULE_0__["Shape"]);
    /***/

  },

  /***/
  "./src/app/rect/rect.component.ts":
  /*!****************************************!*\
    !*** ./src/app/rect/rect.component.ts ***!
    \****************************************/

  /*! exports provided: RectComponent */

  /***/
  function srcAppRectRectComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RectComponent", function () {
      return RectComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_shape_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../shared/shape.component */
    "./src/app/shared/shape.component.ts");

    var _c0 = ["app-rect", ""];

    var RectComponent = /*#__PURE__*/function (_shared_shape_compone2) {
      _inherits(RectComponent, _shared_shape_compone2);

      var _super3 = _createSuper(RectComponent);

      function RectComponent() {
        _classCallCheck(this, RectComponent);

        return _super3.apply(this, arguments);
      }

      return RectComponent;
    }(_shared_shape_component__WEBPACK_IMPORTED_MODULE_1__["ShapeComponent"]);

    RectComponent.ɵfac = function RectComponent_Factory(t) {
      return ɵRectComponent_BaseFactory(t || RectComponent);
    };

    RectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RectComponent,
      selectors: [["", "app-rect", ""]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      attrs: _c0,
      decls: 6,
      vars: 26,
      consts: [["width", "45", "height", "45"], ["width", "100", "height", "100", 1, "overlay", 3, "mouseover", "mouseout", "mousedown", "mouseup"]],
      template: function RectComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "rect", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "rect", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "rect", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "rect", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "rect", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function RectComponent_Template__svg_rect_mouseover_5_listener() {
            return ctx.model.isHovered.next(true);
          })("mouseout", function RectComponent_Template__svg_rect_mouseout_5_listener() {
            return ctx.model.isHovered.next(false);
          })("mousedown", function RectComponent_Template__svg_rect_mousedown_5_listener() {
            return ctx.model.isDragged.next(true);
          })("mousedown", function RectComponent_Template__svg_rect_mousedown_5_listener($event) {
            return ctx.lastMousePosition = {
              x: $event.x,
              y: $event.y
            };
          })("mouseup", function RectComponent_Template__svg_rect_mouseup_5_listener() {
            return ctx.model.isDragged.next(false);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("hovered", ctx.model.isHovered.value)("pressed", ctx.model.isDragged.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("x", ctx.model.x.value)("y", ctx.model.y.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("hovered", ctx.model.isHovered.value)("pressed", ctx.model.isDragged.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("x", ctx.model.x.value + 55)("y", ctx.model.y.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("hovered", ctx.model.isHovered.value)("pressed", ctx.model.isDragged.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("x", ctx.model.x.value)("y", ctx.model.y.value + 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("hovered", ctx.model.isHovered.value)("pressed", ctx.model.isDragged.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("x", ctx.model.x.value + 55)("y", ctx.model.y.value + 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("x", ctx.model.x.value)("y", ctx.model.y.value);
        }
      },
      styles: ["rect[_ngcontent-%COMP%] {\n    fill: transparent;\n    stroke: gray;\n    stroke-width: 2px;\n}\nrect.hovered[_ngcontent-%COMP%] {\n    fill: #ff8080;\n    fill-opacity: 0.7;\n    stroke: #ff8080;\n}\nrect.overlay[_ngcontent-%COMP%] {\n    fill: transparent;\n    stroke: transparent;\n    stroke-width: 0;\n}\nrect.pressed.hovered[_ngcontent-%COMP%] {\n    fill: #ff8080;\n    fill-opacity: 1;\n    stroke: red;\n    stroke-width: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVjdC9yZWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsV0FBVztJQUNYLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL3JlY3QvcmVjdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsicmVjdCB7XG4gICAgZmlsbDogdHJhbnNwYXJlbnQ7XG4gICAgc3Ryb2tlOiBncmF5O1xuICAgIHN0cm9rZS13aWR0aDogMnB4O1xufVxucmVjdC5ob3ZlcmVkIHtcbiAgICBmaWxsOiAjZmY4MDgwO1xuICAgIGZpbGwtb3BhY2l0eTogMC43O1xuICAgIHN0cm9rZTogI2ZmODA4MDtcbn1cbnJlY3Qub3ZlcmxheSB7XG4gICAgZmlsbDogdHJhbnNwYXJlbnQ7XG4gICAgc3Ryb2tlOiB0cmFuc3BhcmVudDtcbiAgICBzdHJva2Utd2lkdGg6IDA7XG59XG5yZWN0LnByZXNzZWQuaG92ZXJlZCB7XG4gICAgZmlsbDogI2ZmODA4MDtcbiAgICBmaWxsLW9wYWNpdHk6IDE7XG4gICAgc3Ryb2tlOiByZWQ7XG4gICAgc3Ryb2tlLXdpZHRoOiA0cHg7XG59Il19 */"]
    });

    var ɵRectComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](RectComponent);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RectComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: '[app-rect]',
          templateUrl: './rect.component.svg',
          styleUrls: ['./rect.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/rect/rect.model.ts":
  /*!************************************!*\
    !*** ./src/app/rect/rect.model.ts ***!
    \************************************/

  /*! exports provided: Rect */

  /***/
  function srcAppRectRectModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Rect", function () {
      return Rect;
    });
    /* harmony import */


    var _shared_shape_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../shared/shape.model */
    "./src/app/shared/shape.model.ts");

    var Rect = /*#__PURE__*/function (_shared_shape_model__2) {
      _inherits(Rect, _shared_shape_model__2);

      var _super4 = _createSuper(Rect);

      function Rect(position) {
        var _this3;

        _classCallCheck(this, Rect);

        _this3 = _super4.call(this, position);
        _this3.type = "rect";
        return _this3;
      }

      return Rect;
    }(_shared_shape_model__WEBPACK_IMPORTED_MODULE_0__["Shape"]);
    /***/

  },

  /***/
  "./src/app/shared/chain-comparer.ts":
  /*!******************************************!*\
    !*** ./src/app/shared/chain-comparer.ts ***!
    \******************************************/

  /*! exports provided: ChainComparer */

  /***/
  function srcAppSharedChainComparerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChainComparer", function () {
      return ChainComparer;
    });

    var ChainComparer = /*#__PURE__*/function () {
      function ChainComparer(a, b) {
        _classCallCheck(this, ChainComparer);

        this.a = a;
        this.b = b;
      }

      _createClass(ChainComparer, [{
        key: "compareBy",
        value: function compareBy(getTarget) {
          var result = new ChainComparer(this.a, this.b);
          result.getTarget = getTarget;
          result.previous = this;
          return result;
        }
      }, {
        key: "evaluate",
        value: function evaluate() {
          var _a;

          var previous = (_a = this.previous) === null || _a === void 0 ? void 0 : _a.evaluate();
          if (!!previous) return previous;

          if (!!this.getTarget) {
            if (this.getTarget(this.a) < this.getTarget(this.b)) return -1;
            if (this.getTarget(this.a) > this.getTarget(this.b)) return 1;
          }

          return 0;
        }
      }]);

      return ChainComparer;
    }();
    /***/

  },

  /***/
  "./src/app/shared/shape.component.ts":
  /*!*******************************************!*\
    !*** ./src/app/shared/shape.component.ts ***!
    \*******************************************/

  /*! exports provided: ShapeComponent */

  /***/
  function srcAppSharedShapeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShapeComponent", function () {
      return ShapeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ShapeComponent = /*#__PURE__*/function () {
      function ShapeComponent() {
        _classCallCheck(this, ShapeComponent);

        this.lastMousePosition = {
          x: 0,
          y: 0
        };
      }

      _createClass(ShapeComponent, [{
        key: "ngOnChanges",
        value: function ngOnChanges() {
          var _this4 = this;

          var shouldInitialize = !this.subscription || !!this.model;

          if (shouldInitialize) {
            this.subscription = this.model.mouseMove.subscribe(function (mousePosition) {
              return _this4.onMove(mousePosition);
            });
          }
        }
      }, {
        key: "onMove",
        value: function onMove(mousePosition) {
          this.model.x.next(this.model.x.value + mousePosition.x - this.lastMousePosition.x);
          this.model.y.next(this.model.y.value + mousePosition.y - this.lastMousePosition.y);
          this.lastMousePosition = mousePosition;
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          var _a;

          (_a = this.subscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
        }
      }]);

      return ShapeComponent;
    }();

    ShapeComponent.ɵfac = function ShapeComponent_Factory(t) {
      return new (t || ShapeComponent)();
    };

    ShapeComponent.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: ShapeComponent,
      inputs: {
        model: "model"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
    });
    /***/
  },

  /***/
  "./src/app/shared/shape.model.ts":
  /*!***************************************!*\
    !*** ./src/app/shared/shape.model.ts ***!
    \***************************************/

  /*! exports provided: Shape */

  /***/
  function srcAppSharedShapeModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Shape", function () {
      return Shape;
    });
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var Shape = function Shape(position) {
      _classCallCheck(this, Shape);

      this.x = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](0);
      this.y = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](0);
      this.isHovered = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](false);
      this.isDragged = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](false);
      this.mouseMove = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]({
        x: 0,
        y: 0
      });
      this.x.next(position.x);
      this.y.next(position.y);
    };
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/runner/work/AngularSvgExample/AngularSvgExample/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map