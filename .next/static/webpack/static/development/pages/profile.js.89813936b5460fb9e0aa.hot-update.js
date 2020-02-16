webpackHotUpdate("static/development/pages/profile.js",{

/***/ "./src/components/Modal/index.js":
/*!***************************************!*\
  !*** ./src/components/Modal/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _hooks_useOnClickOutside__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/useOnClickOutside */ "./src/hooks/useOnClickOutside.js");

var _jsxFileName = "/Users/ryanwalker/Development/catalogue-it-client/src/components/Modal/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  border: none;\n  background: none;\n  cursor: pointer;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 30vw;\n  background: #fff;\n  padding: 1rem;\n  position: relative;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  height: 100vh;\n  width: 100vw;\n  background: rgba(0, 0, 0, 0.2);\n  position: fixed;\n  top: 0;\n  left: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





function Modal(_ref) {
  var children = _ref.children,
      _ref$closeModal = _ref.closeModal,
      closeModal = _ref$closeModal === void 0 ? null : _ref$closeModal;
  var ref = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  Object(_hooks_useOnClickOutside__WEBPACK_IMPORTED_MODULE_3__["default"])(ref, closeModal);
  return __jsx(ModalBackground, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx(StyledModal, {
    ref: ref,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx(CloseButton, {
    onClick: closeModal,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "feather feather-x-circle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("circle", {
    cx: "12",
    cy: "12",
    r: "10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), __jsx("line", {
    x1: "15",
    y1: "9",
    x2: "9",
    y2: "15",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }), __jsx("line", {
    x1: "9",
    y1: "9",
    x2: "15",
    y2: "15",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }))), children));
}

var ModalBackground = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject());
var StyledModal = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject2());
var CloseButton = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].button(_templateObject3());
/* harmony default export */ __webpack_exports__["default"] = (Modal);

/***/ })

})
//# sourceMappingURL=profile.js.89813936b5460fb9e0aa.hot-update.js.map