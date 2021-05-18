import React, { useState, useEffect } from "react";
import MarketsList from "../../components/MarketsList/MarketsList";
import WebsocketBinance from "../../components/WebsocketBinance/WebsocketBinance";
import { withAuth } from '../../context/auth.context'
import markets from "../../markets.json";
import SCHome from "../Home/Home.styled";



function Profile(props) {  
    const [ favoritesMarkets, setFavoritesMarkets ] = useState([])
    
    useEffect(() => {
        let myMarkets = []
        props.user.favorites_cryptos.map((market)=> {
            console.log(market)
            markets.map((objMarket) => {
                if(objMarket.market.replace('/', '') === market) myMarkets.push(objMarket)
            })
        })
        setFavoritesMarkets(myMarkets)
    }, [props.user.favorites_cryptos])
    
    console.log(props.user.favorites_cryptos)
    console.log(favoritesMarkets)


  return (
      <div>
        <SCHome>
        <MarketsList marketList = { favoritesMarkets }/>
        <WebsocketBinance market={ props.user.favorites_cryptos[0] }/>
        </SCHome>
      </div>

  );
}

export default withAuth(Profile);