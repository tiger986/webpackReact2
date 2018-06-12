/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = window.React;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = window.$;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\Users\\tiger\\Desktop\\reactD\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\Users\\tiger\\Desktop\\reactD\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var home = function (_React$Component) {
	_inherits(home, _React$Component);

	function home(props) {
		_classCallCheck(this, home);

		return _possibleConstructorReturn(this, (home.__proto__ || Object.getPrototypeOf(home)).call(this, props));
	}

	_createClass(home, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"div",
				null,
				_react2.default.createElement(
					"div",
					{ className: "head" },
					_react2.default.createElement(
						"p",
						null,
						"L O L"
					)
				),
				_react2.default.createElement(
					"div",
					{ className: "content" },
					this.props.children
				),
				_react2.default.createElement(
					"div",
					{ className: "foot" },
					_react2.default.createElement(
						"p",
						null,
						"\u8BF7\u62BD\u9009\u5C5E\u4E8E\u4F60\u7684\u82F1\u96C4\u5427!"
					)
				)
			);
		}
	}]);

	return home;
}(_react2.default.Component);

exports.default = home;

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\Users\\tiger\\Desktop\\reactD\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "home.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\Users\\tiger\\Desktop\\reactD\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\Users\\tiger\\Desktop\\reactD\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _jquery = __webpack_require__(1);

var _jquery2 = _interopRequireDefault(_jquery);

var _son = __webpack_require__(9);

var _son2 = _interopRequireDefault(_son);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var list = function (_React$Component) {
    _inherits(list, _React$Component);

    function list(props) {
        _classCallCheck(this, list);

        return _possibleConstructorReturn(this, (list.__proto__ || Object.getPrototypeOf(list)).call(this, props));
    }

    _createClass(list, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(
                    "div",
                    { className: "con" },
                    _react2.default.createElement(
                        "div",
                        { className: "con_up" },
                        _react2.default.createElement(_son2.default, null)
                    )
                )
            );
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {}
    }]);

    return list;
}(_react2.default.Component);

exports.default = list;

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\Users\\tiger\\Desktop\\reactD\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "list.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\Users\\tiger\\Desktop\\reactD\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\Users\\tiger\\Desktop\\reactD\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.store = exports.mapDispatchToProps = exports.mapStateToProps = undefined;

var _redux = __webpack_require__(11);

function changer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { title: '首页' };
  var action = arguments[1];

  switch (action.type) {
    case 'SETTITLE':
      return { title: action.title };
    default:
      return state;
  }
}

// 将 Redux state 转化成 组件的 props
function mapStateToProps(state) {
  return {
    value: state.title
  };
}

// 将 Redux actions 转化成 组件的 props
function mapDispatchToProps(dispatch) {
  return {
    onChange: function onChange(action) {
      return dispatch(action);
    }
  };
}

var store = (0, _redux.createStore)(changer);

exports.mapStateToProps = mapStateToProps;
exports.mapDispatchToProps = mapDispatchToProps;
exports.store = store;

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\Users\\tiger\\Desktop\\reactD\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "store.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = window.ReactDOM;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = window.ReactRedux;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = window.ReactRouter;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\Users\\tiger\\Desktop\\reactD\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\Users\\tiger\\Desktop\\reactD\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _jquery = __webpack_require__(1);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var son = function (_React$Component) {
	_inherits(son, _React$Component);

	function son(props) {
		_classCallCheck(this, son);

		var _this = _possibleConstructorReturn(this, (son.__proto__ || Object.getPrototypeOf(son)).call(this, props));

		_this.choose = function (index) {
			(0, _jquery2.default)("person").find("div").eq(index).addClass("hover");
		};

		_this.state = {
			choosed: 0
		};
		return _this;
	}

	_createClass(son, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"div",
				{ className: "person" },
				_react2.default.createElement(
					"div",
					{ onClick: this.choose.bind(this, 0) },
					_react2.default.createElement("img", { src: "imgs/logo.jpg" }),
					_react2.default.createElement("img", { src: "imgs/0.jpg" })
				),
				_react2.default.createElement(
					"div",
					{ onClick: this.choose.bind(this, 1) },
					_react2.default.createElement("img", { src: "imgs/logo.jpg" }),
					_react2.default.createElement("img", { src: "imgs/0.jpg" })
				),
				_react2.default.createElement(
					"div",
					{ onClick: this.choose.bind(this, 2) },
					_react2.default.createElement("img", { src: "imgs/logo.jpg" }),
					_react2.default.createElement("img", { src: "imgs/0.jpg" })
				),
				_react2.default.createElement(
					"div",
					{ onClick: this.choose.bind(this, 3) },
					_react2.default.createElement("img", { src: "imgs/logo.jpg" }),
					_react2.default.createElement("img", { src: "imgs/0.jpg" })
				),
				_react2.default.createElement(
					"div",
					{ onClick: this.choose.bind(this, 4) },
					_react2.default.createElement("img", { src: "imgs/logo.jpg" }),
					_react2.default.createElement("img", { src: "imgs/0.jpg" })
				),
				_react2.default.createElement(
					"div",
					{ onClick: this.choose.bind(this, 5) },
					_react2.default.createElement("img", { src: "imgs/logo.jpg" }),
					_react2.default.createElement("img", { src: "imgs/0.jpg" })
				),
				_react2.default.createElement(
					"div",
					{ onClick: this.choose.bind(this, 6) },
					_react2.default.createElement("img", { src: "imgs/logo.jpg" }),
					_react2.default.createElement("img", { src: "imgs/0.jpg" })
				),
				_react2.default.createElement(
					"div",
					{ onClick: this.choose.bind(this, 7) },
					_react2.default.createElement("img", { src: "imgs/logo.jpg" }),
					_react2.default.createElement("img", { src: "imgs/0.jpg" })
				),
				_react2.default.createElement(
					"div",
					{ onClick: this.choose.bind(this, 8) },
					_react2.default.createElement("img", { src: "imgs/logo.jpg" }),
					_react2.default.createElement("img", { src: "imgs/0.jpg" })
				),
				_react2.default.createElement(
					"div",
					{ onClick: this.choose.bind(this, 9) },
					_react2.default.createElement("img", { src: "imgs/logo.jpg" }),
					_react2.default.createElement("img", { src: "imgs/0.jpg" })
				)
			);
		}
	}, {
		key: "componentDidMount",
		value: function componentDidMount() {}
	}]);

	return son;
}(_react2.default.Component);

exports.default = son;

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\Users\\tiger\\Desktop\\reactD\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "son.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\Users\\tiger\\Desktop\\reactD\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\Users\\tiger\\Desktop\\reactD\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(6);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouter = __webpack_require__(8);

var _reactRedux = __webpack_require__(7);

var _store = __webpack_require__(5);

var _home = __webpack_require__(3);

var _home2 = _interopRequireDefault(_home);

var _list = __webpack_require__(4);

var _list2 = _interopRequireDefault(_list);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

__webpack_require__(2);

_reactDom2.default.render(_react2.default.createElement(
  _reactRedux.Provider,
  { store: _store.store },
  _react2.default.createElement(
    _reactRouter.Router,
    { history: _reactRouter.hashHistory },
    _react2.default.createElement(
      _reactRouter.Route,
      { path: '/', component: _home2.default },
      _react2.default.createElement(_reactRouter.IndexRedirect, { to: '/list' }),
      _react2.default.createElement(_reactRouter.Route, { path: 'list', title: '\u9996\u9875', component: _list2.default })
    )
  )
), document.getElementById('root'));

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\Users\\tiger\\Desktop\\reactD\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = window.Redux;

/***/ })
/******/ ]);