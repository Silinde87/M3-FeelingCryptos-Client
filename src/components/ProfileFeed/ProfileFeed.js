import React, { Component } from "react";
import { withAuth } from "../../context/auth.context";
import SCProfileFeed from "./ProfileFeed.styled";
import TweetFeed from "../TweetFeed/TweetFeed";
import { Link } from "react-router-dom";
import Text from "../text";

class ProfileFeed extends Component {
	render() {
		//Getting favorites cryptos tweets from user.
		const { favorites_cryptos } = this.props.user;
		return (
			<>
				<SCProfileFeed id="profile-feed-container">
					{favorites_cryptos.length ? (
						<TweetFeed favorites_cryptos={favorites_cryptos} />
					) : (
						<section>
							<Link className="link-add" to="/">
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
				</SCProfileFeed>
			</>
		);
	}
}

export default withAuth(ProfileFeed);
