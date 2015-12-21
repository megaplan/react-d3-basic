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

      return _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(_reactD3Core.Legend, _extends({}, this.props, {
          width: width,
          chartSeries: chartSeries,
          categoricalColors: categoricalColors
        })),
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