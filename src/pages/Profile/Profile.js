import React, { useState } from "react";
import SCProfile from "./Profile.styled";
import SideBar from "../../components/SideBar/SideBar";
import ProfileFeedPage from "../ProfileFeedPage/ProfileFeedPage.js";

function Profile(props) {  
  return (    
      <SCProfile>
        <SideBar />
        <ProfileFeedPage />
      </SCProfile>

  );
}

export default Profile;