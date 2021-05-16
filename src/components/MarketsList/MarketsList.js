import React from "react";
import Websocket from "../../utils/websocketInstance";
import { List } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import Text from "../text";
import SCMarketList from "./MarketList.styled";

export default function MarketsList(props) {
  const client = Websocket.getInstance();
  let id = 0;


  return (
    <SCMarketList>
      <List className="component-list">
        <div className="list-div">
          {props.marketList.map((market) => {
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
