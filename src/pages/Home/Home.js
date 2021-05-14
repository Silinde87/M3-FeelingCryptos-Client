import React from 'react'
import { Route, Switch } from 'react-router'
import MarketsList from '../../components/MarketsList/MarketsList'
import TweetFeed from '../../components/TweetFeed/TweetFeed'
import WebsocketBinance from '../../components/WebsocketBinance/WebsocketBinance'
import markets from '../../markets.json'
import SCHome from './Home.styled'

const crypto = 'bitcoin';


function Home() {
  return (
    <SCHome >
    <div> 
      <h1>Home Page</h1>
      <div className="markets-div">
      <MarketsList marketList={ markets }/>
      {/* <Switch>
        <Route exact path="/:market" render={ (props) => <WebsocketBinance {...props} marketList={ markets }/> } />
      </Switch> */}
      <div className="chart-div"><WebsocketBinance /></div>
      </div>
      <div> <WebsocketBinance /> </div>
      <TweetFeed crypto={crypto}/>
    </div>
    </SCHome>
  )
}

export default Home;