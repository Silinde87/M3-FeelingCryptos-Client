import React, { useEffect, useState } from "react";
import ApexChart from "react-apexcharts";
import SCChart from './Chart.styled';
import moment from 'moment';
import { withAuth } from "../../context/auth.context";
import StarBorderRoundedIcon from '@material-ui/icons/StarBorderRounded';
import StarRoundedIcon from '@material-ui/icons/StarRounded';
import Spinner from "../Spinner/Spinner";

function Chart(props){
  const [ toggle, setToggle ] = useState(false)
    
  useEffect(() => {
    console.log('Use effect')
    const isFavorite = props.user.favorites_cryptos.filter((crypto) => {
      console.log(crypto)
      return crypto === props.market
    }) 
    console.log(isFavorite)
    isFavorite.length ? setToggle(!toggle) : setToggle(!toggle)
    console.log(toggle)
  }, [props.market])  
 
    
  const handleClick = () => {
    setToggle(!toggle)
    props.addFavoritesCryptos({ favorites_cryptos: props.market })
    console.log('added to favorite market')
  }
  
 
    return (
      <>
      {/* { this.state.isLoading ? <Spinner /> : */}
      <SCChart>
      <div id="chart">
      <button onClick={() => handleClick()}>{toggle ? <StarRoundedIcon className="favorite-btn" /> : <StarBorderRoundedIcon className="favorite-btn" /> }</button>
        <ApexChart
          options={
        {chart: {
          height: 300,
          type: "candlestick",
        },
        title: {
          text: `${props.market} - SPOT Market`,
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
          data: props.data.map((el) => {
      return {
        x: moment(new Date(parseInt(el[0]))).format("MM-dd-yyyy h:mm:ss"),
        y: [ el[1].open, el[1].high, el[1].low, el[1].close ]
      }
    }),
        },
      ]
          }
          type="candlestick"
          height={300}
        />
      </div>
      </SCChart>
      </>
    );
}

export default withAuth(Chart);