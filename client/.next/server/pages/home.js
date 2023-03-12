"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/home";
exports.ids = ["pages/home"];
exports.modules = {

/***/ "./hoc/withAuth.jsx":
/*!**************************!*\
  !*** ./hoc/withAuth.jsx ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst withAuth = (WrappedComponent)=>{\n    const Wrapper = (props)=>{\n        const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n        (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n            const accessToken = localStorage.getItem(\"accessToken\");\n            if (!accessToken) {\n                router.push(\"/login\");\n            }\n        }, []);\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(WrappedComponent, {\n            ...props\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\14805\\\\repos\\\\apt\\\\client\\\\hoc\\\\withAuth.jsx\",\n            lineNumber: 15,\n            columnNumber: 12\n        }, undefined);\n    };\n    return Wrapper;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (withAuth);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ob2Mvd2l0aEF1dGguanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXdDO0FBQ047QUFFbEMsTUFBTUUsV0FBVyxDQUFDQyxtQkFBcUI7SUFDckMsTUFBTUMsVUFBVSxDQUFDQyxRQUFVO1FBQ3pCLE1BQU1DLFNBQVNOLHNEQUFTQTtRQUV4QkMsZ0RBQVNBLENBQUMsSUFBTTtZQUNkLE1BQU1NLGNBQWNDLGFBQWFDLE9BQU8sQ0FBQztZQUN6QyxJQUFJLENBQUNGLGFBQWE7Z0JBQ2hCRCxPQUFPSSxJQUFJLENBQUM7WUFDZCxDQUFDO1FBQ0gsR0FBRyxFQUFFO1FBRUwscUJBQU8sOERBQUNQO1lBQWtCLEdBQUdFLEtBQUs7Ozs7OztJQUNwQztJQUVBLE9BQU9EO0FBQ1Q7QUFFQSxpRUFBZUYsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL2hvYy93aXRoQXV0aC5qc3g/NmI1YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCB3aXRoQXV0aCA9IChXcmFwcGVkQ29tcG9uZW50KSA9PiB7XHJcbiAgY29uc3QgV3JhcHBlciA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgY29uc3QgYWNjZXNzVG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImFjY2Vzc1Rva2VuXCIpO1xyXG4gICAgICBpZiAoIWFjY2Vzc1Rva2VuKSB7XHJcbiAgICAgICAgcm91dGVyLnB1c2goXCIvbG9naW5cIik7XHJcbiAgICAgIH1cclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICByZXR1cm4gPFdyYXBwZWRDb21wb25lbnQgey4uLnByb3BzfSAvPjtcclxuICB9O1xyXG5cclxuICByZXR1cm4gV3JhcHBlcjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhBdXRoO1xyXG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwidXNlRWZmZWN0Iiwid2l0aEF1dGgiLCJXcmFwcGVkQ29tcG9uZW50IiwiV3JhcHBlciIsInByb3BzIiwicm91dGVyIiwiYWNjZXNzVG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicHVzaCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./hoc/withAuth.jsx\n");

/***/ }),

/***/ "./pages/home/index.jsx":
/*!******************************!*\
  !*** ./pages/home/index.jsx ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _hoc_withAuth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hoc/withAuth */ \"./hoc/withAuth.jsx\");\n\n\nfunction HomePage() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"HOME PAGE FROM HOME DIR\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\14805\\\\repos\\\\apt\\\\client\\\\pages\\\\home\\\\index.jsx\",\n        lineNumber: 4,\n        columnNumber: 10\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_hoc_withAuth__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(HomePage));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ob21lL2luZGV4LmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUEwQztBQUUxQyxTQUFTQyxXQUFXO0lBQ2xCLHFCQUFPLDhEQUFDQztrQkFBSTs7Ozs7O0FBQ2Q7QUFFQSxpRUFBZUYseURBQVFBLENBQUNDLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9wYWdlcy9ob21lL2luZGV4LmpzeD81NDI4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB3aXRoQXV0aCBmcm9tIFwiLi4vLi4vaG9jL3dpdGhBdXRoXCI7XHJcblxyXG5mdW5jdGlvbiBIb21lUGFnZSgpIHtcclxuICByZXR1cm4gPGRpdj5IT01FIFBBR0UgRlJPTSBIT01FIERJUjwvZGl2PjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aEF1dGgoSG9tZVBhZ2UpO1xyXG4iXSwibmFtZXMiOlsid2l0aEF1dGgiLCJIb21lUGFnZSIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/home/index.jsx\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/home/index.jsx"));
module.exports = __webpack_exports__;

})();