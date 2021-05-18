import React, { Component } from "react";
import { withAuth } from "../../context/auth.context";
import SCProfileFeed from "./ProfileFeed.styled";
import TweetFeed from "../TweetFeed/TweetFeed";

class ProfileFeed extends Component {
	render() {
		//Getting favorites cryptos tweets from user.
        const { favorites_cryptos } = this.props.user;
		console.log(favorites_cryptos);
		return (			
			<SCProfileFeed id="profile-feed-container">
				<TweetFeed favorites_cryptos={favorites_cryptos}/>
			</SCProfileFeed>
		);
	}
}

export default withAuth(ProfileFeed);
