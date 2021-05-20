import React, { useState, useEffect } from "react";
import SCProfile from "./Profile.styled";
import SideBar from "../../components/SideBar/SideBar";
import ProfileFeed from "../../components/ProfileFeed/ProfileFeed";
import ProfileEdit from "../../components/ProfileEdit/ProfileEdit";
import MarketListFavorites from "../../components/MarketListFavorites/MarketListFavorites";
import WebsocketBinance from "../../components/WebsocketBinance/WebsocketBinance";
import { withAuth } from "../../context/auth.context";
import markets from "../../markets.json";
import { Link } from "react-router-dom";
import Text from "../../components/text";
import Credits from "../../components/Credits/Credits";

function Profile(props) {
	const [favoritesMarkets, setFavoritesMarkets] = useState([]);
	const [toggle, setToggle] = useState(true);

	const { url } = props.match;

	//Turn off sidebar on feed or edit page
	useEffect(() => {
		if (url.includes("feed") || url.includes("edit")) {
			setToggle(false);
		}
		return;
	}, [url]);

	useEffect(() => {
		let myMarkets = [];
		props.user.favorites_cryptos.map((market) => {
			return markets.map((objMarket) => {
				if (objMarket.market.replace("/", "") === market) myMarkets.push(objMarket);
			});
		});
		setFavoritesMarkets(myMarkets);
	}, [props.user.favorites_cryptos]);

	return (
		<SCProfile id="profile-container">
			<SideBar setToggle={setToggle} toggle={toggle} />
			{<MarketListFavorites marketList={favoritesMarkets} className={toggle ? "show" : "hide"} />}
			{url.includes("feed") ? (
				<ProfileFeed />
			) : url.includes("edit") ? (
				<ProfileEdit />
			) : props.user.favorites_cryptos.length ? (
				<section id="ws-profile-container">
					<WebsocketBinance
						id="market-favorite-container"
						market={
							props.match.params.market
								? props.match.params.market
								: props.user.favorites_cryptos[0]
						}
					/>
					<Credits />
				</section>
			) : (
				<section>
					<Link className="link-add-favorites" to="/">
						<h1>
							{" "}
							<Text weight="mulishMedium" size="m" color="letterColor3Sel">
								{" "}
								ADD A FAVORITE MARKET{" "}
							</Text>
						</h1>
					</Link>
				</section>
			)}
		</SCProfile>
	);
}

export default withAuth(Profile);
