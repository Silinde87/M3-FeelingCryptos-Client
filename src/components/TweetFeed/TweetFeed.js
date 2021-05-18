import React, { useEffect, useState } from "react";
import twitterService from "../../services/twitter.service";
import SCTweetFeed from "./TweetFeed.styled";
import { Tweet } from "react-twitter-widgets";
import Text from "../text";
import {
	getFilteredTweets,
	getSentimentFromTweets,
	filterTweetByLang,
} from "../../utils/handleTwitterSentiment";
import SkeletonCard from "../SkeletonCard/SkeletonCard";
import Sentiment from "../Sentiment/Sentiment";
import markets from "../../markets.json";

let intervalId;
const MAX_RESULTS = 10;

function TweetFeed({ crypto, favorites_cryptos }) {
	const [feed, setFeed] = useState([]);
	const [tweetsSentiment, setTweetsSentiment] = useState({});
	const [loading, setLoading] = useState(true);
	let params = {
		max_results: MAX_RESULTS,
		"tweet.fields": "public_metrics,lang",
		query: `(${getQueryCrypto()} is:verified -is:retweet`,
	};

	function getQueryCrypto() {
		if (!favorites_cryptos || favorites_cryptos.length === 0) {
			return crypto;
		} else {
			let queryCrypto = "(";
			favorites_cryptos.forEach((crypto) => {
				let cryptoName = markets.filter((el) => el.market.replace("/", "") === crypto)[0].name;
				queryCrypto += `#${cryptoName} OR ${cryptoName} OR `;
			});
			return queryCrypto.slice(0, -4) + ")";
		}
	}

	// Retrieves tweets from api and changes feed and sentiments state.
	function handleTweets() {
		//setLoading(true);
		getQueryCrypto();
		twitterService
			.getRecentTweets(params)
			.then((response) => {
				// Showing the first 10 tweets
				setFeed(filterTweetByLang(response.data, "en").slice(0, 10));
				// Analyzing all retrieved tweets.
				let newSentiment = getSentimentFromTweets(getFilteredTweets(response.data));
				setTweetsSentiment(newSentiment);
				setLoading(false);
			})
			.catch((err) => console.error(err));
	}

	// Component recieves a new props.crypto and updates all the info.
	useEffect(() => {		
		params = {
			max_results: MAX_RESULTS,
			"tweet.fields": "public_metrics,lang",
			query: `${getQueryCrypto()} is:verified -is:retweet`,
		};
		handleTweets();
		// intervalId = setInterval(handleTweets, 5 * 60 * 1000);
	}, [crypto]);

	// Component will unmount.
	useEffect(() => {
		// Kill the automatic tweet retrieve when component is unmount.
		return () => clearInterval(intervalId);
	}, []);

	return (
		<SCTweetFeed id="twitter-container">
			<Sentiment {...tweetsSentiment} />
			<div id="twitter-container-header">
				<Text as="h3" size="l" weight="mulishMedium">
					Tweet feed
				</Text>
			</div>
			<div id="tweets-container">
				{loading && <SkeletonCard />}
				{!loading &&
					feed.map((tweet) => {
						return (
							<Tweet
								key={tweet.id}
								tweetId={tweet.id}
								options={{
									cards: "hidden",
									width: "250",
									conversation: "none",
									height: "200",
								}}
							/>
						);
					})}
			</div>
		</SCTweetFeed>
	);
}

export default TweetFeed;
