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
exports.id = "pages/signup";
exports.ids = ["pages/signup"];
exports.modules = {

/***/ "./pages/signup/index.jsx":
/*!********************************!*\
  !*** ./pages/signup/index.jsx ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_2__]);\naxios__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nconst SignUpForm = ()=>{\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [passwordVerify, setPasswordVerify] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleSubmit = async (event)=>{\n        event.preventDefault();\n        if (password !== passwordVerify) {\n            alert(\"Passwords do not match\");\n            return;\n        }\n        const res = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post(\"http://localhost:3000/login\", {\n            email,\n            password\n        }, {\n            \"Content-Type\": \"application/json\",\n            Accept: \"application/json\"\n        });\n        console.log(res);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: handleSubmit,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                htmlFor: \"email\",\n                children: \"Email\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\14805\\\\repos\\\\apt\\\\client\\\\pages\\\\signup\\\\index.jsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"email\",\n                id: \"email\",\n                value: email,\n                onChange: (e)=>setEmail(e.target.value)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\14805\\\\repos\\\\apt\\\\client\\\\pages\\\\signup\\\\index.jsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                htmlFor: \"password\",\n                children: \"Password\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\14805\\\\repos\\\\apt\\\\client\\\\pages\\\\signup\\\\index.jsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"password\",\n                id: \"password\",\n                value: password,\n                onChange: (e)=>setPassword(e.target.value)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\14805\\\\repos\\\\apt\\\\client\\\\pages\\\\signup\\\\index.jsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                htmlFor: \"passwordVerify\",\n                children: \"Verify Password\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\14805\\\\repos\\\\apt\\\\client\\\\pages\\\\signup\\\\index.jsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"password\",\n                id: \"passwordVerify\",\n                value: passwordVerify,\n                onChange: (e)=>setPasswordVerify(e.target.value)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\14805\\\\repos\\\\apt\\\\client\\\\pages\\\\signup\\\\index.jsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                children: \"Sign Up\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\14805\\\\repos\\\\apt\\\\client\\\\pages\\\\signup\\\\index.jsx\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\14805\\\\repos\\\\apt\\\\client\\\\pages\\\\signup\\\\index.jsx\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignUpForm);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zaWdudXAvaW5kZXguanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBaUM7QUFDUDtBQUUxQixNQUFNRSxhQUFhLElBQU07SUFDdkIsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdKLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ0ssVUFBVUMsWUFBWSxHQUFHTiwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNLENBQUNPLGdCQUFnQkMsa0JBQWtCLEdBQUdSLCtDQUFRQSxDQUFDO0lBRXJELE1BQU1TLGVBQWUsT0FBT0MsUUFBVTtRQUNwQ0EsTUFBTUMsY0FBYztRQUNwQixJQUFJTixhQUFhRSxnQkFBZ0I7WUFDL0JLLE1BQU07WUFDTjtRQUNGLENBQUM7UUFDRCxNQUFNQyxNQUFNLE1BQU1aLGtEQUFVLENBQzFCLCtCQUNBO1lBQ0VFO1lBQ0FFO1FBQ0YsR0FDQTtZQUNFLGdCQUFnQjtZQUNoQlUsUUFBUTtRQUNWO1FBR0ZDLFFBQVFDLEdBQUcsQ0FBQ0o7SUFDZDtJQUVBLHFCQUNFLDhEQUFDSztRQUFLQyxVQUFVVjs7MEJBQ2QsOERBQUNXO2dCQUFNQyxTQUFROzBCQUFROzs7Ozs7MEJBQ3ZCLDhEQUFDQztnQkFDQ0MsTUFBSztnQkFDTEMsSUFBRztnQkFDSEMsT0FBT3RCO2dCQUNQdUIsVUFBVSxDQUFDQyxJQUFNdkIsU0FBU3VCLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSzs7Ozs7OzBCQUUxQyw4REFBQ0w7Z0JBQU1DLFNBQVE7MEJBQVc7Ozs7OzswQkFDMUIsOERBQUNDO2dCQUNDQyxNQUFLO2dCQUNMQyxJQUFHO2dCQUNIQyxPQUFPcEI7Z0JBQ1BxQixVQUFVLENBQUNDLElBQU1yQixZQUFZcUIsRUFBRUMsTUFBTSxDQUFDSCxLQUFLOzs7Ozs7MEJBRTdDLDhEQUFDTDtnQkFBTUMsU0FBUTswQkFBaUI7Ozs7OzswQkFDaEMsOERBQUNDO2dCQUNDQyxNQUFLO2dCQUNMQyxJQUFHO2dCQUNIQyxPQUFPbEI7Z0JBQ1BtQixVQUFVLENBQUNDLElBQU1uQixrQkFBa0JtQixFQUFFQyxNQUFNLENBQUNILEtBQUs7Ozs7OzswQkFFbkQsOERBQUNJO2dCQUFPTixNQUFLOzBCQUFTOzs7Ozs7Ozs7Ozs7QUFHNUI7QUFFQSxpRUFBZXJCLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9wYWdlcy9zaWdudXAvaW5kZXguanN4PzQwYjMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuY29uc3QgU2lnblVwRm9ybSA9ICgpID0+IHtcclxuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3Bhc3N3b3JkVmVyaWZ5LCBzZXRQYXNzd29yZFZlcmlmeV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYgKHBhc3N3b3JkICE9PSBwYXNzd29yZFZlcmlmeSkge1xyXG4gICAgICBhbGVydChcIlBhc3N3b3JkcyBkbyBub3QgbWF0Y2hcIik7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLnBvc3QoXHJcbiAgICAgIFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2xvZ2luXCIsXHJcbiAgICAgIHtcclxuICAgICAgICBlbWFpbCxcclxuICAgICAgICBwYXNzd29yZCxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgIH1cclxuICAgICk7XHJcblxyXG4gICAgY29uc29sZS5sb2cocmVzKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIj5FbWFpbDwvbGFiZWw+XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgaWQ9XCJlbWFpbFwiXHJcbiAgICAgICAgdmFsdWU9e2VtYWlsfVxyXG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAvPlxyXG4gICAgICA8bGFiZWwgaHRtbEZvcj1cInBhc3N3b3JkXCI+UGFzc3dvcmQ8L2xhYmVsPlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgIGlkPVwicGFzc3dvcmRcIlxyXG4gICAgICAgIHZhbHVlPXtwYXNzd29yZH1cclxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgLz5cclxuICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZFZlcmlmeVwiPlZlcmlmeSBQYXNzd29yZDwvbGFiZWw+XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgaWQ9XCJwYXNzd29yZFZlcmlmeVwiXHJcbiAgICAgICAgdmFsdWU9e3Bhc3N3b3JkVmVyaWZ5fVxyXG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UGFzc3dvcmRWZXJpZnkoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAvPlxyXG4gICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TaWduIFVwPC9idXR0b24+XHJcbiAgICA8L2Zvcm0+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZ25VcEZvcm07XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsImF4aW9zIiwiU2lnblVwRm9ybSIsImVtYWlsIiwic2V0RW1haWwiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwicGFzc3dvcmRWZXJpZnkiLCJzZXRQYXNzd29yZFZlcmlmeSIsImhhbmRsZVN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJhbGVydCIsInJlcyIsInBvc3QiLCJBY2NlcHQiLCJjb25zb2xlIiwibG9nIiwiZm9ybSIsIm9uU3VibWl0IiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJ0eXBlIiwiaWQiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/signup/index.jsx\n");

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

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/signup/index.jsx"));
module.exports = __webpack_exports__;

})();