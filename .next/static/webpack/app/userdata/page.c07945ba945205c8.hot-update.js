"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/userdata/page",{

/***/ "(app-pages-browser)/./app/userdata/page.js":
/*!******************************!*\
  !*** ./app/userdata/page.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var _context_UserContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/UserContext */ \"(app-pages-browser)/./context/UserContext.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Logout = ()=>{\n    _s();\n    const [isLoggedOut, setIsLoggedOut] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { username } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_UserContext__WEBPACK_IMPORTED_MODULE_3__.AppContext);\n    const handleLogout = async ()=>{\n        await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].post(\"http://localhost:8080/user/userData\");\n        setIsLoggedOut(true);\n        router.push(\"/login\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: isLoggedOut ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: \"You have been logged out\"\n        }, void 0, false, {\n            fileName: \"E:\\\\Front end\\\\LoginProject_Frontend\\\\app\\\\userdata\\\\page.js\",\n            lineNumber: 21,\n            columnNumber: 9\n        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                \" \",\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        \"Name:\",\n                        username\n                    ]\n                }, void 0, true, {\n                    fileName: \"E:\\\\Front end\\\\LoginProject_Frontend\\\\app\\\\userdata\\\\page.js\",\n                    lineNumber: 25,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: handleLogout,\n                    children: \"Logout\"\n                }, void 0, false, {\n                    fileName: \"E:\\\\Front end\\\\LoginProject_Frontend\\\\app\\\\userdata\\\\page.js\",\n                    lineNumber: 26,\n                    columnNumber: 11\n                }, undefined)\n            ]\n        }, void 0, true)\n    }, void 0, false, {\n        fileName: \"E:\\\\Front end\\\\LoginProject_Frontend\\\\app\\\\userdata\\\\page.js\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Logout, \"c1ioqkgjMa8y6NwU+YOWCD0Ox9E=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Logout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Logout);\nvar _c;\n$RefreshReg$(_c, \"Logout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC91c2VyZGF0YS9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDd0M7QUFDSTtBQUNsQjtBQUNTO0FBQ29CO0FBQ3ZELE1BQU1NLFNBQVM7O0lBQ2IsTUFBTSxDQUFDQyxhQUFhQyxlQUFlLEdBQUdQLCtDQUFRQSxDQUFDO0lBQy9DLE1BQU1RLFNBQVNQLDBEQUFTQTtJQUN4QixNQUFNLEVBQUVRLFFBQVEsRUFBRSxHQUFHTixpREFBVUEsQ0FBQ0MsNERBQVVBO0lBRTFDLE1BQU1NLGVBQWU7UUFDbkIsTUFBTVIsNkNBQUtBLENBQUNTLElBQUksQ0FBQztRQUNqQkosZUFBZTtRQUNmQyxPQUFPSSxJQUFJLENBQUM7SUFDZDtJQUVBLHFCQUNFLDhEQUFDQztrQkFDRVAsNEJBQ0MsOERBQUNRO3NCQUFHOzs7OztzQ0FFSjs7Z0JBQ0c7OEJBQ0QsOERBQUNDOzt3QkFBRTt3QkFBTU47Ozs7Ozs7OEJBQ1QsOERBQUNPO29CQUFPQyxTQUFTUDs4QkFBYzs7Ozs7Ozs7Ozs7OztBQUt6QztHQXhCTUw7O1FBRVdKLHNEQUFTQTs7O0tBRnBCSTtBQTBCTiwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvdXNlcmRhdGEvcGFnZS5qcz80ODYzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQXBwQ29udGV4dCB9IGZyb20gXCIuLi8uLi9jb250ZXh0L1VzZXJDb250ZXh0XCI7XHJcbmNvbnN0IExvZ291dCA9ICgpID0+IHtcclxuICBjb25zdCBbaXNMb2dnZWRPdXQsIHNldElzTG9nZ2VkT3V0XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB7IHVzZXJuYW1lIH0gPSB1c2VDb250ZXh0KEFwcENvbnRleHQpO1xyXG5cclxuICBjb25zdCBoYW5kbGVMb2dvdXQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBhd2FpdCBheGlvcy5wb3N0KFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwL3VzZXIvdXNlckRhdGFcIik7XHJcbiAgICBzZXRJc0xvZ2dlZE91dCh0cnVlKTtcclxuICAgIHJvdXRlci5wdXNoKFwiL2xvZ2luXCIpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICB7aXNMb2dnZWRPdXQgPyAoXHJcbiAgICAgICAgPGgxPllvdSBoYXZlIGJlZW4gbG9nZ2VkIG91dDwvaDE+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgIDxwPk5hbWU6e3VzZXJuYW1lfTwvcD5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlTG9nb3V0fT5Mb2dvdXQ8L2J1dHRvbj5cclxuICAgICAgICA8Lz5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dvdXQ7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwiYXhpb3MiLCJ1c2VDb250ZXh0IiwiQXBwQ29udGV4dCIsIkxvZ291dCIsImlzTG9nZ2VkT3V0Iiwic2V0SXNMb2dnZWRPdXQiLCJyb3V0ZXIiLCJ1c2VybmFtZSIsImhhbmRsZUxvZ291dCIsInBvc3QiLCJwdXNoIiwiZGl2IiwiaDEiLCJwIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/userdata/page.js\n"));

/***/ })

});