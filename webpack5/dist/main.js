/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/_@babel_runtime-corejs3@7.14.7@@babel/runtime-corejs3/core-js/object/define-property.js":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime-corejs3@7.14.7@@babel/runtime-corejs3/core-js/object/define-property.js ***!
  \**************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__(/*! core-js-pure/features/object/define-property */ \"./node_modules/_core-js-pure@3.15.1@core-js-pure/features/object/define-property.js\");\n\n//# sourceURL=webpack://webpack5/./node_modules/_@babel_runtime-corejs3@7.14.7@@babel/runtime-corejs3/core-js/object/define-property.js?");

/***/ }),

/***/ "./node_modules/_@babel_runtime-corejs3@7.14.7@@babel/runtime-corejs3/helpers/esm/classCallCheck.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime-corejs3@7.14.7@@babel/runtime-corejs3/helpers/esm/classCallCheck.js ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _classCallCheck)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\n//# sourceURL=webpack://webpack5/./node_modules/_@babel_runtime-corejs3@7.14.7@@babel/runtime-corejs3/helpers/esm/classCallCheck.js?");

/***/ }),

/***/ "./node_modules/_@babel_runtime-corejs3@7.14.7@@babel/runtime-corejs3/helpers/esm/createClass.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/_@babel_runtime-corejs3@7.14.7@@babel/runtime-corejs3/helpers/esm/createClass.js ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _createClass)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_corejs3_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js/object/define-property */ \"./node_modules/_@babel_runtime-corejs3@7.14.7@@babel/runtime-corejs3/core-js/object/define-property.js\");\n\n\nfunction _defineProperties(target, props) {\n  for (var i = 0; i < props.length; i++) {\n    var descriptor = props[i];\n    descriptor.enumerable = descriptor.enumerable || false;\n    descriptor.configurable = true;\n    if (\"value\" in descriptor) descriptor.writable = true;\n\n    _babel_runtime_corejs3_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__(target, descriptor.key, descriptor);\n  }\n}\n\nfunction _createClass(Constructor, protoProps, staticProps) {\n  if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n  if (staticProps) _defineProperties(Constructor, staticProps);\n  return Constructor;\n}\n\n//# sourceURL=webpack://webpack5/./node_modules/_@babel_runtime-corejs3@7.14.7@@babel/runtime-corejs3/helpers/esm/createClass.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/classCallCheck */ \"./node_modules/_@babel_runtime-corejs3@7.14.7@@babel/runtime-corejs3/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/createClass */ \"./node_modules/_@babel_runtime-corejs3@7.14.7@@babel/runtime-corejs3/helpers/esm/createClass.js\");\n\n\n\nvar Animal = /*#__PURE__*/function () {\n  function Animal(name) {\n    (0,_babel_runtime_corejs3_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, Animal);\n\n    this.name = name;\n  }\n\n  (0,_babel_runtime_corejs3_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(Animal, [{\n    key: \"getName\",\n    value: function getName() {\n      return this.name;\n    }\n  }]);\n\n  return Animal;\n}();\n\nvar dog = new Animal('dog');\n\n//# sourceURL=webpack://webpack5/./src/index.js?");

/***/ }),

/***/ "./node_modules/_core-js-pure@3.15.1@core-js-pure/es/object/define-property.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/_core-js-pure@3.15.1@core-js-pure/es/object/define-property.js ***!
  \*************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("__webpack_require__(/*! ../../modules/es.object.define-property */ \"./node_modules/_core-js-pure@3.15.1@core-js-pure/modules/es.object.define-property.js\");\nvar path = __webpack_require__(/*! ../../internals/path */ \"./node_modules/_core-js-pure@3.15.1@core-js-pure/internals/path.js\");\n\nvar Object = path.Object;\n\nvar defineProperty = module.exports = function defineProperty(it, key, desc) {\n  return Object.defineProperty(it, key, desc);\n};\n\nif (Object.defineProperty.sham) defineProperty.sham = true;\n\n\n//# sourceURL=webpack://webpack5/./node_modules/_core-js-pure@3.15.1@core-js-pure/es/object/define-property.js?");

/***/ }),

/***/ "./node_modules/_core-js-pure@3.15.1@core-js-pure/features/object/define-property.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/_core-js-pure@3.15.1@core-js-pure/features/object/define-property.js ***!
  \*******************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var parent = __webpack_require__(/*! ../../es/object/define-property */ \"./node_modules/_core-js-pure@3.15.1@core-js-pure/es/object/define-property.js\");\n\nmodule.exports = parent;\n\n\n//# sourceURL=webpack://webpack5/./node_modules/_core-js-pure@3.15.1@core-js-pure/features/object/define-property.js?");

/***/ }),

/***/ "./node_modules/_core-js-pure@3.15.1@core-js-pure/internals/a-function.js":
/*!********************************************************************************!*\
  !*** ./node_modules/_core-js-pure@3.15.1@core-js-pure/internals/a-function.js ***!
  \********************************************************************************/
/***/ ((module) => {

eval("module.exports = function (it) {\n  if (typeof it != 'function') {\n    throw TypeError(String(it) + ' is not a function');\n  } return it;\n};\n\n\n//# sourceURL=webpack://webpack5/./node_modules/_core-js-pure@3.15.1@core-js-pure/internals/a-function.js?");

/***/ }),

/***/ "./node_modules/_core-js-pure@3.15.1@core-js-pure/internals/an-object.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/_core-js-pure@3.15.1@core-js-pure/internals/an-object.js ***!
  \*******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/_core-js-pure@3.15.1@core-js-pure/internals/is-object.js\");\n\nmodule.exports = function (it) {\n  if (!isObject(it)) {\n    throw TypeError(String(it) + ' is not an object');\n  } return it;\n};\n\n\n//# sourceURL=webpack://webpack5/./node_modules/_core-js-pure@3.15.1@core-js-pure/internals/an-object.js?");

/***/ }),

/***/ "./node_modules/_core-js-pure@3.15.1@core-js-pure/internals/classof-raw.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/_core-js-pure@3.15.1@core-js-pure/internals/classof-raw.js ***!
  \*********************************************************************************/
/***/ ((module) => {

eval("var toString = {}.toString;\n\nmodule.exports = function (it) {\n  return toString.call(it).slice(8, -1);\n};\n\n\n//# sourceURL=webpack://webpack5/./node_modules/_core-js-pure@3.15.1@core-js-pure/internals/classof-raw.js?");

/***/ }),

/***/ "./node_modules/_core-js-pure@3.15.1@core-js-pure/internals/create-non-enumerable-property.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/_core-js-pure@3.15.1@core-js-pure/internals/create-non-enumerable-property.js ***!
  \****************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/_core-js-pure@3.15.1@core-js-pure/internals/descriptors.js\");\nvar definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/_core-js-pure@3.15.1@core-js-pure/internals/object-define-property.js\");\nvar createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ \"./node_modules/_core-js-pure@3.15.1@core-js-pure/internals/create-property-descriptor.js\");\n\nmodule.exports = DESCRIPTORS ? function (object, key, value) {\n  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));\n} : function (object, key, value) {\n  object[key] = value;\n  return object;\n};\n\n\n//# sourceURL=webpack://webpack5/./node_modules/_core-js-pure@3.15.1@core-js-pure/internals/create-non-enumerable-property.js?");

/***/ }),

/***/ "./node_modules/_core-js-pure@3.15.1@core-js-pure/internals/create-property-descriptor.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/_core-js-pure@3.15.1@core-js-pure/internals/create-property-descriptor.js ***!
  \************************************************************************************************/
/***/ ((module) => {

eval("module.exports = function (bitmap, value) {\n  return {\n    enumerable: !(bitmap & 1),\n    configurable: !(bitmap & 2),\n    writable: !(bitmap & 4),\n    value: value\n  };\n};\n\n\n//# sourceURL=webpack://webpack5/./node_modules/_core-js-pure@3.15.1@core-js-pure/internals/create-property-descriptor.js?");

/***/ }),

/***/ "./node_modules/_core-js-pure@3.15.1@core-js-pure/internals/descriptors.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/_core-js-pure@3.15.1@core-js-pure/internals/descriptors.js ***!
  \*********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/_core-js-pure@3.15.1@core-js-pure/internals/fails.js\");\n\n// Detect IE8's incomplete defineProperty implementation\nmodule.exports = !fails(function () {\n  // eslint-disable-next-line es/no-object-defineproperty -- required for testing\n  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;\n});\n\n\n//# sourceURL=webpack://webpack5/./node_modules/_core-js-pure@3.15.1@core-js-pure/internals/descriptors.js?");

/***/ }),

/***/ "./node_modules/_core-js-pure@3.15.1@core-js-pure/internals/document-create-element.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/_core-js-pure@3.15.1@core-js-pure/internals/document-create-element.js ***!
  \*********************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/_core-js-pure@3.15.1@core-js-pure/internals/global.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/_core-js-pure@3.15.1@core-js-pure/internals/is-object.js\");\n\nvar document = global.document;\n// typeof document.createElement is 'object' in old IE\nvar EXISTS = isObject(document) && isObject(document.createElement);\n\nmodule.exports = function (it) {\n  return EXISTS ? document.createElement(it) : {};\n};\n\n\n//# sourceURL=webpack://webpack5/./node_modules/_core-js-pure@3.15.1@core-js-pure/internals/document-create-element.js?");

/***/ }),

/***/ "./node_modules/_core-js-pure@3.15.1@core-js-pure/internals/export.js":
/*!****************************************************************************!*\
  !*** ./node_modules/_core-js-pure@3.15.1@core-js-pure/internals/export.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/_core-js-pure@3.15.1@core-js-pure/internals/global.js\");\nvar getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ \"./node_modules/_core-js-pure@3.15.1@core-js-pure/internals/object-get-own-property-descriptor.js\").f;\nvar isForced = __webpack_require__(/*! ../internals/is-forced */ \"./node_modules/_core-js-pure@3.15.1@core-js-pure/internals/is-forced.js\");\nvar path = __webpack_require__(/*! ../internals/path */ \"./node_modules/_core-js-pure@3.15.1@core-js-pure/internals/path.js\");\nvar bind = __webpack_require__(/*! ../internals/function-bind-context */ \"./node_modules/_core-js-pure@3.15.1@core-js-pure/internals/function-bind-context.js\");\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"./node_modules/_core-js-pure@3.15.1@core-js-pure/internals/create-non-enumerable-property.js\");\nvar has = __webpack_require__(/*! ../internals/has */ \"./node_modules/_core-js-pure@3.15.1@core-js-pure/internals/has.js\");\n\nvar wrapConstructor = function (NativeConstructor) {\n  var Wrapper = function (a, b, c) {\n    if (this instanceof NativeConstructor) {\n      switch (arguments.length) {\n        case 0: return new NativeConstructor();\n        case 1: return new NativeConstructor(a);\n        case 2: return new NativeConstructor(a, b);\n      } return new NativeConstructor(a, b, c);\n    } return NativeConstructor.apply(this, arguments);\n  };\n  Wrapper.prototype = NativeConstructor.prototype;\n  return Wrapper;\n};\n\n/*\n  options.target      - name of the target object\n  options.global      - target is the global object\n  options.stat        - export as static methods of target\n  options.proto       - export as prototype methods of target\n  options.real        - real prototype method for the `pure` version\n  options.forced      - export even if the native feature is available\n  options.bind        - bind methods to the target, required for the `pure` version\n  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version\n  options.unsafe      - use the simple assignment of property instead of delete + defineProperty\n  options.sham        - add a flag to not completely full polyfills\n  options.enumerable  - export as enumerable property\n  options.noTargetGet - prevent calling a getter on target\n*/\nmodule.exports = function (options, source) {\n  var TARGET = options.target;\n  var GLOBAL = options.global;\n  var STATIC = options.stat;\n  var PROTO = options.proto;\n\n  var nativeSource = GLOBAL ? global : STATIC ? global[TARGET] : (global[TARGET] || {}).prototype;\n\n  var target = GLOBAL ? path : path[TARGET] || (path[TARGET] = {});\n  var targetPrototype = target.prototype;\n\n  var FORCED, USE_NATIVE, VIRTUAL_PROTOTYPE;\n  var key, sourceProperty, targetProperty, nativeProperty, resultProperty, descriptor;\n\n  for (key in source) {\n    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);\n    // contains in native\n    USE_NATIVE = !FORCED && nativeSource && has(nativeSource, key);\n\n    targetProperty = target[key];\n\n    if (USE_NATIVE) if (options.noTargetGet) {\n      descriptor = getOwnPropertyDescriptor(nativeSource, key);\n      nativeProperty = descriptor && descriptor.value;\n    } else nativeProperty = nativeSource[key];\n\n    // export native or implementation\n    sourceProperty = (USE_NATIVE && nativeProperty) ? nativeProperty : source[key];\n\n    if (USE_NATIVE && typeof targetProperty === typeof sourceProperty) continue;\n\n    // bind timers to global for call from export context\n    if (options.bind && USE_NATIVE) resultProperty = bind(sourceProperty, global);\n    // wrap global constructors for prevent changs in this version\n    else if (options.wrap && USE_NATIVE) resultProperty = wrapConstructor(sourceProperty);\n    // make static versions for prototype methods\n    else if (PROTO && typeof sourceProperty == 'function') resultProperty = bind(Function.call, sourceProperty);\n    // default case\n    else resultProperty = sourceProperty;\n\n    // add a flag to not completely full polyfills\n    if (options.sham || (sourceProperty && sourceProperty.sham) || (targetProperty && targetProperty.sham)) {\n      createNonEnumerableProperty(resultProperty, 'sham', true);\n    }\n\n    target[key] = resultProperty;\n\n    if (PROTO) {\n      VIRTUAL_PROTOTYPE = TARGET + 'Prototype';\n      if (!has(path, VIRTUAL_PROTOTYPE)) {\n        createNonEnumerableProperty(path, VIRTUAL_PROTOTYPE, {});\n      }\n      // export virtual prototype methods\n      path[VIRTUAL_PROTOTYPE][key] = sourceProperty;\n      // export real prototype methods\n      if (options.real && targetPrototype && !targetPrototype[key]) {\n        createNonEnumerableProperty(targetPrototype, key, sourceProperty);\n      }\n    }\n  }\n};\n\n\n//# sourceURL=webpack://webpack5/./node_modules/_core-js-pure@3.15.1@core-js-pure/internals/export.js?");

/***/ }),

/***/ "./node_modules/_core-js-pure@3.15.1@core-js-pure/internals/fails.js":
/*!***************************************************************************!*\
  !*** ./node_modules/_core-js-pure@3.15.1@core-js-pure/internals/fails.js ***!
  \***************************************************************************/
/***/ ((module) => {

eval("module.exports = function (exec) {\n  try {\n    return !!exec();\n  } catch (error) {\n    return true;\n  }\n};\n\n\n//# sourceURL=webpack://webpack5/./node_modules/_core-js-pure@3.15.1@core-js-pure/internals/fails.js?");

/***/ }),

/***/ "./node_modules/_core-js-pure@3.15.1@core-js-pure/internals/function-bind-context.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/_core-js-pure@3.15.1@core-js-pure/internals/function-bind-context.js ***!
  \*******************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var aFunction = __webpack_require__(/*! ../internals/a-function */ \"./node_modules/_core-js-pure@3.15.1@core-js-pure/internals/a-function.js\");\n\n// optional / simple context binding\nmodule.exports = function (fn, that, length) {\n  aFunction(fn);\n  if (that === undefined) return fn;\n  switch (length) {\n    case 0: return function () {\n      return fn.call(that);\n    };\n    case 1: return function (a) {\n      return fn.call(that, a);\n    };\n    case 2: return function (a, b) {\n      return fn.call(that, a, b);\n    };\n    case 3: return function (a, b, c) {\n      return fn.call(that, a, b, c);\n    };\n  }\n  return function (/* ...args */) {\n    return fn.apply(that, arguments);\n  };\n};\n\n\n//# sourceURL=webpack://webpack5/./node_modules/_core-js-pure@3.15.1@core-js-pure/internals/function-bind-context.js?");

/***/ }),

/***/ "./node_modules/_core-js-pure@3.15.1@core-js-pure/internals/global.js":
/*!****************************************************************************!*\
  !*** ./node_modules/_core-js-pure@3.15.1@core-js-pure/internals/global.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var check = function (it) {\n  return it && it.Math == Math && it;\n};\n\n// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028\nmodule.exports =\n  // eslint-disable-next-line es/no-global-this -- safe\n  check(typeof globalThis == 'object' && globalThis) ||\n  check(typeof window == 'object' && window) ||\n  // eslint-disable-next-line no-restricted-globals -- safe\n  check(typeof self == 'object' && self) ||\n  check(typeof __webpack_require__.g == 'object' && __webpack_require__.g) ||\n  // eslint-disable-next-line no-new-func -- fallback\n  (function () { return this; })() || Function('return this')();\n\n\n//# sourceURL=webpack://webpack5/./node_modules/_core-js-pure@3.15.1@core-js-pure/internals/global.js?");

/***/ }),

/***/ "./node_modules/_core-js-pure@3.15.1@core-js-pure/internals/has.js":
/*!*************************************************************************!*\
  !*** ./node_modules/_core-js-pure@3.15.1@core-js-pure/internals/has.js ***!
  \*************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var toObject = __webpack_require__(/*! ../internals/to-object */ \"./node_modules/_core-js-pure@3.15.1@core-js-pure/internals/to-object.js\");\n\nvar hasOwnProperty = {}.hasOwnProperty;\n\nmodule.exports = Object.hasOwn || function hasOwn(it, key) {\n  return hasOwnProperty.call(toObject(it), key);\n};\n\n\n//# sourceURL=webpack://webpack5/./node_modules/_core-js-pure@3.15.1@core-js-pure/internals/has.js?");

/***/ }),

/***/ "./node_modules/_core-js-pure@3.15.1@core-js-pure/internals/ie8-dom-define.js":
/*!************************************************************************************!*\
  !*** ./node_modules/_core-js-pure@3.15.1@core-js-pure/internals/ie8-dom-define.js ***!
  \************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/_core-js-pure@3.15.1@core-js-pure/internals/descriptors.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/_core-js-pure@3.15.1@core-js-pure/internals/fails.js\");\nvar createElement = __webpack_require__(/*! ../internals/document-create-element */ \"./node_modules/_core-js-pure@3.15.1@core-js-pure/internals/document-create-element.js\");\n\n// Thank's IE8 for his funny defineProperty\nmodule.exports = !DESCRIPTORS && !fails(function () {\n  // eslint-disable-next-line es/no-object-defineproperty -- requied for testing\n  return Object.defineProperty(createElement('div'), 'a', {\n    get: function () { return 7; }\n  }).a != 7;\n});\n\n\n//# sourceURL=webpack://webpack5/./node_modules/_core-js-pure@3.15.1@core-js-pure/internals/ie8-dom-define.js?");

/***/ }),

/***/ "./node_modules/_core-js-pure@3.15.1@core-js-pure/internals/indexed-object.js":
/*!************************************************************************************!*\
  !*** ./node_modules/_core-js-pure@3.15.1@core-js-pure/internals/indexed-object.js ***!
  \************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/_core-js-pure@3.15.1@core-js-pure/internals/fails.js\");\nvar classof = __webpack_require__(/*! ../internals/classof-raw */ \"./node_modules/_core-js-pure@3.15.1@core-js-pure/internals/classof-raw.js\");\n\nvar split = ''.split;\n\n// fallback for non-array-like ES3 and non-enumerable old V8 strings\nmodule.exports = fails(function () {\n  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346\n  // eslint-disable-next-line no-prototype-builtins -- safe\n  return !Object('z').propertyIsEnumerable(0);\n}) ? function (it) {\n  return classof(it) == 'String' ? split.call(it, '') : Object(it);\n} : Object;\n\n\n//# sourceURL=webpack://webpack5/./node_modules/_core-js-pure@3.15.1@core-js-pure/internals/indexed-object.js?");

/***/ }),

/***/ "./node_modules/_core-js-pure@3.15.1@core-js-pure/internals/is-forced.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/_core-js-pure@3.15.1@core-js-pure/internals/is-forced.js ***!
  \*******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/_core-js-pure@3.15.1@core-js-pure/internals/fails.js\");\n\nvar replacement = /#|\\.prototype\\./;\n\nvar isForced = function (feature, detection) {\n  var value = data[normalize(feature)];\n  return value == POLYFILL ? true\n    : value == NATIVE ? false\n    : typeof detection == 'function' ? fails(detection)\n    : !!detection;\n};\n\nvar normalize = isForced.normalize = function (string) {\n  return String(string).replace(replacement, '.').toLowerCase();\n};\n\nvar data = isForced.data = {};\nvar NATIVE = isForced.NATIVE = 'N';\nvar POLYFILL = isForced.POLYFILL = 'P';\n\nmodule.exports = isForced;\n\n\n//# sourceURL=webpack://webpack5/./node_modules/_core-js-pure@3.15.1@core-js-pure/internals/is-forced.js?");

/***/ }),

/***/ "./node_modules/_core-js-pure@3.15.1@core-js-pure/internals/is-object.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/_core-js-pure@3.15.1@core-js-pure/internals/is-object.js ***!
  \*******************************************************************************/
/***/ ((module) => {

eval("module.exports = function (it) {\n  return typeof it === 'object' ? it !== null : typeof it === 'function';\n};\n\n\n//# sourceURL=webpack://webpack5/./node_modules/_core-js-pure@3.15.1@core-js-pure/internals/is-object.js?");

/***/ }),

/***/ "./node_modules/_core-js-pure@3.15.1@core-js-pure/internals/object-define-property.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/_core-js-pure@3.15.1@core-js-pure/internals/object-define-property.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/_core-js-pure@3.15.1@core-js-pure/internals/descriptors.js\");\nvar IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ \"./node_modules/_core-js-pure@3.15.1@core-js-pure/internals/ie8-dom-define.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/_core-js-pure@3.15.1@core-js-pure/internals/an-object.js\");\nvar toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ \"./node_modules/_core-js-pure@3.15.1@core-js-pure/internals/to-primitive.js\");\n\n// eslint-disable-next-line es/no-object-defineproperty -- safe\nvar $defineProperty = Object.defineProperty;\n\n// `Object.defineProperty` method\n// https://tc39.es/ecma262/#sec-object.defineproperty\nexports.f = DESCRIPTORS ? $defineProperty : function defineProperty(O, P, Attributes) {\n  anObject(O);\n  P = toPrimitive(P, true);\n  anObject(Attributes);\n  if (IE8_DOM_DEFINE) try {\n    return $defineProperty(O, P, Attributes);\n  } catch (error) { /* empty */ }\n  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');\n  if ('value' in Attributes) O[P] = Attributes.value;\n  return O;\n};\n\n\n//# sourceURL=webpack://webpack5/./node_modules/_core-js-pure@3.15.1@core-js-pure/internals/object-define-property.js?");

/***/ }),

/***/ "./node_modules/_core-js-pure@3.15.1@core-js-pure/internals/object-get-own-property-descriptor.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/_core-js-pure@3.15.1@core-js-pure/internals/object-get-own-property-descriptor.js ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/_core-js-pure@3.15.1@core-js-pure/internals/descriptors.js\");\nvar propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ \"./node_modules/_core-js-pure@3.15.1@core-js-pure/internals/object-property-is-enumerable.js\");\nvar createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ \"./node_modules/_core-js-pure@3.15.1@core-js-pure/internals/create-property-descriptor.js\");\nvar toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"./node_modules/_core-js-pure@3.15.1@core-js-pure/internals/to-indexed-object.js\");\nvar toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ \"./node_modules/_core-js-pure@3.15.1@core-js-pure/internals/to-primitive.js\");\nvar has = __webpack_require__(/*! ../internals/has */ \"./node_modules/_core-js-pure@3.15.1@core-js-pure/internals/has.js\");\nvar IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ \"./node_modules/_core-js-pure@3.15.1@core-js-pure/internals/ie8-dom-define.js\");\n\n// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe\nvar $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;\n\n// `Object.getOwnPropertyDescriptor` method\n// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor\nexports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {\n  O = toIndexedObject(O);\n  P = toPrimitive(P, true);\n  if (IE8_DOM_DEFINE) try {\n    return $getOwnPropertyDescriptor(O, P);\n  } catch (error) { /* empty */ }\n  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);\n};\n\n\n//# sourceURL=webpack://webpack5/./node_modules/_core-js-pure@3.15.1@core-js-pure/internals/object-get-own-property-descriptor.js?");

/***/ }),

/***/ "./node_modules/_core-js-pure@3.15.1@core-js-pure/internals/object-property-is-enumerable.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/_core-js-pure@3.15.1@core-js-pure/internals/object-property-is-enumerable.js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\nvar $propertyIsEnumerable = {}.propertyIsEnumerable;\n// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe\nvar getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;\n\n// Nashorn ~ JDK8 bug\nvar NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);\n\n// `Object.prototype.propertyIsEnumerable` method implementation\n// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable\nexports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {\n  var descriptor = getOwnPropertyDescriptor(this, V);\n  return !!descriptor && descriptor.enumerable;\n} : $propertyIsEnumerable;\n\n\n//# sourceURL=webpack://webpack5/./node_modules/_core-js-pure@3.15.1@core-js-pure/internals/object-property-is-enumerable.js?");

/***/ }),

/***/ "./node_modules/_core-js-pure@3.15.1@core-js-pure/internals/path.js":
/*!**************************************************************************!*\
  !*** ./node_modules/_core-js-pure@3.15.1@core-js-pure/internals/path.js ***!
  \**************************************************************************/
/***/ ((module) => {

eval("module.exports = {};\n\n\n//# sourceURL=webpack://webpack5/./node_modules/_core-js-pure@3.15.1@core-js-pure/internals/path.js?");

/***/ }),

/***/ "./node_modules/_core-js-pure@3.15.1@core-js-pure/internals/require-object-coercible.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/_core-js-pure@3.15.1@core-js-pure/internals/require-object-coercible.js ***!
  \**********************************************************************************************/
/***/ ((module) => {

eval("// `RequireObjectCoercible` abstract operation\n// https://tc39.es/ecma262/#sec-requireobjectcoercible\nmodule.exports = function (it) {\n  if (it == undefined) throw TypeError(\"Can't call method on \" + it);\n  return it;\n};\n\n\n//# sourceURL=webpack://webpack5/./node_modules/_core-js-pure@3.15.1@core-js-pure/internals/require-object-coercible.js?");

/***/ }),

/***/ "./node_modules/_core-js-pure@3.15.1@core-js-pure/internals/to-indexed-object.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/_core-js-pure@3.15.1@core-js-pure/internals/to-indexed-object.js ***!
  \***************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// toObject with fallback for non-array-like ES3 strings\nvar IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ \"./node_modules/_core-js-pure@3.15.1@core-js-pure/internals/indexed-object.js\");\nvar requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ \"./node_modules/_core-js-pure@3.15.1@core-js-pure/internals/require-object-coercible.js\");\n\nmodule.exports = function (it) {\n  return IndexedObject(requireObjectCoercible(it));\n};\n\n\n//# sourceURL=webpack://webpack5/./node_modules/_core-js-pure@3.15.1@core-js-pure/internals/to-indexed-object.js?");

/***/ }),

/***/ "./node_modules/_core-js-pure@3.15.1@core-js-pure/internals/to-object.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/_core-js-pure@3.15.1@core-js-pure/internals/to-object.js ***!
  \*******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ \"./node_modules/_core-js-pure@3.15.1@core-js-pure/internals/require-object-coercible.js\");\n\n// `ToObject` abstract operation\n// https://tc39.es/ecma262/#sec-toobject\nmodule.exports = function (argument) {\n  return Object(requireObjectCoercible(argument));\n};\n\n\n//# sourceURL=webpack://webpack5/./node_modules/_core-js-pure@3.15.1@core-js-pure/internals/to-object.js?");

/***/ }),

/***/ "./node_modules/_core-js-pure@3.15.1@core-js-pure/internals/to-primitive.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/_core-js-pure@3.15.1@core-js-pure/internals/to-primitive.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/_core-js-pure@3.15.1@core-js-pure/internals/is-object.js\");\n\n// `ToPrimitive` abstract operation\n// https://tc39.es/ecma262/#sec-toprimitive\n// instead of the ES6 spec version, we didn't implement @@toPrimitive case\n// and the second argument - flag - preferred type is a string\nmodule.exports = function (input, PREFERRED_STRING) {\n  if (!isObject(input)) return input;\n  var fn, val;\n  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;\n  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;\n  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;\n  throw TypeError(\"Can't convert object to primitive value\");\n};\n\n\n//# sourceURL=webpack://webpack5/./node_modules/_core-js-pure@3.15.1@core-js-pure/internals/to-primitive.js?");

/***/ }),

/***/ "./node_modules/_core-js-pure@3.15.1@core-js-pure/modules/es.object.define-property.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/_core-js-pure@3.15.1@core-js-pure/modules/es.object.define-property.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/_core-js-pure@3.15.1@core-js-pure/internals/export.js\");\nvar DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/_core-js-pure@3.15.1@core-js-pure/internals/descriptors.js\");\nvar objectDefinePropertyModile = __webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/_core-js-pure@3.15.1@core-js-pure/internals/object-define-property.js\");\n\n// `Object.defineProperty` method\n// https://tc39.es/ecma262/#sec-object.defineproperty\n$({ target: 'Object', stat: true, forced: !DESCRIPTORS, sham: !DESCRIPTORS }, {\n  defineProperty: objectDefinePropertyModile.f\n});\n\n\n//# sourceURL=webpack://webpack5/./node_modules/_core-js-pure@3.15.1@core-js-pure/modules/es.object.define-property.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;