import LinearProgressWithLabel from "@material-ui/core/LinearProgress";
import React, { useEffect, useState } from "react";
import { withAuth } from "../../context/auth.context";
import Websocket from "../../utils/websocketInstance";
import Chart from "./Chart.component";

function WebsocketBinance(props) {
  const [chart, setChart] = useState({});
  const [market, setMarket] = useState("BTCUSDT");
  const [isLoading, setisLoading] = useState(true);
  const [progress, setProgress] = useState(10);
  const [time, setTime] = useState("1h");

  const client = Websocket.getInstance();

  useEffect(() => {
    //This onopen function waits for you websocket connection to establish before sending the message.
    client.readyState
      ? client.send([props.market, time])
      : (client.onopen = () => client.send([props.market, time]));
    client.onmessage = ({ data }) => {
      const dataFromServer = JSON.parse(data);
      if (
        props.market === dataFromServer.symbol &&
        time === dataFromServer.interval
      ) {
        //console.log("setting data from server", props.market)
        setChart(dataFromServer.chartArr);
        setMarket(dataFromServer.symbol);
        setTime(dataFromServer.interval);
      } else if (!props.market) {
        setChart(dataFromServer.chartArr);
        setMarket(dataFromServer.symbol);
        setTime(dataFromServer.interval);
      }
    };
  }, [props.market, time]);

  useEffect(() => {
    setisLoading(false);
  }, [chart]);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 10 : prevProgress + 10
      );
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div
      id="profile-chart"
      style={{ width: "100%", marginLeft: "0px", minHeight: 350 }}
    >
      {isLoading ? (
        <LinearProgressWithLabel
          style={{ width: 350, position: "fixed", top: "30%", left: "50%" }}
          value={progress}
        />
      ) : chart.length > 0 ? (
        <Chart data={chart} market={market} setTime={setTime} time={time}/>
      ) : (
        <LinearProgressWithLabel
          style={{ width: 300, position: "fixed", top: "30%", left: "50%" }}
          value={progress}
        />
      )}
    </div>
  );
}

export default withAuth(WebsocketBinance);
