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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context_UserContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/UserContext */ \"(app-pages-browser)/./context/UserContext.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Logout = ()=>{\n    _s();\n    const [isLoggedOut, setIsLoggedOut] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { token, username } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_UserContext__WEBPACK_IMPORTED_MODULE_3__.AppContext);\n    console.log(token);\n    const handleLogout = ()=>{\n        fetch(\"http://localhost:8080/user/userData\", {\n            method: \"POST\",\n            crossDomain: true,\n            headers: {\n                \"Content-Type\": \"application/json\",\n                Accept: \"applicationjson\",\n                \"Access-Control-Allow-Origin\": \"*\"\n            },\n            body: JSON.stringify({\n                token: token\n            })\n        });\n        setIsLoggedOut(true);\n        router.push(\"/\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: isLoggedOut ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: \"You have been logged out\"\n        }, void 0, false, {\n            fileName: \"E:\\\\Front end\\\\LoginProject_Frontend\\\\app\\\\userdata\\\\page.js\",\n            lineNumber: 33,\n            columnNumber: 9\n        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    children: \"Profile\"\n                }, void 0, false, {\n                    fileName: \"E:\\\\Front end\\\\LoginProject_Frontend\\\\app\\\\userdata\\\\page.js\",\n                    lineNumber: 36,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        \"Name:\",\n                        username\n                    ]\n                }, void 0, true, {\n                    fileName: \"E:\\\\Front end\\\\LoginProject_Frontend\\\\app\\\\userdata\\\\page.js\",\n                    lineNumber: 37,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: handleLogout,\n                    children: \"Logout\"\n                }, void 0, false, {\n                    fileName: \"E:\\\\Front end\\\\LoginProject_Frontend\\\\app\\\\userdata\\\\page.js\",\n                    lineNumber: 38,\n                    columnNumber: 11\n                }, undefined)\n            ]\n        }, void 0, true)\n    }, void 0, false, {\n        fileName: \"E:\\\\Front end\\\\LoginProject_Frontend\\\\app\\\\userdata\\\\page.js\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Logout, \"CBUtPJSnzwklJoWKYMndmNQchEA=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Logout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Logout);\nvar _c;\n$RefreshReg$(_c, \"Logout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC91c2VyZGF0YS9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUN3QztBQUNJO0FBQ2xCO0FBQ1M7QUFDb0I7QUFDdkQsTUFBTU0sU0FBUzs7SUFDYixNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR1AsK0NBQVFBLENBQUM7SUFDL0MsTUFBTVEsU0FBU1AsMERBQVNBO0lBQ3hCLE1BQU0sRUFBRVEsS0FBSyxFQUFFQyxRQUFRLEVBQUUsR0FBR1AsaURBQVVBLENBQUNDLDREQUFVQTtJQUNqRE8sUUFBUUMsR0FBRyxDQUFDSDtJQUNaLE1BQU1JLGVBQWU7UUFDbkJDLE1BQU0sdUNBQXVDO1lBQzNDQyxRQUFRO1lBQ1JDLGFBQWE7WUFDYkMsU0FBUztnQkFDUCxnQkFBZ0I7Z0JBQ2hCQyxRQUFRO2dCQUNSLCtCQUErQjtZQUNqQztZQUNBQyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7Z0JBQ25CWixPQUFPQTtZQUNUO1FBQ0Y7UUFFQUYsZUFBZTtRQUNmQyxPQUFPYyxJQUFJLENBQUM7SUFDZDtJQUVBLHFCQUNFLDhEQUFDQztrQkFDRWpCLDRCQUNDLDhEQUFDa0I7c0JBQUc7Ozs7O3NDQUVKOzs4QkFDRSw4REFBQ0M7OEJBQUc7Ozs7Ozs4QkFDSiw4REFBQ0M7O3dCQUFFO3dCQUFNaEI7Ozs7Ozs7OEJBQ1QsOERBQUNpQjtvQkFBT0MsU0FBU2Y7OEJBQWM7Ozs7Ozs7Ozs7Ozs7QUFLekM7R0FwQ01SOztRQUVXSixzREFBU0E7OztLQUZwQkk7QUFzQ04sK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3VzZXJkYXRhL3BhZ2UuanM/NDg2MyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEFwcENvbnRleHQgfSBmcm9tIFwiLi4vLi4vY29udGV4dC9Vc2VyQ29udGV4dFwiO1xyXG5jb25zdCBMb2dvdXQgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2lzTG9nZ2VkT3V0LCBzZXRJc0xvZ2dlZE91dF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgeyB0b2tlbiwgdXNlcm5hbWUgfSA9IHVzZUNvbnRleHQoQXBwQ29udGV4dCk7XHJcbiAgY29uc29sZS5sb2codG9rZW4pO1xyXG4gIGNvbnN0IGhhbmRsZUxvZ291dCA9ICgpID0+IHtcclxuICAgIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwL3VzZXIvdXNlckRhdGFcIiwge1xyXG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICBjcm9zc0RvbWFpbjogdHJ1ZSxcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbmpzb25cIixcclxuICAgICAgICBcIkFjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpblwiOiBcIipcIixcclxuICAgICAgfSxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgIHRva2VuOiB0b2tlbixcclxuICAgICAgfSksXHJcbiAgICB9KTtcclxuXHJcbiAgICBzZXRJc0xvZ2dlZE91dCh0cnVlKTtcclxuICAgIHJvdXRlci5wdXNoKFwiL1wiKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAge2lzTG9nZ2VkT3V0ID8gKFxyXG4gICAgICAgIDxoMT5Zb3UgaGF2ZSBiZWVuIGxvZ2dlZCBvdXQ8L2gxPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8aDI+UHJvZmlsZTwvaDI+XHJcbiAgICAgICAgICA8cD5OYW1lOnt1c2VybmFtZX08L3A+XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUxvZ291dH0+TG9nb3V0PC9idXR0b24+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9nb3V0O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsImF4aW9zIiwidXNlQ29udGV4dCIsIkFwcENvbnRleHQiLCJMb2dvdXQiLCJpc0xvZ2dlZE91dCIsInNldElzTG9nZ2VkT3V0Iiwicm91dGVyIiwidG9rZW4iLCJ1c2VybmFtZSIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVMb2dvdXQiLCJmZXRjaCIsIm1ldGhvZCIsImNyb3NzRG9tYWluIiwiaGVhZGVycyIsIkFjY2VwdCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicHVzaCIsImRpdiIsImgxIiwiaDIiLCJwIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/userdata/page.js\n"));

/***/ })

});