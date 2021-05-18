import React, { useState, useEffect } from "react";
import SCProfile from "./Profile.styled";
import SideBar from "../../components/SideBar/SideBar";
import WebsocketBinance from "../../components/WebsocketBinance/WebsocketBinance";
import PrivateService from "../../services/private.service";
import ProfileFeed from "../../components/ProfileFeed/ProfileFeed";
import ProfileEdit from "../../components/ProfileEdit/ProfileEdit";

function Profile(props) {
	const [favoritesMarkets, setFavoritesMarkets] = useState([]);

	const privateService = new PrivateService();
	const { url } = props.match;

	useEffect(() => {
		privateService
			.get()
			.then((markets) => {
				setFavoritesMarkets(markets.data);
			})
			.catch((err) => console.error(err));
	}, []);

	return (
		<SCProfile>
			<SideBar />
			{url.includes("feed") ? (
				<ProfileFeed />
			) : url.includes("edit") ? (
				<ProfileEdit />
			) : (
				<WebsocketBinance />
			)}
		</SCProfile>
	);
}

export default Profile;
