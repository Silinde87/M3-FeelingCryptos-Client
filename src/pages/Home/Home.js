import React, { useState } from "react";
import MarketsList from "../../components/MarketsList/MarketsList";
import TweetFeed from "../../components/TweetFeed/TweetFeed";
import WebsocketBinance from "../../components/WebsocketBinance/WebsocketBinance";
import markets from "../../markets.json";
import SCHome from "./Home.styled";

//const crypto = "bitcoin";

function Home(props) {
  const [ crypto, setCrypto ] = useState('Bitcoin')  
  return (
    <SCHome>
      <MarketsList marketList={markets} setCrypto={setCrypto} />
      <section id="main-section">
        <WebsocketBinance market={props.match.params.market}/>
        {/* <TweetFeed crypto={crypto} /> */}
      </section>
    </SCHome>
  );
}

export default Home;
