import React, { Component } from "react";
import { w3cwebsocket as W3CWebSocket } from "websocket";
import Chart from "./Chart.component";

const client = new W3CWebSocket("ws://127.0.0.1:5000");

export default class WebsocketBinance extends Component {
  state = {
    charts: {},
  };

  componentDidMount() {
    //This onopen function waits for you websocket connection to establish before sending the message.
    client.readyState ? client.send(`${this.props.market}`) : client.onopen = () => client.send(`${this.props.market}`);

    client.onmessage = ({ data }) => {
      const dataFromServer = JSON.parse(data);
      this.setState({ charts: dataFromServer });
    };
  }

  closeConection = () =>{
    client.close()
  }

  render() {
    console.log(this.props)
    return (
        <div style={{ width: "100%" }}>
          { this.state.charts.length > 0 && <Chart data={this.state.charts} />}
          {/* <Chart data={this.state.charts} /> */}
        </div>
    );
  }
}
