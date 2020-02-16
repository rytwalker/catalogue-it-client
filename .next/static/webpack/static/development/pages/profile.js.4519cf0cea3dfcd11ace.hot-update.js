webpackHotUpdate("static/development/pages/profile.js",{

/***/ "./src/components/CollectionsNav/index.js":
/*!************************************************!*\
  !*** ./src/components/CollectionsNav/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Modal */ "./src/components/Modal/index.js");
/* harmony import */ var _NewCollectableForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../NewCollectableForm */ "./src/components/NewCollectableForm/index.js");

var _jsxFileName = "/Users/ryanwalker/Development/catalogue-it-client/src/components/CollectionsNav/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  font-size: 2.4rem;\n  font-family: inherit;\n  text-transform: uppercase;\n  border: none;\n  border-radius: none;\n  cursor: pointer;\n  margin-left: ", ";\n  font-weight: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  align-items: center;\n  margin-bottom: 4rem;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






function CollectionsNav() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      showModal = _useState[0],
      setShowModal = _useState[1];

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, showModal && __jsx(_Modal__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx(_NewCollectableForm__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  })), __jsx(Nav, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx(Button, {
    bold: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "Most Recent"), " | ", __jsx(Button, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "Collections"), __jsx(Button, {
    onClick: function onClick() {
      return setShowModal(!showModal);
    },
    alignRight: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "New Collectable")));
}

var Nav = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].nav(_templateObject());
var Button = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].button(_templateObject2(), function (_ref) {
  var alignRight = _ref.alignRight;
  return alignRight ? "auto" : 0;
}, function (_ref2) {
  var bold = _ref2.bold;
  return bold ? "700" : "400";
});
/* harmony default export */ __webpack_exports__["default"] = (CollectionsNav);

/***/ })

})
//# sourceMappingURL=profile.js.4519cf0cea3dfcd11ace.hot-update.js.map