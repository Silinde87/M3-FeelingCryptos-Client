import React, { Component } from "react";
import twitterService from "../../services/twitter.service";
import SCTweetFeed from "./TweetFeed.styled";
import { Tweet } from "react-twitter-widgets";
import Text from "../text";
import { getFilteredTweets, getSentimentFromTweets,filterTweetByLang } from "../../utils/handleTwitterSentiment";
import SentimentRatio from "../SentimentRatio/SentimentRatio";

let intervalId;

export default class TweetFeed extends Component {
	constructor(props) {
		super(props);
		this.state = {
			feed: [],
			tweetsSentiment: {},
		};
		this.params = {
			max_results: 50,
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
				this.setState({ feed: filterTweetByLang(response.data, 'en').slice(0, 10) });
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
		const { positives, neutrals, negatives } = this.state.tweetsSentiment;
		return (
			<SCTweetFeed id="twitter-container">
				<div id="twitter-container-header">
					<Text as="h3" size="l" weight="mulishLight">Tweet feed</Text>
					<div id="sentiment-container">
						<Text id="sentiment-label" as="h3" size="m" weight="mulishMedium">Sentiment Anaylsis:</Text>
						<SentimentRatio type={"positive"} ratio={positives} opacity={positives / 100} />
						<SentimentRatio type={"neutral"} ratio={neutrals} opacity={neutrals / 100} />
						<SentimentRatio type={"negative"} ratio={negatives} opacity={negatives / 100} />
					</div>
				</div>
				<div id="tweets-container">
					{this.state.feed.map((tweet) => {
						return (
							<Tweet
								key={tweet.id}
								tweetId={tweet.id}
								options={{ cards: "hidden", width: "250", conversation: "none", height: "200" }}
							/>
						);
					})}
				</div>
			</SCTweetFeed>
		);
	}
}
