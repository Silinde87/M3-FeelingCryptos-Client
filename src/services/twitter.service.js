import axios from "axios";

class TwitterService {
    constructor() {
        this.twitter = axios.create({
          baseURL: `${process.env.REACT_APP_API_URL}`,
          withCredentials: true
        });
    }

    getRecentTweets(params){
        return this.twitter.post("/twitter/recentTweets", params);
    }

    streamTweets(){
        return this.twitter.get("/twitter/streamTweets");
    }
}

const twitterService = new TwitterService();

export default twitterService;