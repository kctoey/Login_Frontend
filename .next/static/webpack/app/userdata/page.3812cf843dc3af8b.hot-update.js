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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context_UserContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/UserContext */ \"(app-pages-browser)/./context/UserContext.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Button/Button.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Logout = ()=>{\n    _s();\n    const [isLoggedOut, setIsLoggedOut] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { token, username } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_UserContext__WEBPACK_IMPORTED_MODULE_3__.AppContext);\n    const handleLogout = ()=>{\n        fetch(\"http://localhost:8080/user/userData\", {\n            method: \"POST\",\n            crossDomain: true,\n            headers: {\n                \"Content-Type\": \"application/json\",\n                Accept: \"applicationjson\",\n                \"Access-Control-Allow-Origin\": \"*\"\n            },\n            body: JSON.stringify({\n                token: token\n            })\n        }).then((res)=>res.json()).then((data)=>{\n            if (data.data == \"token expired\") {\n                router.push(\"/\");\n            }\n        });\n        setIsLoggedOut(true);\n        router.push(\"/\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"font-Monstserrat bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100  flex flex-col justify-center text-center w-screen h-screen \",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \" bg-slate-200 max-w-[500px] w-full m-auto rounded-3xl shadow-xl p-4\",\n            children: isLoggedOut ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"p-4 text-3xl  \",\n                children: \"You have been logged out\"\n            }, void 0, false, {\n                fileName: \"E:\\\\Front end\\\\LoginProject_Frontend\\\\app\\\\userdata\\\\page.js\",\n                lineNumber: 42,\n                columnNumber: 11\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"space-y-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"p-4 text-3xl  \",\n                        children: \"Profile\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Front end\\\\LoginProject_Frontend\\\\app\\\\userdata\\\\page.js\",\n                        lineNumber: 45,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Name:\",\n                            username\n                        ]\n                    }, void 0, true, {\n                        fileName: \"E:\\\\Front end\\\\LoginProject_Frontend\\\\app\\\\userdata\\\\page.js\",\n                        lineNumber: 46,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        variant: \"outlined\",\n                        size: \"medium\",\n                        onClick: handleLogout,\n                        children: \"Logout\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Front end\\\\LoginProject_Frontend\\\\app\\\\userdata\\\\page.js\",\n                        lineNumber: 47,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\Front end\\\\LoginProject_Frontend\\\\app\\\\userdata\\\\page.js\",\n                lineNumber: 44,\n                columnNumber: 11\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"E:\\\\Front end\\\\LoginProject_Frontend\\\\app\\\\userdata\\\\page.js\",\n            lineNumber: 40,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"E:\\\\Front end\\\\LoginProject_Frontend\\\\app\\\\userdata\\\\page.js\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Logout, \"CBUtPJSnzwklJoWKYMndmNQchEA=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Logout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Logout);\nvar _c;\n$RefreshReg$(_c, \"Logout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC91c2VyZGF0YS9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDd0M7QUFDSTtBQUNsQjtBQUNTO0FBQ29CO0FBQ0w7QUFFbEQsTUFBTVEsU0FBUzs7SUFDYixNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR1QsK0NBQVFBLENBQUM7SUFDL0MsTUFBTVUsU0FBU1QsMERBQVNBO0lBQ3hCLE1BQU0sRUFBRVUsS0FBSyxFQUFFQyxRQUFRLEVBQUUsR0FBR1QsaURBQVVBLENBQUNDLDREQUFVQTtJQUVqRCxNQUFNUyxlQUFlO1FBQ25CQyxNQUFNLHVDQUF1QztZQUMzQ0MsUUFBUTtZQUNSQyxhQUFhO1lBQ2JDLFNBQVM7Z0JBQ1AsZ0JBQWdCO2dCQUNoQkMsUUFBUTtnQkFDUiwrQkFBK0I7WUFDakM7WUFDQUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO2dCQUNuQlYsT0FBT0E7WUFDVDtRQUNGLEdBQ0dXLElBQUksQ0FBQyxDQUFDQyxNQUFRQSxJQUFJQyxJQUFJLElBQ3RCRixJQUFJLENBQUMsQ0FBQ0c7WUFDTCxJQUFJQSxLQUFLQSxJQUFJLElBQUksaUJBQWlCO2dCQUNoQ2YsT0FBT2dCLElBQUksQ0FBQztZQUNkO1FBQ0Y7UUFFRmpCLGVBQWU7UUFDZkMsT0FBT2dCLElBQUksQ0FBQztJQUNkO0lBRUEscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNEO1lBQUlDLFdBQVU7c0JBQ1pwQiw0QkFDQyw4REFBQ3FCO2dCQUFHRCxXQUFVOzBCQUFpQjs7Ozs7MENBRS9CLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNFO3dCQUFHRixXQUFVO2tDQUFpQjs7Ozs7O2tDQUMvQiw4REFBQ0c7OzRCQUFFOzRCQUFNbkI7Ozs7Ozs7a0NBQ1QsOERBQUNOLHFEQUFNQTt3QkFBQzBCLFNBQVE7d0JBQVdDLE1BQUs7d0JBQVNDLFNBQVNyQjtrQ0FBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVE1RTtHQTlDTU47O1FBRVdOLHNEQUFTQTs7O0tBRnBCTTtBQWdETiwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvdXNlcmRhdGEvcGFnZS5qcz80ODYzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQXBwQ29udGV4dCB9IGZyb20gXCIuLi8uLi9jb250ZXh0L1VzZXJDb250ZXh0XCI7XHJcbmltcG9ydCB7IFRleHRGaWVsZCwgQnV0dG9uIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcclxuXHJcbmNvbnN0IExvZ291dCA9ICgpID0+IHtcclxuICBjb25zdCBbaXNMb2dnZWRPdXQsIHNldElzTG9nZ2VkT3V0XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB7IHRva2VuLCB1c2VybmFtZSB9ID0gdXNlQ29udGV4dChBcHBDb250ZXh0KTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTG9nb3V0ID0gKCkgPT4ge1xyXG4gICAgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjgwODAvdXNlci91c2VyRGF0YVwiLCB7XHJcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgIGNyb3NzRG9tYWluOiB0cnVlLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uanNvblwiLFxyXG4gICAgICAgIFwiQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luXCI6IFwiKlwiLFxyXG4gICAgICB9LFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgdG9rZW46IHRva2VuLFxyXG4gICAgICB9KSxcclxuICAgIH0pXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXHJcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgaWYgKGRhdGEuZGF0YSA9PSBcInRva2VuIGV4cGlyZWRcIikge1xyXG4gICAgICAgICAgcm91dGVyLnB1c2goXCIvXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgc2V0SXNMb2dnZWRPdXQodHJ1ZSk7XHJcbiAgICByb3V0ZXIucHVzaChcIi9cIik7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC1Nb25zdHNlcnJhdCBiZy1ncmFkaWVudC10by1yIGZyb20taW5kaWdvLTIwMCB2aWEtcmVkLTIwMCB0by15ZWxsb3ctMTAwICBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIHRleHQtY2VudGVyIHctc2NyZWVuIGgtc2NyZWVuIFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBiZy1zbGF0ZS0yMDAgbWF4LXctWzUwMHB4XSB3LWZ1bGwgbS1hdXRvIHJvdW5kZWQtM3hsIHNoYWRvdy14bCBwLTRcIj5cclxuICAgICAgICB7aXNMb2dnZWRPdXQgPyAoXHJcbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwicC00IHRleHQtM3hsICBcIj5Zb3UgaGF2ZSBiZWVuIGxvZ2dlZCBvdXQ8L2gxPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNFwiPlxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwicC00IHRleHQtM3hsICBcIj5Qcm9maWxlPC9oMj5cclxuICAgICAgICAgICAgPHA+TmFtZTp7dXNlcm5hbWV9PC9wPlxyXG4gICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIHNpemU9XCJtZWRpdW1cIiBvbkNsaWNrPXtoYW5kbGVMb2dvdXR9PlxyXG4gICAgICAgICAgICAgIExvZ291dFxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ291dDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJheGlvcyIsInVzZUNvbnRleHQiLCJBcHBDb250ZXh0IiwiVGV4dEZpZWxkIiwiQnV0dG9uIiwiTG9nb3V0IiwiaXNMb2dnZWRPdXQiLCJzZXRJc0xvZ2dlZE91dCIsInJvdXRlciIsInRva2VuIiwidXNlcm5hbWUiLCJoYW5kbGVMb2dvdXQiLCJmZXRjaCIsIm1ldGhvZCIsImNyb3NzRG9tYWluIiwiaGVhZGVycyIsIkFjY2VwdCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidGhlbiIsInJlcyIsImpzb24iLCJkYXRhIiwicHVzaCIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwiaDIiLCJwIiwidmFyaWFudCIsInNpemUiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/userdata/page.js\n"));

/***/ })

});