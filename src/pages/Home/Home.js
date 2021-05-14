import React from 'react'
import TweetFeed from '../../components/TweetFeed/TweetFeed'
import WebsocketBinance from '../../components/WebsocketBinance/WebsocketBinance'

const crypto = 'bitcoin';


function Home() {
  return (
    <div> 
      <h1>Home Page</h1>
      <div> <WebsocketBinance /> </div>
      <TweetFeed crypto={crypto}/>
    </div>
  )
}

export default Home;