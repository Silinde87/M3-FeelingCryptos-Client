import React, { Component } from "react";
import { w3cwebsocket as W3CWebSocket } from "websocket";
import Chart from "./Chart.component";

const client = new W3CWebSocket("ws://localhost:5000");

export default class WebsocketBinance extends Component {
  state = {
    charts: {},
  };

  componentDidMount() {
    //This onopen function waits for you websocket connection to establish before sending the message.
    client.readyState ? client.send("Hello", {message: 'hello'}) : client.onopen = () => client.send("Hello", {message: 'hello'});

    client.onmessage = ({ data }) => {
      const dataFromServer = JSON.parse(data);
      this.setState({ charts: dataFromServer });
    };
  }
  render() {
    return (
      <div className="main" id="wrapper">
        <div className="main" id="wrapper">
          { this.state.charts.length > 0 && <Chart data={this.state.charts} />}
        </div>
      </div>
    );
  }
}
