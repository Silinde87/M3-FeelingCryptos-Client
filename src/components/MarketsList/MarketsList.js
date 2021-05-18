import React, { useState } from "react";
import Websocket from "../../utils/websocketInstance";
import { List } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import Text from "../text";
import SCMarketList from "./MarketList.styled";
import SearchBar from "../SearchBar/SearchBar";


export default function MarketsList({ marketList }) {
  const [ search, setSearch ] = useState('')

  const client = Websocket.getInstance();
  let id = 0;

  return (
    <SCMarketList>
      <List className="component-list">
        <div className="list-div">
        <SearchBar setSearch={setSearch}/>
          { (marketList.filter((markets) => markets.market.toLowerCase().includes(search)))
            .map((market) => {
              const route = market.market.replace("/", '')
            return (
              <NavLink onClick={() => { 
                client.send(`${route}`)
                console.log('send new message')
              }}
                to={`/${route}`}
                exact
                activeClassName="active"
                key={id++}
              >
                <div className="market-img-div">
                <img src={market.image}/>

                <Text id="market-id" weight="mulishRegular" size="s">
                  {market.market}
                </Text>

                </div>
              </NavLink>
            );
          })}
        </div>
      </List>
    </SCMarketList>
  );
}
