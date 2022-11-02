"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/categories/[id]/edit",{

/***/ "./pages/categories/[id]/edit.js":
/*!***************************************!*\
  !*** ./pages/categories/[id]/edit.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/esm/index.js\");\n/* harmony import */ var _src_config_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../src/config/routes */ \"./src/config/routes.js\");\n/* harmony import */ var _src_services_CategoryService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../src/services/CategoryService */ \"./src/services/CategoryService.js\");\n/* harmony import */ var _mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/icons-material/ArrowBack */ \"./node_modules/@mui/icons-material/ArrowBack.js\");\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction EditCategory() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var id = router.query.id;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]), categorie = ref[0], setCategorie = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        _src_services_CategoryService__WEBPACK_IMPORTED_MODULE_6__[\"default\"].getById(id).then(function(data) {\n            setCategorie(data);\n        });\n    }, [\n        id\n    ]);\n    var ref1 = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_7__.useForm)(), register = ref1.register, handleSubmit = ref1.handleSubmit, errors = ref1.formState.errors;\n    var updateCategory = function(categorie) {\n        _src_services_CategoryService__WEBPACK_IMPORTED_MODULE_6__[\"default\"].update(id, categorie).then(function(data) {\n            router.push(_src_config_routes__WEBPACK_IMPORTED_MODULE_5__[\"default\"].categories.list);\n            react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.success(\"Category successfully updated!\");\n        }).catch(function(e) {\n            react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.error(\"Erro when updating Category: \".concat(e.message));\n        });\n    };\n    if (!categorie.nil) return \"Carregando...\";\n    console.log(categorie);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Grid, {\n                xs: 6,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Typography, {\n                    variant: \"h4\",\n                    children: [\n                        \"P\\xe1gina de Edi\\xe7\\xe3o do artigo: \",\n                        id\n                    ]\n                }, void 0, true, {\n                    fileName: \"/mnt/c/xampp/htdocs/Pos/trab-pos-ruby/trabalho-pos-front/pages/categories/[id]/edit.js\",\n                    lineNumber: 45,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/mnt/c/xampp/htdocs/Pos/trab-pos-ruby/trabalho-pos-front/pages/categories/[id]/edit.js\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    href: {\n                        pathname: _src_config_routes__WEBPACK_IMPORTED_MODULE_5__[\"default\"].categories.list\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Button, {\n                        variant: \"contained\",\n                        size: \"small\",\n                        startIcon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                            fontSize: \"small\"\n                        }, void 0, false, void 0, void 0),\n                        children: \"Voltar ao Inicio\"\n                    }, void 0, false, {\n                        fileName: \"/mnt/c/xampp/htdocs/Pos/trab-pos-ruby/trabalho-pos-front/pages/categories/[id]/edit.js\",\n                        lineNumber: 53,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/mnt/c/xampp/htdocs/Pos/trab-pos-ruby/trabalho-pos-front/pages/categories/[id]/edit.js\",\n                    lineNumber: 48,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/mnt/c/xampp/htdocs/Pos/trab-pos-ruby/trabalho-pos-front/pages/categories/[id]/edit.js\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit(function(data) {\n                    return updateCategory(data);\n                }),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"field\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.TextField, (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_11__[\"default\"])({\n                                label: \"Nome\",\n                                variant: \"standard\"\n                            }, register(\"name\", {\n                                required: true\n                            })), {\n                                InputLabelProps: {\n                                    shrink: true\n                                },\n                                defaultValue: categorie.name\n                            }), void 0, false, {\n                                fileName: \"/mnt/c/xampp/htdocs/Pos/trab-pos-ruby/trabalho-pos-front/pages/categories/[id]/edit.js\",\n                                lineNumber: 61,\n                                columnNumber: 11\n                            }, this),\n                            errors.title && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Name is required.\"\n                            }, void 0, false, {\n                                fileName: \"/mnt/c/xampp/htdocs/Pos/trab-pos-ruby/trabalho-pos-front/pages/categories/[id]/edit.js\",\n                                lineNumber: 62,\n                                columnNumber: 28\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/mnt/c/xampp/htdocs/Pos/trab-pos-ruby/trabalho-pos-front/pages/categories/[id]/edit.js\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Button, {\n                        variant: \"contained\",\n                        color: \"success\",\n                        type: \"submit\",\n                        children: \"Salvar\"\n                    }, void 0, false, {\n                        fileName: \"/mnt/c/xampp/htdocs/Pos/trab-pos-ruby/trabalho-pos-front/pages/categories/[id]/edit.js\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/mnt/c/xampp/htdocs/Pos/trab-pos-ruby/trabalho-pos-front/pages/categories/[id]/edit.js\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(EditCategory, \"yCWorYt6qgDcbWaVGTyr9gzTMjE=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        react_hook_form__WEBPACK_IMPORTED_MODULE_7__.useForm\n    ];\n});\n_c = EditCategory;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EditCategory);\nvar _c;\n$RefreshReg$(_c, \"EditCategory\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RTtnQ0FBRUMsWUFBWSxFQUFFdEMsU0FBUyxDQUFDdUMsSUFBSTs7Ozs7b0NBQUk7NEJBQ3RKL0IsTUFBTSxDQUFDZ0MsS0FBSyxrQkFBSSw4REFBQ2hCLEdBQUM7MENBQUMsbUJBQWlCOzs7OztvQ0FBSTs7Ozs7OzRCQUNyQztrQ0FFTiw4REFBQ25DLGlEQUFNO3dCQUFDa0MsT0FBTyxFQUFDLFdBQVc7d0JBQUNrQixLQUFLLEVBQUMsU0FBUzt3QkFBQ0MsSUFBSSxFQUFDLFFBQVE7a0NBQUMsUUFFMUQ7Ozs7OzRCQUFTOzs7Ozs7b0JBQ0o7O29CQUNOLENBQ0g7QUFDSixDQUFDO0dBM0RROUMsWUFBWTs7UUFDSlosa0RBQVM7UUFjcEJHLG9EQUFPOzs7QUFmSlMsS0FBQUEsWUFBWTtBQTZEckIsK0RBQWVBLFlBQVksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jYXRlZ29yaWVzL1tpZF0vZWRpdC5qcz9mMzUxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gXCJyZWFjdC1ob29rLWZvcm1cIjtcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSBcInJlYWN0LXRvYXN0aWZ5XCI7XG5pbXBvcnQgeyBCdXR0b24sIEdyaWQsIFR5cG9ncmFwaHksIFRleHRGaWVsZCB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgUk9VVEVTIGZyb20gXCIuLi8uLi8uLi9zcmMvY29uZmlnL3JvdXRlc1wiO1xuaW1wb3J0IENhdGVnb3J5U2VydmljZSBmcm9tIFwiLi4vLi4vLi4vc3JjL3NlcnZpY2VzL0NhdGVnb3J5U2VydmljZVwiO1xuaW1wb3J0IEFycm93QmFja0ljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9BcnJvd0JhY2snO1xuXG5cbmZ1bmN0aW9uIEVkaXRDYXRlZ29yeSgpIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHsgaWQgfSA9IHJvdXRlci5xdWVyeTtcbiAgY29uc3QgW2NhdGVnb3JpZSwgc2V0Q2F0ZWdvcmllXSA9IHVzZVN0YXRlKFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIENhdGVnb3J5U2VydmljZS5nZXRCeUlkKGlkKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBzZXRDYXRlZ29yaWUoZGF0YSlcbiAgICB9KVxuICB9LCBbaWRdKVxuXG4gIGNvbnN0IHtcbiAgICByZWdpc3RlcixcbiAgICBoYW5kbGVTdWJtaXQsXG4gICAgZm9ybVN0YXRlOiB7IGVycm9ycyB9LFxuICB9ID0gdXNlRm9ybSgpO1xuXG4gIGNvbnN0IHVwZGF0ZUNhdGVnb3J5ID0gKGNhdGVnb3JpZSkgPT4ge1xuICAgIENhdGVnb3J5U2VydmljZS51cGRhdGUoaWQsIGNhdGVnb3JpZSkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgcm91dGVyLnB1c2goUk9VVEVTLmNhdGVnb3JpZXMubGlzdClcbiAgICAgIHRvYXN0LnN1Y2Nlc3MoYENhdGVnb3J5IHN1Y2Nlc3NmdWxseSB1cGRhdGVkIWApXG4gICAgfSkuY2F0Y2goKGUpID0+IHtcbiAgICAgIHRvYXN0LmVycm9yKGBFcnJvIHdoZW4gdXBkYXRpbmcgQ2F0ZWdvcnk6ICR7ZS5tZXNzYWdlfWApXG4gICAgfSlcbiAgfVxuXG4gIGlmICghY2F0ZWdvcmllLm5pbCkgcmV0dXJuIGBDYXJyZWdhbmRvLi4uYFxuXG4gIGNvbnNvbGUubG9nKGNhdGVnb3JpZSlcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8R3JpZCB4cz17Nn0+XG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNFwiPlDDoWdpbmEgZGUgRWRpw6fDo28gZG8gYXJ0aWdvOiB7aWR9PC9UeXBvZ3JhcGh5PlxuICAgICAgPC9HcmlkPlxuICAgICAgPHA+XG4gICAgICAgIDxMaW5rXG4gICAgICAgICAgaHJlZj17e1xuICAgICAgICAgICAgcGF0aG5hbWU6IFJPVVRFUy5jYXRlZ29yaWVzLmxpc3QsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIHNpemU9XCJzbWFsbFwiIHN0YXJ0SWNvbj17PEFycm93QmFja0ljb24gZm9udFNpemU9XCJzbWFsbFwiIC8+fT5cbiAgICAgICAgICAgIFZvbHRhciBhbyBJbmljaW9cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9wPlxuXG4gICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0KChkYXRhKSA9PiB1cGRhdGVDYXRlZ29yeShkYXRhKSl9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkXCI+XG4gICAgICAgICAgPFRleHRGaWVsZCBsYWJlbD1cIk5vbWVcIiB2YXJpYW50PVwic3RhbmRhcmRcIiB7Li4ucmVnaXN0ZXIoXCJuYW1lXCIsIHsgcmVxdWlyZWQ6IHRydWUgfSl9IElucHV0TGFiZWxQcm9wcz17e3NocmluazogdHJ1ZSx9fSBkZWZhdWx0VmFsdWU9e2NhdGVnb3JpZS5uYW1lfSAvPlxuICAgICAgICAgIHtlcnJvcnMudGl0bGUgJiYgPHA+TmFtZSBpcyByZXF1aXJlZC48L3A+fVxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBjb2xvcj1cInN1Y2Nlc3NcIiB0eXBlPVwic3VibWl0XCI+XG4gICAgICAgICAgU2FsdmFyXG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9mb3JtPlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0Q2F0ZWdvcnk7Il0sIm5hbWVzIjpbIkxpbmsiLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZUZvcm0iLCJ0b2FzdCIsIkJ1dHRvbiIsIkdyaWQiLCJUeXBvZ3JhcGh5IiwiVGV4dEZpZWxkIiwiUk9VVEVTIiwiQ2F0ZWdvcnlTZXJ2aWNlIiwiQXJyb3dCYWNrSWNvbiIsIkVkaXRDYXRlZ29yeSIsInJvdXRlciIsImlkIiwicXVlcnkiLCJjYXRlZ29yaWUiLCJzZXRDYXRlZ29yaWUiLCJnZXRCeUlkIiwidGhlbiIsImRhdGEiLCJyZWdpc3RlciIsImhhbmRsZVN1Ym1pdCIsImZvcm1TdGF0ZSIsImVycm9ycyIsInVwZGF0ZUNhdGVnb3J5IiwidXBkYXRlIiwicHVzaCIsImNhdGVnb3JpZXMiLCJsaXN0Iiwic3VjY2VzcyIsImNhdGNoIiwiZSIsImVycm9yIiwibWVzc2FnZSIsIm5pbCIsImNvbnNvbGUiLCJsb2ciLCJ4cyIsInZhcmlhbnQiLCJwIiwiaHJlZiIsInBhdGhuYW1lIiwic2l6ZSIsInN0YXJ0SWNvbiIsImZvbnRTaXplIiwiZm9ybSIsIm9uU3VibWl0IiwiZGl2IiwiY2xhc3NOYW1lIiwibGFiZWwiLCJyZXF1aXJlZCIsIklucHV0TGFiZWxQcm9wcyIsInNocmluayIsImRlZmF1bHRWYWx1ZSIsIm5hbWUiLCJ0aXRsZSIsImNvbG9yIiwidHlwZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/categories/[id]/edit.js\n"));

/***/ })

});