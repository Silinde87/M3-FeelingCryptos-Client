import React, { useState, useEffect } from "react";
import SCProfile from "./Profile.styled";
import SideBar from "../../components/SideBar/SideBar";
import ProfileFeedPage from "../ProfileFeedPage/ProfileFeedPage.js";
import WebsocketBinance from "../../components/WebsocketBinance/WebsocketBinance";
import PrivateService from "../../services/private.service";


function Profile() {  
    const [ favoritesMarkets, setFavoritesMarkets ] = useState([])

    const privateService = new PrivateService();

    useEffect(() => {
        privateService.get()
        .then((markets) => {
            setFavoritesMarkets(markets.data)
          })
          .catch(err => console.error(err))
    },[])

  return (
    <SCProfile>
      <SideBar />
      <WebsocketBinance />
      <ProfileFeedPage />
    </SCProfile>
  );
}

export default Profile;