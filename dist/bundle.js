(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("ReactDOM"), require("React"));
	else if(typeof define === 'function' && define.amd)
		define(["ReactDOM", "React"], factory);
	else if(typeof exports === 'object')
		exports["crumbs"] = factory(require("ReactDOM"), require("React"));
	else
		root["crumbs"] = factory(root["ReactDOM"], root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_3__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _reactDom = __webpack_require__(1);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _MyApp = __webpack_require__(2);
	
	var _MyApp2 = _interopRequireDefault(_MyApp);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Created by Shweta on 8/21/16.
	 */
	_reactDom2.default.render(React.createElement(_MyApp2.default, null), document.getElementById('content'));

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _MyElement = __webpack_require__(4);
	
	var _MyElement2 = _interopRequireDefault(_MyElement);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by Shweta on 8/21/16.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	
	var MyApp = function (_React$Component) {
		_inherits(MyApp, _React$Component);
	
		function MyApp(props) {
			_classCallCheck(this, MyApp);
	
			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(MyApp).call(this, props));
	
			console.log("CONSTRUCTOR of myAPP");
	
			_this.increment = _this.increment.bind(_this);
	
			_this.state = {
				number: 9
			};
			return _this;
		}
	
		_createClass(MyApp, [{
			key: 'increment',
			value: function increment() {
				console.log("BUTTON click handler");
				this.setState({
					number: this.state.number
				});
			}
		}, {
			key: 'componentWillMount',
			value: function componentWillMount() {
				console.log("COMPONENT WILL MOUNT of MyApp");
			}
		}, {
			key: 'render',
			value: function render() {
				console.log("RENDER MyAPP");
	
				return _react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(
						'button',
						{ onClick: this.increment },
						'Click'
					),
					_react2.default.createElement(_MyElement2.default, { number: this.state.number })
				);
			}
		}]);
	
		return MyApp;
	}(_react2.default.Component);
	
	exports.default = MyApp;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var MyElement = function (_React$Component) {
		_inherits(MyElement, _React$Component);
	
		function MyElement(props) //BIRTH
		{
			_classCallCheck(this, MyElement);
	
			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(MyElement).call(this, props));
	
			console.log("calling the CONSTRUCTOR of MyElement");
			_this.state = { //setting the initial state for ES6
				greeting: "Hello",
				number: props.number
			};
			return _this;
		}
	
		_createClass(MyElement, [{
			key: "componentWillReceiveProps",
			value: function componentWillReceiveProps(nextProps) {
				console.log("calling component WILL RECEIVE PROPS of MyElement");
				if (nextProps.number != this.props.number) {
					this.setState({ number: nextProps.number });
				}
			}
		}, {
			key: "shouldComponentUpdate",
			value: function shouldComponentUpdate(nextProps) {
				console.log("calling SHOULD component UPDATE of MyElement");
				if (nextProps.number != this.props.number) {
					return true;
				} else return false;
			}
		}, {
			key: "componentWillUpdate",
			value: function componentWillUpdate() {
				console.log("calling component WILL UPDATE of MyElement");
			}
		}, {
			key: "componentDidUpdate",
			value: function componentDidUpdate() {
				console.log("calling component DID UPDATE of MyElement");
			}
	
			/*getInitialState()//getInitialState is not used in ES6 classes.//BIRTH
	  {
	  	console.log("calling getInitialState of MyElement");
	  	return { greeting: "Hello Alpha"}
	  }*/
	
		}, {
			key: "componentWillMount",
			value: function componentWillMount() //BIRTH
			{
				console.log("calling component WILL MOUNT of MyElement");
				//this.setState({greeting : "Hello Shweta"}); does not initiate one more render even if state is updated
			}
		}, {
			key: "componentDidMount",
			value: function componentDidMount() //BIRTH
			{
				console.log("calling the component DID MOUNT of MyElement");
			}
		}, {
			key: "render",
			value: function render() //BIRTH
			{
				console.log("calling the RENDER of MyElement");
	
				return _react2.default.createElement(
					"div",
					null,
					this.state.greeting,
					" ",
					this.state.number
				);
			}
		}]);
	
		return MyElement;
	}(_react2.default.Component);
	
	exports.default = MyElement;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=bundle.js.map