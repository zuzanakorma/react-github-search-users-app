import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Chart from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.candy";

// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);



const ChartComponent = ({ data }) => {
  const chartConfigs = {
    type: "doughnut2d", // The chart type
    width: "100%", // Width of the chart
    height: "400", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        caption: "Stars Per Language",
        decimal: 0,
        doughnutRadius: '45%',
        paletteColors: ['#da4a91', '#5d55fa', '#f0b429', '#2baeba'],
        showPercentValues: 0,
        theme: 'candy'
      },
      // Chart Data
      data,
    }
  };
  return (<ReactFC {...chartConfigs} />);
}

export default ChartComponent;
