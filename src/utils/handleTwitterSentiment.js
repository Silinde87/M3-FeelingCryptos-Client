const Sentiment = require("sentiment");
const sentiment = new Sentiment();

const analyzeTweet = (tweet) => {
	return sentiment.analyze(tweet.text).score;
};

const getFilteredTweets = (tweetList) => {
	// Current filters:
	// english language
	// at least 5 retweets, likes or replys
	const MIN = 0; //Temporaly disabled due to low quantity of tweets
	return tweetList
		.filter(({ lang }) => lang === "en")
		.filter(
			({ public_metrics }) =>
				public_metrics.retweet_count > MIN ||
				public_metrics.like_count > MIN ||
				public_metrics.reply_count > MIN ||
				public_metrics.quote_count > MIN
		);
};

const filterTweetByLang = (tweetList, language) => {
	return tweetList.filter(({ lang }) => lang === language);
}

const getSentimentFromTweets = (tweetList) => {
	let posSentiments = [],
		negSentiments = [],
		neutralSentiments = [];
	tweetList.forEach((tweet) => {
		let tweetSentiment = analyzeTweet(tweet);
		if (tweetSentiment === 0) neutralSentiments.push(tweetSentiment);
		if (tweetSentiment > 0) posSentiments.push(tweetSentiment);
		if (tweetSentiment < 0) negSentiments.push(tweetSentiment);
	});
	// Result output. Percentage of positives, neutrals and negatives tweets.
	let tweetsSentiment = {
		positives: ((posSentiments.length / tweetList.length) * 100).toFixed(2),
		neutrals: ((neutralSentiments.length / tweetList.length) * 100).toFixed(2),
		negatives: ((negSentiments.length / tweetList.length) * 100).toFixed(2),
		totalTweets: tweetList.length,
	};
	return tweetsSentiment;
};

export { analyzeTweet, getSentimentFromTweets, getFilteredTweets, filterTweetByLang };
