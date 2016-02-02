(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("ReactDOM"), require("Weave"), require("React"));
	else if(typeof define === 'function' && define.amd)
		define(["ReactDOM", "Weave", "React"], factory);
	else if(typeof exports === 'object')
		exports["crumbs"] = factory(require("ReactDOM"), require("Weave"), require("React"));
	else
		root["crumbs"] = factory(root["ReactDOM"], root["Weave"], root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_4__) {
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
	
	var _Weave = __webpack_require__(2);
	
	var _Weave2 = _interopRequireDefault(_Weave);
	
	var _CrumbComponent = __webpack_require__(3);
	
	var _CrumbComponent2 = _interopRequireDefault(_CrumbComponent);
	
	__webpack_require__(11);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Created by Shweta on 1/5/2016.
	 */
	console.log("webpack works");
	
	window.dashboard_weave = new _Weave2.default(); //separate weave core for sessioning entire dashboard
	//communicate between these two using path API
	window.weave = new _Weave2.default(); //viz weave
	
	var busyStatus;
	busyStatus = window.dashboard_weave.root.requestObject("isWeaveBusy", weavejs.core.LinkableBoolean, true);
	
	loadWeaveFile("blah.weave");
	//rendering the data crumbs
	
	function loadWeaveFile(filename) {
	    //console.log("loading ", filename);
	    busyStatus.value = true; //setting default value as false
	
	    //loading the weave session state
	    WeaveUI.loadLayout(weave, filename, "weaveElt", weaveReady);
	};
	
	//this callback runs when viz weave and sessions state loads
	function weaveReady() {
	    console.log("weave is ready");
	    busyStatus.value = false; //once weave is ready set to true
	    var tree = new weavejs.data.hierarchy.WeaveRootDataTreeNode(weave.root); //new tree for every new session state load
	
	    //MAIN COMPONENT RENDER
	    _reactDom2.default.render(React.createElement(_CrumbComponent2.default, { tree: tree }), document.getElementById("content"));
	}

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _CrumbContainer = __webpack_require__(5);
	
	var _CrumbContainer2 = _interopRequireDefault(_CrumbContainer);
	
	var _CrumbComponentConfig = __webpack_require__(7);
	
	var _CrumbComponentConfig2 = _interopRequireDefault(_CrumbComponentConfig);
	
	var _crumbOptionsList = __webpack_require__(9);
	
	var _crumbOptionsList2 = _interopRequireDefault(_crumbOptionsList);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var CrumbComponent = (function (_React$Component) {
	    _inherits(CrumbComponent, _React$Component);
	
	    function CrumbComponent(props) {
	        _classCallCheck(this, CrumbComponent);
	
	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(CrumbComponent).call(this, props));
	
	        _this.tree = _this.props.tree; //TODO decide whether to store the tree reference
	        _this.settings = _this.settings ? _this.settings : new _CrumbComponentConfig2.default();
	        _this.handleActiveCrumbChange = _this.handleActiveCrumbChange.bind(_this);
	
	        //init settings
	        _this.settings.activeCrumbName.value = _this.tree.getLabel();
	        _this.registry = {}; //holds a map of active crumb names with an object   name :  {name , actual tree node, parent node, children nodes}
	        _this.registry[_this.settings.activeCrumbName.value] = _this.tree; //first default crumb
	        _this.settings.crumbTrail = Object.keys(_this.registry);
	        return _this;
	    }
	
	    //callback whenever the active crumb name is changed
	
	    _createClass(CrumbComponent, [{
	        key: 'handleActiveCrumbChange',
	        value: function handleActiveCrumbChange() {}
	        //get the new trail from the registry
	        //get the nodes
	        //toggle list visibility
	        //call force update
	
	        //REACT LIFECYCLE METHODS
	
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this.settings.activeCrumbName.addImmediateCallback(this, this.handleActiveCrumbChange);
	            Weave.getCallbacks(this.tree).addGroupedCallback(this, this.forceUpdate);
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            this.settings.activeCrumbName.removeCallback(this, handleActiveCrumbChange);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var activeNode = this.registry[this.settings.activeCrumbName.value];
	            //console.log("active node", activeNode);
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(_CrumbContainer2.default, { activeCrumbName: this.settings.activeCrumbName, crumbTrail: this.settings.crumbTrail }),
	                _react2.default.createElement(_crumbOptionsList2.default, { activeCrumbName: this.settings.activeCrumbName, nodes: activeNode.getChildren() })
	            );
	        }
	    }]);
	
	    return CrumbComponent;
	})(_react2.default.Component);
	
	exports.default = CrumbComponent;

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Crumb = __webpack_require__(6);
	
	var _Crumb2 = _interopRequireDefault(_Crumb);
	
	var _CrumbComponentConfig = __webpack_require__(7);
	
	var _CrumbComponentConfig2 = _interopRequireDefault(_CrumbComponentConfig);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var CrumbContainer = (function (_React$Component) {
	    _inherits(CrumbContainer, _React$Component);
	
	    function CrumbContainer(props) {
	        _classCallCheck(this, CrumbContainer);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(CrumbContainer).call(this, props));
	    }
	
	    //CHANGES ACTIVE CRUMB NAME
	
	    _createClass(CrumbContainer, [{
	        key: 'handleCrumbClick',
	        value: function handleCrumbClick(name, index) {
	            this.props.activeCrumbName.value = name;
	            console.log("changing aCrumb from container", this.props.activeCrumbName.value, index);
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {}
	    }, {
	        key: 'render',
	        value: function render() {
	            var cr = this.props.crumbTrail;
	            var crumbsUI = cr.map((function (name, index) {
	                return _react2.default.createElement(_Crumb2.default, { callback: this.handleCrumbClick.bind(this, name, index), key: index, label: name });
	            }).bind(this));
	
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    'div',
	                    { className: 'crumbsContainer' },
	                    crumbsUI
	                )
	            );
	        }
	    }]);
	
	    return CrumbContainer;
	})(_react2.default.Component);
	
	exports.default = CrumbContainer;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Crumb = (function (_React$Component) {
	    _inherits(Crumb, _React$Component);
	
	    function Crumb(props) {
	        _classCallCheck(this, Crumb);
	
	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Crumb).call(this, props));
	
	        _this.state = { hover: false, crumbLabel: null };
	        _this.onMouse = _this.onMouse.bind(_this); // binding using the 'this' instance needed only for es6, normally done by React.createClass
	        _this.mouseOut = _this.mouseOut.bind(_this);
	        return _this;
	    }
	
	    _createClass(Crumb, [{
	        key: "onMouse",
	        value: function onMouse() {
	            this.setState({ hover: true });
	        }
	    }, {
	        key: "mouseOut",
	        value: function mouseOut() {
	            this.setState({ hover: false });
	        }
	    }, {
	        key: "componentWillMount",
	        value: function componentWillMount() {
	
	            this.setState({ crumbLabel: this.props.label });
	        }
	    }, {
	        key: "render",
	        value: function render() {
	
	            var crumbStyle = this.state.hover ? "onCrumbHover" : "crumb";
	
	            return _react2.default.createElement(
	                "div",
	                { onMouseOver: this.onMouse, onMouseOut: this.mouseOut, onClick: this.props.callback, className: crumbStyle },
	                this.state.crumbLabel
	            );
	        }
	    }]);
	
	    return Crumb;
	})(_react2.default.Component);
	
	exports.default = Crumb;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _CrumbContainerConfig = __webpack_require__(8);
	
	var _CrumbContainerConfig2 = _interopRequireDefault(_CrumbContainerConfig);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var CrumbComponentConfig = function CrumbComponentConfig() {
	    _classCallCheck(this, CrumbComponentConfig);
	
	    //setting session state
	    Object.defineProperties(this, {
	        crumbContainer: {
	            value: Weave.linkableChild(this, new _CrumbContainerConfig2.default())
	        },
	        activeCrumbName: {
	            value: Weave.linkableChild(this, new weavejs.core.LinkableString())
	        },
	        activeIndex: {
	            value: Weave.linkableChild(this, new weavejs.core.LinkableNumber(0))
	        }
	    });
	};
	
	Weave.registerClass('crumbs.CrumbComponentConfig', CrumbComponentConfig);
	exports.default = CrumbComponentConfig;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _Weave = __webpack_require__(2);
	
	var _Weave2 = _interopRequireDefault(_Weave);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var CrumbContainerConfig = function CrumbContainerConfig() {
	    _classCallCheck(this, CrumbContainerConfig);
	
	    Object.defineProperties(this, {
	        crumbTrail: {
	            value: _Weave2.default.linkableChild(this, new weavejs.core.LinkableVariable(Array))
	        }
	    });
	};
	
	_Weave2.default.registerClass('crumbs.CrumbContainerConfig', CrumbContainerConfig);
	exports.default = CrumbContainerConfig;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _C_ListItem = __webpack_require__(10);
	
	var _C_ListItem2 = _interopRequireDefault(_C_ListItem);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var CrumbOptionsList = (function (_React$Component) {
	    _inherits(CrumbOptionsList, _React$Component);
	
	    function CrumbOptionsList(props) {
	        _classCallCheck(this, CrumbOptionsList);
	
	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(CrumbOptionsList).call(this, props));
	
	        _this.state = { listFilter: "" };
	        _this.createListElement = _this.createListElement.bind(_this);
	        _this.handleChange = _this.handleChange.bind(_this);
	        return _this;
	    }
	
	    _createClass(CrumbOptionsList, [{
	        key: 'handleChange',
	        value: function handleChange(event) {
	            var value;
	            value = event.target.value;
	            this.setState({ listFilter: value });
	        }
	
	        //when an active crumb is selected get its siblings
	
	    }, {
	        key: 'get_ListOptions',
	        value: function get_ListOptions() {}
	
	        //CHANGES ACTIVE CRUMB NAME
	
	    }, {
	        key: 'handle_Options_Click',
	        value: function handle_Options_Click(treeItem) {
	            this.props.activeCrumbName.value = treeItem.getLabel();
	            console.log("changing aCrumb from list options", this.props.activeCrumbName.value);
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {}
	    }, {
	        key: 'filtered',
	        value: function filtered(value) {
	            var label = value.getLabel();
	            return label.indexOf(this.state.listFilter) != -1;
	        }
	    }, {
	        key: 'createListElement',
	        value: function createListElement() {
	            var list;
	            if (this.state.listFilter) list = this.props.nodes.filter(this.filtered.bind(this));else list = this.props.nodes;
	
	            var x = list.map((function (node, index) {
	                return _react2.default.createElement(_C_ListItem2.default, { key: index, treeNode: node, callback: this.handle_Options_Click.bind(this, node) });
	            }).bind(this));
	
	            return x;
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	
	            var listUI = this.createListElement();
	
	            return _react2.default.createElement(
	                'div',
	                { className: 'optionList' },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'searchC' },
	                    _react2.default.createElement('input', { type: 'text', value: this.state.listFilter, onChange: this.handleChange, className: 'searchFilter' }),
	                    _react2.default.createElement('i', { className: 'fa fa-search' })
	                ),
	                _react2.default.createElement(
	                    'div',
	                    null,
	                    _react2.default.createElement(
	                        'ul',
	                        null,
	                        listUI
	                    )
	                )
	            );
	        }
	    }]);
	
	    return CrumbOptionsList;
	})(_react2.default.Component);
	
	exports.default = CrumbOptionsList;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var C_ListItem = (function (_React$Component) {
	    _inherits(C_ListItem, _React$Component);
	
	    function C_ListItem(props) {
	        _classCallCheck(this, C_ListItem);
	
	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(C_ListItem).call(this, props));
	
	        _this.label = props.treeNode.getLabel();
	        _this.mouseOver = _this.mouseOver.bind(_this);
	        _this.mouseOut = _this.mouseOut.bind(_this);
	        _this.state = { hover: false };
	        /* if(!this.label)
	             this.label = props.treeItem.metadata.title;*/
	        //this.updateLabel = this.updateLabel.bind(this);
	        return _this;
	    }
	
	    _createClass(C_ListItem, [{
	        key: "mouseOver",
	        value: function mouseOver() {
	            this.setState({ hover: true });
	        }
	    }, {
	        key: "mouseOut",
	        value: function mouseOut() {
	            this.setState({ hover: false });
	        }
	    }, {
	        key: "componentDidMount",
	        value: function componentDidMount() {}
	    }, {
	        key: "render",
	        value: function render() {
	            var listStyle = this.state.hover ? "onC_ItemHover" : null;
	            return _react2.default.createElement(
	                "li",
	                { onMouseOver: this.mouseOver, onMouseOut: this.mouseOut, className: listStyle, onClick: this.props.callback },
	                " ",
	                this.props.treeNode.getLabel()
	            );
	        }
	    }]);
	
	    return C_ListItem;
	})(_react2.default.Component);
	
	exports.default = C_ListItem;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(12);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(14)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./style.css", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./style.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(13)();
	// imports
	
	
	// module
	exports.push([module.id, ".crumbsContainer{\r\n    border: solid 1px #619BD4;\r\n    border-radius : 7px;\r\n    /*display: inline-block;*/\r\n    overflow-x : auto;\r\n    width: 45%;\r\n    min-height: 30px;\r\n    margin : 5px 5px 0 5px;\r\n}\r\n\r\n.crumb {\r\n    display: inline-block;\r\n    padding : 5px 5px 5px 5px;\r\n    float:left;\r\n    margin: 0 0 0 3px;\r\n    font-size: 12px;\r\n}\r\n\r\n.onCrumbHover {\r\n    background-color: #a5f8ff;\r\n    display: inline-block;\r\n    padding : 5px 5px 5px 5px;\r\n    float:left;\r\n    margin: 0 0 0 3px;\r\n    font-size: 12px;\r\n}\r\n\r\n.optionList{\r\n    border:solid 1px #619BD4;\r\n    width: 45%;\r\n    max-height : 500px;\r\n    border-radius : 7px;\r\n    padding : 5px 5px 5px 5px;\r\n    margin : 0 5px 5px 5px;\r\n    overflow-y : scroll;\r\n}\r\n\r\n.onC_ItemHover{\r\n    cursor:pointer;\r\n    background-color: #a5f8ff;\r\n}\r\n\r\n.searchC{\r\n    width : 80%;\r\n    border: solid 1px #c8c2c4;\r\n    min-height: 20px;\r\n    margin : 0 5px 0px 5px;\r\n}\r\n\r\n.searchFilter{\r\n    width : 90%;\r\n    padding : 5px 5px 5px 5px;\r\n    min-height: 15px;\r\n    border: none;\r\n}", ""]);
	
	// exports


/***/ },
/* 13 */
/***/ function(module, exports) {

	"use strict";
	
	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function () {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for (var i = 0; i < this.length; i++) {
				var item = this[i];
				if (item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function (modules, mediaQuery) {
			if (typeof modules === "string") modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for (var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if (typeof id === "number") alreadyImportedModules[id] = true;
			}
			for (i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if (mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if (mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }
/******/ ])
});
;
//# sourceMappingURL=bundle.js.map