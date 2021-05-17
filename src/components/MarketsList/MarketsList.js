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
              <NavLink onClick={async () => { 
                // await client.close()
                // console.log('client closed')
                await client.send(`${market}`)
                console.log('send new connection')
              }}
                to={`/${market}`}
                exact
                activeClassName="active"
                key={id++}
                
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
