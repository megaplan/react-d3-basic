"use strict";

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var PropTypes = _interopRequireWildcard(_propTypes);

var _reactD3Core = require('react-d3-core');

var _reactD3Shape = require('react-d3-shape');

var _commonProps = require('./commonProps');

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
      width: PropTypes.number.isRequired,
      height: PropTypes.number.isRequired,
      margins: PropTypes.object.isRequired,
      data: PropTypes.array.isRequired,
      chartSeries: PropTypes.array.isRequired
    },
    enumerable: true
  }]);

  return AreaChart;
})(_react.Component);

exports['default'] = AreaChart;
module.exports = exports['default'];