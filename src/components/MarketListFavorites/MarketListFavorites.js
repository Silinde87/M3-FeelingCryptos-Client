import React, { useState } from "react";
import Websocket from "../../utils/websocketInstance";
import { List } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import Text from "../text";
import SearchBar from "../SearchBar/SearchBar";
import SCMarketListFavorites from "./MarketListFavorites.styled";


export default function MarketListFavorites({ marketList, className }) {
  const [ search, setSearch ] = useState('')
  const client = Websocket.getInstance();
  let id = 0;

  return (
    <SCMarketListFavorites id="market-list-favorites" className={className}>
      <List className="component-list">
        <div className="list-div">
        <SearchBar setSearch={setSearch}/>
          { (marketList.filter((markets) => markets.market.toLowerCase().includes(search)))
            .map((market) => {
              const route = market.market.replace('/','');
            return (
              <NavLink onClick={() => {
                client.send(`${route}`)
              }}
                to={`/private/${route}`}
                exact
                activeClassName="active"
                key={id++}
              >
                <div className="market-img-div">
                <img src={market.image} alt="market-icon"/>

                <Text id="market-id" weight="mulishRegular" size="s">
                  {market.market}
                </Text>

                </div>
              </NavLink>
            );
          })}
        </div>
      </List>
    </SCMarketListFavorites>
  );
}