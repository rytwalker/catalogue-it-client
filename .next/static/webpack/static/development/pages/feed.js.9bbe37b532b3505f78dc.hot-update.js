webpackHotUpdate("static/development/pages/feed.js",{

/***/ "./src/components/FeedCollectable/index.js":
/*!*************************************************!*\
  !*** ./src/components/FeedCollectable/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _jsxFileName = "/Users/ryanwalker/Development/catalogue-it-client/src/components/FeedCollectable/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject7() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 1.8rem;\n\n  button {\n    display: block;\n    cursor: pointer;\n    border: none;\n    background: none;\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  height: 200px;\n  width: 100%;\n  border-radius: 3px;\n  background: #c4c4c4;\n  margin-bottom: 1.5rem;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  font-size: 2rem;\n  text-transform: uppercase;\n  font-weight: 700;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  font-size: 1.8rem;\n  margin-bottom: 3rem;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  font-size: 2.4rem;\n  font-weight: 700;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  font-weight: 700;\n  text-transform: uppercase;\n  font-size: 2.4rem;\n  display: flex;\n  align-items: center;\n  margin-bottom: 3rem;\n\n  span {\n    margin-right: 1rem;\n    border-radius: 50%;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  column-gap: 2rem;\n  margin-bottom: 6rem;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




function FeedCollectable() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(100),
      likes = _useState[0],
      setLikes = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      hasLiked = _useState2[0],
      setHasLiked = _useState2[1];

  var handleLikeCollectable = function handleLikeCollectable() {
    if (hasLiked) {
      setLikes(likes - 1);
      setHasLiked(false);
    } else {
      setLikes(likes + 1);
      setHasLiked(true);
    }
  };

  return __jsx(StyledFeedCollectable, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx(User, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), "RYANWALKER"), __jsx(Title, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "Title"), __jsx(Description, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "This is a description etc etc etc"), __jsx(Category, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "Vinyl")), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx(ImageContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }), __jsx(LikesBar, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, likes, " likes", " ", __jsx("button", {
    onClick: handleLikeCollectable,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: hasLiked ? "red" : "none",
    stroke: hasLiked ? "none" : "#393939",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "feather feather-heart",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx("path", {
    d: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }))))));
}

var StyledFeedCollectable = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject());
var User = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject2());
var Title = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject3());
var Description = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject4());
var Category = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject5());
var ImageContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject6());
var LikesBar = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject7());
/* harmony default export */ __webpack_exports__["default"] = (FeedCollectable);

/***/ })

})
//# sourceMappingURL=feed.js.9bbe37b532b3505f78dc.hot-update.js.map