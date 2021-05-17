import React, { useEffect, useState } from "react";
import twitterService from "../../services/twitter.service";
import SCTweetFeed from "./TweetFeed.styled";
import { Tweet } from "react-twitter-widgets";
import Text from "../text";
import { getFilteredTweets, getSentimentFromTweets,filterTweetByLang } from "../../utils/handleTwitterSentiment";
import SentimentRatio from "../SentimentRatio/SentimentRatio";
import Tooltip from '@material-ui/core/Tooltip';
import { withStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import SkeletonCard from "../SkeletonCard/SkeletonCard";

let intervalId;
const MAX_RESULTS = 10;

const LightTooltip = withStyles((theme) => ({
	tooltip: {
	  backgroundColor: theme.palette.common.white,
	  color: 'rgba(0, 0, 0, 0.87)',
	  boxShadow: theme.shadows[1],
	  fontSize: 13,
	},
}))(Tooltip);

function TweetFeed({crypto}) {
	const [ feed, setFeed ] = useState([]);
	const [ tweetsSentiment, setTweetsSentiment ] = useState({});
	const [ loading, setLoading ] = useState(false);

	let params = {
		max_results: MAX_RESULTS,
		"tweet.fields": "public_metrics,lang",
		query: `(#${crypto} OR ${crypto}) is:verified -is:retweet`,	
	}

	// Retrieves tweets from api and changes feed and sentiments state.
	function handleTweets() {
		twitterService
			.getRecentTweets(params)
			.then((response) => {
				// Showing the first 10 tweets
				setFeed(filterTweetByLang(response.data, 'en').slice(0, 10));
				// Analyzing all retrieved tweets.
				let newSentiment = getSentimentFromTweets(getFilteredTweets(response.data));
				setTweetsSentiment(newSentiment);
			})
			.catch((err) => console.error(err));
	}

	// Component recieves a new props.crypto and updates all the info.
	useEffect(() => {
		setLoading(true);
		params = {
			max_results: MAX_RESULTS,
			"tweet.fields": "public_metrics,lang",
			query: `(#${crypto} OR ${crypto}) is:verified -is:retweet`,
		};
		handleTweets();
		// intervalId = setInterval(handleTweets, 5 * 60 * 1000);
		const timer = setTimeout(() => setLoading(false), 4000)
		return () => clearTimeout(timer);
	}, [crypto]);


	// Component will unmount.
	useEffect(() => {
        // Kill the automatic tweet retrieve when component is unmount.
		return () => clearInterval(intervalId);;
    }, []);

	const { positives, neutrals, negatives } = tweetsSentiment;
	return (
		<SCTweetFeed id="twitter-container">
			<div id="sentiment-container">
				<div id="sentiment-label">
					<Text id="sentiment-label" as="h3" size="m" weight="mulishMedium">Sentiment Anaylsis:</Text>
					<LightTooltip title="Analysis based on last 100 twits using FINN-165" placement="top-start">
						<Icon className="fas fa-info-circle" />
					</LightTooltip>
				</div>
				<div id="sentiment-scores">
					<SentimentRatio type={"positive"} ratio={positives} opacity={positives / 100} />
					<SentimentRatio type={"neutral"} ratio={neutrals} opacity={neutrals / 100} />
					<SentimentRatio type={"negative"} ratio={negatives} opacity={negatives / 100} />
				</div>
			</div>
			<div id="twitter-container-header">
				<Text as="h3" size="l" weight="mulishMedium">Tweet feed</Text>
			</div>
			<div id="tweets-container">
				{loading && <SkeletonCard />}
				{!loading &&					
					feed.map((tweet) => {
						return (						
							<Tweet
								key={tweet.id}
								tweetId={tweet.id}
								options={{ cards: "hidden", width: "250", conversation: "none", height: "200" }}
							/>
							
						);
					})
				}
			</div>
		</SCTweetFeed>
	);
}


export default TweetFeed;