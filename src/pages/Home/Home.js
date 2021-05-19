import React, { useState } from "react";
import MarketsList from "../../components/MarketsList/MarketsList";
import TweetFeed from "../../components/TweetFeed/TweetFeed";
import WebsocketBinance from "../../components/WebsocketBinance/WebsocketBinance";
import markets from "../../markets.json";
import SCHome from "./Home.styled";

function Home(props) {
  const [ crypto, setCrypto ] = useState('Bitcoin')  
  return (
    <SCHome id="main-container">
      <MarketsList id="market-list-bar" marketList={markets} setCrypto={setCrypto} />
      <section id="main-section">
        <WebsocketBinance market={props.match.params.market ? props.match.params.market : "BTCUSDT"}/>
        <TweetFeed crypto={crypto} />
      </section>
    </SCHome>
  );
}

export default Home;
