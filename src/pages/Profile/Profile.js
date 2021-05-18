import React, { useState, useEffect } from "react";
import WebsocketBinance from "../../components/WebsocketBinance/WebsocketBinance";
import PrivateService from "../../services/private.service";


function Profile() {  
    const [ favoritesMarkets, setFavoritesMarkets ] = useState([])

    const privateService = new PrivateService();

    useEffect(() => {
        privateService.get()
        .then((markets) => {
            setFavoritesMarkets(markets.data)
            
            console.log(markets.data)
          })
          .catch(err => console.error(err))
    },[])

  return (
      
      <div>
        <h1>Private Page</h1>
        <WebsocketBinance />
      </div>

  );
}

export default Profile;