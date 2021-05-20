import React, { useState } from "react";
import MarketsList from "../../components/MarketsList/MarketsList";
import TweetFeed from "../../components/TweetFeed/TweetFeed";
import WebsocketBinance from "../../components/WebsocketBinance/WebsocketBinance";
import markets from "../../markets.json";
import Error from "../ErrorPage/ErrorPage";
import SCHome from "./Home.styled";
import Text from "../../components/text";
import Credits from "../../components/Credits/Credits";

function Home(props) {
  const [crypto, setCrypto] = useState("Bitcoin");
  const marketNames = markets.map((market) => market.market.replace("/", ""))

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
              />
              <TweetFeed crypto={crypto} />
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
            />
            <TweetFeed crypto={crypto} />
            <Credits />
          </section>
        </SCHome>
      )}
    </>
  );
}

export default Home;
