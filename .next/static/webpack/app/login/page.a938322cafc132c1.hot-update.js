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

/***/ "(app-pages-browser)/./app/login/page.js":
/*!***************************!*\
  !*** ./app/login/page.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getServerSideProps: function() { return /* binding */ getServerSideProps; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/TextField/TextField.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Button/Button.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_UserContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context/UserContext */ \"(app-pages-browser)/./context/UserContext.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ getServerSideProps,default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Page() {\n    _s();\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const { username, setUsername, setToken } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_UserContext__WEBPACK_IMPORTED_MODULE_2__.AppContext);\n    const Router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const handleClick = ()=>{\n        Router.push(\"/userdata\");\n    };\n    const handleSubmit1 = (e)=>{\n        e.preventDefault();\n        const headers = {\n            \"Content-type\": \"application/json\"\n        };\n        axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].post(\"http://localhost:8080/user/signin\", {\n            email,\n            password\n        }, {\n            headers\n        }).then((res)=>{\n            setMessage(res.data.message);\n            if (res.data.status === \"ok\") {\n                console.log(res);\n                setUsername(res.data.data[0].name);\n                setToken(res.data.token);\n                console.log(res.data.token);\n            }\n        }).catch((err)=>{\n            console.log(err);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"font-Monstserrat bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100  flex flex-col justify-center text-center w-screen h-screen \",\n        children: username ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"Login susscess\"\n                }, void 0, false, {\n                    fileName: \"E:\\\\Front end\\\\LoginProject_Frontend\\\\app\\\\login\\\\page.js\",\n                    lineNumber: 51,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: handleClick,\n                    children: \"View profile\"\n                }, void 0, false, {\n                    fileName: \"E:\\\\Front end\\\\LoginProject_Frontend\\\\app\\\\login\\\\page.js\",\n                    lineNumber: 52,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"E:\\\\Front end\\\\LoginProject_Frontend\\\\app\\\\login\\\\page.js\",\n            lineNumber: 50,\n            columnNumber: 9\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \" bg-slate-200 max-w-[500px] w-full m-auto rounded-3xl shadow-xl p-4\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"p-4 text-3xl  \",\n                    children: \"Login\"\n                }, void 0, false, {\n                    fileName: \"E:\\\\Front end\\\\LoginProject_Frontend\\\\app\\\\login\\\\page.js\",\n                    lineNumber: 56,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    className: \"p-4\",\n                    onSubmit: handleSubmit1,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"py-4\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                required: true,\n                                id: \"outlined-basic\",\n                                label: \"Email\",\n                                variant: \"outlined\",\n                                value: email,\n                                onChange: (e)=>setEmail(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"E:\\\\Front end\\\\LoginProject_Frontend\\\\app\\\\login\\\\page.js\",\n                                lineNumber: 59,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Front end\\\\LoginProject_Frontend\\\\app\\\\login\\\\page.js\",\n                            lineNumber: 58,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"py-4\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                required: true,\n                                id: \"outlined-basic\",\n                                label: \"Password\",\n                                variant: \"outlined\",\n                                value: password,\n                                onChange: (e)=>setPassword(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"E:\\\\Front end\\\\LoginProject_Frontend\\\\app\\\\login\\\\page.js\",\n                                lineNumber: 69,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Front end\\\\LoginProject_Frontend\\\\app\\\\login\\\\page.js\",\n                            lineNumber: 68,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"pt-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                    variant: \"outlined\",\n                                    size: \"medium\",\n                                    type: \"submit\",\n                                    children: \"Login\"\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\Front end\\\\LoginProject_Frontend\\\\app\\\\login\\\\page.js\",\n                                    lineNumber: 79,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \"pt-4\",\n                                    children: [\n                                        \" \",\n                                        message\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"E:\\\\Front end\\\\LoginProject_Frontend\\\\app\\\\login\\\\page.js\",\n                                    lineNumber: 83,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"E:\\\\Front end\\\\LoginProject_Frontend\\\\app\\\\login\\\\page.js\",\n                            lineNumber: 78,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"E:\\\\Front end\\\\LoginProject_Frontend\\\\app\\\\login\\\\page.js\",\n                    lineNumber: 57,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"E:\\\\Front end\\\\LoginProject_Frontend\\\\app\\\\login\\\\page.js\",\n            lineNumber: 55,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"E:\\\\Front end\\\\LoginProject_Frontend\\\\app\\\\login\\\\page.js\",\n        lineNumber: 48,\n        columnNumber: 5\n    }, this);\n}\n_s(Page, \"WDReoRYD5RbcQLf5VaX1s2SENiA=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Page;\nasync function getServerSideProps() {\n    // Fetch data from external API\n    const res = await handleSubmit;\n    const data = await res.json();\n    // Pass data to the page via props\n    return {\n        props: {\n            data\n        }\n    };\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page);\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RTtBQUMzQjtBQUNBLCtEQUFlcEIsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvbG9naW4vcGFnZS5qcz82YWZkIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgeyBUZXh0RmllbGQsIEJ1dHRvbiB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQXBwQ29udGV4dCB9IGZyb20gXCIuLi8uLi9jb250ZXh0L1VzZXJDb250ZXh0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcclxuXHJcbmZ1bmN0aW9uIFBhZ2UoKSB7XHJcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICBjb25zdCB7IHVzZXJuYW1lLCBzZXRVc2VybmFtZSwgc2V0VG9rZW4gfSA9IHVzZUNvbnRleHQoQXBwQ29udGV4dCk7XHJcbiAgY29uc3QgUm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICBSb3V0ZXIucHVzaChcIi91c2VyZGF0YVwiKTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBoZWFkZXJzID0ge1xyXG4gICAgICBcIkNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgIH07XHJcbiAgICBheGlvc1xyXG4gICAgICAucG9zdChcclxuICAgICAgICBcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC91c2VyL3NpZ25pblwiLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGVtYWlsLFxyXG4gICAgICAgICAgcGFzc3dvcmQsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7IGhlYWRlcnMgfVxyXG4gICAgICApXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBzZXRNZXNzYWdlKHJlcy5kYXRhLm1lc3NhZ2UpO1xyXG4gICAgICAgIGlmIChyZXMuZGF0YS5zdGF0dXMgPT09IFwib2tcIikge1xyXG4gICAgICAgICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgICAgICAgIHNldFVzZXJuYW1lKHJlcy5kYXRhLmRhdGFbMF0ubmFtZSk7XHJcbiAgICAgICAgICBzZXRUb2tlbihyZXMuZGF0YS50b2tlbik7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YS50b2tlbik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG5cclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmb250LU1vbnN0c2VycmF0IGJnLWdyYWRpZW50LXRvLXIgZnJvbS1pbmRpZ28tMjAwIHZpYS1yZWQtMjAwIHRvLXllbGxvdy0xMDAgIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgdGV4dC1jZW50ZXIgdy1zY3JlZW4gaC1zY3JlZW4gXCI+XHJcbiAgICAgIHt1c2VybmFtZSA/IChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGgxPkxvZ2luIHN1c3NjZXNzPC9oMT5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQ2xpY2t9PlZpZXcgcHJvZmlsZTwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGJnLXNsYXRlLTIwMCBtYXgtdy1bNTAwcHhdIHctZnVsbCBtLWF1dG8gcm91bmRlZC0zeGwgc2hhZG93LXhsIHAtNFwiPlxyXG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInAtNCB0ZXh0LTN4bCAgXCI+TG9naW48L2gxPlxyXG4gICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwicC00XCIgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHktNFwiPlxyXG4gICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICBpZD1cIm91dGxpbmVkLWJhc2ljXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiRW1haWxcIlxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB5LTRcIj5cclxuICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgaWQ9XCJvdXRsaW5lZC1iYXNpY1wiXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC00XCI+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZWRcIiBzaXplPVwibWVkaXVtXCIgdHlwZT1cInN1Ym1pdFwiPlxyXG4gICAgICAgICAgICAgICAgTG9naW5cclxuICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInB0LTRcIj4ge21lc3NhZ2V9PC9oMT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKSB7XHJcbiAgLy8gRmV0Y2ggZGF0YSBmcm9tIGV4dGVybmFsIEFQSVxyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGhhbmRsZVN1Ym1pdDtcclxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHJcbiAgLy8gUGFzcyBkYXRhIHRvIHRoZSBwYWdlIHZpYSBwcm9wc1xyXG4gIHJldHVybiB7IHByb3BzOiB7IGRhdGEgfSB9O1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFBhZ2U7XHJcbiJdLCJuYW1lcyI6WyJUZXh0RmllbGQiLCJCdXR0b24iLCJheGlvcyIsInVzZUNvbnRleHQiLCJ1c2VTdGF0ZSIsIkFwcENvbnRleHQiLCJ1c2VSb3V0ZXIiLCJQYWdlIiwiZW1haWwiLCJzZXRFbWFpbCIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJtZXNzYWdlIiwic2V0TWVzc2FnZSIsInVzZXJuYW1lIiwic2V0VXNlcm5hbWUiLCJzZXRUb2tlbiIsIlJvdXRlciIsImhhbmRsZUNsaWNrIiwicHVzaCIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImhlYWRlcnMiLCJwb3N0IiwidGhlbiIsInJlcyIsImRhdGEiLCJzdGF0dXMiLCJjb25zb2xlIiwibG9nIiwibmFtZSIsInRva2VuIiwiY2F0Y2giLCJlcnIiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJmb3JtIiwib25TdWJtaXQiLCJyZXF1aXJlZCIsImlkIiwibGFiZWwiLCJ2YXJpYW50IiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsInNpemUiLCJ0eXBlIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwianNvbiIsInByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/login/page.js\n"));

/***/ })

});