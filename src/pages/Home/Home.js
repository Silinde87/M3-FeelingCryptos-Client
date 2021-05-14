import React from 'react'
import TweetFeed from '../../components/TweetFeed/TweetFeed'

const crypto = 'bitcoin';

function Home() {
  return (
    <div> 
      <h1>Home Page</h1>
      <TweetFeed crypto={crypto}/>
    </div>
  )
}

export default Home;