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
          { (marketList.filter((markets) => markets.toLowerCase().includes(search)))
            .map((market) => {
            return (
              <NavLink onClick={() => client.send(`${market}`)}
                activeStyle={{ color: "red", fontStyle: "bold" }}
                key={id++}
                exact
                to={`/${market}`}
              >
                <Text id="market-id" weight="mulishRegular" size="s">
                  {`${market.substring(0,3)} / ${market.substring(3, market.length)}`}
                </Text>
              </NavLink>
            );
          })}
        </div>
      </List>
    </SCMarketList>
  );
}
