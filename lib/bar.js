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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactD3Core = require('react-d3-core');

var _reactD3Shape = require('react-d3-shape');

var _commonProps = require('./commonProps');

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
      var yMinHeight = _props.yMinHeight;
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
            yMinHeight: yMinHeight,
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
      yMinHeight: 0,
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