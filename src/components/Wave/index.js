import React from "react";

import {
  Svg,
  Path
} from './styles'

export default function Wave({
  setColor = '#fff'
}){
  return(
    <Svg>
      <Path d="M718.497 188.647C493.5 247 78.6639 189.645 -150 0V267H1640V126.264C1246.6 45.415 911.411 138.614 718.497 188.647Z" fill={setColor}/>
    </Svg>
  )
}