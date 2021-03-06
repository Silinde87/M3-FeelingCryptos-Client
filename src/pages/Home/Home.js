import React, { useEffect, useState } from "react";
import MarketsList from "../../components/MarketsList/MarketsList";
import TweetFeed from "../../components/TweetFeed/TweetFeed";
import WebsocketBinance from "../../components/WebsocketBinance/WebsocketBinance";
import markets from "../../markets.json";
import Error from "../ErrorPage/ErrorPage";
import SCHome from "./Home.styled";
import Credits from "../../components/Credits/Credits";

function Home(props) {
  const [crypto, setCrypto] = useState("Bitcoin");  
  const marketNames = markets.map((market) => market.market.replace("/", ""))
  const { theme } = props;


  return (
    <>
      {props.match.params.market ? (
        marketNames.includes(props.match.params.market) ? (
          <SCHome>
            <MarketsList
              id="market-list-bar"
              marketList={markets}
              setCrypto={setCrypto}
            />
            <section id="main-section">
              <WebsocketBinance
                market={
                  props.match.params.market
                    ? props.match.params.market
                    : "BTCUSDT"
                }
                theme={theme}
              />
              <TweetFeed crypto={crypto} theme={theme} />
            </section>
          </SCHome>
        ) : (
          <Error />
        )
      ) : (
        <SCHome>
          <MarketsList
            id="market-list-bar"
            marketList={markets}
            setCrypto={setCrypto}
          />
          <section id="main-section">
            <WebsocketBinance
              market={
                props.match.params.market
                  ? props.match.params.market
                  : "BTCUSDT"
              }
              theme={theme}
            />
            <TweetFeed crypto={crypto} theme={theme}/>
            <Credits />
          </section>
        </SCHome>
      )}
    </>
  );
}

export default Home;
