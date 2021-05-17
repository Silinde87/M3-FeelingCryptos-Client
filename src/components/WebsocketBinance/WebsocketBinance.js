import React, { Component, Suspense } from "react";
import Websocket from '../../utils/websocketInstance'
import Chart from "./Chart.component";


export default class WebsocketBinance extends Component {
  constructor(props){
    super(props);
    this.state = {
      charts: { },
      market: 'BTCUSDT'
    };
    
    this.client = Websocket.getInstance();
  }

  componentDidMount() {
    //This onopen function waits for you websocket connection to establish before sending the message.
    this.client.readyState ? this.client.send(`${this.props.market}`) : this.client.onopen = () => this.client.send(`${this.props.market}`);

    this.client.onmessage = ({ data }) => {
      const dataFromServer = JSON.parse(data);
      console.log(dataFromServer)
      if(this.props.market===dataFromServer.symbol){
        this.setState({ charts: dataFromServer.chartArr, market: dataFromServer.symbol });
      }else if(!this.props.market){
        this.setState({ charts: dataFromServer.chartArr, market: dataFromServer.symbol  })
      }
    };
  }

  render() {
    return (
        <div style={{ width: "100%" }}>
          { this.state.charts.length > 0 && <Chart data={this.state.charts} market={this.state.market}/>}
          {/* <Chart data={this.state.charts} /> */}
        </div>
    );
  }
}
