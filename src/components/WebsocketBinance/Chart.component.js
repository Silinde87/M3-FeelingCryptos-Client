import React, { useEffect, useState } from "react";
import ApexChart from "react-apexcharts";
import SCChart from "./Chart.styled";
import moment from "moment";
import { withAuth } from "../../context/auth.context";
import StarBorderRoundedIcon from "@material-ui/icons/StarBorderRounded";
import StarRoundedIcon from "@material-ui/icons/StarRounded";
import Tooltip from "@material-ui/core/Tooltip";
import { withStyles } from '@material-ui/core/styles';

const LightTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: theme.shadows[1],
    fontSize: 12,
  },
}))(Tooltip);

function Chart(props){
  const [ toggle, setToggle ] = useState(false);
  const [open, setOpen] = React.useState(false);
    
  useEffect(() => {
    if(props.user){
      props.user.favorites_cryptos.includes(props.market) ? setToggle(true) : setToggle(false)
    }
  }, [props.market])  

  // useEffect(() => {
  //   document.querySelector('.apexcharts-toolbar').style.display = "none";
  //   console.log('display none???')
  // }, [])

  const handleClick = () => {
    if(props.user){
      setToggle(!toggle) 
       toggle ? props.deleteFavoritesCryptos({ favorites_cryptos: props.market }) :
       props.addFavoritesCryptos({ favorites_cryptos: props.market })
    }else{
      setOpen(true);
      setTimeout(() => {
        setOpen(false);       
      }, 1500);      
    }
  }
 
    return (
      <>
      <SCChart id="chart-container">
      <div id="chart">
      <div>
        <LightTooltip
          PopperProps={{
            disablePortal: true,
          }}
          open={open}
          disableFocusListener
          disableHoverListener
          disableTouchListener
          title="Log in to add your favorite market"
          placement="top"          
        >
          <button onClick={() => handleClick()}>{toggle ? <StarRoundedIcon className="favorite-btn" /> : <StarBorderRoundedIcon className="favorite-btn" /> }</button>
        </LightTooltip>
      </div>
        <ApexChart
          options={
        {chart: {
          height: 350,
          type: "candlestick",
        },
        title: {
          text: `${props.market} - SPOT Market`,
          align: "left",
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
          data: props.data.map((el, i) => {
      return {
        x: moment(new Date(parseInt(el[0]))).format("MMM gg HH:mm"),
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
      </SCChart>
      </>
    );
}

export default withAuth(Chart);
