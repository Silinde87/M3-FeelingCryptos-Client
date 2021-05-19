import React, { Component } from "react";
import { withAuth } from "../../context/auth.context";
import Websocket from '../../utils/websocketInstance'
import Chart from "./Chart.component";


class WebsocketBinance extends Component {
  constructor(props){
    super(props);
    this.state = {
      charts: { },
      market: 'BTCUSDT'
    };
    
    this.client = Websocket.getInstance();
    console.log(this.props)
  }

  handleClick(){
    this.props.addFavoritesCryptos({favorites_cryptos: this.state.market})
  }

  componentDidMount() {
    //This onopen function waits for you websocket connection to establish before sending the message.
    this.client.readyState ? this.client.send(`${this.props.market}`) : this.client.onopen = () => this.client.send(`${this.props.market}`);

    this.client.onmessage = ({ data }) => {
      const dataFromServer = JSON.parse(data);
      if(this.props.market === dataFromServer.symbol){
        this.setState({ charts: dataFromServer.chartArr, market: dataFromServer.symbol });
      }else if(!this.props.market){
        console.log('NO PROPS')
        this.setState({ charts: dataFromServer.chartArr, market: dataFromServer.symbol  })
      }
    };
  }

  // componentWillUnmount(){
  //   console.log("COMPONENT UNMOUNT")
  //   this.client.close()
    
  // }

  render() {
    return (
      <div style={{ width: "500px", marginLeft: "100px"}}>
          <button onClick={() => this.handleClick()} >⭐️</button>
          { this.state.charts.length > 0 && <Chart data={this.state.charts} market={this.state.market}/>}
        </div>
    );
  }
}

export default withAuth(WebsocketBinance)