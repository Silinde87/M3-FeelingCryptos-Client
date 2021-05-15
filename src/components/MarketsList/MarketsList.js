import React from "react";
import { List } from "@material-ui/core";
import { Link, NavLink } from "react-router-dom";
import Text from "../text";
import SCMarketList from "./MarketList.styled";

export default function MarketsList(props) {
  let id = 0;

  
  return (
    <SCMarketList>
      <List className="component-list">
        <div className="list-div">
          {props.marketList.map((market) => {
            return (
              <NavLink activeStyle={{ color: 'red', fontStyle: 'bold' }} key={id++} exact to={`/${market}`}>
                <Text id="market-id" weight="mulishRegular">{market}</Text>
              </NavLink>
            );
          })}
        </div>
      </List>
    </SCMarketList>
  );
}
