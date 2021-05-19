import React, { useState, useEffect } from "react";
import SCProfile from "./Profile.styled";
import SideBar from "../../components/SideBar/SideBar";
import ProfileFeed from "../../components/ProfileFeed/ProfileFeed";
import ProfileEdit from "../../components/ProfileEdit/ProfileEdit";
import MarketListFavorites from "../../components/MarketListFavorites/MarketListFavorites";
import WebsocketBinance from "../../components/WebsocketBinance/WebsocketBinance";
import { withAuth } from "../../context/auth.context";
import markets from "../../markets.json";

function Profile(props) {
	const [favoritesMarkets, setFavoritesMarkets] = useState([]);
	const [toggle, setToggle] = useState(true);

	const { url } = props.match;

	useEffect(() => {
		let myMarkets = [];
		props.user.favorites_cryptos.map((market) => {
			markets.map((objMarket) => {
				if (objMarket.market.replace("/", "") === market) myMarkets.push(objMarket);
			});
		});
		setFavoritesMarkets(myMarkets);
	}, [props.user.favorites_cryptos]);

	return (
		<SCProfile id="profile-container">
			<SideBar setToggle={setToggle} toggle={toggle} />
      {
        <MarketListFavorites
        marketList={favoritesMarkets}
        className={(toggle) ? "show" : "hide"}
      />
      }
			
			{url.includes("feed") ? (
				<ProfileFeed />
			) : url.includes("edit") ? (
				<ProfileEdit />
			) : (
				<WebsocketBinance
					id="market-favorite-container"
					market={
						props.match.params.market
							? props.match.params.market
							: props.user.favorites_cryptos[0]
					}
				/>
			)}
		</SCProfile>
	);
}

export default withAuth(Profile);
