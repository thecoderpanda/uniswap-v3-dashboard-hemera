"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/dashboard/[type]/pair/[id]/page",{

/***/ "(app-pages-browser)/./components/dashboard-header.tsx":
/*!*****************************************!*\
  !*** ./components/dashboard-header.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DashboardHeader: function() { return /* binding */ DashboardHeader; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_AlertCircle_CheckCircle2_Info_lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=AlertCircle,CheckCircle2,Info!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/info.js\");\n/* harmony import */ var _barrel_optimize_names_AlertCircle_CheckCircle2_Info_lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=AlertCircle,CheckCircle2,Info!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/circle-alert.js\");\n/* harmony import */ var _barrel_optimize_names_AlertCircle_CheckCircle2_Info_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=AlertCircle,CheckCircle2,Info!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/circle-check.js\");\n/* harmony import */ var _components_ui_alert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/alert */ \"(app-pages-browser)/./components/ui/alert.tsx\");\n/* provided dependency */ var process = __webpack_require__(/*! process */ \"(app-pages-browser)/./node_modules/next/dist/build/polyfills/process.js\");\n/* __next_internal_client_entry_do_not_use__ DashboardHeader auto */ \nvar _s = $RefreshSig$();\n\n\n\n// Default to false if not set\nconst LIVE_MODE = process.env.NEXT_PUBLIC_LIVE_MODE === \"true\";\nfunction DashboardHeader(param) {\n    let { isDemo = false } = param;\n    _s();\n    const [syncStatus, setSyncStatus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"syncing\");\n    const [lastSynced, setLastSynced] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new Date());\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Only show syncing animation in demo mode or when LIVE_MODE is true\n        if (isDemo || LIVE_MODE) {\n            const timer = setTimeout(()=>{\n                setSyncStatus(\"completed\");\n                setLastSynced(new Date());\n            }, 5000);\n            return ()=>clearTimeout(timer);\n        } else {\n            // Immediately set to completed for non-live mode\n            setSyncStatus(\"completed\");\n            setLastSynced(new Date());\n        }\n    }, [\n        isDemo\n    ]);\n    // If not in live mode and not demo, show the demo notice\n    if (!LIVE_MODE && !isDemo) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"mb-8\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center justify-between mb-4\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-3xl font-bold\",\n                        children: \"Demo Dashboard\"\n                    }, void 0, false, {\n                        fileName: \"/Users/shantanuvishwanadha/Desktop/uniswap-v3-dashboard-hemera/components/dashboard-header.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/shantanuvishwanadha/Desktop/uniswap-v3-dashboard-hemera/components/dashboard-header.tsx\",\n                    lineNumber: 37,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_alert__WEBPACK_IMPORTED_MODULE_2__.Alert, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AlertCircle_CheckCircle2_Info_lucide_react__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            className: \"h-4 w-4\"\n                        }, void 0, false, {\n                            fileName: \"/Users/shantanuvishwanadha/Desktop/uniswap-v3-dashboard-hemera/components/dashboard-header.tsx\",\n                            lineNumber: 41,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_alert__WEBPACK_IMPORTED_MODULE_2__.AlertDescription, {\n                            className: \"ml-2\",\n                            children: \"This is Demo UI. UDFs are not implemented, data that is served is cached.\"\n                        }, void 0, false, {\n                            fileName: \"/Users/shantanuvishwanadha/Desktop/uniswap-v3-dashboard-hemera/components/dashboard-header.tsx\",\n                            lineNumber: 42,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/shantanuvishwanadha/Desktop/uniswap-v3-dashboard-hemera/components/dashboard-header.tsx\",\n                    lineNumber: 40,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/shantanuvishwanadha/Desktop/uniswap-v3-dashboard-hemera/components/dashboard-header.tsx\",\n            lineNumber: 36,\n            columnNumber: 7\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mb-8\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-between mb-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-3xl font-bold\",\n                        children: isDemo ? \"Demo Dashboard\" : \"Live Dashboard\"\n                    }, void 0, false, {\n                        fileName: \"/Users/shantanuvishwanadha/Desktop/uniswap-v3-dashboard-hemera/components/dashboard-header.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, this),\n                    syncStatus === \"completed\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"text-sm text-muted-foreground\",\n                        children: [\n                            \"Last synced: \",\n                            lastSynced.toLocaleTimeString()\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/shantanuvishwanadha/Desktop/uniswap-v3-dashboard-hemera/components/dashboard-header.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/shantanuvishwanadha/Desktop/uniswap-v3-dashboard-hemera/components/dashboard-header.tsx\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_alert__WEBPACK_IMPORTED_MODULE_2__.Alert, {\n                variant: syncStatus === \"completed\" ? \"default\" : \"destructive\",\n                children: [\n                    syncStatus === \"syncing\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AlertCircle_CheckCircle2_Info_lucide_react__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        className: \"h-4 w-4 animate-pulse\"\n                    }, void 0, false, {\n                        fileName: \"/Users/shantanuvishwanadha/Desktop/uniswap-v3-dashboard-hemera/components/dashboard-header.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 11\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AlertCircle_CheckCircle2_Info_lucide_react__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        className: \"h-4 w-4 text-green-500\"\n                    }, void 0, false, {\n                        fileName: \"/Users/shantanuvishwanadha/Desktop/uniswap-v3-dashboard-hemera/components/dashboard-header.tsx\",\n                        lineNumber: 66,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_alert__WEBPACK_IMPORTED_MODULE_2__.AlertDescription, {\n                        className: \"ml-2\",\n                        children: syncStatus === \"syncing\" ? isDemo ? \"Loading cached demo data...\" : \"Syncing with Hemera indexer, please wait...\" : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex items-center justify-between w-full\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: isDemo ? \"Demo data loaded. Connect to UDFs to fetch real-time data.\" : \"Successfully synced with Hemera indexer\"\n                            }, void 0, false, {\n                                fileName: \"/Users/shantanuvishwanadha/Desktop/uniswap-v3-dashboard-hemera/components/dashboard-header.tsx\",\n                                lineNumber: 77,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/shantanuvishwanadha/Desktop/uniswap-v3-dashboard-hemera/components/dashboard-header.tsx\",\n                            lineNumber: 76,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/shantanuvishwanadha/Desktop/uniswap-v3-dashboard-hemera/components/dashboard-header.tsx\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/shantanuvishwanadha/Desktop/uniswap-v3-dashboard-hemera/components/dashboard-header.tsx\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/shantanuvishwanadha/Desktop/uniswap-v3-dashboard-hemera/components/dashboard-header.tsx\",\n        lineNumber: 51,\n        columnNumber: 5\n    }, this);\n}\n_s(DashboardHeader, \"t7x/Kq8/627ox/brawUmHW6rQMA=\");\n_c = DashboardHeader;\nvar _c;\n$RefreshReg$(_c, \"DashboardHeader\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvZGFzaGJvYXJkLWhlYWRlci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFFNEM7QUFDbUI7QUFDQztBQU1oRSw4QkFBOEI7QUFDOUIsTUFBTU8sWUFBWUMsT0FBT0EsQ0FBQ0MsR0FBRyxDQUFDQyxxQkFBcUIsS0FBSztBQUVqRCxTQUFTQyxnQkFBZ0IsS0FBd0M7UUFBeEMsRUFBRUMsU0FBUyxLQUFLLEVBQXdCLEdBQXhDOztJQUM5QixNQUFNLENBQUNDLFlBQVlDLGNBQWMsR0FBR2IsK0NBQVFBLENBQTBCO0lBQ3RFLE1BQU0sQ0FBQ2MsWUFBWUMsY0FBYyxHQUFHZiwrQ0FBUUEsQ0FBTyxJQUFJZ0I7SUFFdkRqQixnREFBU0EsQ0FBQztRQUNSLHFFQUFxRTtRQUNyRSxJQUFJWSxVQUFVTCxXQUFXO1lBQ3ZCLE1BQU1XLFFBQVFDLFdBQVc7Z0JBQ3ZCTCxjQUFjO2dCQUNkRSxjQUFjLElBQUlDO1lBQ3BCLEdBQUc7WUFDSCxPQUFPLElBQU1HLGFBQWFGO1FBQzVCLE9BQU87WUFDTCxpREFBaUQ7WUFDakRKLGNBQWM7WUFDZEUsY0FBYyxJQUFJQztRQUNwQjtJQUNGLEdBQUc7UUFBQ0w7S0FBTztJQUVYLHlEQUF5RDtJQUN6RCxJQUFJLENBQUNMLGFBQWEsQ0FBQ0ssUUFBUTtRQUN6QixxQkFDRSw4REFBQ1M7WUFBSUMsV0FBVTs7OEJBQ2IsOERBQUNEO29CQUFJQyxXQUFVOzhCQUNiLDRFQUFDQzt3QkFBR0QsV0FBVTtrQ0FBcUI7Ozs7Ozs7Ozs7OzhCQUVyQyw4REFBQ2pCLHVEQUFLQTs7c0NBQ0osOERBQUNELHlHQUFJQTs0QkFBQ2tCLFdBQVU7Ozs7OztzQ0FDaEIsOERBQUNoQixrRUFBZ0JBOzRCQUFDZ0IsV0FBVTtzQ0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBTTNDO0lBRUEscUJBQ0UsOERBQUNEO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNDO3dCQUFHRCxXQUFVO2tDQUNYVixTQUFTLG1CQUFtQjs7Ozs7O29CQUU5QkMsZUFBZSw2QkFDZCw4REFBQ1c7d0JBQUtGLFdBQVU7OzRCQUFnQzs0QkFDaENQLFdBQVdVLGtCQUFrQjs7Ozs7Ozs7Ozs7OzswQkFJakQsOERBQUNwQix1REFBS0E7Z0JBQUNxQixTQUFTYixlQUFlLGNBQWMsWUFBWTs7b0JBQ3REQSxlQUFlLDBCQUNkLDhEQUFDWCx5R0FBV0E7d0JBQUNvQixXQUFVOzs7Ozs2Q0FFdkIsOERBQUNuQix5R0FBWUE7d0JBQUNtQixXQUFVOzs7Ozs7a0NBRTFCLDhEQUFDaEIsa0VBQWdCQTt3QkFBQ2dCLFdBQVU7a0NBQ3pCVCxlQUFlLFlBQ2RELFNBQ0UsZ0NBRUEsOERBR0YsOERBQUNTOzRCQUFJQyxXQUFVO3NDQUNiLDRFQUFDRTswQ0FDRVosU0FDRywrREFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFwQjtHQTFFZ0JEO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZGFzaGJvYXJkLWhlYWRlci50c3g/ODU5OCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQWxlcnRDaXJjbGUsIENoZWNrQ2lyY2xlMiwgSW5mbyB9IGZyb20gXCJsdWNpZGUtcmVhY3RcIjtcbmltcG9ydCB7IEFsZXJ0LCBBbGVydERlc2NyaXB0aW9uIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9hbGVydFwiO1xuXG5pbnRlcmZhY2UgRGFzaGJvYXJkSGVhZGVyUHJvcHMge1xuICBpc0RlbW8/OiBib29sZWFuO1xufVxuXG4vLyBEZWZhdWx0IHRvIGZhbHNlIGlmIG5vdCBzZXRcbmNvbnN0IExJVkVfTU9ERSA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0xJVkVfTU9ERSA9PT0gXCJ0cnVlXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBEYXNoYm9hcmRIZWFkZXIoeyBpc0RlbW8gPSBmYWxzZSB9OiBEYXNoYm9hcmRIZWFkZXJQcm9wcykge1xuICBjb25zdCBbc3luY1N0YXR1cywgc2V0U3luY1N0YXR1c10gPSB1c2VTdGF0ZTxcInN5bmNpbmdcIiB8IFwiY29tcGxldGVkXCI+KFwic3luY2luZ1wiKTtcbiAgY29uc3QgW2xhc3RTeW5jZWQsIHNldExhc3RTeW5jZWRdID0gdXNlU3RhdGU8RGF0ZT4obmV3IERhdGUoKSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBPbmx5IHNob3cgc3luY2luZyBhbmltYXRpb24gaW4gZGVtbyBtb2RlIG9yIHdoZW4gTElWRV9NT0RFIGlzIHRydWVcbiAgICBpZiAoaXNEZW1vIHx8IExJVkVfTU9ERSkge1xuICAgICAgY29uc3QgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgc2V0U3luY1N0YXR1cyhcImNvbXBsZXRlZFwiKTtcbiAgICAgICAgc2V0TGFzdFN5bmNlZChuZXcgRGF0ZSgpKTtcbiAgICAgIH0sIDUwMDApO1xuICAgICAgcmV0dXJuICgpID0+IGNsZWFyVGltZW91dCh0aW1lcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIEltbWVkaWF0ZWx5IHNldCB0byBjb21wbGV0ZWQgZm9yIG5vbi1saXZlIG1vZGVcbiAgICAgIHNldFN5bmNTdGF0dXMoXCJjb21wbGV0ZWRcIik7XG4gICAgICBzZXRMYXN0U3luY2VkKG5ldyBEYXRlKCkpO1xuICAgIH1cbiAgfSwgW2lzRGVtb10pO1xuXG4gIC8vIElmIG5vdCBpbiBsaXZlIG1vZGUgYW5kIG5vdCBkZW1vLCBzaG93IHRoZSBkZW1vIG5vdGljZVxuICBpZiAoIUxJVkVfTU9ERSAmJiAhaXNEZW1vKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItOFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBtYi00XCI+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtYm9sZFwiPkRlbW8gRGFzaGJvYXJkPC9oMT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxBbGVydD5cbiAgICAgICAgICA8SW5mbyBjbGFzc05hbWU9XCJoLTQgdy00XCIgLz5cbiAgICAgICAgICA8QWxlcnREZXNjcmlwdGlvbiBjbGFzc05hbWU9XCJtbC0yXCI+XG4gICAgICAgICAgICBUaGlzIGlzIERlbW8gVUkuIFVERnMgYXJlIG5vdCBpbXBsZW1lbnRlZCwgZGF0YSB0aGF0IGlzIHNlcnZlZCBpcyBjYWNoZWQuXG4gICAgICAgICAgPC9BbGVydERlc2NyaXB0aW9uPlxuICAgICAgICA8L0FsZXJ0PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtYi04XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBtYi00XCI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWJvbGRcIj5cbiAgICAgICAgICB7aXNEZW1vID8gXCJEZW1vIERhc2hib2FyZFwiIDogXCJMaXZlIERhc2hib2FyZFwifVxuICAgICAgICA8L2gxPlxuICAgICAgICB7c3luY1N0YXR1cyA9PT0gXCJjb21wbGV0ZWRcIiAmJiAoXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LW11dGVkLWZvcmVncm91bmRcIj5cbiAgICAgICAgICAgIExhc3Qgc3luY2VkOiB7bGFzdFN5bmNlZC50b0xvY2FsZVRpbWVTdHJpbmcoKX1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxBbGVydCB2YXJpYW50PXtzeW5jU3RhdHVzID09PSBcImNvbXBsZXRlZFwiID8gXCJkZWZhdWx0XCIgOiBcImRlc3RydWN0aXZlXCJ9PlxuICAgICAgICB7c3luY1N0YXR1cyA9PT0gXCJzeW5jaW5nXCIgPyAoXG4gICAgICAgICAgPEFsZXJ0Q2lyY2xlIGNsYXNzTmFtZT1cImgtNCB3LTQgYW5pbWF0ZS1wdWxzZVwiIC8+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPENoZWNrQ2lyY2xlMiBjbGFzc05hbWU9XCJoLTQgdy00IHRleHQtZ3JlZW4tNTAwXCIgLz5cbiAgICAgICAgKX1cbiAgICAgICAgPEFsZXJ0RGVzY3JpcHRpb24gY2xhc3NOYW1lPVwibWwtMlwiPlxuICAgICAgICAgIHtzeW5jU3RhdHVzID09PSBcInN5bmNpbmdcIiA/IChcbiAgICAgICAgICAgIGlzRGVtbyA/IChcbiAgICAgICAgICAgICAgXCJMb2FkaW5nIGNhY2hlZCBkZW1vIGRhdGEuLi5cIlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgXCJTeW5jaW5nIHdpdGggSGVtZXJhIGluZGV4ZXIsIHBsZWFzZSB3YWl0Li4uXCJcbiAgICAgICAgICAgIClcbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gdy1mdWxsXCI+XG4gICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgIHtpc0RlbW8gXG4gICAgICAgICAgICAgICAgICA/IFwiRGVtbyBkYXRhIGxvYWRlZC4gQ29ubmVjdCB0byBVREZzIHRvIGZldGNoIHJlYWwtdGltZSBkYXRhLlwiXG4gICAgICAgICAgICAgICAgICA6IFwiU3VjY2Vzc2Z1bGx5IHN5bmNlZCB3aXRoIEhlbWVyYSBpbmRleGVyXCJ9XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvQWxlcnREZXNjcmlwdGlvbj5cbiAgICAgIDwvQWxlcnQ+XG4gICAgPC9kaXY+XG4gICk7XG59Il0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQWxlcnRDaXJjbGUiLCJDaGVja0NpcmNsZTIiLCJJbmZvIiwiQWxlcnQiLCJBbGVydERlc2NyaXB0aW9uIiwiTElWRV9NT0RFIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0xJVkVfTU9ERSIsIkRhc2hib2FyZEhlYWRlciIsImlzRGVtbyIsInN5bmNTdGF0dXMiLCJzZXRTeW5jU3RhdHVzIiwibGFzdFN5bmNlZCIsInNldExhc3RTeW5jZWQiLCJEYXRlIiwidGltZXIiLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0IiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJzcGFuIiwidG9Mb2NhbGVUaW1lU3RyaW5nIiwidmFyaWFudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/dashboard-header.tsx\n"));

/***/ })

});