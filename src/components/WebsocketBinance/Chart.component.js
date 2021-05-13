import React, { Component } from "react";
import ApexChart from "react-apexcharts";

export default class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      series: [
        {
          name: "candle",
          data: [
            {
              x: new Date(1538778600000),
              y: [6629.81, 6650.5, 6623.04, 6633.33],
            },
          ],
        },
      ],
      options: {
        chart: {
          height: 350,
          type: "candlestick",
        },
        title: {
          text: "CandleStick Chart - Category X-axis",
          align: "left",
        },
        annotations: {
          xaxis: [
            {
              x: "Oct 06 14:00",
              borderColor: "#00E396",
              label: {
                borderColor: "#00E396",
                style: {
                  fontSize: "12px",
                  color: "#fff",
                  background: "#00E396",
                },
                orientation: "horizontal",
                offsetY: 7,
                text: "Annotation Test",
              },
            },
          ],
        },
        tooltip: {
          enabled: true,
        },
        xaxis: {
          type: "category",
          labels: {
            // formatter: function (val) {
            //   return dayjs(val).format("MMM DD HH:mm");
            // },
          },
        },
        yaxis: {
          tooltip: {
            enabled: true,
          },
        },
      },
    };
  }
  
  render() {
    //console.log(this.props.data)
    return (
      <div id="chart">
        <ApexChart
          options={this.state.options}
          series={
            [
        {
          name: "candle",
          data: this.props.data.map((el) => {
      return {
        x: new Date(parseInt(el[0])),
        y: [ el[1].open, el[1].high, el[1].low, el[1].close ]
      }
    }),
        },
      ]
          }
          type="candlestick"
          height={350}
        />
      </div>
    );
  }
}
