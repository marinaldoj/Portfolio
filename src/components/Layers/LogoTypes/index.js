import React from "react";
import Wave from "../../Wave";
import {FaAngleDown} from 'react-icons/fa'
import educa from '../../../assets/ILogos/educacao.png';
import favs from '../../../assets/ILogos/favs.png';
import hz from '../../../assets/ILogos/hz.png';
import jb from '../../../assets/ILogos/jb.png';
import ladys from '../../../assets/ILogos/ladys.png';
import Myex from '../../../assets/ILogos/Myex.png';
import timeserver from '../../../assets/ILogos/timeserver.png';

import {
  Content,
  Container,
  Titulo,
  ContainerBalls,
  Balls,
  ButtonDown,
  Image
} from './styles'

export default function LogoTypes(){
  return(
    <Content id="LogoTypes">
      <ButtonDown href="#"> <FaAngleDown size={50}/></ButtonDown>
      <Wave setColor="#F6C1C4"/>
      <Container>
        <Titulo>
          Modelos de logotipos desenvolvidos
        </Titulo>
        <ContainerBalls>
          <Balls>
            <Image src={educa} />
          </Balls>
          <Balls>
            <Image src={favs} />
          </Balls>
          <Balls>
            <Image src={hz} />
          </Balls>
          <Balls>
            <Image src={jb} />
          </Balls>
          <Balls>
            <Image src={ladys} />
          </Balls>
          <Balls>
            <Image src={Myex} />
          </Balls>
          <Balls>
            <Image src={timeserver} />
          </Balls>
        </ContainerBalls>
      </Container>
    </Content>
  )
}