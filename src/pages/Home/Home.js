import React, { useState } from "react";
import { Redirect } from "react-router";
import MarketsList from "../../components/MarketsList/MarketsList";
import TweetFeed from "../../components/TweetFeed/TweetFeed";
import WebsocketBinance from "../../components/WebsocketBinance/WebsocketBinance";
import markets from "../../markets.json";
import SCHome from "./Home.styled";

function Home(props) {
  const [ crypto, setCrypto ] = useState('Bitcoin')
  
  

  const cryptoMatch = markets.filter((market) => {
    console.log(props.match.params.market)
    console.log('json', market.market)
    return  market.market.replace("/", "") === props.match.params.market
  })

  console.log(cryptoMatch)

  
  return (
    <>
    { props.match.params.market ?
     ( (props.match.params.market && !cryptoMatch) ?
    <SCHome>
      <MarketsList id="market-list-bar" marketList={markets} setCrypto={setCrypto} />
      <section id="main-section">
        <WebsocketBinance market={props.match.params.market ? props.match.params.market : "BTCUSDT"}/>
        {/* <TweetFeed crypto={crypto} /> */}
      </section>

    </SCHome>
    :
      <h1>THIS MARKET DOESN'T EXIST</h1>)
      :
      <SCHome>
      <MarketsList id="market-list-bar" marketList={markets} setCrypto={setCrypto} />
      <section id="main-section">
        <WebsocketBinance market={props.match.params.market ? props.match.params.market : "BTCUSDT"}/>
        {/* <TweetFeed crypto={crypto} /> */}
      </section>

    </SCHome>
    }
    </>
  );
}

export default Home;
