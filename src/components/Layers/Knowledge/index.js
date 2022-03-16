import React from "react";
import Wave from "../../Wave";
import {FaAngleDown} from 'react-icons/fa'
import {DiPhotoshop, DiIllustrator} from 'react-icons/di'
import {SiMicrosoftoffice, SiFigma, SiCanva} from 'react-icons/si'

import {
  Content,
  Container,
  Titulo,
  ContainerBalls,
  Balls,
  ButtonDown
} from './styles'

export default function Knowledge(){

  function scrollSmothDown(value){
    window.scrollTo({top: value, behavior:"smooth"} );
  }
  
  return(
    <Content>
      <ButtonDown onClick={() => scrollSmothDown(1500)}> <FaAngleDown size={50}/></ButtonDown>
      <Wave setColor="#E29297"/>
      <Container>
        <Titulo>
          Conhecimento nas ferramentas
        </Titulo>
        <ContainerBalls>
          <Balls><DiPhotoshop size={90}/></Balls>
          <Balls><DiIllustrator size={90}/></Balls>
          <Balls><SiMicrosoftoffice size={90}/></Balls>
          <Balls><SiFigma size={90}/></Balls>
          <Balls><SiCanva size={90}/></Balls>
        </ContainerBalls>
      </Container>
    </Content>
  )
}