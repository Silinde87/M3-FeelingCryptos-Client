import React, { Component } from "react";
import twitterService from "../../services/twitter.service";
import SCTweetFeed from "./TweetFeed.styled";
import { Tweet } from "react-twitter-widgets";

//Test params. This will come from props.
var params = {
	query: "#doge",
	max_results: 10,
	"tweet.fields": ["public_metrics", "author_id"],
};
// -----------------------------------------

let intervalId;

export default class TweetFeed extends Component {
	constructor(props) {
		super(props);
		this.state = {
			feed: [],
		};
	}

	componentDidMount() {
		//Call to twitter API
		twitterService
			.getRecentTweets(params)
			.then((response) => {
				this.setState({ feed: response.data });
			})
			.catch((err) => console.error(err));
		intervalId = setInterval(() => {
			twitterService
				.getRecentTweets(params)
				.then((response) => {
					this.setState({ feed: response.data });
				})
				.catch((err) => console.error(err));
		}, 300000);
	}

	componentWillUnmount() {
		clearInterval(intervalId);
	}
	render() {
		return (
			<SCTweetFeed id="twitter-container">
				{this.state.feed.map((tweet) => {
					return (
						<Tweet
							key={tweet.id}
							tweetId={tweet.id}
							options={{ cards: "hidden", width: "250", conversation: "none", height: "200" }}
						/>
					);
				})}
			</SCTweetFeed>
		);
	}
}
