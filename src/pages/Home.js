import React from "react";

import Knowledge from "../components/Layers/Knowledge";
import Profile from "../components/Layers/Profile";
import LogoTypes from "../components/Layers/LogoTypes";
import Works from "../components/Layers/Works";
import OtherWorks from "../components/Layers/OtherWorks";
import Contacts from "../components/Layers/Contacts";

export default function Home(){
  return(
    <>
      <Profile/>
      <Knowledge/>
      <LogoTypes/>
      <Works/>
      <OtherWorks/>
      <Contacts/>
    </>
  )
}