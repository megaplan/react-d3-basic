var ReactD3Basic =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	// Export high level charts

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _line = __webpack_require__(1);

	var _line2 = _interopRequireDefault(_line);

	exports.LineChart = _line2['default'];

	var _area = __webpack_require__(50);

	var _area2 = _interopRequireDefault(_area);

	exports.AreaChart = _area2['default'];

	var _scatter = __webpack_require__(51);

	var _scatter2 = _interopRequireDefault(_scatter);

	exports.ScatterPlot = _scatter2['default'];

	var _bar = __webpack_require__(52);

	var _bar2 = _interopRequireDefault(_bar);

	exports.BarChart = _bar2['default'];

	var _bar_group = __webpack_require__(53);

	var _bar_group2 = _interopRequireDefault(_bar_group);

	exports.BarGroupChart = _bar_group2['default'];

	var _area_stack = __webpack_require__(54);

	var _area_stack2 = _interopRequireDefault(_area_stack);

	exports.AreaStackChart = _area_stack2['default'];

	var _bar_stack = __webpack_require__(55);

	var _bar_stack2 = _interopRequireDefault(_bar_stack);

	exports.BarStackChart = _bar_stack2['default'];

	var _pie = __webpack_require__(56);

	var _pie2 = _interopRequireDefault(_pie);

	exports.PieChart = _pie2['default'];

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactD3Core = __webpack_require__(3);

	var _reactD3Shape = __webpack_require__(36);

	var _commonProps = __webpack_require__(49);

	var _commonProps2 = _interopRequireDefault(_commonProps);

	var LineChart = (function (_Component) {
	  _inherits(LineChart, _Component);

	  function LineChart(props) {
	    _classCallCheck(this, LineChart);

	    _get(Object.getPrototypeOf(LineChart.prototype), 'constructor', this).call(this, props);
	  }

	  _createClass(LineChart, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var width = _props.width;
	      var height = _props.height;
	      var margins = _props.margins;
	      var data = _props.data;
	      var chartSeries = _props.chartSeries;
	      var showXGrid = _props.showXGrid;
	      var showYGrid = _props.showYGrid;
	      var xAxisClassName = _props.xAxisClassName;
	      var yAxisClassName = _props.yAxisClassName;
	      var xWordWrap = _props.xWordWrap;
	      var xGridAxisLineStyle = _props.xGridAxisLineStyle;
	      var yGridAxisLineStyle = _props.yGridAxisLineStyle;
	      var categoricalColors = _props.categoricalColors;

	      var xgrid, ygrid;

	      if (showXGrid) xgrid = _react2['default'].createElement(_reactD3Core.Xgrid, { gridAxisLineStyle: xGridAxisLineStyle });
	      if (showYGrid) ygrid = _react2['default'].createElement(_reactD3Core.Ygrid, { gridAxisLineStyle: yGridAxisLineStyle });

	      return _react2['default'].createElement(
	        'div',
	        null,
	        _react2['default'].createElement(_reactD3Core.Legend, _extends({}, this.props, {
	          width: width,
	          margins: margins,
	          chartSeries: chartSeries,
	          categoricalColors: categoricalColors
	        })),
	        _react2['default'].createElement(
	          _reactD3Shape.Chart,
	          _extends({}, this.props, {
	            width: width,
	            height: height,
	            data: data,
	            chartSeries: chartSeries
	          }),
	          xgrid,
	          ygrid,
	          _react2['default'].createElement(_reactD3Core.Xaxis, {
	            xAxisClassName: xAxisClassName,
	            xWordWrap: xWordWrap,
	            xGridAxisLineStyle: xGridAxisLineStyle
	          }),
	          _react2['default'].createElement(_reactD3Core.Yaxis, {
	            yAxisClassName: yAxisClassName,
	            yGridAxisLineStyle: yGridAxisLineStyle
	          }),
	          _react2['default'].createElement(_reactD3Shape.Line, _extends({}, this.props, {
	            chartSeries: chartSeries
	          }))
	        )
	      );
	    }
	  }], [{
	    key: 'defaultProps',
	    value: Object.assign(_commonProps2['default'], {
	      showScatter: false
	    }),
	    enumerable: true
	  }, {
	    key: 'propTypes',
	    value: {
	      width: _react.PropTypes.number.isRequired,
	      height: _react.PropTypes.number.isRequired,
	      margins: _react.PropTypes.object.isRequired,
	      data: _react.PropTypes.array.isRequired,
	      chartSeries: _react.PropTypes.array.isRequired
	    },
	    enumerable: true
	  }]);

	  return LineChart;
	})(_react.Component);

	exports['default'] = LineChart;
	module.exports = exports['default'];

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = React;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequire(obj) { return obj && obj.__esModule ? obj['default'] : obj; }

	var _containerSvg = __webpack_require__(4);

	exports.Svg = _interopRequire(_containerSvg);

	var _containerTitle = __webpack_require__(8);

	exports.Title = _interopRequire(_containerTitle);

	var _chartContainer = __webpack_require__(9);

	exports.Chart = _interopRequire(_chartContainer);

	var _axisAxis = __webpack_require__(27);

	exports.Axis = _interopRequire(_axisAxis);

	var _axisXaxis = __webpack_require__(28);

	exports.Xaxis = _interopRequire(_axisXaxis);

	var _axisYaxis = __webpack_require__(30);

	exports.Yaxis = _interopRequire(_axisYaxis);

	var _axisLabel = __webpack_require__(29);

	exports.Label = _interopRequire(_axisLabel);

	var _legend = __webpack_require__(10);

	exports.Legend = _interopRequire(_legend);

	// grid

	var _gridGrid = __webpack_require__(31);

	exports.Grid = _interopRequire(_gridGrid);

	var _gridXgrid = __webpack_require__(32);

	exports.Xgrid = _interopRequire(_gridXgrid);

	var _gridYgrid = __webpack_require__(33);

	exports.Ygrid = _interopRequire(_gridYgrid);

	// utils

	var _utilsScale = __webpack_require__(7);

	Object.defineProperty(exports, 'scale', {
	  enumerable: true,
	  get: function get() {
	    return _utilsScale.scale;
	  }
	});

	var _utilsXDomain = __webpack_require__(34);

	Object.defineProperty(exports, 'xDomainCount', {
	  enumerable: true,
	  get: function get() {
	    return _utilsXDomain.xDomain;
	  }
	});

	var _utilsYDomain = __webpack_require__(35);

	Object.defineProperty(exports, 'yDomainCount', {
	  enumerable: true,
	  get: function get() {
	    return _utilsYDomain.yDomain;
	  }
	});

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _d3 = __webpack_require__(5);

	var _d32 = _interopRequireDefault(_d3);

	var _commonProps = __webpack_require__(6);

	var _commonProps2 = _interopRequireDefault(_commonProps);

	var _utilsScale = __webpack_require__(7);

	var ChartSvg = (function (_Component) {
	  _inherits(ChartSvg, _Component);

	  function ChartSvg(props) {
	    _classCallCheck(this, ChartSvg);

	    _get(Object.getPrototypeOf(ChartSvg.prototype), 'constructor', this).call(this, props);
	  }

	  _createClass(ChartSvg, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var height = _props.height;
	      var width = _props.width;
	      var margins = _props.margins;
	      var svgClassName = _props.svgClassName;
	      var id = _props.id;
	      var children = _props.children;

	      var t = 'translate(' + margins.left + ', ' + margins.top + ')';

	      return _react2['default'].createElement(
	        'svg',
	        {
	          height: height,
	          width: width,
	          className: svgClassName,
	          id: id,
	          ref: 'svgContainer'
	        },
	        _react2['default'].createElement(
	          'g',
	          {
	            transform: t
	          },
	          children
	        )
	      );
	    }
	  }], [{
	    key: 'defaultProps',
	    value: Object.assign(_commonProps2['default'], {
	      svgClassName: 'react-d3-core__container_svg',
	      onZoom: function onZoom() {},
	      scaleExtent: [1, 10]
	    }),
	    enumerable: true
	  }, {
	    key: 'propTypes',
	    value: {
	      id: _react.PropTypes.string,
	      width: _react.PropTypes.number.isRequired,
	      height: _react.PropTypes.number.isRequired,
	      margins: _react.PropTypes.object.isRequired,
	      svgClassName: _react.PropTypes.string.isRequired
	    },
	    enumerable: true
	  }]);

	  return ChartSvg;
	})(_react.Component);

	exports['default'] = ChartSvg;
	module.exports = exports['default'];

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	module.exports = d3;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = {
	  width: 960,
	  height: 500,
	  margins: { top: 80, right: 100, bottom: 80, left: 100 }
	};
	module.exports = exports["default"];

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.scale = scale;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _d3 = __webpack_require__(5);

	var _d32 = _interopRequireDefault(_d3);

	function scale(props) {
	  var type = props.type;
	  var scale = props.scale;

	  var func;

	  if (scale === 'linear') func = _d32['default'].scale.linear();else if (scale === 'identity') func = _d32['default'].scale.identity();else if (scale === 'sqrt') func = _d32['default'].scale.sqrt();else if (scale === 'pow') func = _d32['default'].scale.pow();else if (scale === 'log') func = _d32['default'].scale.log();else if (scale === 'quantize') func = _d32['default'].scale.quantize();else if (scale === 'quantile') func = _d32['default'].scale.quantile();else if (scale === 'ordinal') func = _d32['default'].scale.ordinal();else if (scale === 'time') func = _d32['default'].time.scale();else new Error('Please check your axis scale setting. "' + scale + '" scale is invalid. ');

	  func = _mkScaleSettings(props, func);

	  return func;
	}

	function _mkScaleSettings(props, func) {
	  var type = props.type;
	  var range = props.range;
	  var domain = props.domain;
	  var scale = props.scale;
	  var rangeRoundBands = props.rangeRoundBands;

	  if (range) func.range(range);

	  if (domain) func.domain(domain);

	  if (scale === 'ordinal' && rangeRoundBands) {
	    var interval = rangeRoundBands.interval;
	    var padding = rangeRoundBands.padding;
	    var outerPadding = rangeRoundBands.outerPadding;

	    if (padding && outerPadding) func.rangeRoundBands(interval, padding, outerPadding);else if (padding) func.rangeRoundBands(interval, padding);else func.rangeRoundBands(interval);
	  }

	  return func;
	}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _commonProps = __webpack_require__(6);

	var _commonProps2 = _interopRequireDefault(_commonProps);

	var ChartTitle = (function (_Component) {
	  _inherits(ChartTitle, _Component);

	  function ChartTitle(props) {
	    _classCallCheck(this, ChartTitle);

	    _get(Object.getPrototypeOf(ChartTitle.prototype), 'constructor', this).call(this, props);
	  }

	  _createClass(ChartTitle, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var titleClassName = _props.titleClassName;
	      var title = _props.title;
	      var width = _props.width;

	      var titleStyle = {
	        width: width,
	        textAlign: 'center',
	        fontSize: '2em',
	        paddingBottom: '1.3em'
	      };

	      return _react2['default'].createElement(
	        'div',
	        {
	          style: titleStyle,
	          className: titleClassName
	        },
	        title
	      );
	    }
	  }], [{
	    key: 'defaultProps',
	    value: Object.assign(_commonProps2['default'], {
	      titleClassName: 'react-d3-core__container_title',
	      title: ''
	    }),
	    enumerable: true
	  }, {
	    key: 'propTypes',
	    value: {
	      width: _react.PropTypes.number.isRequired,
	      title: _react.PropTypes.string,
	      titleClassName: _react.PropTypes.string
	    },
	    enumerable: true
	  }]);

	  return ChartTitle;
	})(_react.Component);

	exports['default'] = ChartTitle;
	module.exports = exports['default'];

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _containerSvg = __webpack_require__(4);

	var _containerSvg2 = _interopRequireDefault(_containerSvg);

	var _legend = __webpack_require__(10);

	var _legend2 = _interopRequireDefault(_legend);

	var _commonProps = __webpack_require__(6);

	var _commonProps2 = _interopRequireDefault(_commonProps);

	var ChartContainer = (function (_Component) {
	  _inherits(ChartContainer, _Component);

	  function ChartContainer(props) {
	    _classCallCheck(this, ChartContainer);

	    _get(Object.getPrototypeOf(ChartContainer.prototype), 'constructor', this).call(this, props);
	  }

	  _createClass(ChartContainer, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var width = _props.width;
	      var chartSeries = _props.chartSeries;

	      var legend;

	      var divStyle = {
	        width: width
	      };

	      if (chartSeries) {
	        legend = _react2['default'].createElement(_legend2['default'], _extends({}, this.props, {
	          chartSeries: chartSeries
	        }));
	      }

	      return _react2['default'].createElement(
	        'div',
	        { style: divStyle },
	        legend,
	        _react2['default'].createElement(_containerSvg2['default'], this.props)
	      );
	    }
	  }], [{
	    key: 'defaultProps',
	    value: _commonProps2['default'],
	    enumerable: true
	  }]);

	  return ChartContainer;
	})(_react.Component);

	exports['default'] = ChartContainer;
	module.exports = exports['default'];

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _d3 = __webpack_require__(5);

	var _d32 = _interopRequireDefault(_d3);

	var _reactFauxDom = __webpack_require__(11);

	var _reactFauxDom2 = _interopRequireDefault(_reactFauxDom);

	var _commonProps = __webpack_require__(6);

	var _commonProps2 = _interopRequireDefault(_commonProps);

	var Legend = (function (_Component) {
	  _inherits(Legend, _Component);

	  function Legend(props) {
	    _classCallCheck(this, Legend);

	    _get(Object.getPrototypeOf(Legend.prototype), 'constructor', this).call(this, props);
	  }

	  _createClass(Legend, [{
	    key: '_series',
	    value: function _series(props) {
	      var chartSeries = props.chartSeries;
	      var categoricalColors = props.categoricalColors;

	      categoricalColors = categoricalColors || _d32['default'].scale.category10();

	      var series = chartSeries.map(function (f, i) {

	        // set a color if not set
	        f.color = f.color || categoricalColors(i);

	        // set name if not set
	        f.name = f.name || f.field;

	        return {
	          color: f.color,
	          name: f.name,
	          field: f.field
	        };
	      });

	      return series;
	    }
	  }, {
	    key: '_mkLegend',
	    value: function _mkLegend(dom) {
	      var _props = this.props;
	      var width = _props.width;
	      var margins = _props.margins;
	      var chartSeries = _props.chartSeries;
	      var legendClassName = _props.legendClassName;
	      var legendPosition = _props.legendPosition;
	      var legendOffset = _props.legendOffset;

	      var legendArea = _d32['default'].select(dom);
	      var series = this._series(this.props);

	      // make legends
	      var legend = legendArea.selectAll('div').data(series).enter().append("div").attr("class", legendClassName + ' legend')
	      // .style("width", 120)
	      .style("height", 20).style("padding", 5).style("background-color", '#EEE').style("display", "inline-block");

	      var rect = legend.append("div").style("width", 18).style("height", 18).style("background-color", function (d) {
	        return d.color;
	      }).style("float", legendPosition);

	      var text = legend.append("div")
	      // .style("width", 92)
	      .style("padding-left", 5).style("padding-right", 5).text(function (d) {
	        return d.name;
	      }).style("float", legendPosition);

	      return legendArea;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props2 = this.props;
	      var legendClassName = _props2.legendClassName;
	      var width = _props2.width;
	      var height = _props2.height;

	      var legendGroup = _reactFauxDom2['default'].createElement('div');
	      var legendClasses = legendClassName + ' legend';

	      legendGroup.setAttribute('class', legendClasses);
	      legendGroup.style.width = width;
	      legendGroup.style.textAlign = 'center';

	      var legendDom = this._mkLegend(legendGroup);

	      return legendDom.node().toReact();
	    }
	  }], [{
	    key: 'defaultProps',
	    value: Object.assign(_commonProps2['default'], {
	      legendHeight: 50,
	      legendPosition: 'left',
	      legendOffset: 90,
	      legendClassName: 'react-d3-core__legend'
	    }),
	    enumerable: true
	  }, {
	    key: 'propTypes',
	    value: {
	      width: _react.PropTypes.number.isRequired,
	      margins: _react.PropTypes.object.isRequired,
	      chartSeries: _react.PropTypes.array.isRequired,
	      legendOffset: _react.PropTypes.number.isRequired,
	      legendClassName: _react.PropTypes.string.isRequired,
	      legendPosition: _react.PropTypes.oneOf(['left', 'right']).isRequired
	    },
	    enumerable: true
	  }]);

	  return Legend;
	})(_react.Component);

	exports['default'] = Legend;
	module.exports = exports['default'];

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	var Element = __webpack_require__(12)
	var Window = __webpack_require__(24)
	var core = __webpack_require__(25)
	var anim = __webpack_require__(26)

	var ReactFauxDOM = {
	  Element: Element,
	  defaultView: Window,
	  mixins: {
	    core: core,
	    anim: anim
	  },
	  createElement: function (nodeName) {
	    return new Element(nodeName)
	  },
	  createElementNS: function (namespace, nodeName) {
	    return this.createElement(nodeName)
	  },
	  compareDocumentPosition: function () {
	    // The selector engine tries to validate with this, but we don't care.
	    // 8 = DOCUMENT_POSITION_CONTAINS, so we say all nodes are in this document.
	    return 8
	  }
	}

	Element.prototype.ownerDocument = ReactFauxDOM

	module.exports = ReactFauxDOM


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	var React = __webpack_require__(2)
	var styleAttr = __webpack_require__(13)
	var querySelectorAll = __webpack_require__(14)
	var camelCase = __webpack_require__(18)
	var isString = __webpack_require__(19)
	var isUndefined = __webpack_require__(20)
	var assign = __webpack_require__(21)
	var mapValues = __webpack_require__(22)
	var styleCamelCase = __webpack_require__(23)

	function Element (nodeName, parentNode) {
	  this.nodeName = nodeName
	  this.parentNode = parentNode
	  this.childNodes = []
	  this.eventListeners = {}
	  this.text = ''
	  var self = this
	  var props = this.props = {
	    ref: function (component) {
	      self.component = component
	    },
	    style: {
	      setProperty: function (name, value) {
	        props.style[styleCamelCase(name)] = value
	      },
	      getProperty: function (name) {
	        return props.style[styleCamelCase(name)]
	      },
	      removeProperty: function (name) {
	        delete props.style[styleCamelCase(name)]
	      }
	    }
	  }

	  this.style = props.style
	}

	Element.prototype.nodeType = 1

	// This was easy to do with Vim.
	// Just saying.
	Element.prototype.eventNameMappings = {
	  'blur': 'onBlur',
	  'change': 'onChange',
	  'click': 'onClick',
	  'contextmenu': 'onContextMenu',
	  'copy': 'onCopy',
	  'cut': 'onCut',
	  'doubleclick': 'onDoubleClick',
	  'drag': 'onDrag',
	  'dragend': 'onDragEnd',
	  'dragenter': 'onDragEnter',
	  'dragexit': 'onDragExit',
	  'dragleave': 'onDragLeave',
	  'dragover': 'onDragOver',
	  'dragstart': 'onDragStart',
	  'drop': 'onDrop',
	  'error': 'onError',
	  'focus': 'onFocus',
	  'input': 'onInput',
	  'keydown': 'onKeyDown',
	  'keypress': 'onKeyPress',
	  'keyup': 'onKeyUp',
	  'load': 'onLoad',
	  'mousedown': 'onMouseDown',
	  'mouseenter': 'onMouseEnter',
	  'mouseleave': 'onMouseLeave',
	  'mousemove': 'onMouseMove',
	  'mouseout': 'onMouseOut',
	  'mouseover': 'onMouseOver',
	  'mouseup': 'onMouseUp',
	  'paste': 'onPaste',
	  'scroll': 'onScroll',
	  'submit': 'onSubmit',
	  'touchcancel': 'onTouchCancel',
	  'touchend': 'onTouchEnd',
	  'touchmove': 'onTouchMove',
	  'touchstart': 'onTouchStart',
	  'wheel': 'onWheel'
	}

	Element.prototype.skipNameTransformationExpressions = [
	  /^data-/,
	  /^aria-/
	]

	Element.prototype.attributeNameMappings = {
	  'class': 'className'
	}

	Element.prototype.attributeToPropName = function (name) {
	  var skipTransformMatches = this.skipNameTransformationExpressions.map(function (expr) {
	    return expr.test(name)
	  })

	  if (skipTransformMatches.some(Boolean)) {
	    return name
	  } else {
	    return this.attributeNameMappings[name] || camelCase(name)
	  }
	}

	Element.prototype.setAttribute = function (name, value) {
	  if (name === 'style' && isString(value)) {
	    var styles = styleAttr.parse(value)

	    for (var key in styles) {
	      this.style.setProperty(key, styles[key])
	    }
	  } else {
	    this.props[this.attributeToPropName(name)] = value
	  }
	}

	Element.prototype.getAttribute = function (name) {
	  return this.props[this.attributeToPropName(name)]
	}

	Element.prototype.getAttributeNode = function (name) {
	  var value = this.getAttribute(name)

	  if (!isUndefined(value)) {
	    return {
	      value: value,
	      specified: true
	    }
	  }
	}

	Element.prototype.removeAttribute = function (name) {
	  delete this.props[this.attributeToPropName(name)]
	}

	Element.prototype.eventToPropName = function (name) {
	  return this.eventNameMappings[name] || name
	}

	Element.prototype.addEventListener = function (name, fn) {
	  var prop = this.eventToPropName(name)
	  this.eventListeners[prop] = this.eventListeners[prop] || []
	  this.eventListeners[prop].push(fn)
	}

	Element.prototype.removeEventListener = function (name, fn) {
	  var listeners = this.eventListeners[this.eventToPropName(name)]

	  if (listeners) {
	    var match = listeners.indexOf(fn)

	    if (match !== -1) {
	      listeners.splice(match, 1)
	    }
	  }
	}

	Element.prototype.appendChild = function (el) {
	  el.parentNode = this
	  this.childNodes.push(el)
	  return el
	}

	Element.prototype.insertBefore = function (el, before) {
	  var index = this.childNodes.indexOf(before)
	  el.parentNode = this

	  if (index !== -1) {
	    this.childNodes.splice(index, 0, el)
	  } else {
	    this.childNodes.push(el)
	  }

	  return el
	}

	Element.prototype.removeChild = function (child) {
	  var target = this.childNodes.indexOf(child)
	  this.childNodes.splice(target, 1)
	}

	Element.prototype.querySelector = function () {
	  return this.querySelectorAll.apply(this, arguments)[0] || null
	}

	Element.prototype.querySelectorAll = function (selector) {
	  if (!selector) {
	    throw new Error('Not enough arguments')
	  }

	  return querySelectorAll(selector, this)
	}

	Element.prototype.getElementsByTagName = function (nodeName) {
	  var children = this.children

	  if (children.length === 0) {
	    return []
	  } else {
	    var matches

	    if (nodeName !== '*') {
	      matches = children.filter(function (el) {
	        return el.nodeName === nodeName
	      })
	    } else {
	      matches = children
	    }

	    var childMatches = children.map(function (el) {
	      return el.getElementsByTagName(nodeName)
	    })

	    return matches.concat.apply(matches, childMatches)
	  }
	}

	Element.prototype.getElementById = function (id) {
	  var children = this.children

	  if (children.length === 0) {
	    return null
	  } else {
	    var match = children.filter(function (el) {
	      return el.getAttribute('id') === id
	    })[0]

	    if (match) {
	      return match
	    } else {
	      var childMatches = children.map(function (el) {
	        return el.getElementById(id)
	      })

	      return childMatches.filter(function (match) {
	        return match !== null
	      })[0] || null
	    }
	  }
	}

	Element.prototype.getBoundingClientRect = function () {
	  if (!this.component) {
	    return undefined
	  }

	  return this.component.getBoundingClientRect()
	}

	Element.prototype.toReact = function (index) {
	  index = index || 0
	  var props = assign({}, this.props)
	  props.style = assign({}, props.style)

	  var originalElement = this

	  function uniqueKey () {
	    return 'faux-dom-' + index
	  }

	  if (isUndefined(props.key)) {
	    props.key = uniqueKey()
	  }

	  delete props.style.setProperty
	  delete props.style.getProperty
	  delete props.style.removeProperty

	  assign(props, mapValues(this.eventListeners, function (listeners) {
	    return function (syntheticEvent) {
	      var event

	      if (syntheticEvent) {
	        event = syntheticEvent.nativeEvent
	        event.syntheticEvent = syntheticEvent
	      }

	      mapValues(listeners, function (listener) {
	        listener.call(originalElement, event)
	      })
	    }
	  }))

	  return React.createElement(this.nodeName, props, this.text || this.children.map(function (el, i) {
	    if (el instanceof Element) {
	      return el.toReact(i)
	    } else {
	      return el
	    }
	  }))
	}

	Object.defineProperties(Element.prototype, {
	  nextSibling: {
	    get: function () {
	      var siblings = this.parentNode.children
	      var me = siblings.indexOf(this)
	      return siblings[me + 1]
	    }
	  },
	  previousSibling: {
	    get: function () {
	      var siblings = this.parentNode.children
	      var me = siblings.indexOf(this)
	      return siblings[me - 1]
	    }
	  },
	  innerHTML: {
	    get: function () {
	      return this.text
	    },
	    set: function (text) {
	      this.text = text
	    }
	  },
	  textContent: {
	    get: function () {
	      return this.text
	    },
	    set: function (text) {
	      this.text = text
	    }
	  },
	  children: {
	    get: function () {
	      // So far nodes created by this library are all of nodeType 1 (elements),
	      // but this could change in the future.
	      return this.childNodes.filter(function (el) {
	        if (!el.nodeType) {
	          // It's a React element, we always add it
	          return true
	        }

	        // It's a HTML node. We want to filter to have only nodes with type 1
	        return el.nodeType === 1
	      })
	    }
	  }
	})

	// These NS methods are called by things like D3 if it spots a namespace.
	// Like xlink:href. I don't care about namespaces, so these functions have NS aliases created.
	var namespaceMethods = [
	  'setAttribute',
	  'getAttribute',
	  'getAttributeNode',
	  'removeAttribute',
	  'getElementsByTagName',
	  'getElementById'
	]

	namespaceMethods.forEach(function (name) {
	  var fn = Element.prototype[name]
	  Element.prototype[name + 'NS'] = function () {
	    return fn.apply(this, Array.prototype.slice.call(arguments, 1))
	  }
	})

	module.exports = Element


/***/ }),
/* 13 */
/***/ (function(module, exports) {

	

	/*:: type Attr = { [key: string]: string | number } */
	/*:: type Opts = { preserveNumbers: ?boolean } */

	/*

	style-attr
	====

	Very simple parsing and stringifying of style attributes.

	`parse`
	----

	Convert a style attribute string to an object.

	*/

	/*:: declare function parse (raw: string, opts: ?Opts): Attr */
	function parse(raw, opts) {
	  opts = opts || {};

	  var preserveNumbers = opts.preserveNumbers;
	  var trim = function (s) {
	    return s.trim();
	  };
	  var obj = {};

	  getKeyValueChunks(raw).map(trim).filter(Boolean).forEach(function (item) {
	    // split with `.indexOf` rather than `.split` because the value may also contain colons.
	    var pos = item.indexOf(':');
	    var key = item.substr(0, pos).trim();
	    var val = item.substr(pos + 1).trim();
	    if (preserveNumbers && isNumeric(val)) {
	      val = Number(val);
	    }

	    obj[key] = val;
	  });

	  return obj;
	}

	/*

	`isNumeric`
	----

	Check if a value is numeric.
	Via: https://stackoverflow.com/a/1830844/9324

	*/

	/*:: declare function isNumeric (n: any): boolean */

	function isNumeric(n) {
	  return !isNaN(parseFloat(n)) && isFinite(n);
	}

	/*

	`getKeyValueChunks`
	----

	Split a string into chunks matching `<key>: <value>`

	*/
	/*:: declare function getKeyValueChunks (raw: string): Array<string> */
	function getKeyValueChunks(raw) {
	  var chunks = [];
	  var offset = 0;
	  var sep = ';';
	  var hasUnclosedUrl = /url\([^\)]+$/;
	  var chunk = '';
	  var nextSplit;
	  while (offset < raw.length) {
	    nextSplit = raw.indexOf(sep, offset);
	    if (nextSplit === -1) {
	      nextSplit = raw.length;
	    }

	    chunk += raw.substring(offset, nextSplit);

	    // data URIs can contain semicolons, so make sure we get the whole thing
	    if (hasUnclosedUrl.test(chunk)) {
	      chunk += ';';
	      offset = nextSplit + 1;
	      continue;
	    }

	    chunks.push(chunk);
	    chunk = '';
	    offset = nextSplit + 1;
	  }

	  return chunks;
	}

	/*

	`stringify`
	----

	Convert an object into an attribute string

	*/
	/*:: declare function stringify (obj: Attr): string */
	function stringify(obj) {
	  return Object.keys(obj).map(function (key) {
	    return key + ':' + obj[key];
	  }).join(';');
	}

	/*

	`normalize`
	----

	Normalize an attribute string (eg. collapse duplicates)

	*/
	/*:: declare function normalize (str: string, opts: ?Opts): string */
	function normalize(str, opts) {
	  return stringify(parse(str, opts));
	}

	module.exports.parse = parse;
	module.exports.stringify = stringify;
	module.exports.normalize = normalize;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(15);

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * @ignore
	 * css3 selector engine for ie6-8
	 * @author yiminghe@gmail.com
	 */

	var util = __webpack_require__(16);
	var parser = __webpack_require__(17);

	var EXPANDO_SELECTOR_KEY = '_ks_data_selector_id_',
	  caches = {},
	  isContextXML,
	  uuid = 0,
	  subMatchesCache = {},
	  getAttr = function (el, name) {
	    if (isContextXML) {
	      return util.getSimpleAttr(el, name);
	    } else {
	      return util.attr(el, name);
	    }
	  },
	  hasSingleClass = util.hasSingleClass,
	  isTag = util.isTag,
	  aNPlusB = /^(([+-]?(?:\d+)?)?n)?([+-]?\d+)?$/;

	// CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	var unescape = /\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,
	  unescapeFn = function (_, escaped) {
	    var high = '0x' + escaped - 0x10000;
	    // NaN means non-codepoint
	    return isNaN(high) ?
	      escaped :
	      // BMP codepoint
	      high < 0 ?
	        String.fromCharCode(high + 0x10000) :
	        // Supplemental Plane codepoint (surrogate pair)
	        String.fromCharCode(high >> 10 | 0xD800, high & 0x3FF | 0xDC00);
	  };

	var matchExpr;

	var pseudoFnExpr = {
	  'nth-child': function (el, param) {
	    var ab = getAb(param),
	      a = ab.a,
	      b = ab.b;
	    if (a === 0 && b === 0) {
	      return 0;
	    }
	    var index = 0,
	      parent = el.parentNode;
	    if (parent) {
	      var childNodes = parent.childNodes,
	        count = 0,
	        child,
	        ret,
	        len = childNodes.length;
	      for (; count < len; count++) {
	        child = childNodes[count];
	        if (child.nodeType === 1) {
	          index++;
	          ret = matchIndexByAb(index, a, b, child === el);
	          if (ret !== undefined) {
	            return ret;
	          }
	        }
	      }
	    }
	    return 0;
	  },
	  'nth-last-child': function (el, param) {
	    var ab = getAb(param),
	      a = ab.a,
	      b = ab.b;
	    if (a === 0 && b === 0) {
	      return 0;
	    }
	    var index = 0,
	      parent = el.parentNode;
	    if (parent) {
	      var childNodes = parent.childNodes,
	        len = childNodes.length,
	        count = len - 1,
	        child,
	        ret;
	      for (; count >= 0; count--) {
	        child = childNodes[count];
	        if (child.nodeType === 1) {
	          index++;
	          ret = matchIndexByAb(index, a, b, child === el);
	          if (ret !== undefined) {
	            return ret;
	          }
	        }
	      }
	    }
	    return 0;
	  },
	  'nth-of-type': function (el, param) {
	    var ab = getAb(param),
	      a = ab.a,
	      b = ab.b;
	    if (a === 0 && b === 0) {
	      return 0;
	    }
	    var index = 0,
	      parent = el.parentNode;
	    if (parent) {
	      var childNodes = parent.childNodes,
	        elType = el.tagName,
	        count = 0,
	        child,
	        ret,
	        len = childNodes.length;
	      for (; count < len; count++) {
	        child = childNodes[count];
	        if (child.tagName === elType) {
	          index++;
	          ret = matchIndexByAb(index, a, b, child === el);
	          if (ret !== undefined) {
	            return ret;
	          }
	        }
	      }
	    }
	    return 0;
	  },
	  'nth-last-of-type': function (el, param) {
	    var ab = getAb(param),
	      a = ab.a,
	      b = ab.b;
	    if (a === 0 && b === 0) {
	      return 0;
	    }
	    var index = 0,
	      parent = el.parentNode;
	    if (parent) {
	      var childNodes = parent.childNodes,
	        len = childNodes.length,
	        elType = el.tagName,
	        count = len - 1,
	        child,
	        ret;
	      for (; count >= 0; count--) {
	        child = childNodes[count];
	        if (child.tagName === elType) {
	          index++;
	          ret = matchIndexByAb(index, a, b, child === el);
	          if (ret !== undefined) {
	            return ret;
	          }
	        }
	      }
	    }
	    return 0;
	  },
	  lang: function (el, lang) {
	    var elLang;
	    lang = unEscape(lang.toLowerCase());
	    do {
	      if ((elLang = (isContextXML ?
	        el.getAttribute('xml:lang') || el.getAttribute('lang') :
	          el.lang))) {
	        elLang = elLang.toLowerCase();
	        return elLang === lang || elLang.indexOf(lang + '-') === 0;
	      }
	    } while ((el = el.parentNode) && el.nodeType === 1);
	    return false;
	  },
	  not: function (el, negationArg) {
	    return !matchExpr[negationArg.t](el, negationArg.value);
	  }
	};

	var pseudoIdentExpr = {
	  empty: function (el) {
	    var childNodes = el.childNodes,
	      index = 0,
	      len = childNodes.length - 1,
	      child,
	      nodeType;
	    for (; index < len; index++) {
	      child = childNodes[index];
	      nodeType = child.nodeType;
	      // only element nodes and content nodes
	      // (such as Dom [Dom-LEVEL-3-CORE] text nodes,
	      // CDATA nodes, and entity references
	      if (nodeType === 1 || nodeType === 3 || nodeType === 4 || nodeType === 5) {
	        return 0;
	      }
	    }
	    return 1;
	  },
	  root: function (el) {
	    if (el.nodeType === 9) {
	      return true;
	    }
	    return el.ownerDocument &&
	      el === el.ownerDocument.documentElement;
	  },
	  'first-child': function (el) {
	    return pseudoFnExpr['nth-child'](el, 1);
	  },
	  'last-child': function (el) {
	    return pseudoFnExpr['nth-last-child'](el, 1);
	  },
	  'first-of-type': function (el) {
	    return pseudoFnExpr['nth-of-type'](el, 1);
	  },
	  'last-of-type': function (el) {
	    return pseudoFnExpr['nth-last-of-type'](el, 1);
	  },
	  'only-child': function (el) {
	    return pseudoIdentExpr['first-child'](el) &&
	      pseudoIdentExpr['last-child'](el);
	  },
	  'only-of-type': function (el) {
	    return pseudoIdentExpr['first-of-type'](el) &&
	      pseudoIdentExpr['last-of-type'](el);
	  },
	  focus: function (el) {
	    var doc = el.ownerDocument;
	    return doc && el === doc.activeElement &&
	      (!doc.hasFocus || doc.hasFocus()) && !!(el.type || el.href || el.tabIndex >= 0);
	  },
	  target: function (el) {
	    var hash = location.hash;
	    return hash && hash.slice(1) === getAttr(el, 'id');
	  },
	  enabled: function (el) {
	    return !el.disabled;
	  },
	  disabled: function (el) {
	    return el.disabled;
	  },
	  checked: function (el) {
	    var nodeName = el.nodeName.toLowerCase();
	    return (nodeName === 'input' && el.checked) ||
	      (nodeName === 'option' && el.selected);
	  }
	};

	var attributeExpr = {
	  '~=': function (elValue, value) {
	    if (!value || value.indexOf(' ') > -1) {
	      return 0;
	    }
	    return (' ' + elValue + ' ').indexOf(' ' + value + ' ') !== -1;
	  },
	  '|=': function (elValue, value) {
	    return (' ' + elValue).indexOf(' ' + value + '-') !== -1;
	  },
	  '^=': function (elValue, value) {
	    return value && util.startsWith(elValue, value);
	  },
	  '$=': function (elValue, value) {
	    return value && util.endsWith(elValue, value);
	  },
	  '*=': function (elValue, value) {
	    return value && elValue.indexOf(value) !== -1;
	  },
	  '=': function (elValue, value) {
	    return elValue === value;
	  }
	};

	var relativeExpr = {
	  '>': {
	    dir: 'parentNode',
	    immediate: 1
	  },
	  ' ': {
	    dir: 'parentNode'
	  },
	  '+': {
	    dir: 'previousSibling',
	    immediate: 1
	  },
	  '~': {
	    dir: 'previousSibling'
	  }
	};

	matchExpr = {
	  tag: isTag,
	  cls: hasSingleClass,
	  id: function (el, value) {
	    return getAttr(el, 'id') === value;
	  },
	  attrib: function (el, value) {
	    var name = value.ident;
	    if (!isContextXML) {
	      name = name.toLowerCase();
	    }
	    var elValue = getAttr(el, name);
	    var match = value.match;
	    if (!match && elValue !== undefined) {
	      return 1;
	    } else if (match) {
	      if (elValue === undefined) {
	        return 0;
	      }
	      var matchFn = attributeExpr[match];
	      if (matchFn) {
	        return matchFn(elValue + '', value.value + '');
	      }
	    }
	    return 0;
	  },
	  pseudo: function (el, value) {
	    var fn, fnStr, ident;
	    if ((fnStr = value.fn)) {
	      if (!(fn = pseudoFnExpr[fnStr])) {
	        throw new SyntaxError('Syntax error: not support pseudo: ' + fnStr);
	      }
	      return fn(el, value.param);
	    }
	    if ((ident = value.ident)) {
	      if (!pseudoIdentExpr[ident]) {
	        throw new SyntaxError('Syntax error: not support pseudo: ' + ident);
	      }
	      return pseudoIdentExpr[ident](el);
	    }
	    return 0;
	  }
	};

	function unEscape(str) {
	  return str.replace(unescape, unescapeFn);
	}

	parser.lexer.yy = {
	  trim: util.trim,
	  unEscape: unEscape,
	  unEscapeStr: function (str) {
	    return this.unEscape(str.slice(1, -1));
	  }
	};

	function resetStatus() {
	  subMatchesCache = {};
	}

	function dir(el, direction) {
	  do {
	    el = el[direction];
	  } while (el && el.nodeType !== 1);
	  return el;
	}

	function getAb(param) {
	  var a = 0,
	    match,
	    b = 0;
	  if (typeof param === 'number') {
	    b = param;
	  } else if (param === 'odd') {
	    a = 2;
	    b = 1;
	  } else if (param === 'even') {
	    a = 2;
	    b = 0;
	  } else if ((match = param.replace(/\s/g, '').match(aNPlusB))) {
	    if (match[1]) {
	      a = parseInt(match[2], 10);
	      if (isNaN(a)) {
	        if (match[2] === '-') {
	          a = -1;
	        } else {
	          a = 1;
	        }
	      }
	    } else {
	      a = 0;
	    }
	    b = parseInt(match[3], 10) || 0;
	  }
	  return {
	    a: a,
	    b: b
	  };
	}

	function matchIndexByAb(index, a, b, eq) {
	  if (a === 0) {
	    if (index === b) {
	      return eq;
	    }
	  } else {
	    if ((index - b) / a >= 0 && (index - b) % a === 0 && eq) {
	      return 1;
	    }
	  }
	  return undefined;
	}

	function isXML(elem) {
	  var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	  return documentElement ? documentElement.nodeName.toLowerCase() !== 'html' : false;
	}

	function matches(str, seeds) {
	  return select(str, null, seeds);
	}

	function singleMatch(el, match) {
	  if (!match) {
	    return true;
	  }
	  if (!el) {
	    return false;
	  }

	  if (el.nodeType === 9) {
	    return false;
	  }

	  var matched = 1,
	    matchSuffix = match.suffix,
	    matchSuffixLen,
	    matchSuffixIndex;

	  if (match.t === 'tag') {
	    matched &= matchExpr.tag(el, match.value);
	  }

	  if (matched && matchSuffix) {
	    matchSuffixLen = matchSuffix.length;
	    matchSuffixIndex = 0;
	    for (; matched && matchSuffixIndex < matchSuffixLen; matchSuffixIndex++) {
	      var singleMatchSuffix = matchSuffix[matchSuffixIndex],
	        singleMatchSuffixType = singleMatchSuffix.t;
	      if (matchExpr[singleMatchSuffixType]) {
	        matched &= matchExpr[singleMatchSuffixType](el, singleMatchSuffix.value);
	      }
	    }
	  }

	  return matched;
	}

	// match by adjacent immediate single selector match
	function matchImmediate(el, match) {
	  var matched = 1,
	    startEl = el,
	    relativeOp,
	    startMatch = match;

	  do {
	    matched &= singleMatch(el, match);
	    if (matched) {
	      // advance
	      match = match && match.prev;
	      if (!match) {
	        return true;
	      }
	      relativeOp = relativeExpr[match.nextCombinator];
	      el = dir(el, relativeOp.dir);
	      if (!relativeOp.immediate) {
	        return {
	          // advance for non-immediate
	          el: el,
	          match: match
	        };
	      }
	    } else {
	      relativeOp = relativeExpr[match.nextCombinator];
	      if (relativeOp.immediate) {
	        // retreat but advance startEl
	        return {
	          el: dir(startEl, relativeExpr[startMatch.nextCombinator].dir),
	          match: startMatch
	        };
	      } else {
	        // advance (before immediate match + jump unmatched)
	        return {
	          el: el && dir(el, relativeOp.dir),
	          match: match
	        };
	      }
	    }
	  } while (el);

	  // only occur when match immediate
	  return {
	    el: dir(startEl, relativeExpr[startMatch.nextCombinator].dir),
	    match: startMatch
	  };
	}

	// find fixed part, fixed with seeds
	function findFixedMatchFromHead(el, head) {
	  var relativeOp,
	    cur = head;

	  do {
	    if (!singleMatch(el, cur)) {
	      return null;
	    }
	    cur = cur.prev;
	    if (!cur) {
	      return true;
	    }
	    relativeOp = relativeExpr[cur.nextCombinator];
	    el = dir(el, relativeOp.dir);
	  } while (el && relativeOp.immediate);
	  if (!el) {
	    return null;
	  }
	  return {
	    el: el,
	    match: cur
	  };
	}

	function genId(el) {
	  var selectorId;

	  if (isContextXML) {
	    if (!(selectorId = el.getAttribute(EXPANDO_SELECTOR_KEY))) {
	      el.setAttribute(EXPANDO_SELECTOR_KEY, selectorId = (+new Date() + '_' + (++uuid)));
	    }
	  } else {
	    if (!(selectorId = el[EXPANDO_SELECTOR_KEY])) {
	      selectorId = el[EXPANDO_SELECTOR_KEY] = (+new Date()) + '_' + (++uuid);
	    }
	  }

	  return selectorId;
	}

	function matchSub(el, match) {
	  var selectorId = genId(el),
	    matchKey;
	  matchKey = selectorId + '_' + (match.order || 0);
	  if (matchKey in subMatchesCache) {
	    return subMatchesCache[matchKey];
	  }
	  subMatchesCache[matchKey] = matchSubInternal(el, match);
	  return subMatchesCache[matchKey];
	}

	// recursive match by sub selector string from right to left
	// grouped by immediate selectors
	function matchSubInternal(el, match) {
	  var matchImmediateRet = matchImmediate(el, match);
	  if (matchImmediateRet === true) {
	    return true;
	  } else {
	    el = matchImmediateRet.el;
	    match = matchImmediateRet.match;
	    while (el) {
	      if (matchSub(el, match)) {
	        return true;
	      }
	      el = dir(el, relativeExpr[match.nextCombinator].dir);
	    }
	    return false;
	  }
	}

	function select(str, context, seeds) {
	  if (!caches[str]) {
	    caches[str] = parser.parse(str);
	  }

	  var selector = caches[str],
	    groupIndex = 0,
	    groupLen = selector.length,
	    contextDocument,
	    group,
	    ret = [];

	  if (seeds) {
	    context = context || seeds[0].ownerDocument;
	  }

	  contextDocument = context && context.ownerDocument || typeof document !== 'undefined' && document;

	  if (context && context.nodeType === 9 && !contextDocument) {
	    contextDocument = context;
	  }

	  context = context || contextDocument;

	  isContextXML = isXML(context);

	  for (; groupIndex < groupLen; groupIndex++) {
	    resetStatus();

	    group = selector[groupIndex];

	    var suffix = group.suffix,
	      suffixIndex,
	      suffixLen,
	      seedsIndex,
	      mySeeds = seeds,
	      seedsLen,
	      id = null;

	    if (!mySeeds) {
	      if (suffix && !isContextXML) {
	        suffixIndex = 0;
	        suffixLen = suffix.length;
	        for (; suffixIndex < suffixLen; suffixIndex++) {
	          var singleSuffix = suffix[suffixIndex];
	          if (singleSuffix.t === 'id') {
	            id = singleSuffix.value;
	            break;
	          }
	        }
	      }

	      if (id) {
	        // http://yiminghe.github.io/lab/playground/fragment-selector/selector.html
	        var doesNotHasById = !context.getElementById,
	          contextInDom = util.contains(contextDocument, context),
	          tmp = doesNotHasById ? (
	            contextInDom ?
	              contextDocument.getElementById(id) :
	              null
	          ) : context.getElementById(id);
	        // id bug
	        // https://github.com/kissyteam/kissy/issues/67
	        if (!tmp && doesNotHasById || tmp && getAttr(tmp, 'id') !== id) {
	          var tmps = util.getElementsByTagName('*', context),
	            tmpLen = tmps.length,
	            tmpI = 0;
	          for (; tmpI < tmpLen; tmpI++) {
	            tmp = tmps[tmpI];
	            if (getAttr(tmp, 'id') === id) {
	              mySeeds = [tmp];
	              break;
	            }
	          }
	          if (tmpI === tmpLen) {
	            mySeeds = [];
	          }
	        } else {
	          if (contextInDom && tmp && context !== contextDocument) {
	            tmp = util.contains(context, tmp) ? tmp : null;
	          }
	          mySeeds = tmp ? [tmp] : [];
	        }
	      } else {
	        mySeeds = util.getElementsByTagName(group.value || '*', context);
	      }
	    }

	    seedsIndex = 0;
	    seedsLen = mySeeds.length;

	    if (!seedsLen) {
	      continue;
	    }

	    for (; seedsIndex < seedsLen; seedsIndex++) {
	      var seed = mySeeds[seedsIndex];
	      var matchHead = findFixedMatchFromHead(seed, group);
	      if (matchHead === true) {
	        ret.push(seed);
	      } else if (matchHead) {
	        if (matchSub(matchHead.el, matchHead.match)) {
	          ret.push(seed);
	        }
	      }
	    }
	  }

	  if (groupLen > 1) {
	    ret = util.unique(ret);
	  }

	  return ret;
	}

	module.exports = select;

	select.parse = function (str) {
	  return parser.parse(str);
	};

	select.matches = matches;

	select.util = util;

	select.version = '@VERSION@';
	/**
	 * @ignore
	 * note 2013-03-28
	 *  - use recursive call to replace backtracking algorithm
	 *
	 * refer
	 *  - http://www.w3.org/TR/selectors/
	 *  - http://www.impressivewebs.com/browser-support-css3-selectors/
	 *  - http://blogs.msdn.com/ie/archive/2010/05/13/the-css-corner-css3-selectors.aspx
	 *  - http://sizzlejs.com/
	 */

/***/ }),
/* 16 */
/***/ (function(module, exports) {

	/**
	 * attr fix for old ie
	 * @author yiminghe@gmail.com
	 */
	var R_BOOLEAN = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
	  R_FOCUSABLE = /^(?:button|input|object|select|textarea)$/i,
	  R_CLICKABLE = /^a(?:rea)?$/i,
	  R_INVALID_CHAR = /:|^on/;

	var attrFix = {},
	  propFix,
	  attrHooks = {
	    // http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
	    tabindex: {
	      get: function (el) {
	        // elem.tabIndex doesn't always return the correct value when it hasn't been explicitly set
	        var attributeNode = el.getAttributeNode('tabindex');
	        return attributeNode && attributeNode.specified ?
	          parseInt(attributeNode.value, 10) :
	          R_FOCUSABLE.test(el.nodeName) ||
	          R_CLICKABLE.test(el.nodeName) && el.href ?
	            0 :
	            undefined;
	      }
	    }
	  },
	  boolHook = {
	    get: function (elem, name) {
	      // 转发到 prop 方法
	      return elem[propFix[name] || name] ?
	        // 根据 w3c attribute , true 时返回属性名字符串
	        name.toLowerCase() :
	        undefined;
	    }
	  },
	  attrNodeHook = {};

	attrHooks.style = {
	  get: function (el) {
	    return el.style.cssText;
	  }
	};

	propFix = {
	  hidefocus: 'hideFocus',
	  tabindex: 'tabIndex',
	  readonly: 'readOnly',
	  'for': 'htmlFor',
	  'class': 'className',
	  maxlength: 'maxLength',
	  cellspacing: 'cellSpacing',
	  cellpadding: 'cellPadding',
	  rowspan: 'rowSpan',
	  colspan: 'colSpan',
	  usemap: 'useMap',
	  frameborder: 'frameBorder',
	  contenteditable: 'contentEditable'
	};

	var ua = typeof navigator !== 'undefined' ? navigator.userAgent : '';
	var doc = typeof document !== 'undefined' ? document : {};

	function numberify(s) {
	  var c = 0;
	  // convert '1.2.3.4' to 1.234
	  return parseFloat(s.replace(/\./g, function () {
	    return (c++ === 0) ? '.' : '';
	  }));
	}

	function ieVersion() {
	  var m, v;
	  if ((m = ua.match(/MSIE ([^;]*)|Trident.*; rv(?:\s|:)?([0-9.]+)/)) &&
	    (v = (m[1] || m[2]))) {
	    return doc.documentMode || numberify(v);
	  }
	}

	function mix(s, t) {
	  for (var p in t) {
	    s[p] = t[p];
	  }
	}

	function each(arr, fn) {
	  var i = 0, l = arr.length;
	  for (; i < l; i++) {
	    if (fn(arr[i], i) === false) {
	      break;
	    }
	  }
	}
	var ie = ieVersion();

	if (ie && ie < 8) {
	  attrHooks.style.set = function (el, val) {
	    el.style.cssText = val;
	  };

	  // get attribute value from attribute node for ie
	  mix(attrNodeHook, {
	    get: function (elem, name) {
	      var ret = elem.getAttributeNode(name);
	      // Return undefined if attribute node specified by user
	      return ret && (
	        // fix #100
	      ret.specified || ret.nodeValue) ?
	        ret.nodeValue :
	        undefined;
	    }
	  });

	  // ie6,7 不区分 attribute 与 property
	  mix(attrFix, propFix);

	  // http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
	  attrHooks.tabIndex = attrHooks.tabindex;

	  // 不光是 href, src, 还有 rowspan 等非 mapping 属性，也需要用第 2 个参数来获取原始值
	  // 注意 colSpan rowSpan 已经由 propFix 转为大写
	  each(['href', 'src', 'width', 'height', 'colSpan', 'rowSpan'], function (name) {
	    attrHooks[name] = {
	      get: function (elem) {
	        var ret = elem.getAttribute(name, 2);
	        return ret === null ? undefined : ret;
	      }
	    };
	  });

	  attrHooks.placeholder = {
	    get: function (elem, name) {
	      return elem[name] || attrNodeHook.get(elem, name);
	    }
	  };
	}

	if (ie) {
	  var hrefFix = attrHooks.href = attrHooks.href || {};
	  hrefFix.set = function (el, val, name) {
	    var childNodes = el.childNodes,
	      b,
	      len = childNodes.length,
	      allText = len > 0;
	    for (len = len - 1; len >= 0; len--) {
	      if (childNodes[len].nodeType !== 3) {
	        allText = 0;
	      }
	    }
	    if (allText) {
	      b = el.ownerDocument.createElement('b');
	      b.style.display = 'none';
	      el.appendChild(b);
	    }
	    el.setAttribute(name, '' + val);
	    if (b) {
	      el.removeChild(b);
	    }
	  };
	}

	var RE_TRIM = /^[\s\xa0]+|[\s\xa0]+$/g,
	  trim = String.prototype.trim;
	var SPACE = ' ';

	var getElementsByTagName;
	getElementsByTagName = function (name, context) {
	  return context.getElementsByTagName(name);
	};

	if (doc.createElement) {
	  var div = doc.createElement('div');
	  div.appendChild(document.createComment(''));
	  if (div.getElementsByTagName('*').length) {
	    getElementsByTagName = function (name, context) {
	      var nodes = context.getElementsByTagName(name),
	        needsFilter = name === '*';
	      // <input id='length'>
	      if (needsFilter || typeof nodes.length !== 'number') {
	        var ret = [],
	          i = 0,
	          el;
	        while ((el = nodes[i++])) {
	          if (!needsFilter || el.nodeType === 1) {
	            ret.push(el);
	          }
	        }
	        return ret;
	      } else {
	        return nodes;
	      }
	    };
	  }
	}

	var compareNodeOrder = ('sourceIndex' in (doc && doc.documentElement || {})) ? function (a, b) {
	  return a.sourceIndex - b.sourceIndex;
	} : function (a, b) {
	  if (!a.compareDocumentPosition || !b.compareDocumentPosition) {
	    return a.compareDocumentPosition ? -1 : 1;
	  }
	  var bit = a.compareDocumentPosition(b) & 4;
	  return bit ? -1 : 1;
	};

	var util = module.exports = {
	  ie: ie,

	  unique: (function () {
	    var hasDuplicate,
	      baseHasDuplicate = true;

	    // Here we check if the JavaScript engine is using some sort of
	    // optimization where it does not always call our comparison
	    // function. If that is the case, discard the hasDuplicate value.
	    // Thus far that includes Google Chrome.
	    [0, 0].sort(function () {
	      baseHasDuplicate = false;
	      return 0;
	    });

	    function sortOrder(a, b) {
	      if (a === b) {
	        hasDuplicate = true;
	        return 0;
	      }

	      return compareNodeOrder(a, b);
	    }

	    // 排序去重
	    return function (elements) {
	      hasDuplicate = baseHasDuplicate;
	      elements.sort(sortOrder);

	      if (hasDuplicate) {
	        var i = 1, len = elements.length;
	        while (i < len) {
	          if (elements[i] === elements[i - 1]) {
	            elements.splice(i, 1);
	            --len;
	          } else {
	            i++;
	          }
	        }
	      }
	      return elements;
	    };
	  })(),

	  getElementsByTagName: getElementsByTagName,

	  getSimpleAttr: function (el, name) {
	    var ret = el && el.getAttributeNode(name);
	    if (ret && ret.specified) {
	      return 'value' in ret ? ret.value : ret.nodeValue;
	    }
	    return undefined;
	  },

	  contains: ie ? function (a, b) {
	    if (a.nodeType === 9) {
	      a = a.documentElement;
	    }
	    // !a.contains => a===document || text
	    // 注意原生 contains 判断时 a===b 也返回 true
	    b = b.parentNode;

	    if (a === b) {
	      return true;
	    }

	    // when b is document, a.contains(b) 不支持的接口 in ie
	    if (b && b.nodeType === 1) {
	      return a.contains && a.contains(b);
	    } else {
	      return false;
	    }
	  } : function (a, b) {
	    return !!(a.compareDocumentPosition(b) & 16);
	  },

	  isTag: function (el, value) {
	    return value === '*' || el.nodeName.toLowerCase() === value.toLowerCase();
	  },

	  hasSingleClass: function (el, cls) {
	    // consider xml
	    // https://github.com/kissyteam/kissy/issues/532
	    var className = el && util.getSimpleAttr(el, 'class');
	    return className && (className = className.replace(/[\r\t\n]/g, SPACE)) &&
	      (SPACE + className + SPACE).indexOf(SPACE + cls + SPACE) > -1;
	  },

	  startsWith: function (str, prefix) {
	    return str.lastIndexOf(prefix, 0) === 0;
	  },

	  endsWith: function (str, suffix) {
	    var ind = str.length - suffix.length;
	    return ind >= 0 && str.indexOf(suffix, ind) === ind;
	  },

	  trim: trim ?
	    function (str) {
	      return str == null ? '' : trim.call(str);
	    } :
	    function (str) {
	      return str == null ? '' : (str + '').replace(RE_TRIM, '');
	    },

	  attr: function (el, name) {
	    var attrNormalizer, ret;
	    // scrollLeft
	    name = name.toLowerCase();
	    // custom attrs
	    name = attrFix[name] || name;
	    if (R_BOOLEAN.test(name)) {
	      attrNormalizer = boolHook;
	    } else if (R_INVALID_CHAR.test(name)) {
	      // only old ie?
	      attrNormalizer = attrNodeHook;
	    } else {
	      attrNormalizer = attrHooks[name];
	    }
	    if (el && el.nodeType === 1) {
	      // browsers index elements by id/name on forms, give priority to attributes.
	      if (el.nodeName.toLowerCase() === 'form') {
	        attrNormalizer = attrNodeHook;
	      }
	      if (attrNormalizer && attrNormalizer.get) {
	        return attrNormalizer.get(el, name);
	      }
	      ret = el.getAttribute(name);
	      if (ret === '') {
	        var attrNode = el.getAttributeNode(name);
	        if (!attrNode || !attrNode.specified) {
	          return undefined;
	        }
	      }
	      // standard browser non-existing attribute return null
	      // ie<8 will return undefined , because it return property
	      // so norm to undefined
	      return ret === null ? undefined : ret;
	    }
	  }
	};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	/*
	  Generated by kison.*/
	var parser = (function (undefined) {
	    /*jshint quotmark:false, loopfunc:true, indent:false, unused:false, asi:true, boss:true*/
	    /* Generated by kison */
	    var parser = {},
	        GrammarConst = {
	            'SHIFT_TYPE': 1,
	            'REDUCE_TYPE': 2,
	            'ACCEPT_TYPE': 0,
	            'TYPE_INDEX': 0,
	            'PRODUCTION_INDEX': 1,
	            'TO_INDEX': 2
	        };
	    /*jslint quotmark: false*/
	    function mix(to, from) {
	        for (var f in from) {
	            to[f] = from[f];
	        }
	    }

	    function isArray(obj) {
	        return '[object Array]' === Object.prototype.toString.call(obj);
	    }

	    function each(object, fn, context) {
	        if (object) {
	            var key,
	                val,
	                length,
	                i = 0;

	            context = context || null;

	            if (!isArray(object)) {
	                for (key in object) {
	                    // can not use hasOwnProperty
	                    if (fn.call(context, object[key], key, object) === false) {
	                        break;
	                    }
	                }
	            } else {
	                length = object.length;
	                for (val = object[0]; i < length; val = object[++i]) {
	                    if (fn.call(context, val, i, object) === false) {
	                        break;
	                    }
	                }
	            }
	        }
	    }

	    function inArray(item, arr) {
	        for (var i = 0, l = arr.length; i < l; i++) {
	            if (arr[i] === item) {
	                return true;
	            }
	        }
	        return false;
	    }
	    var Lexer = function Lexer(cfg) {

	        var self = this;

	        /*
	     lex rules.
	     @type {Object[]}
	     @example
	     [
	     {
	     regexp:'\\w+',
	     state:['xx'],
	     token:'c',
	     // this => lex
	     action:function(){}
	     }
	     ]
	     */
	        self.rules = [];

	        mix(self, cfg);

	        /*
	     Input languages
	     @type {String}
	     */

	        self.resetInput(self.input);
	    };
	    Lexer.prototype = {
	        'resetInput': function (input) {
	            mix(this, {
	                input: input,
	                matched: '',
	                stateStack: [Lexer.STATIC.INITIAL],
	                match: '',
	                text: '',
	                firstLine: 1,
	                lineNumber: 1,
	                lastLine: 1,
	                firstColumn: 1,
	                lastColumn: 1
	            });
	        },
	        'getCurrentRules': function () {
	            var self = this,
	                currentState = self.stateStack[self.stateStack.length - 1],
	                rules = [];
	            //#JSCOVERAGE_IF
	            if (self.mapState) {
	                currentState = self.mapState(currentState);
	            }
	            each(self.rules, function (r) {
	                var state = r.state || r[3];
	                if (!state) {
	                    if (currentState === Lexer.STATIC.INITIAL) {
	                        rules.push(r);
	                    }
	                } else if (inArray(currentState, state)) {
	                    rules.push(r);
	                }
	            });
	            return rules;
	        },
	        'pushState': function (state) {
	            this.stateStack.push(state);
	        },
	        'popState': function (num) {
	            num = num || 1;
	            var ret;
	            while (num--) {
	                ret = this.stateStack.pop();
	            }
	            return ret;
	        },
	        'showDebugInfo': function () {
	            var self = this,
	                DEBUG_CONTEXT_LIMIT = Lexer.STATIC.DEBUG_CONTEXT_LIMIT,
	                matched = self.matched,
	                match = self.match,
	                input = self.input;
	            matched = matched.slice(0, matched.length - match.length);
	            //#JSCOVERAGE_IF 0
	            var past = (matched.length > DEBUG_CONTEXT_LIMIT ? '...' : '') +
	                matched.slice(0 - DEBUG_CONTEXT_LIMIT).replace(/\n/, ' '),
	                next = match + input;
	            //#JSCOVERAGE_ENDIF
	            next = next.slice(0, DEBUG_CONTEXT_LIMIT) +
	                (next.length > DEBUG_CONTEXT_LIMIT ? '...' : '');
	            return past + next + '\n' + new Array(past.length + 1).join('-') + '^';
	        },
	        'mapSymbol': function mapSymbolForCodeGen(t) {
	            return this.symbolMap[t];
	        },
	        'mapReverseSymbol': function (rs) {
	            var self = this,
	                symbolMap = self.symbolMap,
	                i,
	                reverseSymbolMap = self.reverseSymbolMap;
	            if (!reverseSymbolMap && symbolMap) {
	                reverseSymbolMap = self.reverseSymbolMap = {};
	                for (i in symbolMap) {
	                    reverseSymbolMap[symbolMap[i]] = i;
	                }
	            }
	            //#JSCOVERAGE_IF
	            if (reverseSymbolMap) {
	                return reverseSymbolMap[rs];
	            } else {
	                return rs;
	            }
	        },
	        'lex': function () {
	            var self = this,
	                input = self.input,
	                i,
	                rule,
	                m,
	                ret,
	                lines,
	                rules = self.getCurrentRules();

	            self.match = self.text = '';

	            if (!input) {
	                return self.mapSymbol(Lexer.STATIC.END_TAG);
	            }

	            for (i = 0; i < rules.length; i++) {
	                rule = rules[i];
	                //#JSCOVERAGE_IF 0
	                var regexp = rule.regexp || rule[1],
	                    token = rule.token || rule[0],
	                    action = rule.action || rule[2] || undefined;
	                //#JSCOVERAGE_ENDIF
	                if ((m = input.match(regexp))) {
	                    lines = m[0].match(/\n.*/g);
	                    if (lines) {
	                        self.lineNumber += lines.length;
	                    }
	                    mix(self, {
	                        firstLine: self.lastLine,
	                        lastLine: self.lineNumber + 1,
	                        firstColumn: self.lastColumn,
	                        lastColumn: lines ?
	                            lines[lines.length - 1].length - 1 : self.lastColumn + m[0].length
	                    });
	                    var match;
	                    // for error report
	                    match = self.match = m[0];

	                    // all matches
	                    self.matches = m;
	                    // may change by user
	                    self.text = match;
	                    // matched content utils now
	                    self.matched += match;
	                    ret = action && action.call(self);
	                    if (ret === undefined) {
	                        ret = token;
	                    } else {
	                        ret = self.mapSymbol(ret);
	                    }
	                    input = input.slice(match.length);
	                    self.input = input;

	                    if (ret) {
	                        return ret;
	                    } else {
	                        // ignore
	                        return self.lex();
	                    }
	                }
	            }
	        }
	    };
	    Lexer.STATIC = {
	        'INITIAL': 'I',
	        'DEBUG_CONTEXT_LIMIT': 20,
	        'END_TAG': '$EOF'
	    };
	    var lexer = new Lexer({
	        'rules': [
	            ['b', /^\[(?:[\t\r\n\f\x20]*)/,
	                function () {
	                    this.text = this.yy.trim(this.text);
	                }
	            ],
	            ['c', /^(?:[\t\r\n\f\x20]*)\]/,
	                function () {
	                    this.text = this.yy.trim(this.text);
	                }
	            ],
	            ['d', /^(?:[\t\r\n\f\x20]*)~=(?:[\t\r\n\f\x20]*)/,
	                function () {
	                    this.text = this.yy.trim(this.text);
	                }
	            ],
	            ['e', /^(?:[\t\r\n\f\x20]*)\|=(?:[\t\r\n\f\x20]*)/,
	                function () {
	                    this.text = this.yy.trim(this.text);
	                }
	            ],
	            ['f', /^(?:[\t\r\n\f\x20]*)\^=(?:[\t\r\n\f\x20]*)/,
	                function () {
	                    this.text = this.yy.trim(this.text);
	                }
	            ],
	            ['g', /^(?:[\t\r\n\f\x20]*)\$=(?:[\t\r\n\f\x20]*)/,
	                function () {
	                    this.text = this.yy.trim(this.text);
	                }
	            ],
	            ['h', /^(?:[\t\r\n\f\x20]*)\*=(?:[\t\r\n\f\x20]*)/,
	                function () {
	                    this.text = this.yy.trim(this.text);
	                }
	            ],
	            ['i', /^(?:[\t\r\n\f\x20]*)\=(?:[\t\r\n\f\x20]*)/,
	                function () {
	                    this.text = this.yy.trim(this.text);
	                }
	            ],
	            ['j', /^(?:(?:[\w]|[^\x00-\xa0]|(?:\\[^\n\r\f0-9a-f]))(?:[\w\d-]|[^\x00-\xa0]|(?:\\[^\n\r\f0-9a-f]))*)\(/,
	                function () {
	                    this.text = this.yy.trim(this.text).slice(0, -1);
	                    this.pushState('fn');
	                }
	            ],
	            ['k', /^[^\)]*/,
	                function () {
	                    this.popState();
	                },
	                ['fn']
	            ],
	            ['l', /^(?:[\t\r\n\f\x20]*)\)/,
	                function () {
	                    this.text = this.yy.trim(this.text);
	                }
	            ],
	            ['m', /^:not\((?:[\t\r\n\f\x20]*)/i,
	                function () {
	                    this.text = this.yy.trim(this.text);
	                }
	            ],
	            ['n', /^(?:(?:[\w]|[^\x00-\xa0]|(?:\\[^\n\r\f0-9a-f]))(?:[\w\d-]|[^\x00-\xa0]|(?:\\[^\n\r\f0-9a-f]))*)/,
	                function () {
	                    this.text = this.yy.unEscape(this.text);
	                }
	            ],
	            ['o', /^"(\\"|[^"])*"/,
	                function () {
	                    this.text = this.yy.unEscapeStr(this.text);
	                }
	            ],
	            ['o', /^'(\\'|[^'])*'/,
	                function () {
	                    this.text = this.yy.unEscapeStr(this.text);
	                }
	            ],
	            ['p', /^#(?:(?:[\w\d-]|[^\x00-\xa0]|(?:\\[^\n\r\f0-9a-f]))+)/,
	                function () {
	                    this.text = this.yy.unEscape(this.text.slice(1));
	                }
	            ],
	            ['q', /^\.(?:(?:[\w]|[^\x00-\xa0]|(?:\\[^\n\r\f0-9a-f]))(?:[\w\d-]|[^\x00-\xa0]|(?:\\[^\n\r\f0-9a-f]))*)/,
	                function () {
	                    this.text = this.yy.unEscape(this.text.slice(1));
	                }
	            ],
	            ['r', /^(?:[\t\r\n\f\x20]*),(?:[\t\r\n\f\x20]*)/,
	                function () {
	                    this.text = this.yy.trim(this.text);
	                }
	            ],
	            ['s', /^::?/, 0],
	            ['t', /^(?:[\t\r\n\f\x20]*)\+(?:[\t\r\n\f\x20]*)/,
	                function () {
	                    this.text = this.yy.trim(this.text);
	                }
	            ],
	            ['u', /^(?:[\t\r\n\f\x20]*)>(?:[\t\r\n\f\x20]*)/,
	                function () {
	                    this.text = this.yy.trim(this.text);
	                }
	            ],
	            ['v', /^(?:[\t\r\n\f\x20]*)~(?:[\t\r\n\f\x20]*)/,
	                function () {
	                    this.text = this.yy.trim(this.text);
	                }
	            ],
	            ['w', /^\*/, 0],
	            ['x', /^(?:[\t\r\n\f\x20]+)/, 0],
	            ['y', /^./, 0]
	        ]
	    });
	    parser.lexer = lexer;
	    lexer.symbolMap = {
	        '$EOF': 'a',
	        'LEFT_BRACKET': 'b',
	        'RIGHT_BRACKET': 'c',
	        'INCLUDES': 'd',
	        'DASH_MATCH': 'e',
	        'PREFIX_MATCH': 'f',
	        'SUFFIX_MATCH': 'g',
	        'SUBSTRING_MATCH': 'h',
	        'ALL_MATCH': 'i',
	        'FUNCTION': 'j',
	        'PARAMETER': 'k',
	        'RIGHT_PARENTHESES': 'l',
	        'NOT': 'm',
	        'IDENT': 'n',
	        'STRING': 'o',
	        'HASH': 'p',
	        'CLASS': 'q',
	        'COMMA': 'r',
	        'COLON': 's',
	        'PLUS': 't',
	        'GREATER': 'u',
	        'TILDE': 'v',
	        'UNIVERSAL': 'w',
	        'S': 'x',
	        'INVALID': 'y',
	        '$START': 'z',
	        'selectors_group': 'aa',
	        'selector': 'ab',
	        'simple_selector_sequence': 'ac',
	        'combinator': 'ad',
	        'type_selector': 'ae',
	        'id_selector': 'af',
	        'class_selector': 'ag',
	        'attrib_match': 'ah',
	        'attrib': 'ai',
	        'attrib_val': 'aj',
	        'pseudo': 'ak',
	        'negation': 'al',
	        'negation_arg': 'am',
	        'suffix_selector': 'an',
	        'suffix_selectors': 'ao'
	    };
	    parser.productions = [
	        ['z', ['aa']],
	        ['aa', ['ab'],
	            function () {
	                return [this.$1];
	            }
	        ],
	        ['aa', ['aa', 'r', 'ab'],
	            function () {
	                this.$1.push(this.$3);
	            }
	        ],
	        ['ab', ['ac']],
	        ['ab', ['ab', 'ad', 'ac'],
	            function () {
	                // LinkedList

	                this.$1.nextCombinator = this.$3.prevCombinator = this.$2;
	                var order;
	                order = this.$1.order = this.$1.order || 0;
	                this.$3.order = order + 1;
	                this.$3.prev = this.$1;
	                this.$1.next = this.$3;
	                return this.$3;
	            }
	        ],
	        ['ad', ['t']],
	        ['ad', ['u']],
	        ['ad', ['v']],
	        ['ad', ['x'],
	            function () {
	                return ' ';
	            }
	        ],
	        ['ae', ['n'],
	            function () {
	                return {
	                    t: 'tag',
	                    value: this.$1
	                };
	            }
	        ],
	        ['ae', ['w'],
	            function () {
	                return {
	                    t: 'tag',
	                    value: this.$1
	                };
	            }
	        ],
	        ['af', ['p'],
	            function () {
	                return {
	                    t: 'id',
	                    value: this.$1
	                };
	            }
	        ],
	        ['ag', ['q'],
	            function () {
	                return {
	                    t: 'cls',
	                    value: this.$1
	                };
	            }
	        ],
	        ['ah', ['f']],
	        ['ah', ['g']],
	        ['ah', ['h']],
	        ['ah', ['i']],
	        ['ah', ['d']],
	        ['ah', ['e']],
	        ['ai', ['b', 'n', 'c'],
	            function () {
	                return {
	                    t: 'attrib',
	                    value: {
	                        ident: this.$2
	                    }
	                };
	            }
	        ],
	        ['aj', ['n']],
	        ['aj', ['o']],
	        ['ai', ['b', 'n', 'ah', 'aj', 'c'],
	            function () {
	                return {
	                    t: 'attrib',
	                    value: {
	                        ident: this.$2,
	                        match: this.$3,
	                        value: this.$4
	                    }
	                };
	            }
	        ],
	        ['ak', ['s', 'j', 'k', 'l'],
	            function () {
	                return {
	                    t: 'pseudo',
	                    value: {
	                        fn: this.$2.toLowerCase(),
	                        param: this.$3
	                    }
	                };
	            }
	        ],
	        ['ak', ['s', 'n'],
	            function () {
	                return {
	                    t: 'pseudo',
	                    value: {
	                        ident: this.$2.toLowerCase()
	                    }
	                };
	            }
	        ],
	        ['al', ['m', 'am', 'l'],
	            function () {
	                return {
	                    t: 'pseudo',
	                    value: {
	                        fn: 'not',
	                        param: this.$2
	                    }
	                };
	            }
	        ],
	        ['am', ['ae']],
	        ['am', ['af']],
	        ['am', ['ag']],
	        ['am', ['ai']],
	        ['am', ['ak']],
	        ['an', ['af']],
	        ['an', ['ag']],
	        ['an', ['ai']],
	        ['an', ['ak']],
	        ['an', ['al']],
	        ['ao', ['an'],
	            function () {
	                return [this.$1];
	            }
	        ],
	        ['ao', ['ao', 'an'],
	            function () {
	                this.$1.push(this.$2);
	            }
	        ],
	        ['ac', ['ae']],
	        ['ac', ['ao'],
	            function () {
	                return {
	                    suffix: this.$1
	                };
	            }
	        ],
	        ['ac', ['ae', 'ao'],
	            function () {
	                return {
	                    t: 'tag',
	                    value: this.$1.value,
	                    suffix: this.$2
	                };
	            }
	        ]
	    ];
	    parser.table = {
	        'gotos': {
	            '0': {
	                'aa': 8,
	                'ab': 9,
	                'ae': 10,
	                'af': 11,
	                'ag': 12,
	                'ai': 13,
	                'ak': 14,
	                'al': 15,
	                'an': 16,
	                'ao': 17,
	                'ac': 18
	            },
	            '2': {
	                'ae': 20,
	                'af': 21,
	                'ag': 22,
	                'ai': 23,
	                'ak': 24,
	                'am': 25
	            },
	            '9': {
	                'ad': 33
	            },
	            '10': {
	                'af': 11,
	                'ag': 12,
	                'ai': 13,
	                'ak': 14,
	                'al': 15,
	                'an': 16,
	                'ao': 34
	            },
	            '17': {
	                'af': 11,
	                'ag': 12,
	                'ai': 13,
	                'ak': 14,
	                'al': 15,
	                'an': 35
	            },
	            '19': {
	                'ah': 43
	            },
	            '28': {
	                'ab': 46,
	                'ae': 10,
	                'af': 11,
	                'ag': 12,
	                'ai': 13,
	                'ak': 14,
	                'al': 15,
	                'an': 16,
	                'ao': 17,
	                'ac': 18
	            },
	            '33': {
	                'ae': 10,
	                'af': 11,
	                'ag': 12,
	                'ai': 13,
	                'ak': 14,
	                'al': 15,
	                'an': 16,
	                'ao': 17,
	                'ac': 47
	            },
	            '34': {
	                'af': 11,
	                'ag': 12,
	                'ai': 13,
	                'ak': 14,
	                'al': 15,
	                'an': 35
	            },
	            '43': {
	                'aj': 50
	            },
	            '46': {
	                'ad': 33
	            }
	        },
	        'action': {
	            '0': {
	                'b': [1, undefined, 1],
	                'm': [1, undefined, 2],
	                'n': [1, undefined, 3],
	                'p': [1, undefined, 4],
	                'q': [1, undefined, 5],
	                's': [1, undefined, 6],
	                'w': [1, undefined, 7]
	            },
	            '1': {
	                'n': [1, undefined, 19]
	            },
	            '2': {
	                'b': [1, undefined, 1],
	                'n': [1, undefined, 3],
	                'p': [1, undefined, 4],
	                'q': [1, undefined, 5],
	                's': [1, undefined, 6],
	                'w': [1, undefined, 7]
	            },
	            '3': {
	                'a': [2, 9],
	                'r': [2, 9],
	                't': [2, 9],
	                'u': [2, 9],
	                'v': [2, 9],
	                'x': [2, 9],
	                'p': [2, 9],
	                'q': [2, 9],
	                'b': [2, 9],
	                's': [2, 9],
	                'm': [2, 9],
	                'l': [2, 9]
	            },
	            '4': {
	                'a': [2, 11],
	                'r': [2, 11],
	                't': [2, 11],
	                'u': [2, 11],
	                'v': [2, 11],
	                'x': [2, 11],
	                'p': [2, 11],
	                'q': [2, 11],
	                'b': [2, 11],
	                's': [2, 11],
	                'm': [2, 11],
	                'l': [2, 11]
	            },
	            '5': {
	                'a': [2, 12],
	                'r': [2, 12],
	                't': [2, 12],
	                'u': [2, 12],
	                'v': [2, 12],
	                'x': [2, 12],
	                'p': [2, 12],
	                'q': [2, 12],
	                'b': [2, 12],
	                's': [2, 12],
	                'm': [2, 12],
	                'l': [2, 12]
	            },
	            '6': {
	                'j': [1, undefined, 26],
	                'n': [1, undefined, 27]
	            },
	            '7': {
	                'a': [2, 10],
	                'r': [2, 10],
	                't': [2, 10],
	                'u': [2, 10],
	                'v': [2, 10],
	                'x': [2, 10],
	                'p': [2, 10],
	                'q': [2, 10],
	                'b': [2, 10],
	                's': [2, 10],
	                'm': [2, 10],
	                'l': [2, 10]
	            },
	            '8': {
	                'a': [0],
	                'r': [1, undefined, 28]
	            },
	            '9': {
	                'a': [2, 1],
	                'r': [2, 1],
	                't': [1, undefined, 29],
	                'u': [1, undefined, 30],
	                'v': [1, undefined, 31],
	                'x': [1, undefined, 32]
	            },
	            '10': {
	                'a': [2, 38],
	                'r': [2, 38],
	                't': [2, 38],
	                'u': [2, 38],
	                'v': [2, 38],
	                'x': [2, 38],
	                'b': [1, undefined, 1],
	                'm': [1, undefined, 2],
	                'p': [1, undefined, 4],
	                'q': [1, undefined, 5],
	                's': [1, undefined, 6]
	            },
	            '11': {
	                'a': [2, 31],
	                'r': [2, 31],
	                't': [2, 31],
	                'u': [2, 31],
	                'v': [2, 31],
	                'x': [2, 31],
	                'p': [2, 31],
	                'q': [2, 31],
	                'b': [2, 31],
	                's': [2, 31],
	                'm': [2, 31]
	            },
	            '12': {
	                'a': [2, 32],
	                'r': [2, 32],
	                't': [2, 32],
	                'u': [2, 32],
	                'v': [2, 32],
	                'x': [2, 32],
	                'p': [2, 32],
	                'q': [2, 32],
	                'b': [2, 32],
	                's': [2, 32],
	                'm': [2, 32]
	            },
	            '13': {
	                'a': [2, 33],
	                'r': [2, 33],
	                't': [2, 33],
	                'u': [2, 33],
	                'v': [2, 33],
	                'x': [2, 33],
	                'p': [2, 33],
	                'q': [2, 33],
	                'b': [2, 33],
	                's': [2, 33],
	                'm': [2, 33]
	            },
	            '14': {
	                'a': [2, 34],
	                'r': [2, 34],
	                't': [2, 34],
	                'u': [2, 34],
	                'v': [2, 34],
	                'x': [2, 34],
	                'p': [2, 34],
	                'q': [2, 34],
	                'b': [2, 34],
	                's': [2, 34],
	                'm': [2, 34]
	            },
	            '15': {
	                'a': [2, 35],
	                'r': [2, 35],
	                't': [2, 35],
	                'u': [2, 35],
	                'v': [2, 35],
	                'x': [2, 35],
	                'p': [2, 35],
	                'q': [2, 35],
	                'b': [2, 35],
	                's': [2, 35],
	                'm': [2, 35]
	            },
	            '16': {
	                'a': [2, 36],
	                'r': [2, 36],
	                't': [2, 36],
	                'u': [2, 36],
	                'v': [2, 36],
	                'x': [2, 36],
	                'p': [2, 36],
	                'q': [2, 36],
	                'b': [2, 36],
	                's': [2, 36],
	                'm': [2, 36]
	            },
	            '17': {
	                'a': [2, 39],
	                'r': [2, 39],
	                't': [2, 39],
	                'u': [2, 39],
	                'v': [2, 39],
	                'x': [2, 39],
	                'b': [1, undefined, 1],
	                'm': [1, undefined, 2],
	                'p': [1, undefined, 4],
	                'q': [1, undefined, 5],
	                's': [1, undefined, 6]
	            },
	            '18': {
	                'a': [2, 3],
	                'r': [2, 3],
	                't': [2, 3],
	                'u': [2, 3],
	                'v': [2, 3],
	                'x': [2, 3]
	            },
	            '19': {
	                'c': [1, undefined, 36],
	                'd': [1, undefined, 37],
	                'e': [1, undefined, 38],
	                'f': [1, undefined, 39],
	                'g': [1, undefined, 40],
	                'h': [1, undefined, 41],
	                'i': [1, undefined, 42]
	            },
	            '20': {
	                'l': [2, 26]
	            },
	            '21': {
	                'l': [2, 27]
	            },
	            '22': {
	                'l': [2, 28]
	            },
	            '23': {
	                'l': [2, 29]
	            },
	            '24': {
	                'l': [2, 30]
	            },
	            '25': {
	                'l': [1, undefined, 44]
	            },
	            '26': {
	                'k': [1, undefined, 45]
	            },
	            '27': {
	                'a': [2, 24],
	                'r': [2, 24],
	                't': [2, 24],
	                'u': [2, 24],
	                'v': [2, 24],
	                'x': [2, 24],
	                'p': [2, 24],
	                'q': [2, 24],
	                'b': [2, 24],
	                's': [2, 24],
	                'm': [2, 24],
	                'l': [2, 24]
	            },
	            '28': {
	                'b': [1, undefined, 1],
	                'm': [1, undefined, 2],
	                'n': [1, undefined, 3],
	                'p': [1, undefined, 4],
	                'q': [1, undefined, 5],
	                's': [1, undefined, 6],
	                'w': [1, undefined, 7]
	            },
	            '29': {
	                'n': [2, 5],
	                'w': [2, 5],
	                'p': [2, 5],
	                'q': [2, 5],
	                'b': [2, 5],
	                's': [2, 5],
	                'm': [2, 5]
	            },
	            '30': {
	                'n': [2, 6],
	                'w': [2, 6],
	                'p': [2, 6],
	                'q': [2, 6],
	                'b': [2, 6],
	                's': [2, 6],
	                'm': [2, 6]
	            },
	            '31': {
	                'n': [2, 7],
	                'w': [2, 7],
	                'p': [2, 7],
	                'q': [2, 7],
	                'b': [2, 7],
	                's': [2, 7],
	                'm': [2, 7]
	            },
	            '32': {
	                'n': [2, 8],
	                'w': [2, 8],
	                'p': [2, 8],
	                'q': [2, 8],
	                'b': [2, 8],
	                's': [2, 8],
	                'm': [2, 8]
	            },
	            '33': {
	                'b': [1, undefined, 1],
	                'm': [1, undefined, 2],
	                'n': [1, undefined, 3],
	                'p': [1, undefined, 4],
	                'q': [1, undefined, 5],
	                's': [1, undefined, 6],
	                'w': [1, undefined, 7]
	            },
	            '34': {
	                'a': [2, 40],
	                'r': [2, 40],
	                't': [2, 40],
	                'u': [2, 40],
	                'v': [2, 40],
	                'x': [2, 40],
	                'b': [1, undefined, 1],
	                'm': [1, undefined, 2],
	                'p': [1, undefined, 4],
	                'q': [1, undefined, 5],
	                's': [1, undefined, 6]
	            },
	            '35': {
	                'a': [2, 37],
	                'r': [2, 37],
	                't': [2, 37],
	                'u': [2, 37],
	                'v': [2, 37],
	                'x': [2, 37],
	                'p': [2, 37],
	                'q': [2, 37],
	                'b': [2, 37],
	                's': [2, 37],
	                'm': [2, 37]
	            },
	            '36': {
	                'a': [2, 19],
	                'r': [2, 19],
	                't': [2, 19],
	                'u': [2, 19],
	                'v': [2, 19],
	                'x': [2, 19],
	                'p': [2, 19],
	                'q': [2, 19],
	                'b': [2, 19],
	                's': [2, 19],
	                'm': [2, 19],
	                'l': [2, 19]
	            },
	            '37': {
	                'n': [2, 17],
	                'o': [2, 17]
	            },
	            '38': {
	                'n': [2, 18],
	                'o': [2, 18]
	            },
	            '39': {
	                'n': [2, 13],
	                'o': [2, 13]
	            },
	            '40': {
	                'n': [2, 14],
	                'o': [2, 14]
	            },
	            '41': {
	                'n': [2, 15],
	                'o': [2, 15]
	            },
	            '42': {
	                'n': [2, 16],
	                'o': [2, 16]
	            },
	            '43': {
	                'n': [1, undefined, 48],
	                'o': [1, undefined, 49]
	            },
	            '44': {
	                'a': [2, 25],
	                'r': [2, 25],
	                't': [2, 25],
	                'u': [2, 25],
	                'v': [2, 25],
	                'x': [2, 25],
	                'p': [2, 25],
	                'q': [2, 25],
	                'b': [2, 25],
	                's': [2, 25],
	                'm': [2, 25]
	            },
	            '45': {
	                'l': [1, undefined, 51]
	            },
	            '46': {
	                'a': [2, 2],
	                'r': [2, 2],
	                't': [1, undefined, 29],
	                'u': [1, undefined, 30],
	                'v': [1, undefined, 31],
	                'x': [1, undefined, 32]
	            },
	            '47': {
	                'a': [2, 4],
	                'r': [2, 4],
	                't': [2, 4],
	                'u': [2, 4],
	                'v': [2, 4],
	                'x': [2, 4]
	            },
	            '48': {
	                'c': [2, 20]
	            },
	            '49': {
	                'c': [2, 21]
	            },
	            '50': {
	                'c': [1, undefined, 52]
	            },
	            '51': {
	                'a': [2, 23],
	                'r': [2, 23],
	                't': [2, 23],
	                'u': [2, 23],
	                'v': [2, 23],
	                'x': [2, 23],
	                'p': [2, 23],
	                'q': [2, 23],
	                'b': [2, 23],
	                's': [2, 23],
	                'm': [2, 23],
	                'l': [2, 23]
	            },
	            '52': {
	                'a': [2, 22],
	                'r': [2, 22],
	                't': [2, 22],
	                'u': [2, 22],
	                'v': [2, 22],
	                'x': [2, 22],
	                'p': [2, 22],
	                'q': [2, 22],
	                'b': [2, 22],
	                's': [2, 22],
	                'm': [2, 22],
	                'l': [2, 22]
	            }
	        }
	    };
	    parser.parse = function parse(input, filename) {
	        var self = this,
	            lexer = self.lexer,
	            state,
	            symbol,
	            action,
	            table = self.table,
	            gotos = table.gotos,
	            tableAction = table.action,
	            productions = self.productions,
	            valueStack = [null],
	            // for debug info
	            prefix = filename ? ('in file: ' + filename + ' ') : '',
	            stack = [0];

	        lexer.resetInput(input);

	        while (1) {
	            // retrieve state number from top of stack
	            state = stack[stack.length - 1];

	            if (!symbol) {
	                symbol = lexer.lex();
	            }

	            if (symbol) {
	                // read action for current state and first input
	                action = tableAction[state] && tableAction[state][symbol];
	            } else {
	                action = null;
	            }

	            if (!action) {
	                var expected = [],
	                    error;
	                //#JSCOVERAGE_IF
	                if (tableAction[state]) {
	                    for (var symbolForState in tableAction[state]) {
	                        expected.push(self.lexer.mapReverseSymbol(symbolForState));
	                    }
	                }
	                error = prefix + 'syntax error at line ' + lexer.lineNumber +
	                    ':\n' + lexer.showDebugInfo() +
	                    '\n' + 'expect ' + expected.join(', ');
	                throw new Error(error);
	            }

	            switch (action[GrammarConst.TYPE_INDEX]) {
	            case GrammarConst.SHIFT_TYPE:
	                stack.push(symbol);

	                valueStack.push(lexer.text);

	                // push state
	                stack.push(action[GrammarConst.TO_INDEX]);

	                // allow to read more
	                symbol = null;

	                break;

	            case GrammarConst.REDUCE_TYPE:
	                var production = productions[action[GrammarConst.PRODUCTION_INDEX]],
	                    reducedSymbol = production.symbol || production[0],
	                    reducedAction = production.action || production[2],
	                    reducedRhs = production.rhs || production[1],
	                    len = reducedRhs.length,
	                    i = 0,
	                    ret,
	                    $$ = valueStack[valueStack.length - len]; // default to $$ = $1

	                ret = undefined;

	                self.$$ = $$;

	                for (; i < len; i++) {
	                    self['$' + (len - i)] = valueStack[valueStack.length - 1 - i];
	                }

	                if (reducedAction) {
	                    ret = reducedAction.call(self);
	                }

	                if (ret !== undefined) {
	                    $$ = ret;
	                } else {
	                    $$ = self.$$;
	                }

	                stack = stack.slice(0, -1 * len * 2);
	                valueStack = valueStack.slice(0, -1 * len);

	                stack.push(reducedSymbol);

	                valueStack.push($$);

	                var newState = gotos[stack[stack.length - 2]][stack[stack.length - 1]];

	                stack.push(newState);

	                break;

	            case GrammarConst.ACCEPT_TYPE:
	                return $$;
	            }
	        }
	    };
	    return parser;
	})();
	if (true) {
	    module.exports = parser;
	}

/***/ }),
/* 18 */
/***/ (function(module, exports) {

	var hyphenExpression = /\-+([a-z])/gi

	function upperCaseFirstMatch (match, c, offset) {
	  if (offset !== 0) {
	    return c.toUpperCase()
	  } else {
	    return c
	  }
	}

	function camelCase (str) {
	  var camelCased = str.replace(hyphenExpression, upperCaseFirstMatch)
	  hyphenExpression.lastIndex = 0
	  return camelCased
	}

	module.exports = camelCase


/***/ }),
/* 19 */
/***/ (function(module, exports) {

	function isString (value) {
	  return typeof value === 'string'
	}

	module.exports = isString


/***/ }),
/* 20 */
/***/ (function(module, exports) {

	function isUndefined (value) {
	  return typeof value === 'undefined'
	}

	module.exports = isUndefined


/***/ }),
/* 21 */
/***/ (function(module, exports) {

	function assign (dest) {
	  var args = arguments
	  var source

	  for (var i = 1; i < args.length; i++) {
	    source = args[i]

	    for (var key in source) {
	      dest[key] = source[key]
	    }
	  }

	  return dest
	}

	module.exports = assign


/***/ }),
/* 22 */
/***/ (function(module, exports) {

	function mapValues (source, fn) {
	  var destination = {}

	  for (var key in source) {
	    if (source.hasOwnProperty(key)) {
	      destination[key] = fn(source[key])
	    }
	  }

	  return destination
	}

	module.exports = mapValues


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	var camelCase = __webpack_require__(18)

	function styleCamelCase (name) {
	  var camel = camelCase(name)

	  // Detect if the style property is already camelCased
	  // To not convert Webkit*, Moz* and O* to lowercase
	  if (camel.charAt(0).toUpperCase() === name.charAt(0)) {
	    return name.charAt(0) + camel.slice(1)
	  }

	  if (name.charAt(0) === '-') {
	    return camel.indexOf('ms') === 0 ? camel
	      : camel.charAt(0).toUpperCase() + camel.slice(1)
	  } else {
	    return camel
	  }
	}

	module.exports = styleCamelCase


/***/ }),
/* 24 */
/***/ (function(module, exports) {

	var Window = {
	  getComputedStyle: function (node) {
	    return {
	      getPropertyValue: node.style.getProperty
	    }
	  }
	}

	module.exports = Window


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	var Element = __webpack_require__(12)
	var mapValues = __webpack_require__(22)

	var mixin = {
	  componentWillMount: function () {
	    this.connectedFauxDOM = {}
	    this.animateFauxDOMUntil = 0
	  },
	  connectFauxDOM: function (node, name) {
	    this.connectedFauxDOM[name] = typeof node !== 'string' ? node : new Element(node)
	    setTimeout(this.drawFauxDOM)
	    return this.connectedFauxDOM[name]
	  },
	  drawFauxDOM: function () {
	    var virtualDOM = mapValues(this.connectedFauxDOM, function (n) {
	      return n.toReact()
	    })
	    this.setState(virtualDOM)
	  }
	}

	module.exports = mixin


/***/ }),
/* 26 */
/***/ (function(module, exports) {

	var anim = {
	  animateFauxDOM: function (duration) {
	    this.animateFauxDOMUntil = Math.max(Date.now() + duration, this.animateFauxDOMUntil)
	    if (!this.fauxDOMAnimationInterval) {
	      this.fauxDOMAnimationInterval = setInterval(function () {
	        if (Date.now() < this.animateFauxDOMUntil) {
	          this.drawFauxDOM()
	        } else {
	          this.stopAnimatingFauxDOM()
	        }
	      }.bind(this), 16)
	    }
	  },
	  stopAnimatingFauxDOM: function () {
	    this.fauxDOMAnimationInterval = clearInterval(this.fauxDOMAnimationInterval)
	    this.animateFauxDOMUntil = 0
	  },
	  isAnimatingFauxDOM: function () {
	    return !!this.fauxDOMAnimationInterval
	  },
	  componentWillUnmount: function () {
	    this.stopAnimatingFauxDOM()
	  }
	}

	module.exports = anim


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _d3 = __webpack_require__(5);

	var _d32 = _interopRequireDefault(_d3);

	var _reactFauxDom = __webpack_require__(11);

	var _reactFauxDom2 = _interopRequireDefault(_reactFauxDom);

	var _utilsScale = __webpack_require__(7);

	var Axis = (function (_Component) {
	  _inherits(Axis, _Component);

	  function Axis(props) {
	    _classCallCheck(this, Axis);

	    _get(Object.getPrototypeOf(Axis.prototype), 'constructor', this).call(this, props);
	  }

	  _createClass(Axis, [{
	    key: '_mkTickAxis',
	    value: function _mkTickAxis() {
	      var _props = this.props;
	      var type = _props.type;
	      var tickOrient = _props.tickOrient;
	      var tickFormat = _props.tickFormat;
	      var tickPadding = _props.tickPadding;
	      var innerTickSize = _props.innerTickSize;
	      var outerTickSize = _props.outerTickSize;
	      var ticks = _props.ticks;

	      var func = _d32['default'].svg.axis();

	      func.scale(this._mkScale(this.props));

	      if (tickOrient) func.orient(tickOrient);

	      if (tickFormat) func.tickFormat(tickFormat);

	      if (tickPadding) func.tickPadding(tickPadding);

	      if (outerTickSize) func.outerTickSize(outerTickSize);

	      if (innerTickSize) func.innerTickSize(innerTickSize);

	      if (ticks) func.ticks.apply(null, ticks);

	      return func;
	    }
	  }, {
	    key: '_mkScale',
	    value: function _mkScale() {
	      var type = this.props.type;

	      var func = (0, _utilsScale.scale)(this.props);

	      return func;
	    }
	  }, {
	    key: 'wrap',
	    value: function wrap(text, maxWidth, _class) {
	      text.each(function () {
	        var text = _d32['default'].select(this),
	            word,
	            lineNumber = 0,
	            lineHeight = 1.1,
	            // ems
	        y = text.attr("y"),
	            dy = parseFloat(text.attr("dy")),
	            textLine = text.text(),
	            words = textLine.split(/\s+/),
	            tspan = text.text(null).append("tspan").attr("x", 0).attr("y", y).attr("dy", dy + "em");
	        var c = document.createElement("canvas");
	        var ctx = c.getContext("2d");
	        ctx.font = "1em";
	        var width = Math.round(ctx.measureText(textLine).width);
	        var wordLines = [];
	        var wordLine = "";
	        if (maxWidth < width) {
	          words.forEach(function (_word) {
	            var wordWidth = Math.round(ctx.measureText(_word + " ").width);
	            if (maxWidth < wordWidth) {
	              maxWidth = wordWidth;
	            }
	          });
	          for (var i = 0; i <= words.length; i++) {
	            var _word2 = words[i];
	            if (_word2 === undefined) {
	              wordLines.push(wordLine);
	              break;
	            }
	            if (Math.round(ctx.measureText(wordLine + ' ' + _word2).width) <= maxWidth) {
	              wordLine += ' ' + _word2;
	            } else {
	              wordLines.push(wordLine);
	              wordLine = _word2;
	            }
	          }
	        } else {
	          wordLines.push(textLine);
	        }
	        wordLines.forEach(function (word) {
	          tspan = text.append("tspan").attr("x", 0).attr("y", y).attr("dy", ++lineNumber * lineHeight + dy + "em").text(word);
	        });
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props2 = this.props;
	      var showAxis = _props2.showAxis;
	      var gridAxisClassName = _props2.gridAxisClassName;
	      var axisClassName = _props2.axisClassName;
	      var type = _props2.type;
	      var style = _props2.style;
	      var wordWrap = _props2.wordWrap;
	      var gridAxisLineStyle = _props2.gridAxisLineStyle;
	      var width = _props2.width;
	      var margins = _props2.margins;
	      var rotateLabel = _props2.rotateLabel;

	      var axisGroup = _reactFauxDom2['default'].createElement('g');

	      if (type === 'x') var axisClasses = axisClassName + ' axis x';else if (type === 'y') var axisClasses = axisClassName + ' axis y';else if (type === 'gridx' || type === 'gridy') var axisClasses = gridAxisClassName + ' grid-axis';

	      axisGroup.setAttribute('class', axisClasses);

	      var axisDom = _d32['default'].select(axisGroup);

	      axisDom.call(this._mkTickAxis());

	      if (!showAxis) {
	        axisDom.selectAll(".grid-axis .tick text").style("opacity", "0");

	        if (type === 'gridx' || type === 'gridy') {
	          // hide domain in grids
	          axisDom.selectAll(".grid-axis .domain").style("opacity", "0");
	        }
	      }

	      var gridAxixFill = 'none',
	          gridAxixStroke = '#000',
	          gridAxixStrokeWidth = '1.5px',
	          gridAxixOpacity = .2;

	      if (gridAxisLineStyle) {
	        if (gridAxisLineStyle.gridAxixFill) {
	          gridAxixFill = gridAxisLineStyle.gridAxixFill;
	        }
	        if (gridAxisLineStyle.gridAxixStroke) {
	          gridAxixStroke = gridAxisLineStyle.gridAxixStroke;
	        }
	        if (gridAxisLineStyle.gridAxixStrokeWidth) {
	          gridAxixStrokeWidth = gridAxisLineStyle.gridAxixStrokeWidth;
	        }
	        if (gridAxisLineStyle.gridAxixOpacity) {
	          gridAxixOpacity = gridAxisLineStyle.gridAxixOpacity;
	        }
	      }

	      // basic styles
	      axisDom.selectAll('.axis path').style('fill', gridAxixFill).style('stroke', gridAxixStroke).style('shape-rendering', 'crispEdges');

	      axisDom.selectAll('.axis line').style('fill', gridAxixFill).style('stroke', gridAxixStroke).style('shape-rendering', 'crispEdges');

	      axisDom.selectAll('.grid-axis line').style('opacity', gridAxixOpacity).style('fill', gridAxixFill).style('stroke', gridAxixStroke).style('stroke-width', gridAxixStrokeWidth);

	      axisDom.selectAll('.axis path').style('display', 'none');

	      var axisText = axisDom.selectAll('.axis text');

	      if (style) {
	        for (var key in style) {
	          axisText.style(key, style[key]);
	        }
	      }

	      if (wordWrap) {
	        var maxTextWith = (width - margins.left - margins.right) / axisDom.selectAll('.axis text')[0].length - 10;
	        axisDom.selectAll('.axis text').call(this.wrap, maxTextWith, this);
	        if (rotateLabel) {
	          axisDom.selectAll('.axis text').attr("transform", function (d) {
	            return "rotate(45)";
	          }).style('text-anchor', 'left');
	        }
	      }

	      return axisDom.node().toReact();
	    }
	  }], [{
	    key: 'defaultProps',
	    value: {
	      range: null,
	      rangeRoundBands: null,
	      domain: null,
	      tickFormat: null,
	      tickOrient: null,
	      wordWrap: false,
	      rotateLabel: false
	    },
	    enumerable: true
	  }, {
	    key: 'PropTypes',
	    value: {
	      showAxis: _react.PropTypes.bool,
	      type: _react.PropTypes.string,
	      orient: _react.PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
	      tickOrient: _react.PropTypes.oneOf(['top', 'bottom', 'left', 'right'])
	    },
	    enumerable: true
	  }]);

	  return Axis;
	})(_react.Component);

	exports['default'] = Axis;
	module.exports = exports['default'];

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _axis = __webpack_require__(27);

	var _axis2 = _interopRequireDefault(_axis);

	var _label = __webpack_require__(29);

	var _label2 = _interopRequireDefault(_label);

	var _commonProps = __webpack_require__(6);

	var _commonProps2 = _interopRequireDefault(_commonProps);

	var Xaxis = (function (_Component) {
	  _inherits(Xaxis, _Component);

	  function Xaxis(props) {
	    _classCallCheck(this, Xaxis);

	    _get(Object.getPrototypeOf(Xaxis.prototype), 'constructor', this).call(this, props);
	  }

	  _createClass(Xaxis, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var height = _props.height;
	      var width = _props.width;
	      var margins = _props.margins;
	      var showXAxis = _props.showXAxis;
	      var x = _props.x;
	      var xAxisClassName = _props.xAxisClassName;
	      var xDomain = _props.xDomain;
	      var xRange = _props.xRange;
	      var xRangeRoundBands = _props.xRangeRoundBands;
	      var xScale = _props.xScale;
	      var xOrient = _props.xOrient;
	      var xTickOrient = _props.xTickOrient;
	      var xTickPadding = _props.xTickPadding;
	      var xInnerTickSize = _props.xInnerTickSize;
	      var xOuterTickSize = _props.xOuterTickSize;
	      var xTickFormat = _props.xTickFormat;
	      var xTicks = _props.xTicks;
	      var xLabel = _props.xLabel;
	      var xLabelPosition = _props.xLabelPosition;
	      var labelOffset = _props.labelOffset;
	      var style = _props.style;
	      var xWordWrap = _props.xWordWrap;
	      var xGridAxisLineStyle = _props.xGridAxisLineStyle;
	      var xRotateLabel = _props.xRotateLabel;

	      var t;
	      var axisLabel;

	      if (!xRange) {
	        xRange = [0, width - margins.left - margins.right];
	      }

	      if (xOrient === 'bottom') {
	        // x - bottom
	        t = 'translate(0, ' + (height - margins.bottom - margins.top) + ')';
	      } else if (xOrient === 'top') {
	        // x - top
	        t = 'translate(0, 0)';
	      }

	      if (xLabel) {
	        axisLabel = _react2['default'].createElement(_label2['default'], {
	          height: height,
	          width: width,
	          margins: margins,
	          labelTitle: xLabel,
	          labelPosition: xLabelPosition,
	          labelOffset: labelOffset,
	          rangeRoundBands: xRangeRoundBands
	        });
	      }

	      return _react2['default'].createElement(
	        'g',
	        { transform: t },
	        _react2['default'].createElement(_axis2['default'], {
	          height: height,
	          width: width,
	          margins: margins,
	          showAxis: showXAxis,
	          axisClassName: xAxisClassName,
	          rangeRoundBands: xRangeRoundBands,
	          type: 'x',
	          proxy: x,
	          domain: xDomain,
	          range: xRange,
	          scale: xScale,
	          orient: xOrient,
	          tickOrient: xTickOrient,
	          tickFormat: xTickFormat,
	          tickPadding: xTickPadding,
	          innerTickSize: xInnerTickSize,
	          outerTickSize: xOuterTickSize,
	          ticks: xTicks,
	          style: style,
	          wordWrap: xWordWrap,
	          gridAxisLineStyle: xGridAxisLineStyle,
	          rotateLabel: xRotateLabel
	        }),
	        axisLabel
	      );
	    }
	  }], [{
	    key: 'defaultProps',
	    value: Object.assign(_commonProps2['default'], {
	      showXAxis: true,
	      xAxisClassName: 'react-d3-core__axis__xAxis',
	      xScale: 'linear',
	      xOrient: 'bottom',
	      xTickOrient: 'bottom',
	      xLabelPosition: 'bottom',
	      xTickPadding: 3,
	      xInnerTickSize: 6,
	      xOuterTickSize: 6
	    }),
	    enumerable: true
	  }, {
	    key: 'propTypes',
	    value: {
	      height: _react.PropTypes.number.isRequired,
	      width: _react.PropTypes.number.isRequired,
	      margins: _react.PropTypes.object.isRequired,
	      showXAxis: _react.PropTypes.bool,
	      x: _react.PropTypes.func,
	      xDomain: _react.PropTypes.array,
	      xRange: _react.PropTypes.array,
	      xScale: _react.PropTypes.string.isRequired,
	      xOrient: _react.PropTypes.oneOf(['top', 'bottom']),
	      xTickOrient: _react.PropTypes.oneOf(['top', 'bottom']),
	      xAxisClassName: _react.PropTypes.string,
	      xInnerTickSize: _react.PropTypes.number,
	      xOuterTickSize: _react.PropTypes.number,
	      xTickPadding: _react.PropTypes.number,
	      xTickFormat: _react.PropTypes.func,
	      xTicks: _react.PropTypes.array,
	      style: _react.PropTypes.object,
	      xWordWrap: _react.PropTypes.bool,
	      xGridAxisLineStyle: _react.PropTypes.object,
	      xRotateLabel: _react.PropTypes.bool
	    },
	    enumerable: true
	  }]);

	  return Xaxis;
	})(_react.Component);

	exports['default'] = Xaxis;
	module.exports = exports['default'];

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _d3 = __webpack_require__(5);

	var _d32 = _interopRequireDefault(_d3);

	var _reactFauxDom = __webpack_require__(11);

	var _reactFauxDom2 = _interopRequireDefault(_reactFauxDom);

	var _commonProps = __webpack_require__(6);

	var _commonProps2 = _interopRequireDefault(_commonProps);

	var Label = (function (_Component) {
	  _inherits(Label, _Component);

	  function Label(props) {
	    _classCallCheck(this, Label);

	    _get(Object.getPrototypeOf(Label.prototype), 'constructor', this).call(this, props);
	  }

	  _createClass(Label, [{
	    key: '_mkLabel',
	    value: function _mkLabel(dom) {
	      var _props = this.props;
	      var height = _props.height;
	      var width = _props.width;
	      var margins = _props.margins;
	      var labelOffset = _props.labelOffset;
	      var labelTitle = _props.labelTitle;
	      var labelPosition = _props.labelPosition;
	      var vTransform = _props.vTransform;
	      var hTransform = _props.hTransform;
	      var textAnchor = _props.textAnchor;

	      var labelDom = _d32['default'].select(dom);
	      var fixWidth = width - margins.left - margins.right;
	      var fixHeight = height - margins.top - margins.bottom;

	      if (labelPosition === 'top') {

	        labelDom.attr('transform', hTransform).attr('y', -labelOffset).attr('x', fixWidth / 2).style('text-anchor', textAnchor).text(labelTitle);
	      } else if (labelPosition === 'bottom') {

	        labelDom.attr('transform', hTransform).attr('y', +labelOffset).attr('x', fixWidth / 2).style('text-anchor', textAnchor).text(labelTitle);
	      } else if (labelPosition === 'left') {

	        labelDom.attr('transform', vTransform).attr('y', -labelOffset).attr('x', -fixHeight / 2).style('text-anchor', textAnchor).text(labelTitle);
	      } else if (labelPosition === 'right') {

	        labelDom.attr('transform', vTransform).attr('y', +labelOffset).attr('x', -fixHeight / 2).style('text-anchor', textAnchor).text(labelTitle);
	      }

	      return labelDom;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var labelClassName = this.props.labelClassName;

	      var labelText = _reactFauxDom2['default'].createElement('text');
	      var labelClasses = labelClassName + ' label';
	      labelText.setAttribute('class', labelClasses);

	      var labelDom = this._mkLabel(labelText);

	      return labelDom.node().toReact();
	    }
	  }], [{
	    key: 'defaultProps',
	    value: Object.assign(_commonProps2['default'], {
	      hTransform: 'rotate(0)',
	      vTransform: 'rotate(270)',
	      labelTitle: 'label title',
	      labelPosition: 'bottom',
	      labelOffset: 40,
	      textAnchor: 'middle',
	      labelClassName: 'react-d3-core__label'
	    }),
	    enumerable: true
	  }, {
	    key: 'propTypes',
	    value: {
	      height: _react.PropTypes.number.isRequired,
	      width: _react.PropTypes.number.isRequired,
	      margins: _react.PropTypes.object.isRequired,
	      hTransform: _react.PropTypes.string,
	      vTransform: _react.PropTypes.string,
	      labelTitle: _react.PropTypes.string,
	      labelPosition: _react.PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
	      labelOffset: _react.PropTypes.number,
	      textAnchor: _react.PropTypes.string,
	      labelClassName: _react.PropTypes.string
	    },
	    enumerable: true
	  }]);

	  return Label;
	})(_react.Component);

	exports['default'] = Label;
	module.exports = exports['default'];

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _axis = __webpack_require__(27);

	var _axis2 = _interopRequireDefault(_axis);

	var _label = __webpack_require__(29);

	var _label2 = _interopRequireDefault(_label);

	var _commonProps = __webpack_require__(6);

	var _commonProps2 = _interopRequireDefault(_commonProps);

	var Yaxis = (function (_Component) {
	  _inherits(Yaxis, _Component);

	  function Yaxis(props) {
	    _classCallCheck(this, Yaxis);

	    _get(Object.getPrototypeOf(Yaxis.prototype), 'constructor', this).call(this, props);
	  }

	  _createClass(Yaxis, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var width = _props.width;
	      var height = _props.height;
	      var margins = _props.margins;
	      var y = _props.y;
	      var yAxisClassName = _props.yAxisClassName;
	      var yDomain = _props.yDomain;
	      var yRange = _props.yRange;
	      var yRangeRoundBands = _props.yRangeRoundBands;
	      var yScale = _props.yScale;
	      var yOrient = _props.yOrient;
	      var yTickOrient = _props.yTickOrient;
	      var yTickFormat = _props.yTickFormat;
	      var yTickPadding = _props.yTickPadding;
	      var yInnerTickSize = _props.yInnerTickSize;
	      var yOuterTickSize = _props.yOuterTickSize;
	      var yTicks = _props.yTicks;
	      var yLabel = _props.yLabel;
	      var yLabelPosition = _props.yLabelPosition;
	      var labelOffset = _props.labelOffset;
	      var showYAxis = _props.showYAxis;
	      var style = _props.style;
	      var yGridAxisLineStyle = _props.yGridAxisLineStyle;

	      var t;
	      var axisLabel;

	      if (!yRange) {
	        yRange = [height - margins.top - margins.bottom, 0];
	      }

	      if (yOrient === 'right') {
	        // y - right
	        t = 'translate(' + (width - margins.right - margins.left) + ', 0)';
	      } else if (yOrient === 'left') {
	        // y - left
	        t = 'translate(0, 0)';
	      }

	      if (yLabel) {
	        axisLabel = _react2['default'].createElement(_label2['default'], {
	          height: height,
	          width: width,
	          margins: margins,
	          labelTitle: yLabel,
	          labelPosition: yLabelPosition,
	          labelOffset: labelOffset
	        });
	      }

	      return _react2['default'].createElement(
	        'g',
	        { transform: t },
	        _react2['default'].createElement(_axis2['default'], {
	          height: height,
	          width: width,
	          margins: margins,
	          showAxis: showYAxis,
	          axisClassName: yAxisClassName,
	          rangeRoundBands: yRangeRoundBands,
	          type: 'y',
	          proxy: y,
	          domain: yDomain,
	          range: yRange,
	          scale: yScale,
	          orient: yOrient,
	          tickOrient: yTickOrient,
	          tickFormat: yTickFormat,
	          tickPadding: yTickPadding,
	          innerTickSize: yInnerTickSize,
	          outerTickSize: yOuterTickSize,
	          ticks: yTicks,
	          style: style,
	          gridAxisLineStyle: yGridAxisLineStyle
	        }),
	        axisLabel
	      );
	    }
	  }], [{
	    key: 'defaultProps',
	    value: Object.assign(_commonProps2['default'], {
	      showYAxis: true,
	      yAxisClassName: 'react-d3-core__axis__yAxis',
	      yScale: 'linear',
	      yOrient: 'left',
	      yTickOrient: 'left',
	      yLabelPosition: 'left',
	      yTickPadding: 3,
	      yInnerTickSize: 6,
	      yOuterTickSize: 6
	    }),
	    enumerable: true
	  }, {
	    key: 'propTypes',
	    value: {
	      height: _react.PropTypes.number.isRequired,
	      width: _react.PropTypes.number.isRequired,
	      margins: _react.PropTypes.object.isRequired,
	      showXAxis: _react.PropTypes.bool,
	      y: _react.PropTypes.func,
	      yDomain: _react.PropTypes.array,
	      yRange: _react.PropTypes.array,
	      yScale: _react.PropTypes.string.isRequired,
	      yOrient: _react.PropTypes.oneOf(['left', 'right']),
	      yTickOrient: _react.PropTypes.oneOf(['left', 'right']),
	      yAxisClassName: _react.PropTypes.string,
	      yInnerTickSize: _react.PropTypes.number,
	      yOuterTickSize: _react.PropTypes.number,
	      yTickPadding: _react.PropTypes.number,
	      yTickFormat: _react.PropTypes.func,
	      yTicks: _react.PropTypes.array,
	      style: _react.PropTypes.object
	    },
	    enumerable: true
	  }]);

	  return Yaxis;
	})(_react.Component);

	exports['default'] = Yaxis;
	module.exports = exports['default'];

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _axisAxis = __webpack_require__(27);

	var _axisAxis2 = _interopRequireDefault(_axisAxis);

	var _commonProps = __webpack_require__(6);

	var _commonProps2 = _interopRequireDefault(_commonProps);

	var Grid = (function (_Component) {
	  _inherits(Grid, _Component);

	  function Grid(props) {
	    _classCallCheck(this, Grid);

	    _get(Object.getPrototypeOf(Grid.prototype), 'constructor', this).call(this, props);
	  }

	  _createClass(Grid, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var height = _props.height;
	      var width = _props.width;
	      var margins = _props.margins;
	      var type = _props.type;
	      var gridAxisClassName = _props.gridAxisClassName;
	      var xRangeRoundBands = _props.xRangeRoundBands;
	      var x = _props.x;
	      var xDomain = _props.xDomain;
	      var xRange = _props.xRange;
	      var xScale = _props.xScale;
	      var yRangeRoundBands = _props.yRangeRoundBands;
	      var y = _props.y;
	      var yDomain = _props.yDomain;
	      var yRange = _props.yRange;
	      var yScale = _props.yScale;
	      var gridAxisLineStyle = _props.gridAxisLineStyle;

	      var gridAxis;
	      var t;

	      if (!yRange) {
	        yRange = [height - margins.top - margins.bottom, 0];
	      }

	      if (!xRange) {
	        xRange = [0, width - margins.left - margins.right];
	      }

	      if (type === 'x') {
	        t = 'translate(0, ' + (height - margins.bottom - margins.top) + ')';
	        var tickSize = height - margins.top - margins.bottom;

	        // if grid axis don't pass customize ticks.
	        gridAxis = _react2['default'].createElement(_axisAxis2['default'], {
	          height: height,
	          width: width,
	          margins: margins,
	          type: 'gridx',
	          showAxis: false,
	          gridAxisClassName: gridAxisClassName,
	          rangeRoundBands: xRangeRoundBands,
	          tickOrient: 'bottom',
	          orient: 'bottom',
	          outerTickSize: 0,
	          tickPadding: 10,
	          tickFormat: null,
	          innerTickSize: -tickSize,
	          proxy: x,
	          domain: xDomain,
	          range: xRange,
	          scale: xScale,
	          gridAxisLineStyle: gridAxisLineStyle
	        });
	      } else if (type === 'y') {
	        t = 'translate(0, 0)';
	        var tickSize = width - margins.left - margins.right;

	        // if grid axis don't pass customize ticks.
	        gridAxis = _react2['default'].createElement(_axisAxis2['default'], {
	          height: height,
	          width: width,
	          margins: margins,
	          type: 'gridy',
	          showAxis: false,
	          gridAxisClassName: gridAxisClassName,
	          rangeRoundBands: yRangeRoundBands,
	          tickOrient: 'left',
	          orient: 'left',
	          outerTickSize: 0,
	          tickPadding: 10,
	          innerTickSize: -tickSize,
	          tickFormat: null,
	          proxy: y,
	          scale: yScale,
	          domain: yDomain,
	          range: yRange,
	          gridAxisLineStyle: gridAxisLineStyle
	        });
	      }

	      return _react2['default'].createElement(
	        'g',
	        { transform: t },
	        gridAxis
	      );
	    }
	  }], [{
	    key: 'defaultProps',
	    value: Object.assign(_commonProps2['default'], {
	      type: 'x',
	      gridAxisClassName: 'react-d3-core__grid_axis'
	    }),
	    enumerable: true
	  }, {
	    key: 'propTypes',
	    value: {
	      height: _react.PropTypes.number.isRequired,
	      width: _react.PropTypes.number.isRequired,
	      margins: _react.PropTypes.object.isRequired,
	      type: _react.PropTypes.oneOf(['x', 'y']).isRequired,
	      gridAxisClassName: _react.PropTypes.string,
	      x: _react.PropTypes.func,
	      xDomain: _react.PropTypes.array,
	      xRange: _react.PropTypes.array,
	      xScale: _react.PropTypes.oneOf(['linear', 'identity', 'sqrt', 'pow', 'log', 'quantize', 'quantile', 'ordinal', 'time']).isRequired,
	      xRangeRoundBands: _react.PropTypes.object,
	      y: _react.PropTypes.func,
	      yDomain: _react.PropTypes.array,
	      yRange: _react.PropTypes.array,
	      yScale: _react.PropTypes.oneOf(['linear', 'identity', 'sqrt', 'pow', 'log', 'quantize', 'quantile', 'ordinal', 'time']).isRequired,
	      yRangeRoundBands: _react.PropTypes.object,
	      gridAxisLineStyle: _react.PropTypes.object
	    },
	    enumerable: true
	  }]);

	  return Grid;
	})(_react.Component);

	exports['default'] = Grid;
	module.exports = exports['default'];

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _grid = __webpack_require__(31);

	var _grid2 = _interopRequireDefault(_grid);

	var XGrid = (function (_Component) {
	  _inherits(XGrid, _Component);

	  function XGrid(props) {
	    _classCallCheck(this, XGrid);

	    _get(Object.getPrototypeOf(XGrid.prototype), 'constructor', this).call(this, props);
	  }

	  _createClass(XGrid, [{
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(_grid2['default'], _extends({}, this.props, {
	        type: 'x'
	      }));
	    }
	  }]);

	  return XGrid;
	})(_react.Component);

	exports['default'] = XGrid;
	module.exports = exports['default'];

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _grid = __webpack_require__(31);

	var _grid2 = _interopRequireDefault(_grid);

	var YGrid = (function (_Component) {
	  _inherits(YGrid, _Component);

	  function YGrid(props) {
	    _classCallCheck(this, YGrid);

	    _get(Object.getPrototypeOf(YGrid.prototype), 'constructor', this).call(this, props);
	  }

	  _createClass(YGrid, [{
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(_grid2['default'], _extends({}, this.props, {
	        type: 'y'
	      }));
	    }
	  }]);

	  return YGrid;
	})(_react.Component);

	exports['default'] = YGrid;
	module.exports = exports['default'];

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.xDomain = xDomain;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _d3 = __webpack_require__(5);

	var _d32 = _interopRequireDefault(_d3);

	function xDomain(props) {
	  var data = props.data;
	  var x = props.x;
	  var xScale = props.xScale;
	  var xDomain = props.xDomain;

	  if (xDomain) return xDomain;

	  if (xScale === 'ordinal') {
	    return data.map(function (d) {
	      return x(d);
	    });
	  } else {
	    return _d32['default'].extent(data, function (d) {
	      return x(d);
	    });
	  }
	}

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.yDomain = yDomain;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _d3 = __webpack_require__(5);

	var _d32 = _interopRequireDefault(_d3);

	function yDomain(props, stack) {
	  var data = props.data;
	  var chartSeries = props.chartSeries;
	  var y = props.y;
	  var yDomain = props.yDomain;

	  if (yDomain) return yDomain;

	  if (stack) {
	    // stack
	    var max = 0;
	    var min = 0;

	    data.forEach(function (d) {
	      var totalTop = 0;
	      var totalBottom = 0;

	      chartSeries.forEach(function (sd) {
	        var field = sd.field;

	        if (d[field] > 0) {
	          totalTop += y(d[field]);
	        } else if (d[field] < 0) {
	          totalBottom += y(d[field]);
	        }
	      });

	      if (totalTop > max) max = totalTop;
	      if (totalBottom < min) min = totalBottom;
	    });

	    return [min, max];
	  } else {
	    // not stack, single
	    var domainArr = chartSeries.map(function (d) {
	      var field = d.field;
	      var extent = _d32['default'].extent(data, function (dt) {
	        return y(dt[field]);
	      });

	      return extent;
	    });

	    return _d32['default'].extent([].concat.apply([], domainArr));
	  }
	}

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

	// Export utils

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequire(obj) { return obj && obj.__esModule ? obj['default'] : obj; }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _componentsLine = __webpack_require__(37);

	var _componentsLine2 = _interopRequireDefault(_componentsLine);

	var _componentsArea = __webpack_require__(40);

	var _componentsArea2 = _interopRequireDefault(_componentsArea);

	var _componentsArea_stack = __webpack_require__(41);

	var _componentsArea_stack2 = _interopRequireDefault(_componentsArea_stack);

	var _componentsBar = __webpack_require__(42);

	var _componentsBar2 = _interopRequireDefault(_componentsBar);

	var _componentsBar_group = __webpack_require__(43);

	var _componentsBar_group2 = _interopRequireDefault(_componentsBar_group);

	var _componentsBar_stack = __webpack_require__(44);

	var _componentsBar_stack2 = _interopRequireDefault(_componentsBar_stack);

	var _componentsPie = __webpack_require__(45);

	var _componentsPie2 = _interopRequireDefault(_componentsPie);

	var _componentsScatter = __webpack_require__(46);

	var _componentsScatter2 = _interopRequireDefault(_componentsScatter);

	var _utilsSeries = __webpack_require__(39);

	Object.defineProperty(exports, 'series', {
	  enumerable: true,
	  get: function get() {
	    return _utilsSeries.series;
	  }
	});

	// Export basic component of charts

	var _chart = __webpack_require__(47);

	exports.Chart = _interopRequire(_chart);

	var _chartpie = __webpack_require__(48);

	exports.ChartPie = _interopRequire(_chartpie);
	exports.Line = _componentsLine2['default'];
	exports.Area = _componentsArea2['default'];
	exports.AreaStack = _componentsArea_stack2['default'];
	exports.Bar = _componentsBar2['default'];
	exports.BarGroup = _componentsBar_group2['default'];
	exports.BarStack = _componentsBar_stack2['default'];
	exports.Pie = _componentsPie2['default'];
	exports.Scatter = _componentsScatter2['default'];

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _d3 = __webpack_require__(5);

	var _d32 = _interopRequireDefault(_d3);

	var _reactFauxDom = __webpack_require__(11);

	var _reactFauxDom2 = _interopRequireDefault(_reactFauxDom);

	var _commonProps = __webpack_require__(38);

	var _commonProps2 = _interopRequireDefault(_commonProps);

	var _utilsSeries = __webpack_require__(39);

	var Line = (function (_Component) {
	  _inherits(Line, _Component);

	  function Line(props) {
	    _classCallCheck(this, Line);

	    _get(Object.getPrototypeOf(Line.prototype), 'constructor', this).call(this, props);
	  }

	  _createClass(Line, [{
	    key: '_mkLine',
	    value: function _mkLine(dom) {
	      var lineClassName = this.props.lineClassName;

	      var dataset = (0, _utilsSeries.series)(this.props);

	      // make line
	      var line = _d32['default'].select(dom);
	      var that = this;

	      line.selectAll('.line').data(dataset).enter().append('path').style("stroke", function (d) {
	        return d.color;
	      }).style("fill", 'none').attr("class", lineClassName + ' line').attr("d", function (d) {
	        return that._setAxes(d.data);
	      }).each(function (d) {
	        var dom = _d32['default'].select(this);
	        if (d.style) {
	          for (var key in d.style) {
	            dom.style(key, d.style[key]);
	          }
	        }
	      });

	      return line;
	    }
	  }, {
	    key: '_setAxes',
	    value: function _setAxes(data) {
	      var _props = this.props;
	      var xScaleSet = _props.xScaleSet;
	      var yScaleSet = _props.yScaleSet;
	      var interpolate = _props.interpolate;

	      var line = _d32['default'].svg.line().interpolate(interpolate).x(function (d) {
	        return xScaleSet(d.x);
	      }).y(function (d) {
	        return yScaleSet(d.y);
	      });

	      return line.call(this, data);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var linePath = _reactFauxDom2['default'].createElement('g');
	      var line = this._mkLine(linePath);

	      return line.node().toReact();
	    }
	  }], [{
	    key: 'defaultProps',
	    value: Object.assign(_commonProps2['default'], {
	      interpolate: null,
	      lineClassName: 'react-d3-basic__line'
	    }),
	    enumerable: true
	  }]);

	  return Line;
	})(_react.Component);

	exports['default'] = Line;
	module.exports = exports['default'];

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _d3 = __webpack_require__(5);

	var _d32 = _interopRequireDefault(_d3);

	var width = 960;
	var height = 500;
	var margins = { top: 80, right: 100, bottom: 80, left: 100 };

	exports['default'] = {
	  width: width,
	  height: height,
	  margins: margins,
	  y: function y(d) {
	    return +d;
	  },
	  xScale: 'linear',
	  yScale: 'linear',
	  showXGrid: true,
	  showYGrid: true
	};
	var pieProps = {
	  width: width,
	  height: height,
	  margins: margins,
	  innerRadius: 0,
	  categoricalColors: _d32['default'].scale.category10(),
	  pieSort: _d32['default'].descending,
	  showLegendText: true,
	  showStroke: true
	};
	exports.pieProps = pieProps;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.series = series;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var _d3 = __webpack_require__(5);

	var _d32 = _interopRequireDefault(_d3);

	function series(props) {
	  var data = props.data;
	  var chartSeries = props.chartSeries;
	  var x = props.x;
	  var y = props.y;
	  var categoricalColors = props.categoricalColors;

	  categoricalColors = categoricalColors || _d32["default"].scale.category10();

	  var chartSeriesData = chartSeries.map(function (f, i) {

	    // set a color if not set
	    f.color = f.color || categoricalColors(i);

	    // set name if not set
	    f.name = f.name || f.field;

	    // mapping throught data set x, y data
	    var mapping = data.map(function (d) {
	      return {
	        x: x(d),
	        y: y(d[f.field]),
	        color: d.color ? d.color : f.color,
	        name: f.name,
	        field: f.field
	      };
	    });

	    return Object.assign(f, { data: mapping });
	  });

	  return chartSeriesData;
	}

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _d3 = __webpack_require__(5);

	var _d32 = _interopRequireDefault(_d3);

	var _reactFauxDom = __webpack_require__(11);

	var _reactFauxDom2 = _interopRequireDefault(_reactFauxDom);

	var _commonProps = __webpack_require__(38);

	var _commonProps2 = _interopRequireDefault(_commonProps);

	var _utilsSeries = __webpack_require__(39);

	var Area = (function (_Component) {
	  _inherits(Area, _Component);

	  function Area(props) {
	    _classCallCheck(this, Area);

	    _get(Object.getPrototypeOf(Area.prototype), 'constructor', this).call(this, props);
	  }

	  _createClass(Area, [{
	    key: '_mkArea',
	    value: function _mkArea(dom) {
	      var _props = this.props;
	      var areaClassName = _props.areaClassName;
	      var areaOpacity = _props.areaOpacity;

	      var dataset = (0, _utilsSeries.series)(this.props);

	      // make area
	      var area = _d32['default'].select(dom);
	      var that = this;

	      area.selectAll('.area').data(dataset).enter().append('path').attr("class", areaClassName + ' area').style("fill", function (d) {
	        return d.color;
	      }).attr("d", function (d) {
	        return that._setAxes(d.data);
	      }).each(function (d) {
	        var dom = _d32['default'].select(this);
	        if (d.style) {
	          for (var key in d.style) {
	            dom.style(key, d.style[key]);
	          }
	        }
	      });

	      return area;
	    }
	  }, {
	    key: '_setAxes',
	    value: function _setAxes(data) {
	      var _props2 = this.props;
	      var height = _props2.height;
	      var margins = _props2.margins;
	      var xScaleSet = _props2.xScaleSet;
	      var yScaleSet = _props2.yScaleSet;
	      var interpolate = _props2.interpolate;

	      var area = _d32['default'].svg.area().interpolate(interpolate).x(function (d) {
	        return xScaleSet(d.x);
	      }).y0(function (d) {
	        var domain = yScaleSet.domain();

	        if (domain[0] * domain[1] < 0) {
	          return yScaleSet(0);
	        } else if (domain[0] * domain[1] >= 0 && domain[0] >= 0) {
	          return yScaleSet.range()[0];
	        } else if (domain[0] * domain[1] >= 0 && domain[0] < 0) {
	          return yScaleSet.range()[1];
	        }
	      }).y1(function (d) {
	        return yScaleSet(d.y);
	      });

	      return area.call(this, data);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var areaPath = _reactFauxDom2['default'].createElement('g');
	      var area = this._mkArea(areaPath);

	      return area.node().toReact();
	    }
	  }], [{
	    key: 'defaultProps',
	    value: Object.assign(_commonProps2['default'], {
	      interpolate: null,
	      areaClassName: 'react-d3-basic__area'
	    }),
	    enumerable: true
	  }]);

	  return Area;
	})(_react.Component);

	exports['default'] = Area;
	module.exports = exports['default'];

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _d3 = __webpack_require__(5);

	var _d32 = _interopRequireDefault(_d3);

	var _reactFauxDom = __webpack_require__(11);

	var _reactFauxDom2 = _interopRequireDefault(_reactFauxDom);

	var _commonProps = __webpack_require__(38);

	var _commonProps2 = _interopRequireDefault(_commonProps);

	var _utilsSeries = __webpack_require__(39);

	var AreaStack = (function (_Component) {
	  _inherits(AreaStack, _Component);

	  function AreaStack(props) {
	    _classCallCheck(this, AreaStack);

	    _get(Object.getPrototypeOf(AreaStack.prototype), 'constructor', this).call(this, props);
	  }

	  _createClass(AreaStack, [{
	    key: '_mkStack',
	    value: function _mkStack(dom) {
	      var areaClassName = this.props.areaClassName;

	      var dataset = (0, _utilsSeries.series)(this.props);

	      var _setStack = this._setStack();
	      var _setAxis = this._setAxes();

	      // make areas
	      var chart = _d32['default'].select(dom).attr("class", areaClassName + ' area-group');

	      chart.selectAll("path").data(_setStack(dataset)).enter().append("path").attr("class", "area").style("fill", function (d) {
	        return d.color;
	      }).attr("d", function (d) {
	        return _setAxis(d.data);
	      }).attr("style", function (d) {
	        var s = '';
	        if (d.style) {
	          for (var key in d.style) {
	            s += key + ':' + d.style[key] + ';';
	          }
	        }
	        return s;
	      });

	      return chart;
	    }
	  }, {
	    key: '_setStack',
	    value: function _setStack() {
	      var chartSeries = this.props.chartSeries;

	      var buildOut = function buildOut(len) {
	        // baseline for positive and negative bars respectively.
	        var currentXOffsets = [];
	        var currentXIndex = 0;
	        return function (d, y0, y) {

	          if (currentXIndex++ % len === 0) {
	            currentXOffsets = [0, 0];
	          }

	          if (y >= 0) {
	            d.y0 = currentXOffsets[1];
	            d.y = y;
	            currentXOffsets[1] += y;
	          } else {
	            d.y0 = currentXOffsets[0] + y;
	            d.y = -y;
	            currentXOffsets[0] += y;
	          }
	        };
	      };
	      return _d32['default'].layout.stack().values(function (d) {
	        return d.data;
	      }).out(buildOut(chartSeries.length));
	    }
	  }, {
	    key: '_setAxes',
	    value: function _setAxes() {
	      var _props = this.props;
	      var xScaleSet = _props.xScaleSet;
	      var yScaleSet = _props.yScaleSet;
	      var interpolate = _props.interpolate;

	      return _d32['default'].svg.area().interpolate(interpolate).x(function (d) {
	        return xScaleSet(d.x);
	      }).y0(function (d) {
	        return yScaleSet(d.y0);
	      }).y1(function (d) {
	        return yScaleSet(d.y0 + d.y);
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var areaPath = _reactFauxDom2['default'].createElement('g');
	      var area = this._mkStack(areaPath);

	      return area.node().toReact();
	    }
	  }], [{
	    key: 'defaultProps',
	    value: Object.assign(_commonProps2['default'], {
	      areaClass: 'react-d3-basics__area_stack',
	      interpolate: null,
	      areaClassName: 'react-d3-basic__area_stack'
	    }),
	    enumerable: true
	  }]);

	  return AreaStack;
	})(_react.Component);

	exports['default'] = AreaStack;
	module.exports = exports['default'];

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _d3 = __webpack_require__(5);

	var _d32 = _interopRequireDefault(_d3);

	var _reactFauxDom = __webpack_require__(11);

	var _reactFauxDom2 = _interopRequireDefault(_reactFauxDom);

	var _utilsSeries = __webpack_require__(39);

	var Bar = (function (_Component) {
	  _inherits(Bar, _Component);

	  function Bar(props) {
	    _classCallCheck(this, Bar);

	    _get(Object.getPrototypeOf(Bar.prototype), 'constructor', this).call(this, props);
	  }

	  _createClass(Bar, [{
	    key: '_mkBar',
	    value: function _mkBar(dom) {
	      var _props = this.props;
	      var height = _props.height;
	      var margins = _props.margins;
	      var barClassName = _props.barClassName;
	      var xScaleSet = _props.xScaleSet;
	      var yScaleSet = _props.yScaleSet;
	      var onMouseOut = _props.onMouseOut;
	      var onMouseOver = _props.onMouseOver;
	      var onMouseMove = _props.onMouseMove;
	      var onClick = _props.onClick;
	      var xScaleMaxWidthRect = _props.xScaleMaxWidthRect;
	      var valueInBar = _props.valueInBar;
	      var verticalValueInBar = _props.verticalValueInBar;
	      var formatValueInBar = _props.formatValueInBar;

	      var dataset = (0, _utilsSeries.series)(this.props)[0];

	      // make areas
	      var bar = _d32['default'].select(dom);

	      var domain = yScaleSet.domain();
	      var zeroBase;

	      if (domain[0] * domain[1] < 0) {
	        zeroBase = yScaleSet(0);
	      } else if (domain[0] * domain[1] >= 0 && domain[0] >= 0) {
	        zeroBase = yScaleSet.range()[0];
	      } else if (domain[0] * domain[1] >= 0 && domain[0] < 0) {
	        zeroBase = yScaleSet.range()[1];
	      }

	      bar.selectAll(".bar").data(dataset.data).enter().append("rect").attr("class", barClassName + ' bar').attr("x", function (d) {
	        return xScaleSet(d.x) ? xScaleSet(d.x) + (xScaleSet.rangeBand() - Math.min(xScaleSet.rangeBand(), xScaleMaxWidthRect)) / 2 : -10000;
	      }).attr("width", Math.min(xScaleSet.rangeBand(), xScaleMaxWidthRect)).attr("y", function (d) {
	        return d.y < 0 ? zeroBase : yScaleSet(d.y);
	      }).attr("height", function (d) {
	        return d.y < domain[0] ? 0 : Math.abs(zeroBase - yScaleSet(d.y));
	      }).style("fill", function (d) {
	        return d.color ? d.color : dataset.color;
	      }).on("mouseover", onMouseOver).on("mousemove", onMouseMove ? onMouseMove : onMouseOver).on("mouseout", onMouseOut).on("click", onClick);

	      if (valueInBar) {
	        bar.selectAll("text").data(dataset.data).enter().append("text").attr("text-anchor", verticalValueInBar ? "start" : "middle").attr("height", 15).attr("x", function (d) {
	          var x = xScaleSet(d.x) ? xScaleSet(d.x) + xScaleSet.rangeBand() / 2 : -10000;
	          if (verticalValueInBar) {
	            return x + 11 / 2;
	          }
	          return x;
	        }).attr("y", function (d) {
	          if (verticalValueInBar) {
	            return zeroBase - 10;
	          }
	          var height = Math.abs(d.y < domain[0] ? 0 : Math.abs(zeroBase - yScaleSet(d.y)));
	          if (height < 15) {
	            return yScaleSet(d.y) + height;
	          }
	          return yScaleSet(d.y) + 15;
	        }).attr("style", "font-weight:bold").text(function (d) {
	          var height = Math.abs(d.y < domain[0] ? 0 : Math.abs(zeroBase - yScaleSet(d.y)));
	          if (verticalValueInBar && formatValueInBar(d.y).toString().length * 7 * (1 + 1 / 3) < height - 10 || !verticalValueInBar && d.y > 0 && height > 15) {
	            return formatValueInBar(d.y);
	          }
	          return "";
	        }).attr("fill", function (d) {
	          var hexColor = parseInt(d.color.replace("#", ""), 16);
	          var l = Math.max((hexColor & 0xFF0000) >> 16, (hexColor & 0x00ff00) >> 8, hexColor & 0x0000ff) / 255;
	          if (l > 0.7) {
	            return "#000000";
	          }
	          return "#ffffff";
	        }).attr("transform", function (d) {
	          if (verticalValueInBar) {
	            var x = xScaleSet(d.x) ? xScaleSet(d.x) + xScaleSet.rangeBand() / 2 : -10000;
	            var y = zeroBase - 10;
	            return 'rotate(-90,' + (x + 11 / 2) + ',' + y + ')';
	          }
	          return "";
	        }).on("mouseover", onMouseOver).on("mousemove", onMouseMove ? onMouseMove : onMouseOver).on("mouseout", onMouseOut);
	      }

	      if (dataset.style) {
	        for (var key in dataset.style) {
	          bar.style(key, dataset.style[key]);
	        }
	      }

	      return bar;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var barChart = _reactFauxDom2['default'].createElement('g');
	      var bar = this._mkBar(barChart);

	      return bar.node().toReact();
	    }
	  }], [{
	    key: 'defaultProps',
	    value: {
	      interpolate: null,
	      onMouseOver: function onMouseOver(d) {},
	      onMouseOut: function onMouseOut(d) {},
	      onClick: function onClick(d) {},
	      barClassName: 'react-d3-basic__bar',
	      xScaleMaxWidthRect: 50,
	      valueInBar: false,
	      verticalValueInBar: false,
	      formatValueInBar: function formatValueInBar(d) {
	        return d;
	      }
	    },
	    enumerable: true
	  }]);

	  return Bar;
	})(_react.Component);

	exports['default'] = Bar;
	module.exports = exports['default'];

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _d3 = __webpack_require__(5);

	var _d32 = _interopRequireDefault(_d3);

	var _reactFauxDom = __webpack_require__(11);

	var _reactFauxDom2 = _interopRequireDefault(_reactFauxDom);

	var _utilsSeries = __webpack_require__(39);

	var BarGroup = (function (_Component) {
	  _inherits(BarGroup, _Component);

	  function BarGroup(props) {
	    _classCallCheck(this, BarGroup);

	    _get(Object.getPrototypeOf(BarGroup.prototype), 'constructor', this).call(this, props);
	  }

	  _createClass(BarGroup, [{
	    key: '_mkBarGroup',
	    value: function _mkBarGroup(dom) {
	      var _props = this.props;
	      var height = _props.height;
	      var margins = _props.margins;
	      var barClassName = _props.barClassName;
	      var xScaleSet = _props.xScaleSet;
	      var yScaleSet = _props.yScaleSet;
	      var onMouseOut = _props.onMouseOut;
	      var onMouseOver = _props.onMouseOver;
	      var barGroupClass = _props.barGroupClass;

	      var dataset = (0, _utilsSeries.series)(this.props);
	      var x1 = _d32['default'].scale.ordinal();

	      // mapping x1, inner x axis
	      x1.domain(dataset.map(function (d) {
	        return d.field;
	      })).rangeRoundBands([0, xScaleSet.rangeBand()]);

	      var domain = yScaleSet.domain();
	      var zeroBase;

	      if (domain[0] * domain[1] < 0) {
	        zeroBase = yScaleSet(0);
	      } else if (domain[0] * domain[1] >= 0 && domain[0] >= 0) {
	        zeroBase = yScaleSet.range()[0];
	      } else if (domain[0] * domain[1] >= 0 && domain[0] < 0) {
	        zeroBase = yScaleSet.range()[1];
	      }

	      // make areas
	      var chart = _d32['default'].select(dom);

	      chart.selectAll('.bargroup').data(dataset).enter().append('g').attr("class", barGroupClass + ' bargroup').each(function (dt, i) {
	        var dom = _d32['default'].select(this).selectAll("rect").data(dt.data).enter().append("rect").attr("class", barClassName + ' bar').attr("width", x1.rangeBand()).attr("x", function (d) {
	          return xScaleSet(d.x) ? xScaleSet(d.x) + x1.rangeBand() * i : -10000;
	        }).attr("y", function (d) {
	          return d.y < 0 ? zeroBase : yScaleSet(d.y);
	        }).attr("height", function (d) {
	          return d.y < domain[0] ? 0 : Math.abs(zeroBase - yScaleSet(d.y));
	        }).style("fill", function (d) {
	          return dt.color;
	        }).on("mouseover", onMouseOver).on("mouseout", onMouseOut);

	        if (dt.style) {
	          for (var key in dt.style) {
	            dom.style(key, dt.style[key]);
	          }
	        }
	      });

	      return chart;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var barChart = _reactFauxDom2['default'].createElement('g');
	      var bar = this._mkBarGroup(barChart);

	      return bar.node().toReact();
	    }
	  }], [{
	    key: 'defaultProps',
	    value: {
	      onMouseOver: function onMouseOver(d) {},
	      onMouseOut: function onMouseOut(d) {},
	      barClassName: 'react-d3-basic__bar_group',
	      barGroupClass: 'react-d3-basic__group_bars'
	    },
	    enumerable: true
	  }]);

	  return BarGroup;
	})(_react.Component);

	exports['default'] = BarGroup;
	module.exports = exports['default'];

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _d3 = __webpack_require__(5);

	var _d32 = _interopRequireDefault(_d3);

	var _reactFauxDom = __webpack_require__(11);

	var _reactFauxDom2 = _interopRequireDefault(_reactFauxDom);

	var _utilsSeries = __webpack_require__(39);

	var BarStack = (function (_Component) {
	  _inherits(BarStack, _Component);

	  function BarStack(props) {
	    _classCallCheck(this, BarStack);

	    _get(Object.getPrototypeOf(BarStack.prototype), 'constructor', this).call(this, props);
	  }

	  _createClass(BarStack, [{
	    key: '_mkBarStack',
	    value: function _mkBarStack(dom) {
	      var _props = this.props;
	      var height = _props.height;
	      var margins = _props.margins;
	      var barClassName = _props.barClassName;
	      var xScaleSet = _props.xScaleSet;
	      var yScaleSet = _props.yScaleSet;
	      var onMouseOver = _props.onMouseOver;
	      var onMouseOut = _props.onMouseOut;
	      var barStackClass = _props.barStackClass;
	      var valueInBar = _props.valueInBar;
	      var xScaleMaxWidthRect = _props.xScaleMaxWidthRect;
	      var verticalValueInBar = _props.verticalValueInBar;
	      var formatValueInBar = _props.formatValueInBar;

	      var dataset = (0, _utilsSeries.series)(this.props);

	      var _setStack = this._setStack();

	      // make areas
	      var chart = _d32['default'].select(dom).attr("class", "g");

	      var domain = yScaleSet.domain();
	      var zeroBase;

	      if (domain[0] * domain[1] < 0) {
	        zeroBase = yScaleSet(0);
	      } else if (domain[0] * domain[1] >= 0 && domain[0] >= 0) {
	        zeroBase = yScaleSet.range()[0];
	      } else if (domain[0] * domain[1] >= 0 && domain[0] < 0) {
	        zeroBase = yScaleSet.range()[1];
	      }

	      var barGroup = chart.selectAll("g").data(_setStack(dataset)).enter().append("g").attr("class", barStackClass + ' barGroup').style("fill", function (d) {
	        return d.color;
	      }).attr("style", function (d) {
	        var s = '';
	        if (d.style) {
	          for (var key in d.style) {
	            s += key + ':' + d.style[key] + ';';
	          }
	        }
	        return s;
	      });

	      barGroup.selectAll("rect").data(function (d) {
	        return d.data;
	      }).enter().append("rect").attr("class", barClassName + ' bar').attr("width", Math.min(xScaleSet.rangeBand(), xScaleMaxWidthRect)).attr("x", function (d) {
	        return xScaleSet(d.x) ? xScaleSet(d.x) + (xScaleSet.rangeBand() - Math.min(xScaleSet.rangeBand(), xScaleMaxWidthRect)) / 2 : -10000;
	      }).attr("y", function (d, i) {
	        return yScaleSet(d.y0 + d.y);
	      }).attr("height", function (d, i) {
	        return Math.abs(yScaleSet(d.y) - yScaleSet(0));
	      }).on("mouseover", onMouseOver).on("mousemove", onMouseOver).on("mouseout", onMouseOut);

	      if (valueInBar) {
	        barGroup.selectAll("text").data(function (d) {
	          return d.data;
	        }).enter().append("text").attr("text-anchor", verticalValueInBar ? "start" : "middle").attr("height", 15).attr("x", function (d) {
	          var x = xScaleSet(d.x) ? xScaleSet(d.x) + xScaleSet.rangeBand() / 2 : -10000;
	          if (verticalValueInBar) {
	            return x + 11 / 2;
	          }
	          return x;
	        }).attr("y", function (d) {
	          var height = Math.abs(yScaleSet(d.y) - yScaleSet(0));
	          if (verticalValueInBar) {
	            return yScaleSet(d.y0 + d.y) - 10 + height;
	          }
	          if (height < 15) {
	            return yScaleSet(d.y0 + d.y) + height;
	          }
	          return yScaleSet(d.y0 + d.y) + 15;
	        }).attr("style", "font-weight:bold").text(function (d) {
	          var height = Math.abs(yScaleSet(d.y) - yScaleSet(0));
	          if (verticalValueInBar && formatValueInBar(d.y).toString().length * 7 * (1 + 1 / 3) < height - 10 || !verticalValueInBar && d.y > 0 && height > 15) {
	            return formatValueInBar(d.y);
	          }
	          return "";
	        }).attr("fill", function (d) {
	          var hexColor = parseInt(d.color.replace("#", ""), 16);
	          var l = Math.max((hexColor & 0xFF0000) >> 16, (hexColor & 0x00ff00) >> 8, hexColor & 0x0000ff) / 255;
	          if (l > 0.7) {
	            return "#000000";
	          }
	          return "#ffffff";
	        }).attr("transform", function (d) {
	          if (verticalValueInBar) {
	            var _height = Math.abs(yScaleSet(d.y) - yScaleSet(0));
	            var x = xScaleSet(d.x) ? xScaleSet(d.x) + xScaleSet.rangeBand() / 2 : -10000;
	            var y = yScaleSet(d.y0 + d.y) + _height - 10;
	            return 'rotate(-90,' + (x + 11 / 2) + ',' + y + ')';
	          }
	          return "";
	        }).on("mouseover", onMouseOver).on("mousemove", onMouseOver).on("mouseout", onMouseOut);
	      }

	      return chart;
	    }
	  }, {
	    key: '_setStack',
	    value: function _setStack() {
	      var chartSeries = this.props.chartSeries;

	      var buildOut = function buildOut(len) {
	        // baseline for positive and negative bars respectively.
	        var currentXOffsets = [];
	        var currentXIndex = 0;
	        return function (d, y0, y) {

	          if (currentXIndex++ % len === 0) {
	            currentXOffsets = [0, 0];
	          }

	          if (y >= 0) {
	            d.y0 = currentXOffsets[1];
	            d.y = y;
	            currentXOffsets[1] += y;
	          } else {
	            d.y0 = currentXOffsets[0] + y;
	            d.y = -y;
	            currentXOffsets[0] += y;
	          }
	        };
	      };
	      return _d32['default'].layout.stack().values(function (d) {
	        return d.data;
	      }).out(buildOut(chartSeries.length));
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var barChart = _reactFauxDom2['default'].createElement('g');
	      var bar = this._mkBarStack(barChart);

	      return bar.node().toReact();
	    }
	  }], [{
	    key: 'defaultProps',
	    value: {
	      onMouseOver: function onMouseOver(d) {},
	      onMouseOut: function onMouseOut(d) {},
	      barClassName: 'react-d3-basic__bar_stack',
	      barStackClass: 'react-d3-basic__stack_bars',
	      xScaleMaxWidthRect: 50,
	      valueInBar: false,
	      verticalValueInBar: false,
	      formatValueInBar: function formatValueInBar(d) {
	        return d;
	      }
	    },
	    enumerable: true
	  }]);

	  return BarStack;
	})(_react.Component);

	exports['default'] = BarStack;
	module.exports = exports['default'];

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _d3 = __webpack_require__(5);

	var _d32 = _interopRequireDefault(_d3);

	var _commonProps = __webpack_require__(38);

	var _reactFauxDom = __webpack_require__(11);

	var _reactFauxDom2 = _interopRequireDefault(_reactFauxDom);

	var Pie = (function (_Component) {
	  _inherits(Pie, _Component);

	  function Pie(props) {
	    _classCallCheck(this, Pie);

	    _get(Object.getPrototypeOf(Pie.prototype), 'constructor', this).call(this, props);
	  }

	  _createClass(Pie, [{
	    key: 'mkSeries',
	    value: function mkSeries() {
	      var _props = this.props;
	      var data = _props.data;
	      var chartSeries = _props.chartSeries;
	      var value = _props.value;
	      var name = _props.name;
	      var categoricalColors = _props.categoricalColors;

	      return chartSeries.map(function (f, i) {

	        // set a color if not set
	        if (!f.color) f.color = categoricalColors(i);

	        // set name if not set
	        if (!f.name) f.name = f.field;

	        var val;

	        data.forEach(function (d) {
	          if (name(d) === f.field) val = d;
	        });

	        return Object.assign(f, { value: value(val) });
	      });
	    }
	  }, {
	    key: '_mkPie',
	    value: function _mkPie(dom) {
	      var _props2 = this.props;
	      var width = _props2.width;
	      var height = _props2.height;
	      var innerRadius = _props2.innerRadius;
	      var outerRadius = _props2.outerRadius;
	      var pieSort = _props2.pieSort;
	      var name = _props2.name;
	      var onMouseOut = _props2.onMouseOut;
	      var onMouseOver = _props2.onMouseOver;
	      var onMouseMove = _props2.onMouseMove;
	      var onClick = _props2.onClick;
	      var showLegendText = _props2.showLegendText;
	      var showStroke = _props2.showStroke;
	      var arcClassName = _props2.arcClassName;

	      var radius = this.props.radius || Math.min(width - 100, height - 100) / 2;
	      outerRadius = outerRadius || radius - 10;

	      var chartSeriesData = this.mkSeries();

	      var arc = _d32['default'].svg.arc().outerRadius(outerRadius).innerRadius(innerRadius);

	      var arcOver = _d32['default'].svg.arc().outerRadius(outerRadius + 10).innerRadius(innerRadius);

	      var pie = _d32['default'].layout.pie().sort(function (a, b) {
	        return pieSort(a.value, b.value);
	      }).value(function (d) {
	        return d.value;
	      });

	      var pieDom = _d32['default'].select(dom);

	      var g = pieDom.selectAll('.arc').data(pie(chartSeriesData)).enter().append('g').attr('class', arcClassName ? arcClassName + ' arc' : 'arc').attr('key', function (d) {
	        return name(d.data);
	      });

	      g.append("path").attr("d", arc).style("fill", function (d) {
	        return d.data.color;
	      }).style("stroke", showStroke ? "#fff" : "none").attr("style", function (d) {
	        var s = '';
	        if (d.data.style) {
	          for (var key in d.data.style) {
	            s += key + ':' + d.data.style[key] + ';';
	          }
	        }
	        return s;
	      }).on("mouseover", onMouseOver).on("mousemove", onMouseMove ? onMouseMove : onMouseOver).on("mouseout", onMouseOut).on("click", onClick);

	      var labelr = radius + 10;

	      if (showLegendText) {
	        g.append("text").attr("transform", function (d) {
	          var c = arc.centroid(d),
	              x = c[0],
	              y = c[1],

	          // pythagorean theorem for hypotenuse
	          h = Math.sqrt(x * x + y * y);

	          return "translate(" + x / h * labelr + ',' + y / h * labelr + ")";
	        }).attr("dy", ".35em").style("text-anchor", function (d) {
	          return (d.endAngle + d.startAngle) / 2 > Math.PI ? "end" : "start";
	        }).text(function (d) {
	          return d.data.name;
	        });
	      }

	      return pieDom;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props3 = this.props;
	      var width = _props3.width;
	      var height = _props3.height;
	      var margins = _props3.margins;

	      var t = 'translate(' + (width - margins.left - margins.right) / 2 + ',  ' + (height - margins.top - margins.bottom) / 2 + ')';

	      var pieChart = _reactFauxDom2['default'].createElement('g');
	      pieChart.setAttribute("transform", t);
	      pieChart.setAttribute("ref", "react-d3-basic__pie");

	      var pie = this._mkPie(pieChart);

	      return pie.node().toReact();
	    }
	  }], [{
	    key: 'defaultProps',
	    value: Object.assign(_commonProps.pieProps, {
	      onMouseOver: function onMouseOver(d) {},
	      onMouseOut: function onMouseOut(d) {},
	      onClick: function onClick(d) {},
	      arcClassName: ''
	    }),
	    enumerable: true
	  }]);

	  return Pie;
	})(_react.Component);

	exports['default'] = Pie;
	module.exports = exports['default'];

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _d3 = __webpack_require__(5);

	var _d32 = _interopRequireDefault(_d3);

	var _reactFauxDom = __webpack_require__(11);

	var _reactFauxDom2 = _interopRequireDefault(_reactFauxDom);

	var _utilsSeries = __webpack_require__(39);

	var Scatter = (function (_Component) {
	  _inherits(Scatter, _Component);

	  function Scatter(props) {
	    _classCallCheck(this, Scatter);

	    _get(Object.getPrototypeOf(Scatter.prototype), 'constructor', this).call(this, props);
	  }

	  _createClass(Scatter, [{
	    key: '_mkScatter',
	    value: function _mkScatter(dom, dataset) {
	      var _props = this.props;
	      var scatterClassName = _props.scatterClassName;
	      var scatterBgClassName = _props.scatterBgClassName;
	      var showScatterBg = _props.showScatterBg;
	      var defaultSymbol = _props.defaultSymbol;
	      var defaultSymbolSize = _props.defaultSymbolSize;
	      var brushSymbol = _props.brushSymbol;
	      var xScaleSet = _props.xScaleSet;
	      var yScaleSet = _props.yScaleSet;

	      // for building symbols in brush, set to circle and size to 4
	      if (brushSymbol) {
	        symbol = 'circle';
	        symbolSize = 4;
	      }

	      var dots = _d32['default'].select(dom);

	      dots.selectAll('g').data(dataset).enter().append('g').each(function (dot) {

	        var symbol = dot.symbol ? dot.symbol : defaultSymbol;
	        var symbolSize = dot.symbolSize ? dot.symbolSize : defaultSymbolSize;

	        var dom = _d32['default'].select(this);

	        if (showScatterBg) {
	          dom.selectAll('' + scatterClassName).data(dot.data).enter().append('path').attr('class', scatterBgClassName + ' scatter').style('fill', "#ffffff").attr('transform', function (d) {
	            return "translate(" + xScaleSet(d.x) + "," + yScaleSet(d.y) + ")";
	          }).attr('d', _d32['default'].svg.symbol().size(function (d) {
	            return symbolSize * symbolSize;
	          }).type(symbol));
	        }

	        dom.selectAll('' + scatterClassName).data(dot.data).enter().append('path').attr('class', scatterClassName + ' scatter').style('fill', dot.color).attr('transform', function (d) {
	          return "translate(" + xScaleSet(d.x) + "," + yScaleSet(d.y) + ")";
	        }).attr('d', _d32['default'].svg.symbol().size(function (d) {
	          return symbolSize * symbolSize;
	        }).type(symbol));

	        // set style for dot
	        if (dot.style) {
	          for (var key in dot.style) {
	            dom.style(key, dot.style[key]);
	          }
	        }
	      });

	      return dots;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var d = (0, _utilsSeries.series)(this.props);

	      var scatterPlot = _reactFauxDom2['default'].createElement('g');
	      var scatter = this._mkScatter(scatterPlot, d);

	      return scatter.node().toReact();
	    }
	  }], [{
	    key: 'defaultProps',
	    value: {
	      defaultSymbol: 'circle',
	      defaultSymbolSize: 10,
	      scatterClassName: 'react-d3-basic__scatter',
	      scatterBgClassName: 'react-d3-basic__scatter_bg',
	      showScatterBg: false
	    },
	    enumerable: true
	  }]);

	  return Scatter;
	})(_react.Component);

	exports['default'] = Scatter;
	module.exports = exports['default'];

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactD3Core = __webpack_require__(3);

	var _d3 = __webpack_require__(5);

	var _d32 = _interopRequireDefault(_d3);

	var _commonProps = __webpack_require__(38);

	var _commonProps2 = _interopRequireDefault(_commonProps);

	var ChartSvg = (function (_Component) {
	  _inherits(ChartSvg, _Component);

	  function ChartSvg(props) {
	    _classCallCheck(this, ChartSvg);

	    _get(Object.getPrototypeOf(ChartSvg.prototype), 'constructor', this).call(this, props);
	  }

	  _createClass(ChartSvg, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var height = _props.height;
	      var width = _props.width;
	      var margins = _props.margins;
	      var xScale = _props.xScale;
	      var yScale = _props.yScale;
	      var xRange = _props.xRange;
	      var yRange = _props.yRange;
	      var xDomain = _props.xDomain;
	      var yDomain = _props.yDomain;
	      var xTicks = _props.xTicks;
	      var yTicks = _props.yTicks;
	      var xTickFormat = _props.xTickFormat;
	      var yTickFormat = _props.yTickFormat;
	      var xRangeRoundBands = _props.xRangeRoundBands;
	      var yRangeRoundBands = _props.yRangeRoundBands;
	      var stack = _props.stack;
	      var data = _props.data;
	      var svgClassName = _props.svgClassName;
	      var id = _props.id;
	      var x = _props.x;
	      var y = _props.y;
	      var xWordWrap = _props.xWordWrap;
	      var style = _props.style;

	      var xRange = xRange || [0, width - margins.left - margins.right];
	      var yRange = yRange || [height - margins.top - margins.bottom, 0];
	      var xRangeRoundBands = xRangeRoundBands || { interval: [0, width - margins.left - margins.right], padding: .1 };
	      var yRangeRoundBands = yRangeRoundBands || { interval: [0, width - margins.left - margins.right], padding: .1 };
	      var xDomain = xDomain || (0, _reactD3Core.xDomainCount)(this.props);
	      var yDomain = yDomain || (0, _reactD3Core.yDomainCount)(this.props, stack);

	      var newXScale = {
	        scale: xScale,
	        range: xRange,
	        domain: xDomain,
	        rangeRoundBands: xRangeRoundBands
	      };

	      var xScaleSet = (0, _reactD3Core.scale)(newXScale);

	      var newYScale = {
	        scale: yScale,
	        range: yRange,
	        domain: yDomain,
	        rangeRoundBands: yRangeRoundBands
	      };

	      var yScaleSet = (0, _reactD3Core.scale)(newYScale);

	      var children = _react2['default'].Children.map(this.props.children, function (el) {
	        if (el == null) {
	          return null;
	        }
	        return _react2['default'].cloneElement(el, {
	          height: height,
	          width: width,
	          margins: margins,
	          xScaleSet: xScaleSet,
	          yScaleSet: yScaleSet,
	          xDomain: xDomain,
	          yDomain: yDomain,
	          xRange: xRange,
	          yRange: yRange,
	          xRangeRoundBands: xRangeRoundBands,
	          yRangeRoundBands: yRangeRoundBands,
	          xScale: xScale,
	          yScale: yScale,
	          xTickFormat: xTickFormat,
	          yTickFormat: yTickFormat,
	          xTicks: xTicks,
	          yTicks: yTicks,
	          xWordWrap: xWordWrap,
	          data: data,
	          x: x,
	          y: y
	        });
	      });

	      var t = 'translate(' + margins.left + ', ' + margins.top + ')';

	      return _react2['default'].createElement(
	        'svg',
	        {
	          height: height,
	          width: width,
	          className: svgClassName,
	          id: id,
	          ref: 'svgContainer',
	          style: style
	        },
	        _react2['default'].createElement(
	          'g',
	          {
	            transform: t
	          },
	          children
	        )
	      );
	    }
	  }], [{
	    key: 'defaultProps',
	    value: Object.assign(_commonProps2['default'], {
	      svgClassName: 'react-d3-core__container_svg'
	    }),
	    enumerable: true
	  }, {
	    key: 'propTypes',
	    value: {
	      id: _react.PropTypes.string,
	      width: _react.PropTypes.number.isRequired,
	      height: _react.PropTypes.number.isRequired,
	      margins: _react.PropTypes.object.isRequired,
	      svgClassName: _react.PropTypes.string.isRequired
	    },
	    enumerable: true
	  }]);

	  return ChartSvg;
	})(_react.Component);

	exports['default'] = ChartSvg;
	module.exports = exports['default'];

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactD3Core = __webpack_require__(3);

	var _d3 = __webpack_require__(5);

	var _d32 = _interopRequireDefault(_d3);

	var _commonProps = __webpack_require__(38);

	var _commonProps2 = _interopRequireDefault(_commonProps);

	var ChartSvg = (function (_Component) {
	  _inherits(ChartSvg, _Component);

	  function ChartSvg(props) {
	    _classCallCheck(this, ChartSvg);

	    _get(Object.getPrototypeOf(ChartSvg.prototype), 'constructor', this).call(this, props);
	  }

	  _createClass(ChartSvg, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var height = _props.height;
	      var width = _props.width;
	      var margins = _props.margins;
	      var data = _props.data;
	      var svgClassName = _props.svgClassName;
	      var id = _props.id;
	      var name = _props.name;
	      var value = _props.value;

	      var children = _react2['default'].Children.map(this.props.children, function (el) {
	        return _react2['default'].cloneElement(el, {
	          height: height,
	          width: width,
	          margins: margins,
	          data: data,
	          name: name,
	          value: value
	        });
	      });

	      var t = 'translate(' + margins.left + ', ' + margins.top + ')';

	      return _react2['default'].createElement(
	        'svg',
	        {
	          height: height,
	          width: width,
	          className: svgClassName,
	          id: id,
	          ref: 'svgContainer'
	        },
	        _react2['default'].createElement(
	          'g',
	          {
	            transform: t
	          },
	          children
	        )
	      );
	    }
	  }], [{
	    key: 'defaultProps',
	    value: Object.assign(_commonProps2['default'], {
	      svgClassName: 'react-d3-core__container_svg'
	    }),
	    enumerable: true
	  }, {
	    key: 'propTypes',
	    value: {
	      id: _react.PropTypes.string,
	      width: _react.PropTypes.number.isRequired,
	      height: _react.PropTypes.number.isRequired,
	      margins: _react.PropTypes.object.isRequired,
	      svgClassName: _react.PropTypes.string.isRequired
	    },
	    enumerable: true
	  }]);

	  return ChartSvg;
	})(_react.Component);

	exports['default'] = ChartSvg;
	module.exports = exports['default'];

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _d3 = __webpack_require__(5);

	var _d32 = _interopRequireDefault(_d3);

	var width = 960;
	var height = 500;
	var margins = { top: 40, right: 100, bottom: 40, left: 100 };

	exports['default'] = {
	  width: width,
	  height: height,
	  margins: margins,
	  y: function y(d) {
	    return +d;
	  },
	  xScale: 'linear',
	  yScale: 'linear',
	  showXGrid: true,
	  showYGrid: true
	};
	var pieProps = {
	  width: width,
	  height: height,
	  margins: margins,
	  innerRadius: 0,
	  categoricalColors: _d32['default'].scale.category10(),
	  pieSort: _d32['default'].descending
	};
	exports.pieProps = pieProps;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactD3Core = __webpack_require__(3);

	var _reactD3Shape = __webpack_require__(36);

	var _commonProps = __webpack_require__(49);

	var _commonProps2 = _interopRequireDefault(_commonProps);

	var AreaChart = (function (_Component) {
	  _inherits(AreaChart, _Component);

	  function AreaChart(props) {
	    _classCallCheck(this, AreaChart);

	    _get(Object.getPrototypeOf(AreaChart.prototype), 'constructor', this).call(this, props);
	  }

	  _createClass(AreaChart, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var width = _props.width;
	      var height = _props.height;
	      var margins = _props.margins;
	      var data = _props.data;
	      var chartSeries = _props.chartSeries;
	      var showXGrid = _props.showXGrid;
	      var showYGrid = _props.showYGrid;
	      var xAxisClassName = _props.xAxisClassName;
	      var yAxisClassName = _props.yAxisClassName;
	      var xWordWrap = _props.xWordWrap;
	      var xGridAxisLineStyle = _props.xGridAxisLineStyle;
	      var yGridAxisLineStyle = _props.yGridAxisLineStyle;
	      var categoricalColors = _props.categoricalColors;
	      var showLine = _props.showLine;
	      var showScatter = _props.showScatter;

	      var xgrid, ygrid, line, scatter;

	      if (showXGrid) xgrid = _react2['default'].createElement(_reactD3Core.Xgrid, { gridAxisLineStyle: xGridAxisLineStyle });
	      if (showYGrid) ygrid = _react2['default'].createElement(_reactD3Core.Ygrid, { gridAxisLineStyle: yGridAxisLineStyle });
	      if (showLine) line = _react2['default'].createElement(_reactD3Shape.Line, _extends({}, this.props, { chartSeries: chartSeries }));
	      if (showScatter) scatter = _react2['default'].createElement(_reactD3Shape.Scatter, _extends({}, this.props, { chartSeries: chartSeries }));

	      return _react2['default'].createElement(
	        'div',
	        null,
	        _react2['default'].createElement(_reactD3Core.Legend, _extends({}, this.props, {
	          width: width,
	          margins: margins,
	          chartSeries: chartSeries,
	          categoricalColors: categoricalColors
	        })),
	        _react2['default'].createElement(
	          _reactD3Shape.Chart,
	          _extends({}, this.props, {
	            width: width,
	            height: height,
	            data: data,
	            chartSeries: chartSeries
	          }),
	          xgrid,
	          ygrid,
	          _react2['default'].createElement(_reactD3Core.Xaxis, {
	            xAxisClassName: xAxisClassName,
	            xWordWrap: xWordWrap,
	            xGridAxisLineStyle: xGridAxisLineStyle
	          }),
	          _react2['default'].createElement(_reactD3Core.Yaxis, {
	            yAxisClassName: yAxisClassName,
	            yGridAxisLineStyle: yGridAxisLineStyle
	          }),
	          _react2['default'].createElement(_reactD3Shape.Area, _extends({}, this.props, {
	            chartSeries: chartSeries
	          })),
	          line,
	          scatter
	        )
	      );
	    }
	  }], [{
	    key: 'defaultProps',
	    value: Object.assign(_commonProps2['default'], {
	      showScatter: false,
	      showLine: false
	    }),
	    enumerable: true
	  }, {
	    key: 'propTypes',
	    value: {
	      width: _react.PropTypes.number.isRequired,
	      height: _react.PropTypes.number.isRequired,
	      margins: _react.PropTypes.object.isRequired,
	      data: _react.PropTypes.array.isRequired,
	      chartSeries: _react.PropTypes.array.isRequired
	    },
	    enumerable: true
	  }]);

	  return AreaChart;
	})(_react.Component);

	exports['default'] = AreaChart;
	module.exports = exports['default'];

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactD3Core = __webpack_require__(3);

	var _reactD3Shape = __webpack_require__(36);

	var _commonProps = __webpack_require__(49);

	var _commonProps2 = _interopRequireDefault(_commonProps);

	var ScatterPlot = (function (_Component) {
	  _inherits(ScatterPlot, _Component);

	  function ScatterPlot(props) {
	    _classCallCheck(this, ScatterPlot);

	    _get(Object.getPrototypeOf(ScatterPlot.prototype), 'constructor', this).call(this, props);
	  }

	  _createClass(ScatterPlot, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var width = _props.width;
	      var height = _props.height;
	      var margins = _props.margins;
	      var data = _props.data;
	      var chartSeries = _props.chartSeries;
	      var showXGrid = _props.showXGrid;
	      var showYGrid = _props.showYGrid;
	      var categoricalColors = _props.categoricalColors;

	      var xgrid, ygrid;

	      if (showXGrid) xgrid = _react2['default'].createElement(_reactD3Core.Xgrid, null);
	      if (showYGrid) ygrid = _react2['default'].createElement(_reactD3Core.Ygrid, null);

	      return _react2['default'].createElement(
	        'div',
	        null,
	        _react2['default'].createElement(_reactD3Core.Legend, _extends({}, this.props, {
	          width: width,
	          chartSeries: chartSeries,
	          categoricalColors: categoricalColors
	        })),
	        _react2['default'].createElement(
	          _reactD3Shape.Chart,
	          _extends({}, this.props, {
	            width: width,
	            height: height,
	            data: data,
	            chartSeries: chartSeries
	          }),
	          _react2['default'].createElement(_reactD3Shape.Scatter, {
	            chartSeries: chartSeries
	          }),
	          xgrid,
	          ygrid,
	          _react2['default'].createElement(_reactD3Core.Xaxis, null),
	          _react2['default'].createElement(_reactD3Core.Yaxis, null)
	        )
	      );
	    }
	  }], [{
	    key: 'defaultProps',
	    value: _commonProps2['default'],
	    enumerable: true
	  }, {
	    key: 'propTypes',
	    value: {
	      width: _react.PropTypes.number.isRequired,
	      height: _react.PropTypes.number.isRequired,
	      margins: _react.PropTypes.object.isRequired,
	      data: _react.PropTypes.array.isRequired,
	      chartSeries: _react.PropTypes.array.isRequired
	    },
	    enumerable: true
	  }]);

	  return ScatterPlot;
	})(_react.Component);

	exports['default'] = ScatterPlot;
	module.exports = exports['default'];

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactD3Core = __webpack_require__(3);

	var _reactD3Shape = __webpack_require__(36);

	var _commonProps = __webpack_require__(49);

	var _commonProps2 = _interopRequireDefault(_commonProps);

	var BarChart = (function (_Component) {
	  _inherits(BarChart, _Component);

	  function BarChart(props) {
	    _classCallCheck(this, BarChart);

	    _get(Object.getPrototypeOf(BarChart.prototype), 'constructor', this).call(this, props);
	  }

	  _createClass(BarChart, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var width = _props.width;
	      var height = _props.height;
	      var margins = _props.margins;
	      var data = _props.data;
	      var chartSeries = _props.chartSeries;
	      var showXGrid = _props.showXGrid;
	      var showYGrid = _props.showYGrid;
	      var categoricalColors = _props.categoricalColors;
	      var barClassName = _props.barClassName;
	      var xAxisClassName = _props.xAxisClassName;
	      var yAxisClassName = _props.yAxisClassName;
	      var xWordWrap = _props.xWordWrap;
	      var onMouseOver = _props.onMouseOver;
	      var onMouseOut = _props.onMouseOut;
	      var onMouseMove = _props.onMouseMove;
	      var onClick = _props.onClick;
	      var xGridAxisLineStyle = _props.xGridAxisLineStyle;
	      var yGridAxisLineStyle = _props.yGridAxisLineStyle;

	      var xgrid, ygrid;

	      if (showXGrid) xgrid = _react2['default'].createElement(_reactD3Core.Xgrid, { gridAxisLineStyle: xGridAxisLineStyle });
	      if (showYGrid) ygrid = _react2['default'].createElement(_reactD3Core.Ygrid, { gridAxisLineStyle: yGridAxisLineStyle });

	      return _react2['default'].createElement(
	        'div',
	        null,
	        _react2['default'].createElement(_reactD3Core.Legend, _extends({}, this.props, {
	          width: width,
	          margins: margins,
	          chartSeries: chartSeries,
	          categoricalColors: categoricalColors
	        })),
	        _react2['default'].createElement(
	          _reactD3Shape.Chart,
	          _extends({}, this.props, {
	            width: width,
	            height: height,
	            data: data,
	            chartSeries: chartSeries
	          }),
	          xgrid,
	          ygrid,
	          _react2['default'].createElement(_reactD3Core.Xaxis, {
	            xAxisClassName: xAxisClassName,
	            xWordWrap: xWordWrap,
	            xGridAxisLineStyle: xGridAxisLineStyle
	          }),
	          _react2['default'].createElement(_reactD3Core.Yaxis, {
	            yAxisClassName: yAxisClassName,
	            yGridAxisLineStyle: yGridAxisLineStyle
	          }),
	          _react2['default'].createElement(_reactD3Shape.Bar, {
	            onMouseOver: onMouseOver,
	            onMouseOut: onMouseOut,
	            onClick: onClick,
	            onMouseMove: onMouseMove ? onMouseMove : onMouseOver,
	            chartSeries: chartSeries,
	            barClassName: barClassName
	          })
	        )
	      );
	    }
	  }], [{
	    key: 'defaultProps',
	    value: Object.assign(_commonProps2['default'], {
	      onMouseOver: function onMouseOver() {},
	      onMouseOut: function onMouseOut() {},
	      onClick: function onClick() {}
	    }),
	    enumerable: true
	  }, {
	    key: 'propTypes',
	    value: {
	      width: _react.PropTypes.number.isRequired,
	      height: _react.PropTypes.number.isRequired,
	      margins: _react.PropTypes.object.isRequired,
	      data: _react.PropTypes.array.isRequired,
	      chartSeries: _react.PropTypes.array.isRequired
	    },
	    enumerable: true
	  }]);

	  return BarChart;
	})(_react.Component);

	exports['default'] = BarChart;
	module.exports = exports['default'];

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactD3Core = __webpack_require__(3);

	var _reactD3Shape = __webpack_require__(36);

	var _commonProps = __webpack_require__(49);

	var _commonProps2 = _interopRequireDefault(_commonProps);

	var BarGroupChart = (function (_Component) {
	  _inherits(BarGroupChart, _Component);

	  function BarGroupChart(props) {
	    _classCallCheck(this, BarGroupChart);

	    _get(Object.getPrototypeOf(BarGroupChart.prototype), 'constructor', this).call(this, props);
	  }

	  _createClass(BarGroupChart, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var width = _props.width;
	      var height = _props.height;
	      var margins = _props.margins;
	      var data = _props.data;
	      var chartSeries = _props.chartSeries;
	      var showXGrid = _props.showXGrid;
	      var showYGrid = _props.showYGrid;
	      var categoricalColors = _props.categoricalColors;

	      var xgrid, ygrid;

	      if (showXGrid) xgrid = _react2['default'].createElement(_reactD3Core.Xgrid, null);
	      if (showYGrid) ygrid = _react2['default'].createElement(_reactD3Core.Ygrid, null);

	      return _react2['default'].createElement(
	        'div',
	        null,
	        _react2['default'].createElement(_reactD3Core.Legend, _extends({}, this.props, {
	          width: width,
	          margins: margins,
	          chartSeries: chartSeries,
	          categoricalColors: categoricalColors
	        })),
	        _react2['default'].createElement(
	          _reactD3Shape.Chart,
	          _extends({}, this.props, {
	            width: width,
	            height: height,
	            data: data,
	            chartSeries: chartSeries
	          }),
	          _react2['default'].createElement(_reactD3Shape.BarGroup, {
	            chartSeries: chartSeries
	          }),
	          xgrid,
	          ygrid,
	          _react2['default'].createElement(_reactD3Core.Xaxis, null),
	          _react2['default'].createElement(_reactD3Core.Yaxis, null)
	        )
	      );
	    }
	  }], [{
	    key: 'defaultProps',
	    value: Object.assign(_commonProps2['default'], {
	      onMouseOver: function onMouseOver() {},
	      onMouseOut: function onMouseOut() {}
	    }),
	    enumerable: true
	  }, {
	    key: 'propTypes',
	    value: {
	      width: _react.PropTypes.number.isRequired,
	      height: _react.PropTypes.number.isRequired,
	      margins: _react.PropTypes.object.isRequired,
	      data: _react.PropTypes.array.isRequired,
	      chartSeries: _react.PropTypes.array.isRequired
	    },
	    enumerable: true
	  }]);

	  return BarGroupChart;
	})(_react.Component);

	exports['default'] = BarGroupChart;
	module.exports = exports['default'];

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactD3Core = __webpack_require__(3);

	var _reactD3Shape = __webpack_require__(36);

	var _commonProps = __webpack_require__(49);

	var _commonProps2 = _interopRequireDefault(_commonProps);

	var AreaStackChart = (function (_Component) {
	  _inherits(AreaStackChart, _Component);

	  function AreaStackChart(props) {
	    _classCallCheck(this, AreaStackChart);

	    _get(Object.getPrototypeOf(AreaStackChart.prototype), 'constructor', this).call(this, props);
	  }

	  _createClass(AreaStackChart, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var width = _props.width;
	      var height = _props.height;
	      var margins = _props.margins;
	      var data = _props.data;
	      var chartSeries = _props.chartSeries;
	      var showXGrid = _props.showXGrid;
	      var showYGrid = _props.showYGrid;
	      var categoricalColors = _props.categoricalColors;

	      var xgrid, ygrid;

	      if (showXGrid) xgrid = _react2['default'].createElement(_reactD3Core.Xgrid, null);
	      if (showYGrid) ygrid = _react2['default'].createElement(_reactD3Core.Ygrid, null);

	      return _react2['default'].createElement(
	        'div',
	        null,
	        _react2['default'].createElement(_reactD3Core.Legend, _extends({}, this.props, {
	          width: width,
	          margins: margins,
	          chartSeries: chartSeries,
	          categoricalColors: categoricalColors
	        })),
	        _react2['default'].createElement(
	          _reactD3Shape.Chart,
	          _extends({}, this.props, {
	            width: width,
	            height: height,
	            data: data,
	            chartSeries: chartSeries,
	            stack: true
	          }),
	          _react2['default'].createElement(_reactD3Shape.AreaStack, {
	            chartSeries: chartSeries
	          }),
	          xgrid,
	          ygrid,
	          _react2['default'].createElement(_reactD3Core.Xaxis, null),
	          _react2['default'].createElement(_reactD3Core.Yaxis, null)
	        )
	      );
	    }
	  }], [{
	    key: 'defaultProps',
	    value: _commonProps2['default'],
	    enumerable: true
	  }, {
	    key: 'propTypes',
	    value: {
	      width: _react.PropTypes.number.isRequired,
	      height: _react.PropTypes.number.isRequired,
	      margins: _react.PropTypes.object.isRequired,
	      data: _react.PropTypes.array.isRequired,
	      chartSeries: _react.PropTypes.array.isRequired
	    },
	    enumerable: true
	  }]);

	  return AreaStackChart;
	})(_react.Component);

	exports['default'] = AreaStackChart;
	module.exports = exports['default'];

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactD3Core = __webpack_require__(3);

	var _reactD3Shape = __webpack_require__(36);

	var _commonProps = __webpack_require__(49);

	var _commonProps2 = _interopRequireDefault(_commonProps);

	var BarStackChart = (function (_Component) {
	  _inherits(BarStackChart, _Component);

	  function BarStackChart(props) {
	    _classCallCheck(this, BarStackChart);

	    _get(Object.getPrototypeOf(BarStackChart.prototype), 'constructor', this).call(this, props);
	  }

	  _createClass(BarStackChart, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var width = _props.width;
	      var height = _props.height;
	      var margins = _props.margins;
	      var data = _props.data;
	      var chartSeries = _props.chartSeries;
	      var showXGrid = _props.showXGrid;
	      var showYGrid = _props.showYGrid;
	      var categoricalColors = _props.categoricalColors;

	      var xgrid, ygrid;

	      if (showXGrid) xgrid = _react2['default'].createElement(_reactD3Core.Xgrid, null);
	      if (showYGrid) ygrid = _react2['default'].createElement(_reactD3Core.Ygrid, null);

	      return _react2['default'].createElement(
	        'div',
	        null,
	        _react2['default'].createElement(_reactD3Core.Legend, _extends({}, this.props, {
	          width: width,
	          margins: margins,
	          chartSeries: chartSeries,
	          categoricalColors: categoricalColors
	        })),
	        _react2['default'].createElement(
	          _reactD3Shape.Chart,
	          _extends({}, this.props, {
	            width: width,
	            height: height,
	            data: data,
	            chartSeries: chartSeries,
	            stack: true
	          }),
	          _react2['default'].createElement(_reactD3Shape.BarStack, {
	            chartSeries: chartSeries
	          }),
	          xgrid,
	          ygrid,
	          _react2['default'].createElement(_reactD3Core.Xaxis, null),
	          _react2['default'].createElement(_reactD3Core.Yaxis, null)
	        )
	      );
	    }
	  }], [{
	    key: 'defaultProps',
	    value: Object.assign(_commonProps2['default'], {
	      onMouseOver: function onMouseOver() {},
	      onMouseOut: function onMouseOut() {}
	    }),
	    enumerable: true
	  }, {
	    key: 'propTypes',
	    value: {
	      width: _react.PropTypes.number.isRequired,
	      height: _react.PropTypes.number.isRequired,
	      margins: _react.PropTypes.object.isRequired,
	      data: _react.PropTypes.array.isRequired,
	      chartSeries: _react.PropTypes.array.isRequired
	    },
	    enumerable: true
	  }]);

	  return BarStackChart;
	})(_react.Component);

	exports['default'] = BarStackChart;
	module.exports = exports['default'];

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactD3Core = __webpack_require__(3);

	var _reactD3Shape = __webpack_require__(36);

	var PieChart = (function (_Component) {
	  _inherits(PieChart, _Component);

	  function PieChart(props) {
	    _classCallCheck(this, PieChart);

	    _get(Object.getPrototypeOf(PieChart.prototype), 'constructor', this).call(this, props);
	  }

	  _createClass(PieChart, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var width = _props.width;
	      var height = _props.height;
	      var data = _props.data;
	      var chartSeries = _props.chartSeries;
	      var value = _props.value;
	      var name = _props.name;
	      var categoricalColors = _props.categoricalColors;
	      var showLegend = _props.showLegend;

	      var legend;
	      if (showLegend) legend = _react2['default'].createElement(_reactD3Core.Legend, _extends({}, this.props, {
	        width: width,
	        chartSeries: chartSeries,
	        categoricalColors: categoricalColors
	      }));

	      return _react2['default'].createElement(
	        'div',
	        null,
	        legend,
	        _react2['default'].createElement(
	          _reactD3Shape.ChartPie,
	          _extends({}, this.props, {
	            width: width,
	            height: height,
	            data: data,
	            chartSeries: chartSeries,
	            value: value,
	            name: name
	          }),
	          _react2['default'].createElement(_reactD3Shape.Pie, _extends({}, this.props, {
	            chartSeries: chartSeries
	          }))
	        )
	      );
	    }
	  }], [{
	    key: 'defaultProps',
	    value: {
	      onMouseOver: function onMouseOver() {},
	      onMouseOut: function onMouseOut() {}
	    },
	    enumerable: true
	  }, {
	    key: 'propTypes',
	    value: {
	      width: _react.PropTypes.number.isRequired,
	      height: _react.PropTypes.number.isRequired,
	      data: _react.PropTypes.array.isRequired,
	      chartSeries: _react.PropTypes.array.isRequired,
	      value: _react.PropTypes.func.isRequired,
	      name: _react.PropTypes.func.isRequired
	    },
	    enumerable: true
	  }]);

	  return PieChart;
	})(_react.Component);

	exports['default'] = PieChart;
	module.exports = exports['default'];

/***/ })
/******/ ]);