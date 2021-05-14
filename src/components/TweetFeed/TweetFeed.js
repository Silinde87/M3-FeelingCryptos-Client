import React, { Component } from "react";
import twitterService from "../../services/twitter.service";
import SCTweetFeed from "./TweetFeed.styled";
import { Tweet } from "react-twitter-widgets";
import { getFilteredTweets, getSentimentFromTweets } from "../../utils/handleTwitterSentiment";

let intervalId;

export default class TweetFeed extends Component {
	constructor(props) {
		super(props);
		this.state = {
			feed: [],
			tweetsSentiment: {},
		};
		this.params = {
			max_results: 10,
			"tweet.fields": "public_metrics,lang",
			query: `(#${this.props.crypto} OR ${this.props.crypto}) is:verified -is:retweet`,
		};
		this.handleTweets = this.handleTweets.bind(this);
	}

	handleTweets() {
		twitterService
			.getRecentTweets(this.params)
			.then((response) => {
				// Showing onlye the 10 first tweets
				this.setState({ feed: response.data.slice(0, 10) });
				// Analyzing all retrieved tweets.
				let newSentiment = getSentimentFromTweets(getFilteredTweets(response.data));
				this.setState({ tweetsSentiment: newSentiment });
			})
			.catch((err) => console.error(err));
	}

	componentDidMount() {
		this.handleTweets();
		//Calling twitter API and manage the data every 5 minutes
		intervalId = setInterval(this.handleTweets, 5 * 60 * 1000);
	}

	componentWillUnmount() {
		clearInterval(intervalId);
	}

	render() {
		return (
			<SCTweetFeed id="twitter-container">
				<h1>Positives: {this.state.tweetsSentiment.positives} ------ </h1>
				<h1>Neutrals: {this.state.tweetsSentiment.neutrals} ------ </h1>
				<h1>Negatives: {this.state.tweetsSentiment.negatives}</h1>
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
