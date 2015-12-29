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
  Line,
  Chart
} from 'react-d3-shape';

import CommonProps from './commonProps';

export default class LineChart extends Component {

  constructor(props) {
    super(props);
  }

  static defaultProps = Object.assign(CommonProps, {
    showScatter: false
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
      categoricalColors
      } = this.props;

    var xgrid, ygrid;

    if(showXGrid) xgrid = <Xgrid gridAxisLineStyle={xGridAxisLineStyle}/>
    if(showYGrid) ygrid = <Ygrid gridAxisLineStyle={yGridAxisLineStyle}/>

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
          <Line
            {...this.props}
            chartSeries={chartSeries}
          />
        </Chart>
      </div>
    )
  }
}
