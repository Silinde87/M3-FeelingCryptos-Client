import React from "react";
import { Route, Switch } from "react-router";
import MarketsList from "../../components/MarketsList/MarketsList";
import TweetFeed from "../../components/TweetFeed/TweetFeed";
import WebsocketBinance from "../../components/WebsocketBinance/WebsocketBinance";
import markets from "../../markets.json";
import SCHome from "./Home.styled";

const crypto = "bitcoin";

function Home(props) {

  const restartConnection = () =>{
    

  }
  
  return (
    <SCHome>
      <div>
        <div className="general-div">
          <MarketsList marketList={markets} />
          <div className="chart-tweet-div">
            <WebsocketBinance market={props.match.params.market}/>
            {/* <TweetFeed crypto={crypto} /> */}
          </div>
        </div>
      </div>
    </SCHome>
  );
}

export default Home;
