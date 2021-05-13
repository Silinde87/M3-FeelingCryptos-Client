import React from 'react'
import WebsocketBinance from '../../components/WebsocketBinance/WebsocketBinance'


function Home() {
  return (
    <div> 
      <h1>Home Page</h1>
      <div> <WebsocketBinance /> </div>
    </div>
  )
}

export default Home;