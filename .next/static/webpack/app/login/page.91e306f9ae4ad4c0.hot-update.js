"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/login/page",{

/***/ "(app-pages-browser)/./app/register/page.js":
/*!******************************!*\
  !*** ./app/register/page.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Page; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n// path: /pages/login.js\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n// Change import from 'axios' to 'axios.config.js'\n\nfunction Page() {\n    _s();\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [userName, setuserName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [userEmail, setuserEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        const headers = {\n            \"Content-type\": \"application/json\"\n        };\n        axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post(\"http://localhost:8080/user/signup\", {\n            name,\n            email,\n            password\n        }, {\n            headers\n        }).then((res)=>{\n            setMessage(res.data.message);\n        }).catch((err)=>{\n            alert(\"cannot signup\");\n        });\n    // const body = JSON.stringify({\n    //   email: email.current.value,\n    //   password: password.current.value,\n    // });\n    // const res = await axios.post(\"/user/login\", body);\n    // console.log(res.data);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"font-Monstserrat bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100  flex flex-col justify-center text-center w-screen h-screen \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Register Page\"\n            }, void 0, false, {\n                fileName: \"E:\\\\Front end\\\\LoginProject_Frontend\\\\app\\\\register\\\\page.js\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"email\",\n                        value: email,\n                        onChange: (e)=>setEmail(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Front end\\\\LoginProject_Frontend\\\\app\\\\register\\\\page.js\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"password\",\n                        placeholder: \"password\",\n                        value: password,\n                        onChange: (e)=>setPassword(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Front end\\\\LoginProject_Frontend\\\\app\\\\register\\\\page.js\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"name\",\n                        value: name,\n                        onChange: (e)=>setName(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Front end\\\\LoginProject_Frontend\\\\app\\\\register\\\\page.js\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        children: \"Submit\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Front end\\\\LoginProject_Frontend\\\\app\\\\register\\\\page.js\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\Front end\\\\LoginProject_Frontend\\\\app\\\\register\\\\page.js\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: message\n            }, void 0, false, {\n                fileName: \"E:\\\\Front end\\\\LoginProject_Frontend\\\\app\\\\register\\\\page.js\",\n                lineNumber: 70,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\Front end\\\\LoginProject_Frontend\\\\app\\\\register\\\\page.js\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, this);\n}\n_s(Page, \"nc3+2Tj5KVkgbmOqP6vWL2vedcI=\");\n_c = Page;\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9yZWdpc3Rlci9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsd0JBQXdCOzs7QUFFUztBQUVqQyxrREFBa0Q7QUFDeEI7QUFFWCxTQUFTRTs7SUFDdEIsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdKLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ0ssVUFBVUMsWUFBWSxHQUFHTiwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNLENBQUNPLFNBQVNDLFdBQVcsR0FBR1IsK0NBQVFBLENBQUM7SUFDdkMsTUFBTSxDQUFDUyxVQUFVQyxZQUFZLEdBQUdWLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ1csTUFBTUMsUUFBUSxHQUFHWiwrQ0FBUUEsQ0FBQztJQUNqQyxNQUFNLENBQUNhLFdBQVdDLGFBQWEsR0FBR2QsK0NBQVFBLENBQUM7SUFFM0MsTUFBTWUsZUFBZSxDQUFDQztRQUNwQkEsRUFBRUMsY0FBYztRQUNoQixNQUFNQyxVQUFVO1lBQ2QsZ0JBQWdCO1FBQ2xCO1FBQ0FqQiw2Q0FBS0EsQ0FDRmtCLElBQUksQ0FDSCxxQ0FDQTtZQUNFUjtZQUNBUjtZQUNBRTtRQUNGLEdBQ0E7WUFBRWE7UUFBUSxHQUVYRSxJQUFJLENBQUMsQ0FBQ0M7WUFDTGIsV0FBV2EsSUFBSUMsSUFBSSxDQUFDZixPQUFPO1FBQzdCLEdBQ0NnQixLQUFLLENBQUMsQ0FBQ0M7WUFDTkMsTUFBTTtRQUNSO0lBQ0YsZ0NBQWdDO0lBQ2hDLGdDQUFnQztJQUNoQyxzQ0FBc0M7SUFDdEMsTUFBTTtJQUVOLHFEQUFxRDtJQUNyRCx5QkFBeUI7SUFDM0I7SUFFQSxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNDOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUNDO2dCQUFLQyxVQUFVZjs7a0NBQ2QsOERBQUNnQjt3QkFDQ0MsTUFBSzt3QkFDTEMsYUFBWTt3QkFDWkMsT0FBTy9CO3dCQUNQZ0MsVUFBVSxDQUFDbkIsSUFBTVosU0FBU1ksRUFBRW9CLE1BQU0sQ0FBQ0YsS0FBSzs7Ozs7O2tDQUUxQyw4REFBQ0g7d0JBQ0NDLE1BQUs7d0JBQ0xDLGFBQVk7d0JBQ1pDLE9BQU83Qjt3QkFDUDhCLFVBQVUsQ0FBQ25CLElBQU1WLFlBQVlVLEVBQUVvQixNQUFNLENBQUNGLEtBQUs7Ozs7OztrQ0FFN0MsOERBQUNIO3dCQUNDQyxNQUFLO3dCQUNMQyxhQUFZO3dCQUNaQyxPQUFPdkI7d0JBQ1B3QixVQUFVLENBQUNuQixJQUFNSixRQUFRSSxFQUFFb0IsTUFBTSxDQUFDRixLQUFLOzs7Ozs7a0NBRXpDLDhEQUFDRzt3QkFBT0wsTUFBSztrQ0FBUzs7Ozs7Ozs7Ozs7OzBCQUV4Qiw4REFBQ007MEJBQUkvQjs7Ozs7Ozs7Ozs7O0FBR1g7R0FqRXdCTDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvcmVnaXN0ZXIvcGFnZS5qcz8wYmQ5Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIHBhdGg6IC9wYWdlcy9sb2dpbi5qc1xyXG5cInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbi8vIENoYW5nZSBpbXBvcnQgZnJvbSAnYXhpb3MnIHRvICdheGlvcy5jb25maWcuanMnXHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhZ2UoKSB7XHJcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFt1c2VyTmFtZSwgc2V0dXNlck5hbWVdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3VzZXJFbWFpbCwgc2V0dXNlckVtYWlsXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgaGVhZGVycyA9IHtcclxuICAgICAgXCJDb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICB9O1xyXG4gICAgYXhpb3NcclxuICAgICAgLnBvc3QoXHJcbiAgICAgICAgXCJodHRwOi8vbG9jYWxob3N0OjgwODAvdXNlci9zaWdudXBcIixcclxuICAgICAgICB7XHJcbiAgICAgICAgICBuYW1lLFxyXG4gICAgICAgICAgZW1haWwsXHJcbiAgICAgICAgICBwYXNzd29yZCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHsgaGVhZGVycyB9XHJcbiAgICAgIClcclxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIHNldE1lc3NhZ2UocmVzLmRhdGEubWVzc2FnZSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgYWxlcnQoXCJjYW5ub3Qgc2lnbnVwXCIpO1xyXG4gICAgICB9KTtcclxuICAgIC8vIGNvbnN0IGJvZHkgPSBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAvLyAgIGVtYWlsOiBlbWFpbC5jdXJyZW50LnZhbHVlLFxyXG4gICAgLy8gICBwYXNzd29yZDogcGFzc3dvcmQuY3VycmVudC52YWx1ZSxcclxuICAgIC8vIH0pO1xyXG5cclxuICAgIC8vIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLnBvc3QoXCIvdXNlci9sb2dpblwiLCBib2R5KTtcclxuICAgIC8vIGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmb250LU1vbnN0c2VycmF0IGJnLWdyYWRpZW50LXRvLXIgZnJvbS1pbmRpZ28tMjAwIHZpYS1yZWQtMjAwIHRvLXllbGxvdy0xMDAgIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgdGV4dC1jZW50ZXIgdy1zY3JlZW4gaC1zY3JlZW4gXCI+XHJcbiAgICAgIDxoMT5SZWdpc3RlciBQYWdlPC9oMT5cclxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cImVtYWlsXCJcclxuICAgICAgICAgIHZhbHVlPXtlbWFpbH1cclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJuYW1lXCJcclxuICAgICAgICAgIHZhbHVlPXtuYW1lfVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROYW1lKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlN1Ym1pdDwvYnV0dG9uPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICAgIDxoMj57bWVzc2FnZX08L2gyPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJheGlvcyIsIlBhZ2UiLCJlbWFpbCIsInNldEVtYWlsIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwidXNlck5hbWUiLCJzZXR1c2VyTmFtZSIsIm5hbWUiLCJzZXROYW1lIiwidXNlckVtYWlsIiwic2V0dXNlckVtYWlsIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiaGVhZGVycyIsInBvc3QiLCJ0aGVuIiwicmVzIiwiZGF0YSIsImNhdGNoIiwiZXJyIiwiYWxlcnQiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsImZvcm0iLCJvblN1Ym1pdCIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsImJ1dHRvbiIsImgyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/register/page.js\n"));

/***/ })

});