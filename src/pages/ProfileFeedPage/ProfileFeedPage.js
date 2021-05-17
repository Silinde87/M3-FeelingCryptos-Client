import React, { Component } from "react";
import { Tweet } from "react-twitter-widgets";
import { withAuth } from "../../context/auth.context";
import SCProfileFeedPage from "./ProfileFeedPage.styled";

class ProfileFeedPage extends Component {
	render() {
		//Getting pinned tweets from user.
        const { pinned_feed } = this.props.user;        
		return (
			<SCProfileFeedPage id="profile-feed-container">
				{pinned_feed.map((el) => {
                    {console.log(el.id)}
					return <Tweet
						key={el.id}
						tweetId={el.id}
						options={{ cards: "hidden", width: "250", conversation: "none", height: "200" }}
					/>;
				})}
			</SCProfileFeedPage>
		);
	}
}

export default withAuth(ProfileFeedPage);