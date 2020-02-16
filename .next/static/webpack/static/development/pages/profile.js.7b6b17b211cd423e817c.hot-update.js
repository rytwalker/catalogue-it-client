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

var _jsxFileName = "/Users/ryanwalker/Development/catalogue-it-client/src/components/Modal/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 30vw;\n  background: #fff;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  height: 100vh;\n  width: 100vw;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



function Modal(_ref) {
  var children = _ref.children;
  return __jsx(ModalBackground, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx(StyledModal, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, children));
}

var ModalBackground = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject());
var StyledModal = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject2());
/* harmony default export */ __webpack_exports__["default"] = (Modal);

/***/ }),

/***/ "./src/pages/profile.js":
/*!******************************!*\
  !*** ./src/pages/profile.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ProfileHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/ProfileHeader */ "./src/components/ProfileHeader/index.js");
/* harmony import */ var _components_CollectionsNav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/CollectionsNav */ "./src/components/CollectionsNav/index.js");
/* harmony import */ var _containers_ProfileCollectables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../containers/ProfileCollectables */ "./src/containers/ProfileCollectables.js");
/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Modal */ "./src/components/Modal/index.js");
var _jsxFileName = "/Users/ryanwalker/Development/catalogue-it-client/src/pages/profile.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function Profile() {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx(_components_Modal__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), __jsx(_components_ProfileHeader__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), __jsx(_components_CollectionsNav__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), __jsx(_containers_ProfileCollectables__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Profile);

/***/ })

})
//# sourceMappingURL=profile.js.7b6b17b211cd423e817c.hot-update.js.map