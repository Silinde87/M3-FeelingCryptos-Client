import React from "react";
import { Link } from "react-router-dom";

export default function MarketsList(props) {
    let id = 0;
  return (
    <div>
      {props.marketList.map((market) => {
        return (
          <ul key={id++}>
            <Link to={`/${market}`}>
              <li>{market}</li>
            </Link>
          </ul>
        );
      })}
    </div>
  );
}
