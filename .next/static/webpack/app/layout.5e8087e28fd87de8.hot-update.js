"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./app/globals.css":
/*!*************************!*\
  !*** ./app/globals.css ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"9a587c446338\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2dsb2JhbHMuY3NzPzVkYjEiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCI5YTU4N2M0NDYzMzhcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./app/login/page.js":
/*!***************************!*\
  !*** ./app/login/page.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getServerSideProps: function() { return /* binding */ getServerSideProps; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/TextField/TextField.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Button/Button.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_UserContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context/UserContext */ \"(app-pages-browser)/./context/UserContext.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ getServerSideProps,default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Page() {\n    _s();\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const { username, setUsername, setToken } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_UserContext__WEBPACK_IMPORTED_MODULE_2__.AppContext);\n    const Router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const handleClick = ()=>{\n        Router.push(\"/userdata\");\n    };\n    const handleSubmit1 = (e)=>{\n        e.preventDefault();\n        const headers = {\n            \"Content-type\": \"application/json\"\n        };\n        axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].post(\"http://localhost:8080/user/signin\", {\n            email,\n            password\n        }, {\n            headers\n        }).then((res)=>{\n            setMessage(res.data.message);\n            if (res.data.status === \"ok\") {\n                setUsername(res.data.data[0].name);\n                setToken(res.data.token);\n            }\n        }).catch((err)=>{\n            console.log(err);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"font-Monstserrat bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100  flex flex-col justify-center text-center w-screen h-screen \",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \" bg-slate-200 max-w-[500px] w-full m-auto rounded-3xl shadow-xl p-4\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"p-4 text-3xl  \",\n                    children: \"Login\"\n                }, void 0, false, {\n                    fileName: \"E:\\\\Front end\\\\LoginProject_Frontend\\\\app\\\\login\\\\page.js\",\n                    lineNumber: 48,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    className: \"p-4\",\n                    onSubmit: handleSubmit1,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"py-4\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                required: true,\n                                id: \"outlined-basic\",\n                                label: \"Email\",\n                                variant: \"outlined\",\n                                value: email,\n                                onChange: (e)=>setEmail(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"E:\\\\Front end\\\\LoginProject_Frontend\\\\app\\\\login\\\\page.js\",\n                                lineNumber: 51,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Front end\\\\LoginProject_Frontend\\\\app\\\\login\\\\page.js\",\n                            lineNumber: 50,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"py-4\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                required: true,\n                                id: \"outlined-basic\",\n                                label: \"Password\",\n                                variant: \"outlined\",\n                                value: password,\n                                onChange: (e)=>setPassword(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"E:\\\\Front end\\\\LoginProject_Frontend\\\\app\\\\login\\\\page.js\",\n                                lineNumber: 61,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Front end\\\\LoginProject_Frontend\\\\app\\\\login\\\\page.js\",\n                            lineNumber: 60,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"pt-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                    variant: \"outlined\",\n                                    size: \"medium\",\n                                    type: \"submit\",\n                                    children: \"Login\"\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\Front end\\\\LoginProject_Frontend\\\\app\\\\login\\\\page.js\",\n                                    lineNumber: 71,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \"pt-4\",\n                                    children: [\n                                        \" \",\n                                        message\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"E:\\\\Front end\\\\LoginProject_Frontend\\\\app\\\\login\\\\page.js\",\n                                    lineNumber: 75,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"E:\\\\Front end\\\\LoginProject_Frontend\\\\app\\\\login\\\\page.js\",\n                            lineNumber: 70,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"E:\\\\Front end\\\\LoginProject_Frontend\\\\app\\\\login\\\\page.js\",\n                    lineNumber: 49,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"E:\\\\Front end\\\\LoginProject_Frontend\\\\app\\\\login\\\\page.js\",\n            lineNumber: 47,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"E:\\\\Front end\\\\LoginProject_Frontend\\\\app\\\\login\\\\page.js\",\n        lineNumber: 46,\n        columnNumber: 5\n    }, this);\n}\n_s(Page, \"WDReoRYD5RbcQLf5VaX1s2SENiA=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Page;\nasync function getServerSideProps() {\n    // Fetch data from external API\n    const res = await handleSubmit;\n    const data = await res.json();\n    // Pass data to the page via props\n    return {\n        props: {\n            data\n        }\n    };\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page);\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9sb2dpbi9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUNrRDtBQUN4QjtBQUNtQjtBQUNVO0FBQ1g7QUFFNUMsU0FBU087O0lBQ1AsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdMLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ00sVUFBVUMsWUFBWSxHQUFHUCwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNLENBQUNRLFNBQVNDLFdBQVcsR0FBR1QsK0NBQVFBLENBQUM7SUFFdkMsTUFBTSxFQUFFVSxRQUFRLEVBQUVDLFdBQVcsRUFBRUMsUUFBUSxFQUFFLEdBQUdiLGlEQUFVQSxDQUFDRSw0REFBVUE7SUFDakUsTUFBTVksU0FBU1gsMERBQVNBO0lBQ3hCLE1BQU1ZLGNBQWM7UUFDbEJELE9BQU9FLElBQUksQ0FBQztJQUNkO0lBQ0EsTUFBTUMsZ0JBQWUsQ0FBQ0M7UUFDcEJBLEVBQUVDLGNBQWM7UUFDaEIsTUFBTUMsVUFBVTtZQUNkLGdCQUFnQjtRQUNsQjtRQUNBckIsNkNBQUtBLENBQ0ZzQixJQUFJLENBQ0gscUNBQ0E7WUFDRWhCO1lBQ0FFO1FBQ0YsR0FDQTtZQUFFYTtRQUFRLEdBRVhFLElBQUksQ0FBQyxDQUFDQztZQUNMYixXQUFXYSxJQUFJQyxJQUFJLENBQUNmLE9BQU87WUFDM0IsSUFBSWMsSUFBSUMsSUFBSSxDQUFDQyxNQUFNLEtBQUssTUFBTTtnQkFDNUJiLFlBQVlXLElBQUlDLElBQUksQ0FBQ0EsSUFBSSxDQUFDLEVBQUUsQ0FBQ0UsSUFBSTtnQkFDakNiLFNBQVNVLElBQUlDLElBQUksQ0FBQ0csS0FBSztZQUN6QjtRQUNGLEdBRUNDLEtBQUssQ0FBQyxDQUFDQztZQUNOQyxRQUFRQyxHQUFHLENBQUNGO1FBQ2Q7SUFDSjtJQUVBLHFCQUNFLDhEQUFDRztRQUFJQyxXQUFVO2tCQUNiLDRFQUFDRDtZQUFJQyxXQUFVOzs4QkFDYiw4REFBQ0M7b0JBQUdELFdBQVU7OEJBQWlCOzs7Ozs7OEJBQy9CLDhEQUFDRTtvQkFBS0YsV0FBVTtvQkFBTUcsVUFBVW5COztzQ0FDOUIsOERBQUNlOzRCQUFJQyxXQUFVO3NDQUNiLDRFQUFDcEMscURBQVNBO2dDQUNSd0MsUUFBUTtnQ0FDUkMsSUFBRztnQ0FDSEMsT0FBTTtnQ0FDTkMsU0FBUTtnQ0FDUkMsT0FBT3BDO2dDQUNQcUMsVUFBVSxDQUFDeEIsSUFBTVosU0FBU1ksRUFBRXlCLE1BQU0sQ0FBQ0YsS0FBSzs7Ozs7Ozs7Ozs7c0NBRzVDLDhEQUFDVDs0QkFBSUMsV0FBVTtzQ0FDYiw0RUFBQ3BDLHFEQUFTQTtnQ0FDUndDLFFBQVE7Z0NBQ1JDLElBQUc7Z0NBQ0hDLE9BQU07Z0NBQ05DLFNBQVE7Z0NBQ1JDLE9BQU9sQztnQ0FDUG1DLFVBQVUsQ0FBQ3hCLElBQU1WLFlBQVlVLEVBQUV5QixNQUFNLENBQUNGLEtBQUs7Ozs7Ozs7Ozs7O3NDQUcvQyw4REFBQ1Q7NEJBQUlDLFdBQVU7OzhDQUNiLDhEQUFDbkMscURBQU1BO29DQUFDMEMsU0FBUTtvQ0FBV0ksTUFBSztvQ0FBU0MsTUFBSzs4Q0FBUzs7Ozs7OzhDQUl2RCw4REFBQ1g7b0NBQUdELFdBQVU7O3dDQUFPO3dDQUFFeEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1uQztHQXpFU0w7O1FBTVFELHNEQUFTQTs7O0tBTmpCQztBQTBFRixlQUFlMEM7SUFDcEIsK0JBQStCO0lBQy9CLE1BQU12QixNQUFNLE1BQU1OO0lBQ2xCLE1BQU1PLE9BQU8sTUFBTUQsSUFBSXdCLElBQUk7SUFFM0Isa0NBQWtDO0lBQ2xDLE9BQU87UUFBRUMsT0FBTztZQUFFeEI7UUFBSztJQUFFO0FBQzNCO0FBQ0EsK0RBQWVwQixJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9sb2dpbi9wYWdlLmpzPzZhZmQiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCB7IFRleHRGaWVsZCwgQnV0dG9uIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBBcHBDb250ZXh0IH0gZnJvbSBcIi4uLy4uL2NvbnRleHQvVXNlckNvbnRleHRcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xyXG5cclxuZnVuY3Rpb24gUGFnZSgpIHtcclxuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIGNvbnN0IHsgdXNlcm5hbWUsIHNldFVzZXJuYW1lLCBzZXRUb2tlbiB9ID0gdXNlQ29udGV4dChBcHBDb250ZXh0KTtcclxuICBjb25zdCBSb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcclxuICAgIFJvdXRlci5wdXNoKFwiL3VzZXJkYXRhXCIpO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IGhlYWRlcnMgPSB7XHJcbiAgICAgIFwiQ29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgfTtcclxuICAgIGF4aW9zXHJcbiAgICAgIC5wb3N0KFxyXG4gICAgICAgIFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwL3VzZXIvc2lnbmluXCIsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgZW1haWwsXHJcbiAgICAgICAgICBwYXNzd29yZCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHsgaGVhZGVycyB9XHJcbiAgICAgIClcclxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIHNldE1lc3NhZ2UocmVzLmRhdGEubWVzc2FnZSk7XHJcbiAgICAgICAgaWYgKHJlcy5kYXRhLnN0YXR1cyA9PT0gXCJva1wiKSB7XHJcbiAgICAgICAgICBzZXRVc2VybmFtZShyZXMuZGF0YS5kYXRhWzBdLm5hbWUpO1xyXG4gICAgICAgICAgc2V0VG9rZW4ocmVzLmRhdGEudG9rZW4pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC1Nb25zdHNlcnJhdCBiZy1ncmFkaWVudC10by1yIGZyb20taW5kaWdvLTIwMCB2aWEtcmVkLTIwMCB0by15ZWxsb3ctMTAwICBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIHRleHQtY2VudGVyIHctc2NyZWVuIGgtc2NyZWVuIFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBiZy1zbGF0ZS0yMDAgbWF4LXctWzUwMHB4XSB3LWZ1bGwgbS1hdXRvIHJvdW5kZWQtM3hsIHNoYWRvdy14bCBwLTRcIj5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwicC00IHRleHQtM3hsICBcIj5Mb2dpbjwvaDE+XHJcbiAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwicC00XCIgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB5LTRcIj5cclxuICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgaWQ9XCJvdXRsaW5lZC1iYXNpY1wiXHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJFbWFpbFwiXHJcbiAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17ZW1haWx9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHktNFwiPlxyXG4gICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICBpZD1cIm91dGxpbmVkLWJhc2ljXCJcclxuICAgICAgICAgICAgICBsYWJlbD1cIlBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC00XCI+XHJcbiAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmVkXCIgc2l6ZT1cIm1lZGl1bVwiIHR5cGU9XCJzdWJtaXRcIj5cclxuICAgICAgICAgICAgICBMb2dpblxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJwdC00XCI+IHttZXNzYWdlfTwvaDE+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCkge1xyXG4gIC8vIEZldGNoIGRhdGEgZnJvbSBleHRlcm5hbCBBUElcclxuICBjb25zdCByZXMgPSBhd2FpdCBoYW5kbGVTdWJtaXQ7XHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gIC8vIFBhc3MgZGF0YSB0byB0aGUgcGFnZSB2aWEgcHJvcHNcclxuICByZXR1cm4geyBwcm9wczogeyBkYXRhIH0gfTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBQYWdlO1xyXG4iXSwibmFtZXMiOlsiVGV4dEZpZWxkIiwiQnV0dG9uIiwiYXhpb3MiLCJ1c2VDb250ZXh0IiwidXNlU3RhdGUiLCJBcHBDb250ZXh0IiwidXNlUm91dGVyIiwiUGFnZSIsImVtYWlsIiwic2V0RW1haWwiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwibWVzc2FnZSIsInNldE1lc3NhZ2UiLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwic2V0VG9rZW4iLCJSb3V0ZXIiLCJoYW5kbGVDbGljayIsInB1c2giLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJoZWFkZXJzIiwicG9zdCIsInRoZW4iLCJyZXMiLCJkYXRhIiwic3RhdHVzIiwibmFtZSIsInRva2VuIiwiY2F0Y2giLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJmb3JtIiwib25TdWJtaXQiLCJyZXF1aXJlZCIsImlkIiwibGFiZWwiLCJ2YXJpYW50IiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsInNpemUiLCJ0eXBlIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwianNvbiIsInByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/login/page.js\n"));

/***/ })

});