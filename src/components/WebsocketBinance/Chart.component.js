import React, { Component } from "react";
import ApexChart from "react-apexcharts";
import SCChart from './Chart.styled';
import moment from 'moment'

export default class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      series: [
        {
          name: "candle",
          data: [],
        },
      ],
      options: {},
    };
  }

  componentDidUpdate(){
   document.querySelector('.apexcharts-toolbar').style.display = "none";
  }
  
  render() {
    return (
      <SCChart>
      <div id="chart">
        <ApexChart
          options={
        {chart: {
          height: 350,
          type: "candlestick",
        },
        title: {
          text: `${this.props.market} - SPOT Market`,
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
                  color: "#e63946",
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
        }}
      }
          series={
            [
        {
          name: "candle",
          data: this.props.data.map((el) => {
      return {
        x: moment(new Date(parseInt(el[0]))).format("MM-dd-yyyy h:mm:ss"),
        y: [ el[1].open, el[1].high, el[1].low, el[1].close ]
      }
    }),
        },
      ]
          }
    // series={this.state.series} 
          type="candlestick"
          height={350}
        />
      </div>
      </SCChart>
    );
  }
}
