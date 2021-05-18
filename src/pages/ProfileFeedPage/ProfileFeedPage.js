import React, { Component } from "react";
import { withAuth } from "../../context/auth.context";
import SCProfileFeedPage from "./ProfileFeedPage.styled";
import TweetFeed from "../../components/TweetFeed/TweetFeed";

class ProfileFeedPage extends Component {
	render() {
		//Getting favorites cryptos tweets from user.
        const { favorites_cryptos } = this.props.user;
		return (			
			<SCProfileFeedPage id="profile-feed-container">
				<TweetFeed favorites_cryptos={favorites_cryptos}/>
			</SCProfileFeedPage>
		);
	}
}

export default withAuth(ProfileFeedPage);
