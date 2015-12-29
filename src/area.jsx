"use strict";

import {
  default as React,
  Component,
  PropTypes,
} from 'react';

import {
  Xaxis,
  Yaxis,
  Xgrid,
  Ygrid,
  Legend
} from 'react-d3-core';

import {
  Area,
  Line,
  Chart,
  Scatter
} from 'react-d3-shape';

import CommonProps from './commonProps';

export default class AreaChart extends Component {

  constructor(props) {
    super(props);
  }

  static defaultProps = Object.assign(CommonProps, {
    showScatter: false,
    showLine: false
  })

  static propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    margins: PropTypes.object.isRequired,
    data: PropTypes.array.isRequired,
    chartSeries: PropTypes.array.isRequired
  }

  render() {

    const {
      width,
      height,
      margins,
      data,
      chartSeries,
      showXGrid,
      showYGrid,
      xAxisClassName,
      yAxisClassName,
      xWordWrap,
      xGridAxisLineStyle,
      yGridAxisLineStyle,
      categoricalColors,
      showLine,
      showScatter
      } = this.props;

    var xgrid, ygrid, line, scatter;

    if(showXGrid) xgrid = <Xgrid gridAxisLineStyle={xGridAxisLineStyle}/>
    if(showYGrid) ygrid = <Ygrid gridAxisLineStyle={yGridAxisLineStyle}/>
    if(showLine) line = <Line {...this.props} chartSeries={chartSeries}/>
    if(showScatter) scatter = <Scatter {...this.props} chartSeries={chartSeries}/>

    return (
      <div>
        <Legend
          {...this.props}
          width={width}
          margins={margins}
          chartSeries={chartSeries}
          categoricalColors={categoricalColors}
        />
        <Chart
          {...this.props}
          width={width}
          height={height}
          data={data}
          chartSeries={chartSeries}
        >
          {xgrid}
          {ygrid}
          <Xaxis
            xAxisClassName={xAxisClassName}
            xWordWrap={xWordWrap}
            xGridAxisLineStyle={xGridAxisLineStyle}
          />
          <Yaxis
            yAxisClassName={yAxisClassName}
            yGridAxisLineStyle={yGridAxisLineStyle}
          />
          <Area
            {...this.props}
            chartSeries={chartSeries}
          />
          {line}
          {scatter}
        </Chart>
      </div>
    )
  }
}
