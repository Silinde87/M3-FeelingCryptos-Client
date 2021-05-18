import React, { Component } from "react";
import { Tweet } from "react-twitter-widgets";
import { withAuth } from "../../context/auth.context";
import SCProfileFeedPage from "./ProfileFeedPage.styled";
import Text from "../../components/text";

class ProfileFeedPage extends Component {
	render() {
		//Getting pinned tweets from user.
        const { pinned_feed } = this.props.user;        
		return (			
			<SCProfileFeedPage id="profile-feed-container">
				<Text as="h3" size="l" weight="mulishMedium" id="title-section">Your feed</Text>
				<div>
					{pinned_feed.map((el) => {
						return <Tweet
							key={el.id}
							tweetId={el.id}
							options={{ cards: "hidden", width: "250", conversation: "none", height: "200" }}
						/>;
					})}
				</div>
			</SCProfileFeedPage>
		);
	}
}

export default withAuth(ProfileFeedPage);
