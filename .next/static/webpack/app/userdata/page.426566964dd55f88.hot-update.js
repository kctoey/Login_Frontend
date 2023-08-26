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

/***/ "(app-pages-browser)/./app/login/page.js":
/*!***************************!*\
  !*** ./app/login/page.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getServerSideProps: function() { return /* binding */ getServerSideProps; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/TextField/TextField.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Button/Button.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_UserContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context/UserContext */ \"(app-pages-browser)/./context/UserContext.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ getServerSideProps,default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Page() {\n    _s();\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const { username, setUsername, setToken } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_UserContext__WEBPACK_IMPORTED_MODULE_2__.AppContext);\n    const Router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const handleClick = ()=>{\n        Router.push(\"/userdata\");\n    };\n    const handleSubmit1 = (e)=>{\n        e.preventDefault();\n        const headers = {\n            \"Content-type\": \"application/json\"\n        };\n        axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].post(\"http://localhost:8080/user/signin\", {\n            email,\n            password\n        }, {\n            headers\n        }).then((res)=>{\n            setMessage(res.data.message);\n            if (res.data.status === \"ok\") {\n                console.log(res);\n                setUsername(res.data.data[0].name);\n                setToken(res.data.token);\n                console.log(token);\n            }\n        }).catch((err)=>{\n            console.log(err);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"font-Monstserrat bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100  flex flex-col justify-center text-center w-screen h-screen \",\n        children: username ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"Login susscess\"\n                }, void 0, false, {\n                    fileName: \"E:\\\\Front end\\\\LoginProject_Frontend\\\\app\\\\login\\\\page.js\",\n                    lineNumber: 51,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: handleClick,\n                    children: \"View profile\"\n                }, void 0, false, {\n                    fileName: \"E:\\\\Front end\\\\LoginProject_Frontend\\\\app\\\\login\\\\page.js\",\n                    lineNumber: 52,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"E:\\\\Front end\\\\LoginProject_Frontend\\\\app\\\\login\\\\page.js\",\n            lineNumber: 50,\n            columnNumber: 9\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \" bg-slate-200 max-w-[500px] w-full m-auto rounded-3xl shadow-xl p-4\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"p-4 text-3xl  \",\n                    children: \"Login\"\n                }, void 0, false, {\n                    fileName: \"E:\\\\Front end\\\\LoginProject_Frontend\\\\app\\\\login\\\\page.js\",\n                    lineNumber: 56,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    className: \"p-4\",\n                    onSubmit: handleSubmit1,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"py-4\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                required: true,\n                                id: \"outlined-basic\",\n                                label: \"Email\",\n                                variant: \"outlined\",\n                                value: email,\n                                onChange: (e)=>setEmail(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"E:\\\\Front end\\\\LoginProject_Frontend\\\\app\\\\login\\\\page.js\",\n                                lineNumber: 59,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Front end\\\\LoginProject_Frontend\\\\app\\\\login\\\\page.js\",\n                            lineNumber: 58,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"py-4\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                required: true,\n                                id: \"outlined-basic\",\n                                label: \"Password\",\n                                variant: \"outlined\",\n                                value: password,\n                                onChange: (e)=>setPassword(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"E:\\\\Front end\\\\LoginProject_Frontend\\\\app\\\\login\\\\page.js\",\n                                lineNumber: 69,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Front end\\\\LoginProject_Frontend\\\\app\\\\login\\\\page.js\",\n                            lineNumber: 68,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"pt-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                    variant: \"outlined\",\n                                    size: \"medium\",\n                                    type: \"submit\",\n                                    children: \"Login\"\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\Front end\\\\LoginProject_Frontend\\\\app\\\\login\\\\page.js\",\n                                    lineNumber: 79,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \"pt-4\",\n                                    children: [\n                                        \" \",\n                                        message\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"E:\\\\Front end\\\\LoginProject_Frontend\\\\app\\\\login\\\\page.js\",\n                                    lineNumber: 83,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"E:\\\\Front end\\\\LoginProject_Frontend\\\\app\\\\login\\\\page.js\",\n                            lineNumber: 78,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"E:\\\\Front end\\\\LoginProject_Frontend\\\\app\\\\login\\\\page.js\",\n                    lineNumber: 57,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"E:\\\\Front end\\\\LoginProject_Frontend\\\\app\\\\login\\\\page.js\",\n            lineNumber: 55,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"E:\\\\Front end\\\\LoginProject_Frontend\\\\app\\\\login\\\\page.js\",\n        lineNumber: 48,\n        columnNumber: 5\n    }, this);\n}\n_s(Page, \"WDReoRYD5RbcQLf5VaX1s2SENiA=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Page;\nasync function getServerSideProps() {\n    // Fetch data from external API\n    const res = await handleSubmit;\n    const data = await res.json();\n    // Pass data to the page via props\n    return {\n        props: {\n            data\n        }\n    };\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page);\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2xvZ2luL3BhZ2UuanM/NmFmZCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IHsgVGV4dEZpZWxkLCBCdXR0b24gfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEFwcENvbnRleHQgfSBmcm9tIFwiLi4vLi4vY29udGV4dC9Vc2VyQ29udGV4dFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XHJcblxyXG5mdW5jdGlvbiBQYWdlKCkge1xyXG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbbWVzc2FnZSwgc2V0TWVzc2FnZV0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgY29uc3QgeyB1c2VybmFtZSwgc2V0VXNlcm5hbWUsIHNldFRva2VuIH0gPSB1c2VDb250ZXh0KEFwcENvbnRleHQpO1xyXG4gIGNvbnN0IFJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xyXG4gICAgUm91dGVyLnB1c2goXCIvdXNlcmRhdGFcIik7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgaGVhZGVycyA9IHtcclxuICAgICAgXCJDb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICB9O1xyXG4gICAgYXhpb3NcclxuICAgICAgLnBvc3QoXHJcbiAgICAgICAgXCJodHRwOi8vbG9jYWxob3N0OjgwODAvdXNlci9zaWduaW5cIixcclxuICAgICAgICB7XHJcbiAgICAgICAgICBlbWFpbCxcclxuICAgICAgICAgIHBhc3N3b3JkLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgeyBoZWFkZXJzIH1cclxuICAgICAgKVxyXG4gICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgc2V0TWVzc2FnZShyZXMuZGF0YS5tZXNzYWdlKTtcclxuICAgICAgICBpZiAocmVzLmRhdGEuc3RhdHVzID09PSBcIm9rXCIpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgICBzZXRVc2VybmFtZShyZXMuZGF0YS5kYXRhWzBdLm5hbWUpO1xyXG4gICAgICAgICAgc2V0VG9rZW4ocmVzLmRhdGEudG9rZW4pO1xyXG4gICAgICAgICAgY29uc29sZS5sb2codG9rZW4pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC1Nb25zdHNlcnJhdCBiZy1ncmFkaWVudC10by1yIGZyb20taW5kaWdvLTIwMCB2aWEtcmVkLTIwMCB0by15ZWxsb3ctMTAwICBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIHRleHQtY2VudGVyIHctc2NyZWVuIGgtc2NyZWVuIFwiPlxyXG4gICAgICB7dXNlcm5hbWUgPyAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxoMT5Mb2dpbiBzdXNzY2VzczwvaDE+XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5WaWV3IHByb2ZpbGU8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBiZy1zbGF0ZS0yMDAgbWF4LXctWzUwMHB4XSB3LWZ1bGwgbS1hdXRvIHJvdW5kZWQtM3hsIHNoYWRvdy14bCBwLTRcIj5cclxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJwLTQgdGV4dC0zeGwgIFwiPkxvZ2luPC9oMT5cclxuICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cInAtNFwiIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB5LTRcIj5cclxuICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgaWQ9XCJvdXRsaW5lZC1iYXNpY1wiXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkVtYWlsXCJcclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17ZW1haWx9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweS00XCI+XHJcbiAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgIGlkPVwib3V0bGluZWQtYmFzaWNcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJQYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtNFwiPlxyXG4gICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmVkXCIgc2l6ZT1cIm1lZGl1bVwiIHR5cGU9XCJzdWJtaXRcIj5cclxuICAgICAgICAgICAgICAgIExvZ2luXHJcbiAgICAgICAgICAgICAgPC9CdXR0b24+XHJcblxyXG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJwdC00XCI+IHttZXNzYWdlfTwvaDE+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCkge1xyXG4gIC8vIEZldGNoIGRhdGEgZnJvbSBleHRlcm5hbCBBUElcclxuICBjb25zdCByZXMgPSBhd2FpdCBoYW5kbGVTdWJtaXQ7XHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gIC8vIFBhc3MgZGF0YSB0byB0aGUgcGFnZSB2aWEgcHJvcHNcclxuICByZXR1cm4geyBwcm9wczogeyBkYXRhIH0gfTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBQYWdlO1xyXG4iXSwibmFtZXMiOlsiVGV4dEZpZWxkIiwiQnV0dG9uIiwiYXhpb3MiLCJ1c2VDb250ZXh0IiwidXNlU3RhdGUiLCJBcHBDb250ZXh0IiwidXNlUm91dGVyIiwiUGFnZSIsImVtYWlsIiwic2V0RW1haWwiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwibWVzc2FnZSIsInNldE1lc3NhZ2UiLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwic2V0VG9rZW4iLCJSb3V0ZXIiLCJoYW5kbGVDbGljayIsInB1c2giLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJoZWFkZXJzIiwicG9zdCIsInRoZW4iLCJyZXMiLCJkYXRhIiwic3RhdHVzIiwiY29uc29sZSIsImxvZyIsIm5hbWUiLCJ0b2tlbiIsImNhdGNoIiwiZXJyIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJidXR0b24iLCJvbkNsaWNrIiwiZm9ybSIsIm9uU3VibWl0IiwicmVxdWlyZWQiLCJpZCIsImxhYmVsIiwidmFyaWFudCIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJzaXplIiwidHlwZSIsImdldFNlcnZlclNpZGVQcm9wcyIsImpzb24iLCJwcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/login/page.js\n"));

/***/ })

});