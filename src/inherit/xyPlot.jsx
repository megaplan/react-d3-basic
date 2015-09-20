"use strict";

import {
  default as React,
  Component,
  PropTypes,
} from 'react';

import {
  Chart as Chart,
  Xaxis as Xaxis,
  Yaxis as Yaxis,
  Legend as Legend,
  Grid as Grid,
} from 'react-d3-core';

import {
  default as Line,
} from '../line';

import {
  default as AreaSimple,
} from '../area';

import {
  default as AreaStack,
} from '../area_stack';

import {
  default as Scatter,
} from '../scatter';

import {
  default as Bar,
} from '../bar';

import {
  default as BarGroup,
} from '../bar_group';

import {
  default as BarStack,
} from '../bar_stack';

export default class xyChart extends Component {
  constructor(props) {
    super(props);
    const {chartSeries} = this.props;

    this.setScale = this.setScale.bind(this);

    this.state = {
      xScaleSet: null,
      yScaleSet: null,
      chartSeriesData: chartSeries? this.mkSeries(): null
    }
  }

  setScale(axis, func) {

    if(axis === 'x'){
      // set x scale
      this.setState({
        xScaleSet: func
      })
    }else if(axis === 'y'){
      // set y scale
      this.setState({
        yScaleSet: func
      })
    }
  }

  mkSeries() {
    const {data, chartSeries, x, y, categoricalColors} = this.props;

    var chartSeriesData = chartSeries.map((f, i) => {

      // set a color if not set
      if(!f.color)
        f.color = categoricalColors(i);

      // set name if not set
      if(!f.name)
        f.name = f.field;

      // mapping throught data set x, y data
      var mapping = data.map(d => {
        return {
          x: x(d),
          y: y(d[f.field])
        }
      })

      return Object.assign(f, {data: mapping});
    })

    return chartSeriesData;
  }
}

xyChart.defaultProps = {
  showLegend: true,
  categoricalColors: d3.scale.category10(),
  showXGrid: true,
  showYGrid: true,
  showXAxis: true,
  showYAxis: true,
}

xyChart.propTypes = {
  title: PropTypes.string,
  data: PropTypes.array.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  id: PropTypes.string,
  margins: PropTypes.object.isRequired,
  svgClassName: PropTypes.string,
  titleClassName: PropTypes.string,
  yAxisClassName: PropTypes.string,
  xAxisClassName: PropTypes.string,
  legendClassName: PropTypes.string,
  lineClass: PropTypes.string,
  scatterClass: PropTypes.string,
  showScatter: PropTypes.bool,
  showLegend: PropTypes.bool,
  showXAxis: PropTypes.bool,
  showYAxis: PropTypes.bool,
  lineMulti: PropTypes.array,
  interpolate: PropTypes.string,
  legendPosition: PropTypes.oneOf(['left', 'right']),
  x: PropTypes.func.isRequired,
  xDomain: PropTypes.array,
  xRange: PropTypes.array,
  xScale: PropTypes.func.isRequired,
  xOrient: PropTypes.oneOf(['bottom', 'top']),
  xTickOrient: PropTypes.oneOf(['bottom', 'top']),
  xAxisClassName: PropTypes.string,
  xLabel: PropTypes.string,
  y: PropTypes.func.isRequired,
  yDomain: PropTypes.array,
  yRange: PropTypes.array,
  yScale: PropTypes.func.isRequired,
  yOrient: PropTypes.oneOf(['right', 'left']),
  yTickOrient: PropTypes.oneOf(['right', 'left']),
  yAxisClassName: PropTypes.string,
  yLabel: PropTypes.string,
}

export class LineChart extends xyChart {

  render() {

    var lines;
    var scatters;
    var legends;

    const {xScaleSet, yScaleSet, chartSeriesData, showXGrid, showYGrid} = this.state;
    const {showScatter, interpolate, chartSeries, showLegend} = this.props;

    if(showXGrid) {
      var xgrid = <Grid type="x" {...this.props} {...this.state} />
    }

    if(showYGrid) {
      var ygrid = <Grid type="y" {...this.props} {...this.state} />
    }

    if (xScaleSet && yScaleSet) {
      // if x and y scale is all set, doing plotting...
      if(chartSeries) {
        var lines = chartSeriesData.map((d, i) => {
          if(d.area) {
            // area chart
            return <AreaSimple dataset={d} key={i} {...this.props} {...this.state} />
          } else {
            // simple line chart
            return <Line dataset={d} key={i} {...this.props} {...this.state} />
          }
        })
      }

      if(showScatter && !interpolate) {
        // show scatters in line chart
        var scatters = chartSeriesData.map((d, i) => {
          return <Scatter dataset={d} key={i} {...this.props} {...this.state} />
        })
      }

      if(showLegend) {
        var legends = <Legend {...this.props} {...this.state} />
      }
    }

    return (
      <Chart {...this.props}>
        {xgrid}
        {ygrid}
        <g ref= "plotGroup">
          {lines}
          {scatters}
          {legends}
        </g>
        <Xaxis {...this.props} {...this.state} setScale={this.setScale} />
        <Yaxis {...this.props} {...this.state} setScale={this.setScale} />
      </Chart>
    )
  }
}

LineChart.defaultProps = {
  showScatter: false
}

export class ScatterPlot extends xyChart {

  render() {

    var scatters;
    var legends;

    const { xScaleSet, yScaleSet, chartSeriesData, showXGrid, showYGrid } = this.state;
    const { chartSeries, showLegend} = this.props;

    if(showXGrid) {
      var xgrid = <Grid type="x" {...this.props} {...this.state} />
    }

    if(showYGrid) {
      var ygrid = <Grid type="y" {...this.props} {...this.state} />
    }

    if (xScaleSet && yScaleSet) {
      // if x and y scale is all set, doing plotting...
      if(chartSeries) {
        var scatters = chartSeriesData.map((d, i) => {
          return <Scatter dataset={d} key={i} {...this.props} {...this.state} />
        })
      }

      if(showLegend) {
        var legends = <Legend {...this.props} {...this.state} />
      }
    }

    return (
      <Chart {...this.props}>
        {xgrid}
        {ygrid}
        <g ref= "plotGroup">
          {scatters}
          {legends}
        </g>
        <Xaxis {...this.props} {...this.state} setScale={this.setScale} />
        <Yaxis {...this.props} {...this.state} setScale={this.setScale} />
      </Chart>
    )
  }
}

ScatterPlot.defaultProps = {
}

export class AreaStackChart extends xyChart {

  render() {

    const { xScaleSet, yScaleSet, chartSeriesData, showXGrid, showYGrid } = this.state;
    const { chartSeries, showLegend} = this.props;

    if(showXGrid) {
      var xgrid = <Grid type="x" {...this.props} {...this.state} />
    }

    if(showYGrid) {
      var ygrid = <Grid type="y" {...this.props} {...this.state} />
    }


    if (xScaleSet && yScaleSet) {
      // if x and y scale is all set, doing plotting...
      if(chartSeries) {
        var areas = <AreaStack dataset={chartSeriesData} {...this.props} {...this.state} />
      }

      if(showLegend) {
        var legends = <Legend {...this.props} {...this.state} />
      }
    }

    return (
      <Chart {...this.props}>
        {xgrid}
        {ygrid}
        <g ref= "plotGroup">
          {areas}
          {legends}
        </g>
        <Xaxis {...this.props} {...this.state} setScale={this.setScale} />
        <Yaxis {...this.props} {...this.state} setScale={this.setScale} />
      </Chart>
    )
  }
}

AreaStackChart.defaultProps = {
  showLegend: true
}

export class BarChart extends xyChart {

  render() {

    const { xScaleSet, yScaleSet, chartSeriesData, showXGrid, showYGrid } = this.state;
    const { chartSeries, showLegend} = this.props;

    if(showXGrid) {
      var xgrid = <Grid type="x" {...this.props} {...this.state} />
    }

    if(showYGrid) {
      var ygrid = <Grid type="y" {...this.props} {...this.state} />
    }

    if (xScaleSet && yScaleSet) {
      // if x and y scale is all set, doing plotting...
      if(chartSeries) {
        var bars = chartSeriesData.map((d, i) => {
          return <Bar dataset={d} key={i} {...this.props} {...this.state} />
        })
      }

      if(showLegend) {
        var legends = <Legend {...this.props} {...this.state} />
      }
    }

    return (
      <Chart {...this.props}>
        {xgrid}
        {ygrid}
        <g ref= "plotGroup">
          {bars}
          {legends}
        </g>
        <Xaxis {...this.props} {...this.state} setScale={this.setScale} />
        <Yaxis {...this.props} {...this.state} setScale={this.setScale} />
      </Chart>
    )
  }
}

BarChart.defaultProps = {
  showLegend: true
}

export class BarGroupChart extends xyChart {

  render() {

    const { xScaleSet, yScaleSet, chartSeriesData, showXGrid, showYGrid } = this.state;
    const { chartSeries, showLegend} = this.props;

    if(showXGrid) {
      var xgrid = <Grid type="x" {...this.props} {...this.state} />
    }

    if(showYGrid) {
      var ygrid = <Grid type="y" {...this.props} {...this.state} />
    }

    if (xScaleSet && yScaleSet) {
      // if x and y scale is all set, doing plotting...
      if(chartSeries) {

        // settings x1
        var x1 = d3.scale.ordinal();

        // mapping x1, inner x axis
        x1.domain(chartSeriesData.map((d) => { return d.field}))
          .rangeRoundBands([0, xScaleSet.rangeBand()]);

        var bargroups = chartSeriesData.map((d, i) => {
          return <BarGroup x1={x1} dataset={d} key={i} count={i} {...this.props} {...this.state} />
        })
      }

      if(showLegend) {
        var legends = <Legend {...this.props} {...this.state} />
      }
    }

    return (
      <Chart {...this.props}>
        {xgrid}
        {ygrid}
        <g ref= "plotGroup">
          {bargroups}
          {legends}
        </g>
        <Xaxis {...this.props} {...this.state} setScale={this.setScale} />
        <Yaxis {...this.props} {...this.state} setScale={this.setScale} />
      </Chart>
    )
  }
}

BarGroupChart.defaultProps = {
  showLegend: true
}

export class BarStackChart extends xyChart {

  render() {

    const { xScaleSet, yScaleSet, chartSeriesData} = this.state;
    const { chartSeries, showLegend, showXGrid, showYGrid} = this.props;

    if(showXGrid) {
      var xgrid = <Grid type="x" {...this.props} {...this.state} />
    }

    if(showYGrid) {
      var ygrid = <Grid type="y" {...this.props} {...this.state} />
    }

    if (xScaleSet && yScaleSet) {
      // if x and y scale is all set, doing plotting...
      if(chartSeries) {
        var stackVal = chartSeriesData[0].data.map(d => {
          return {name: d.x, value: 0};
        })

        var bargroups = chartSeriesData.map((d, i) => {
          stackVal = stackVal.map((dkey, i) => {
            var newVal = dkey.value + d.data[i].y

            return {name: dkey.name, value: newVal}
          })

          return <BarStack stackVal={stackVal} dataset={d} key={i} count={i} {...this.props} {...this.state} />
        }).reverse()
      }

      if(showLegend) {
        var legends = <Legend {...this.props} {...this.state} />
      }
    }

    return (
      <Chart {...this.props}>
        {xgrid}
        {ygrid}
        <g ref= "plotGroup">
          {bargroups}
          {legends}
        </g>
        <Xaxis {...this.props} {...this.state} setScale={this.setScale} />
        <Yaxis {...this.props} {...this.state} setScale={this.setScale} />
      </Chart>
    )
  }
}

BarStackChart.defaultProps = {
  showLegend: true,
}